import superagent from 'superagent';

export const setConfig = {
    content: 'Content-Type',
    application: 'application/json',
};

export const statusPage = {
    successful: 200,
    create: 201,
    empty: 204,
    error: 404,
};
