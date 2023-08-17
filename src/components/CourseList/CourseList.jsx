import { useState } from 'react';
import { CourseCard } from './CourseCard/CourseCard';
import { SearchBar } from './SearchBar/SearchBar';
import { useNavigate } from 'react-router';
import { useCourses } from 'utils/hooks/useCourses';

const CourseList = () => {
	const courses = useCourses();

	const [searchCourses, setSearchCourses] = useState([]);
	const redirect = useNavigate();

	return (
		<div className='course-page text-lg'>
			<SearchBar
				set={setSearchCourses}
				onClick={() => redirect('/courses/add')}
			/>
			<div className='courses'>
				{!searchCourses.length
					? courses.list.map((item) => {
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
