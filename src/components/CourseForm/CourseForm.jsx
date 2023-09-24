import { useState } from 'react';
import { Button } from 'components/common/Button/Button';
import { Input } from 'components/common/Input/Input';
import { useNavigate, useParams } from 'react-router';
import { displayDuration } from 'utils/displayDuration';
import { Textarea } from 'components/common/Textarea/Textarea';
import { COURSES_ROUTE } from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseThunk, updateCourseThunk } from 'store/courses/thunk';
import { addAuthorThunk } from 'store/authors/thunk';
import { useCourseByID } from 'hooks/useCourseByID';

const CourseForm = () => {
	const { id } = useParams();
	const authors = useSelector((state) => state.authors.authors);
	const updateCourse = useCourseByID(id);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState(updateCourse.title || '');
	const [description, setDescription] = useState(
		updateCourse?.description || ''
	);
	const [newAuthorName, setNewAuthor] = useState('');
	const [duration, setDuration] = useState(updateCourse.duration || 0);
	const [courseAuthors, setCourseAuthors] = useState(
		updateCourse.authors || []
	);
	const { hours, minutes } = displayDuration(duration);

	console.log(duration);

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
	};

	const addNewAuthor = () => {
		const newAuthor = {
			name: newAuthorName,
		};
		dispatch(addAuthorThunk(newAuthor));
	};

	const addCourseAuthor = (author) => {
		setCourseAuthors([...courseAuthors, author]);
	};

	const removeAuthor = (author) => {
		setCourseAuthors(courseAuthors.filter((item) => item !== author));
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

	const onCreateCourse = () => {
		if (validation()) {
			const date = new Date();
			const newCourse = {
				title: title,
				description: description,
				creationDate:
					date.getDate() +
					'/' +
					(date.getMonth() + 1) +
					'/' +
					date.getFullYear(),
				duration: parseInt(duration),
				authors: courseAuthors,
			};

			setTitle('');
			setDescription('');
			setDuration('');
			setNewAuthor('');
			setCourseAuthors([]);

			dispatch(addCourseThunk(newCourse));
			navigate(COURSES_ROUTE);
		}
	};

	const onUpdateCourse = () => {
		if (validation()) {
			const updatedCourse = {
				title: title,
				description: description,
				duration: parseInt(duration),
				authors: courseAuthors,
			};

			setTitle('');
			setDescription('');
			setDuration('');
			setNewAuthor('');
			setCourseAuthors([]);

			dispatch(updateCourseThunk(id, updatedCourse));
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
					value={title}
					onChange={handleTitel}
				/>
				<Button
					type='submit'
					className='absolute right-0'
					onClick={updateCourse ? onUpdateCourse : onCreateCourse}
				>
					{updateCourse ? 'Update course' : 'Create course'}
				</Button>
			</div>
			<Textarea
				labelText='Description'
				placeholder='Enter description'
				className='w-full h-32 mb-5'
				value={description}
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
					<Button type='button' className='ml-[40%]' onClick={addNewAuthor}>
						Create author
					</Button>
				</div>
				<div className='flex flex-col'>
					<h3 className='font-bold text-2xl text-center mb-4'>Authors</h3>
					{authors
						.filter((item) => !courseAuthors.includes(item.id))
						.map((item) => {
							return (
								<div key={item.id} className='my-4 relative'>
									<p className='inline-block'>{item.name}</p>
									<Button
										type='button'
										className='absolute right-0'
										onClick={() => addCourseAuthor(item.id)}
									>
										Add author
									</Button>
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
						value={duration}
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
						authors
							.filter((item) => courseAuthors.includes(item.id))
							.map((item) => {
								return (
									<div key={item.id} className='my-4 relative'>
										<p className='inline-block'>{item.name}</p>
										<Button
											type='button'
											className='absolute right-0'
											onClick={() => removeAuthor(item.id)}
										>
											Delete author
										</Button>
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
