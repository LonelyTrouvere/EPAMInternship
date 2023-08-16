import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Login } from './pages/userFormPage/Login/Login';
import { Register } from './pages/userFormPage/Register/Register';
import { CourseContext, AuthorContext, UserContext } from './contexts/context';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';
import { CourseInfo } from './components/CourseList/CourseInfo/CourseInfo';
import {
	MOCKED_AUTHOR_LIST,
	MOCKED_COURSE_LIST,
} from './assets/mockedData/mockedData';

const App = () => {
	const [courseList, setCourseList] = useState(MOCKED_COURSE_LIST);
	const [authorList, setAuthorList] = useState(MOCKED_AUTHOR_LIST);
	const [logedUser, setLogedUser] = useState({
		token: localStorage.getItem('token'),
		name: localStorage.getItem('name'),
	});

	return (
		<CourseContext.Provider value={{ list: courseList, set: setCourseList }}>
			<AuthorContext.Provider value={{ list: authorList, set: setAuthorList }}>
				<UserContext.Provider value={{ info: logedUser, set: setLogedUser }}>
					<Header />
					<div className='main'>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route element={<ProtectedRoute token={!logedUser.token} />}>
								<Route path='/registration' element={<Register />} />
								<Route path='/login' element={<Login />} />
							</Route>
							<Route element={<ProtectedRoute token={logedUser.token} />}>
								<Route path='/courses' element={<CourseList />} />
								<Route path='/courses/add' element={<CourseForm />} />
								<Route path='/courses/:id' element={<CourseInfo />} />
							</Route>
						</Routes>
					</div>
				</UserContext.Provider>
			</AuthorContext.Provider>
		</CourseContext.Provider>
	);
};

export default App;
