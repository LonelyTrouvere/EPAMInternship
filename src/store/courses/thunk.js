import { addCourse, deleteCourse, getCoursesFromAPI } from 'services';
import {
	addCourseAction,
	deleteCourseAction,
	getCoursesAction,
} from './actionCreators';

const fetchCourses = () => {
	return async (dispatch) => {
		const courses = await getCoursesFromAPI();
		dispatch(getCoursesAction(courses));
	};
};

const addCourseThunk = (course) => {
	return async (dispatch) => {
		await addCourse(course);
		dispatch(addCourseAction(course));
	};
};

const deleteCourseThunk = (id) => {
	return async (dispatch) => {
		await deleteCourse(id);
		dispatch(deleteCourseAction(id));
	};
};

export { fetchCourses, addCourseThunk, deleteCourseThunk };
