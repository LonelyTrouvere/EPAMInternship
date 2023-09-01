import { getCoursesFromAPI } from 'servisec';
import { ADD_COURSE, GET_COURSES, DELETE_COURSE } from './actionTypes';

const defaultCourses = {
	courses: await getCoursesFromAPI(),
};

const coursesReducer = (state = defaultCourses, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };
		case GET_COURSES:
			console.log(action.payload);
			return { ...state, courses: action.payload };
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter(
					(course) => course.id !== action.payload.id
				),
			};
		default:
			return state;
	}
};

export { coursesReducer };
