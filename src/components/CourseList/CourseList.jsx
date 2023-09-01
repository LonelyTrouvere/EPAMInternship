import { useEffect, useState } from 'react';
import { CourseCard } from '../CourseCard/CourseCard';
import { SearchBar } from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router';
import { COURSES_FORM_ROUTE } from 'utils/routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthorsFromAPI, getCoursesFromAPI } from 'servisec';
import { getAuthorsAction } from 'store/authors/actionCreators';
import { getCoursesAction } from 'store/courses/actionCreators';

const CourseList = () => {
	const dispatch = useDispatch();

	const courses = useSelector((state) => state.courses.courses);

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
