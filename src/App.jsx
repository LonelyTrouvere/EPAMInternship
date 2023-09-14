import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { HomePage } from './pages/MainPage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import {
	ADD_COURSE_ROUTE,
	COURSES_ROUTE,
	COURSE_ID_ROUTE,
	HOME_PAGE_ROUTE,
	LOGIN_ROUTE,
	REGISTER_ROUTE,
} from 'constants/routes';
import { useEffect } from 'react';
import { getAuthorsFromAPI, getCoursesFromAPI } from 'servisec';
import { getCoursesAction } from 'store/courses/actionCreators';
import { getAuthorsAction } from 'store/authors/actionCreators';

const App = () => {
	const isAuth = useSelector((state) => state.user.isAuth);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchCourses = async () => {
			const courses = await getCoursesFromAPI();
			dispatch(getCoursesAction(courses));
		};

		const fetchAuthors = async () => {
			const authors = await getAuthorsFromAPI();
			dispatch(getAuthorsAction(authors));
		};

		fetchCourses();
		fetchAuthors();
	}, []);

	return (
		<>
			<Header />
			<div className='border-2 border-blue-500 h-fit min-h-[86vh] p-5'>
				<Routes>
					<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
					<Route element={<ProtectedRoute token={!isAuth} />}>
						<Route path={REGISTER_ROUTE} element={<Register />} />
						<Route path={LOGIN_ROUTE} element={<Login />} />
					</Route>
					<Route element={<ProtectedRoute token={isAuth} />}>
						<Route path={COURSES_ROUTE} element={<CourseList />} />
						<Route path={ADD_COURSE_ROUTE} element={<CourseForm />} />
						<Route path={COURSE_ID_ROUTE} element={<CourseInfo />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};

export { App };
