import superagent from 'superagent';
import { LINK } from '../Helpers/ConstUrl';
import { STATUS_PAGE, SET_CONFIG } from '../Helpers/Consts';
import { EXPECTED_OBJ } from '../Helpers/ExpectedConst';

describe('Negative Check API request', () => {
    test('negative test get', async () => {
        const GET_POSTS = await superagent.get(LINK.POSTS);
        expect(GET_POSTS.status).toBe(STATUS_PAGE.EMPTY);
    });

    test('negative test post', async () => {
        const POST_USERS = await superagent
            .post(LINK.USERS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        expect(POST_USERS.statusCode).toBe(STATUS_PAGE.CREATE);
        expect(POST_USERS.body.EMAIL).toBe(EXPECTED_OBJ.USERNAME);
        expect(POST_USERS.body.username).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('negative test put', async () => {
        const PUT_POSTS = await superagent
            .put(LINK.POSTS1)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        expect(PUT_POSTS.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PUT_POSTS.body.EMAIL).toBe(EXPECTED_OBJ.USERNAME);
        expect(PUT_POSTS.body.username).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('negative test delete', async () => {
        const DELETE_COMM = await superagent.delete(LINK.COMMENTS);
        expect(DELETE_COMM.statusCode).toBe(STATUS_PAGE.ERROR);
    });

    test('negative test path', async () => {
        const PATH_COMM = await superagent
            .patch(LINK.COMMENTS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        expect(PATH_COMM.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PATH_COMM.body.body).toBe(EXPECTED_OBJ.EMAIL);
        expect(PATH_COMM.body.username).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('negative test head', async () => {
        const USERS_RES = await superagent.head(LINK.USERS);
        expect(USERS_RES.statusCode).toBe(STATUS_PAGE.CREATE);
    });
});
