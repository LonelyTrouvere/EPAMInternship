import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SearchBar = (props) => {
	const { setSearchCourses } = props;
	const [search, setSearch] = useState('');
	const courses = useSelector((state) => state.courses.courses);

	const handleChange = (e) => {
		if (e.target.value === '') setSearchCourses([]);
		setSearch(e.target.value);
	};

	const handleSerach = () => {
		setSearchCourses(
			courses.filter(
				(item) =>
					item.id === search ||
					item.title.toLowerCase().includes(search.toLowerCase())
			)
		);
	};

	return (
		<div className='relative'>
			<div className='inline-block'>
				<Input
					placeholder='Enter course name or id'
					onChange={handleChange}
					className='w-96 mr-5 inline'
				/>
				<div className='inline-block'>
					<Button onClick={handleSerach}>Search</Button>
				</div>
			</div>
			<div className='inline-block absolute right-0'>
				<Button onClick={props.onClick}>Add new course</Button>
			</div>
		</div>
	);
};

export { SearchBar };
