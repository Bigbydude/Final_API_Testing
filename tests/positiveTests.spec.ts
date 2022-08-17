import superagent from 'superagent';
import { link } from '../Helpers/ConstUrl';
import { setConfig, statusPage } from '../Helpers/Consts';
import { expectedObj } from '../Helpers/ExpectedConst';

describe('Positive Check API request', () => {
    test('positive test get', async () => {
        const getPosts = await superagent.get(link.posts);
        expect(getPosts.status).toBe(statusPage.successful);
    });

    test('positive test post', async () => {
        const postUsers = await superagent
            .post(link.users)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        console.log(postUsers.body);
        expect(postUsers.statusCode).toBe(statusPage.create);
        expect(postUsers.body.email).toBe(expectedObj.email);
        expect(postUsers.body.username).toBe(expectedObj.username);
    });

    test('positive test put', async () => {
        const putPosts = await superagent
            .put(link.posts1)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        console.log(putPosts.body);
        expect(putPosts.statusCode).toBe(statusPage.successful);
        expect(putPosts.body.email).toBe(expectedObj.email);
        expect(putPosts.body.username).toBe(expectedObj.username);
    });

    test('positive test delete', async () => {
        const deleteComm = await superagent.delete(link.comments);
        console.log(deleteComm.body);
        expect(deleteComm.statusCode).toBe(statusPage.successful);
    });

    test('positive test path', async () => {
        const pathComm = await superagent
            .patch(link.comments)
            .set(setConfig.content, setConfig.application)
            .send(expectedObj);
        console.log(pathComm.body);
        expect(pathComm.statusCode).toBe(statusPage.successful);
        expect(pathComm.body.email).toBe(expectedObj.email);
        expect(pathComm.body.username).toBe(expectedObj.username);
    });

    test('positive test head', async () => {
        const usersRes = await superagent.head(link.users);
        console.log(usersRes.body);
        expect(usersRes.statusCode).toBe(statusPage.successful);
    });
});
