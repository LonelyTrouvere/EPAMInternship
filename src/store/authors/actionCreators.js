const { ADD_AUTHOR, GET_AUTHORS } = require('./actionTypes');

const addAuthorAction = (payload) => ({ type: ADD_AUTHOR, payload: payload });

const getAuthorsAction = (payload) => ({ type: GET_AUTHORS, payload: payload });

export { addAuthorAction, getAuthorsAction };
