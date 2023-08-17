import { Header } from './components/Header/Header';
import { Login } from './pages/userFormPage/Login/Login';
import { Register } from './pages/userFormPage/Register/Register';
import { MainPage } from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import { CourseList } from './components/CourseList/CourseList';
import { CourseForm } from './components/CourseForm/CourseForm';
import { ProtectedRoute } from './components/common/ProtectedRoute/ProtectedRoute';
import { CourseInfo } from './components/CourseList/CourseInfo/CourseInfo';
import { CourseContextProvider } from 'contexts/CourseContext';
import { AuthorContextProvider } from 'contexts/AuthorContext';
import { UserContextProvider } from 'contexts/UserContext';

const App = () => {
	return (
		<CourseContextProvider>
			<AuthorContextProvider>
				<UserContextProvider>
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
				</UserContextProvider>
			</AuthorContextProvider>
		</CourseContextProvider>
	);
};

export default App;
