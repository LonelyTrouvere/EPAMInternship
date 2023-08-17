import { CourseContext } from 'contexts/CourseContext';
import { useContext } from 'react';

const useCourses = () => {
	const courses = useContext(CourseContext);

	return courses;
};

export { useCourses };
