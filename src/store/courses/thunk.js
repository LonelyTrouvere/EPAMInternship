import { getCoursesFromAPI } from 'services';
import { getCoursesAction } from './actionCreators';

const fetchCourses = () => {
	return async (dispatch) => {
		const courses = await getCoursesFromAPI();
		dispatch(getCoursesAction(courses));
	};
};

export { fetchCourses };
