import { useState } from 'react';
import { CourseCard } from '../CourseCard/CourseCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router';
import { useCourses } from 'utils/hooks/useCourses';
import { COURSES_FORM_ROUTE } from 'utils/routes/routes';

const CourseList = () => {
	const [courses, setCourses] = useCourses();

	const [searchCourses, setSearchCourses] = useState([]);
	const navigate = useNavigate();

	return (
		<div className='course-page text-lg'>
			<SearchBar
				set={setSearchCourses}
				onClick={() => navigate(COURSES_FORM_ROUTE)}
			/>
			<div className='courses'>
				{!searchCourses.length
					? courses.map((item) => {
							return <CourseCard key={item.id} course={item} />;
					  })
					: searchCourses.map((item) => {
							return <CourseCard key={item.id} course={item} />;
					  })}
			</div>
		</div>
	);
};

export { CourseList };
