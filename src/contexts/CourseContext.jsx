import { MOCKED_COURSE_LIST } from 'assets/mockedData/mockedData';

import { useState, createContext } from 'react';

const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
	const [courseList, setCourseList] = useState(MOCKED_COURSE_LIST);

	return (
		<CourseContext.Provider
			value={{ courseList: courseList, setCourseList: setCourseList }}
		>
			{children}
		</CourseContext.Provider>
	);
};

export { CourseContext, CourseContextProvider };
