const { useSelector } = require('react-redux');

const useCourseByID = (id) => {
	const courses = useSelector((state) => state.courses.courses);
	const course = courses.find((course) => course.id === id);

	return course;
};

export { useCourseByID };
