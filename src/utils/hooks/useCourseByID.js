import { CourseContext } from 'contexts/CourseContext';
import { useContext } from 'react';

const useCourseByID = (id) => {
	const courses = useContext(CourseContext);
	const courseByID = courses.courseList.find((item) => item.id === id);

	return courseByID;
};

export { useCourseByID };
