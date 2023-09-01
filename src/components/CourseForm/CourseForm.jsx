import { useState } from 'react';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router';
import { displayDuration } from 'utils/time/displayDuration';
import { Textarea } from 'components/common/Textarea/Textarea';
import { COURSES_ROUTE } from 'utils/routes/routes';
import { useDispatch, useSelector } from 'react-redux';
import { addAuthorAction } from 'store/authors/actionCreators';
import { addCourseAction } from 'store/courses/actionCreators';

const CourseForm = () => {
	const authors = useSelector((state) => state.authors.authors);
	const courses = useSelector((state) => state.courses.courses);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthorName, setNewAuthor] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState([]);
	let { hours, minutes } = displayDuration(duration);

	const handleTitel = (e) => {
		setTitle(e.target.value);
	};

	const handleDescription = (e) => {
		setDescription(e.target.value);
	};

	const handleNewAuthor = (e) => {
		setNewAuthor(e.target.value);
	};

	const handleDuration = (e) => {
		setDuration(e.target.value);
		hours = Math.floor(duration / 60);
		minutes = duration - hours * 60;
		if (hours < 10) hours = '0' + hours;
		if (minutes < 10) minutes = '0' + minutes;
	};

	const addNewAuthor = () => {
		const newAuthor = {
			id: v4(),
			name: newAuthorName,
		};
		dispatch(addAuthorAction(newAuthor));
	};

	const addCourseAuthor = (author) => {
		setCourseAuthors([...courseAuthors, author]);
	};

	const removeAuthor = (author) => {
		setCourseAuthors(courseAuthors.filter((item) => item.id !== author.id));
	};

	const validation = () => {
		if (!title || !description || !duration) {
			alert('Please, fill in all fields');
			return false;
		}
		if (!courseAuthors.length) {
			alert('Please, add authors to this course');
			return false;
		}

		return true;
	};

	const createCourse = () => {
		if (validation()) {
			const date = new Date();
			const newCourse = {
				id: v4(),
				title: title,
				description: description,
				creationDate:
					date.getDate() +
					'/' +
					(date.getMonth() + 1) +
					'/' +
					date.getFullYear(),
				duration: duration,
				authors: courseAuthors.map((item) => item.id),
			};

			setTitle('');
			setDescription('');
			setDuration('');
			setNewAuthor('');
			setCourseAuthors([]);

			dispatch(addCourseAction(newCourse));
			navigate(COURSES_ROUTE);
		}
	};

	return (
		<form className='text-lg'>
			<div className='relative mb-5'>
				<Input
					labelText='Title'
					type='text'
					className='w-[32rem]'
					placeholder='Enter title...'
					onChange={handleTitel}
				/>
				<Button
					text='Create course'
					className='absolute right-0'
					onClick={createCourse}
				/>
			</div>
			<Textarea
				labelText='Description'
				placeholder='Enter description'
				className='w-full h-32 mb-5'
				onChange={handleDescription}
			/>
			<div className='grid gap-8 grid-rows-2 grid-cols-2'>
				<div className='mb-10'>
					<h3 className='font-bold text-2xl text-center mb-4'>Add author</h3>
					<Input
						type='text'
						labelText='Author name'
						placeholder='Enter author name...'
						className='block w-[90%] mb-6'
						onChange={handleNewAuthor}
					/>
					<Button
						text='Create author'
						className='ml-[40%]'
						onClick={addNewAuthor}
					/>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl text-center mb-4'>Authors</h3>
					{authors
						.filter((item) => !courseAuthors.includes(item))
						.map((item) => {
							return (
								<div key={item.id} className='my-4 relative'>
									<p className='inline-block'>{item.name}</p>
									<Button
										text='Add author'
										className='absolute right-0'
										onClick={() => addCourseAuthor(item)}
									/>
								</div>
							);
						})}
				</div>
				<div>
					<h3 className='font-bold text-2xl text-center mb-4'>Duration</h3>
					<Input
						labelText='Duration'
						type='number'
						placeholder='Enter duration in minutes...'
						className='w-[90%] mb-5'
						onChange={handleDuration}
					/>
					<p className='text-3xl'>
						<b>Duration:</b> {hours}:{minutes} hours
					</p>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl text-center mb-4'>
						Course authors
					</h3>
					{!courseAuthors.length ? (
						<h3 className='text-center'>List is empty</h3>
					) : (
						courseAuthors.map((item) => {
							return (
								<div key={item.id} className='my-4 relative'>
									<p className='inline-block'>{item.name}</p>
									<Button
										text='Delete author'
										className='absolute right-0'
										onClick={() => removeAuthor(item)}
									/>
								</div>
							);
						})
					)}
				</div>
			</div>
		</form>
	);
};

export { CourseForm };
