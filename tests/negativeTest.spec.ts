import superagent from 'superagent';
import { link } from '../Helpers/ConstUrl';
import { setConfig, statusPage } from '../Helpers/Consts';
import { expectedObj } from '../Helpers/ExpectedConst';

describe('Negative Check API request', () => {
    test('negative test get', async () => {
        const getPosts = await superagent.get(link.posts);
        expect(getPosts.status).toBe(statusPage.empty);
    });

    test('negative test post', async () => {
        const postUsers = await superagent
            .post(link.users)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        expect(postUsers.statusCode).toBe(statusPage.create);
        expect(postUsers.body.email).toBe(expectedObj.username);
        expect(postUsers.body.username).toBe(expectedObj.username);
    });

    test('negative test put', async () => {
        const putPosts = await superagent
            .put(link.posts1)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        expect(putPosts.statusCode).toBe(statusPage.successful);
        expect(putPosts.body.email).toBe(expectedObj.username);
        expect(putPosts.body.username).toBe(expectedObj.username);
    });

    test('negative test delete', async () => {
        const deleteComm = await superagent.delete(link.comments);
        expect(deleteComm.statusCode).toBe(statusPage.error);
    });

    test('negative test path', async () => {
        const pathComm = await superagent
            .patch(link.comments)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        expect(pathComm.statusCode).toBe(statusPage.successful);
        expect(pathComm.body.body).toBe(expectedObj.email);
        expect(pathComm.body.username).toBe(expectedObj.username);
    });

    test('negative test head', async () => {
        const usersRes = await superagent.head(link.users);
        expect(usersRes.statusCode).toBe(statusPage.create);
    });
});
