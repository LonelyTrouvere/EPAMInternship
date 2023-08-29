import { App } from 'App';
import { AuthorContextProvider } from 'contexts/AuthorContext';
import { CourseContextProvider } from 'contexts/CourseContext';
import { UserContextProvider } from 'contexts/UserContext';

const Root = () => {
	return (
		<UserContextProvider>
			<CourseContextProvider>
				<AuthorContextProvider>
					<App />
				</AuthorContextProvider>
			</CourseContextProvider>
		</UserContextProvider>
	);
};

export { Root };
