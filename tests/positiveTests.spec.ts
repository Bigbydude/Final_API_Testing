import superagent from 'superagent';
import { LINK } from '../Helpers/ConstUrl';
import { SET_CONFIG, STATUS_PAGE } from '../Helpers/Consts';
import { EXPECTED_OBJ } from '../Helpers/ExpectedConst';

describe('Positive Check API request', () => {
    test('positive test get', async () => {
        const GET_POSTS = await superagent.get(LINK.POSTS);
        expect(GET_POSTS.status).toBe(STATUS_PAGE.SUCCESSFUL);
    });

    test('positive test post', async () => {
        const POST_USERS = await superagent
            .post(LINK.USERS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        console.log(POST_USERS.body);
        expect(POST_USERS.statusCode).toBe(STATUS_PAGE.CREATE);
        expect(POST_USERS.body.EMAIL).toBe(EXPECTED_OBJ.EMAIL);
        expect(POST_USERS.body.USERNAME).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('positive test put', async () => {
        const PUT_POSTS = await superagent
            .put(LINK.POSTS1)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        console.log(PUT_POSTS.body);
        expect(PUT_POSTS.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PUT_POSTS.body.EMAIL).toBe(EXPECTED_OBJ.EMAIL);
        expect(PUT_POSTS.body.USERNAME).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('positive test delete', async () => {
        const DELETE_COMM = await superagent.delete(LINK.COMMENTS);
        console.log(DELETE_COMM.body);
        expect(DELETE_COMM.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
    });

    test('positive test path', async () => {
        const PATH_COMM = await superagent
            .patch(LINK.COMMENTS)
            .set(SET_CONFIG.CONTENT, SET_CONFIG.APPLICATION)
            .send(EXPECTED_OBJ);
        console.log(PATH_COMM.body);
        expect(PATH_COMM.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
        expect(PATH_COMM.body.EMAIL).toBe(EXPECTED_OBJ.EMAIL);
        expect(PATH_COMM.body.USERNAME).toBe(EXPECTED_OBJ.USERNAME);
    });

    test('positive test head', async () => {
        const USERS_RES = await superagent.head(LINK.USERS);
        console.log(USERS_RES.body);
        expect(USERS_RES.statusCode).toBe(STATUS_PAGE.SUCCESSFUL);
    });
});
