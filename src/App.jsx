import './App.css';
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header';
import { UserFormPage } from './pages/UserFormPage/UserFormPage';
import { CourseContext, AuthorContext, UserContext } from './contexts/context';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';

const mockedCoursesList = [
	{
		id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
		title: 'JavaScript',
		description: `Lorem Ipsum is simply dummy text of the printing and
 typesetting industry. Lorem Ipsum 
  has been the industry's standard dummy text ever since the
 1500s, when an unknown 
  printer took a galley of type and scrambled it to make a type
 specimen book. It has survived 
  not only five centuries, but also the leap into electronic
  typesetting, remaining essentially u
  nchanged.`,
		creationDate: '8/3/2021',
		duration: 160,
		authors: [
			'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
			'f762978b-61eb-4096-812bebde22838167',
		],
	},
	{
		id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
		title: 'Angular',
		description: `Lorem Ipsum is simply dummy text of the printing and
 typesetting industry. Lorem Ipsum 
  has been the industry's standard dummy text ever since the
 1500s, when an unknown 
  printer took a galley of type and scrambled it to make a type
 specimen book.`,
		creationDate: '10/11/2020',
		duration: 210,
		authors: [
			'df32994e-b23d-497c-9e4d-84e4dc02882f',
			'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		],
	},
];

const mockedAuthorsList = [
	{
		id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
		name: 'Vasiliy Dobkin',
	},
	{
		id: 'f762978b-61eb-4096-812bebde22838167',
		name: 'Nicolas Kim',
	},
	{
		id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
		name: 'Anna Sidorenko',
	},
	{
		id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
		name: 'Valentina Larina',
	},
];

function App() {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [authorList, setAuthorList] = useState(mockedAuthorsList);
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
								<Route
									path='/registration'
									element={
										<UserFormPage key={'reg'} selectedForm={'register'} />
									}
								/>
								<Route
									path='/login'
									element={<UserFormPage key={'log'} selectedForm={'login'} />}
								/>
							</Route>
							<Route element={<ProtectedRoute token={logedUser.token} />}>
								<Route path='/courses' element={<CourseList />} />
								<Route path='/courses/add' element={<CourseForm />} />
							</Route>
						</Routes>
					</div>
				</UserContext.Provider>
			</AuthorContext.Provider>
		</CourseContext.Provider>
	);
}

export default App;
