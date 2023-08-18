import { CourseContext } from 'contexts/CourseContext';
import { useContext } from 'react';

const useCourses = () => {
	const courses = useContext(CourseContext);

	return [courses.courseList, courses.setCourseList];
};

export { useCourses };
