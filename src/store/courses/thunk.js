import {
	addCourse,
	deleteCourse,
	getCoursesFromAPI,
	updateCourse,
} from 'services';
import {
	addCourseAction,
	deleteCourseAction,
	getCoursesAction,
	updateCourseAction,
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

const updateCourseThunk = (id, course) => {
	return async (dispatch) => {
		const data = await updateCourse(id, course);
		console.log(data);
		dispatch(updateCourseAction(data));
	};
};

export { fetchCourses, addCourseThunk, deleteCourseThunk, updateCourseThunk };
