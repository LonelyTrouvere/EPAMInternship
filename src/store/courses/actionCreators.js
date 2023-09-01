const { ADD_COURSE, DELETE_COURSE, GET_COURSES } = require('./actionTypes');

const getCoursesAction = (payload) => ({ type: GET_COURSES, payload: payload });

const addCourseAction = (payload) => ({ type: ADD_COURSE, payload: payload });

const deleteCourseAction = (payload) => ({
	type: DELETE_COURSE,
	payload: payload,
});

export { addCourseAction, deleteCourseAction, getCoursesAction };
