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
		const data = await addCourse(course);
		dispatch(addCourseAction(data));
	};
};

const deleteCourseThunk = (id) => {
	return async (dispatch) => {
		await deleteCourse(id);
		dispatch(deleteCourseAction(id));
	};
};

export { fetchCourses, addCourseThunk, deleteCourseThunk };
