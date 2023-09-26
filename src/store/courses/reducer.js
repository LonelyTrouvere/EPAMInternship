import {
	ADD_COURSE,
	GET_COURSES,
	DELETE_COURSE,
	UPDATE_COURSE,
} from './actionTypes';

const defaultCourses = {
	courses: [],
};

const coursesReducer = (state = defaultCourses, action) => {
	switch (action.type) {
		case ADD_COURSE:
			return { ...state, courses: [...state.courses, action.payload] };
		case GET_COURSES:
			return { ...state, courses: action.payload };
		case DELETE_COURSE:
			return {
				...state,
				courses: state.courses.filter((course) => course.id !== action.payload),
			};
		case UPDATE_COURSE:
			return {
				...state,
				courses: state.courses.map((course) => {
					if (course.id === action.payload.id) return action.payload;
					else return course;
				}),
			};
		default:
			return state;
	}
};

export { coursesReducer };
