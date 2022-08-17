import superagent from 'superagent';
import { LINK } from '../Helpers/ConstUrl';
import { SET_CONFIG, STATUS_PAGE } from '../Helpers/Consts';
import { EXPECTED_OBJ_POSTS } from '../Helpers/ExpectedConstPost';
import { EXPECTED_OBJECT_PATCH } from '../Helpers/ExpectedConstsPatch';
import { EXPECTED_OBJECT_PUT } from '../Helpers/ExpectedConstsPut';

describe('Positive Check API request', () => {
    test('positive test get', async () => {
        const GET_POSTS = await superagent.get(LINK.POSTS);
        expect(GET_POSTS.status).toBe(STATUS_PAGE.SUCCESSFUL);
    });

    test('positive test post', async () => {
        const POST_USERS = await superagent
            .post(LINK.USERS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ_POSTS);
        expect(POST_USERS.statusCode).toBe(STATUS_PAGE.CREATE);
        expect(POST_USERS.body.title).toBe(EXPECTED_OBJ_POSTS.title);
        expect(POST_USERS.body.body).toBe(EXPECTED_OBJ_POSTS.body);
    });

    test('positive test put', async () => {
        const PUT_POSTS = await superagent
            .put(LINK.POSTS1)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJECT_PUT);
        expect(PUT_POSTS.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PUT_POSTS.body.title).toBe(EXPECTED_OBJECT_PUT.title);
        expect(PUT_POSTS.body.body).toBe(EXPECTED_OBJECT_PUT.body);
    });

    test('positive test delete', async () => {
        const DELETE_COMM = await superagent.delete(LINK.COMMENTS);
        expect(DELETE_COMM.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
    });

    test('positive test patch', async () => {
        const PATH_COMM = await superagent
            .patch(LINK.COMMENTS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJECT_PATCH);
        expect(PATH_COMM.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PATH_COMM.body.body).toBe(EXPECTED_OBJECT_PATCH.body);
    });

    test('positive test head', async () => {
        const USERS_RES = await superagent.head(LINK.USERS);
        expect(USERS_RES.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
    });
});
