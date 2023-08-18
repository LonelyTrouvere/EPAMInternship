import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { CourseContextProvider } from 'contexts/CourseContext';
import { AuthorContextProvider } from 'contexts/AuthorContext';
import { UserContextProvider } from 'contexts/UserContext';

const App = () => {
	console.log(localStorage.getItem('token'));
	return (
		<UserContextProvider>
			<CourseContextProvider>
				<AuthorContextProvider>
					<Header />
					<div className='border-2 border-blue-500 h-fit min-h-[86vh] p-5'>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route
								element={
									<ProtectedRoute token={!localStorage.getItem('token')} />
								}
							>
								<Route path='/registration' element={<Register />} />
								<Route path='/login' element={<Login />} />
							</Route>
							<Route
								element={
									<ProtectedRoute token={localStorage.getItem('token')} />
								}
							>
								<Route path='/courses' element={<CourseList />} />
								<Route path='/courses/add' element={<CourseForm />} />
								<Route path='/courses/:id' element={<CourseInfo />} />
							</Route>
						</Routes>
					</div>
				</AuthorContextProvider>
			</CourseContextProvider>
		</UserContextProvider>
	);
};

export default App;
