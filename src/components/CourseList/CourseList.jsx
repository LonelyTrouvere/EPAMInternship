import { useState } from 'react';
import { CourseCard } from '../CourseCard/CourseCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router';
import { ADD_COURSE_ROUTE } from 'constants/routes';
import { useSelector } from 'react-redux';

const CourseList = () => {
	const courses = useSelector((state) => state.courses.courses);

	const [searchCourses, setSearchCourses] = useState([]);
	const navigate = useNavigate();

	const cards = searchCourses.length ? searchCourses : courses;

	return (
		<div className='course-page text-lg'>
			<SearchBar
				setSearchCourses={setSearchCourses}
				onClick={() => navigate(ADD_COURSE_ROUTE)}
			/>
			<div className='courses'>
				{cards.map((item) => {
					return <CourseCard key={item.id} course={item} />;
				})}
			</div>
		</div>
	);
};

export { CourseList };
