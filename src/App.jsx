import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { useSelector } from 'react-redux';
import {
	COURSES_FORM_ROUTE,
	COURSES_ROUTE,
	COURSE_ID_ROUTE,
	HOME_ROUTE,
	LOGIN_ROUTE,
	REGISTER_ROUTE,
} from 'utils/routes/routes';

const App = () => {
	const isAuth = useSelector((state) => state.user.isAuth);
	return (
		<>
			<Header />
			<div className='border-2 border-blue-500 h-fit min-h-[86vh] p-5'>
				<Routes>
					<Route path={HOME_ROUTE} element={<MainPage />} />
					<Route element={<ProtectedRoute token={!isAuth} />}>
						<Route path={REGISTER_ROUTE} element={<Register />} />
						<Route path={LOGIN_ROUTE} element={<Login />} />
					</Route>
					<Route element={<ProtectedRoute token={isAuth} />}>
						<Route path={COURSES_ROUTE} element={<CourseList />} />
						<Route path={COURSES_FORM_ROUTE} element={<CourseForm />} />
						<Route path={COURSE_ID_ROUTE} element={<CourseInfo />} />
					</Route>
				</Routes>
			</div>
		</>
	);
};

export { App };
