import './CourseForm.css';
import { useContext, useState } from 'react';
import { Button } from '../../components/common/Button/Button';
import { Input } from '../../components/common/Input/Input';
import { AuthorContext, CourseContext } from '../../contexts/context';
import { v4 } from 'uuid';

const CourseForm = ({ setCoursePage }) => {
	const authors = useContext(AuthorContext);
	const courses = useContext(CourseContext);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [newAuthorName, setNewAuthor] = useState('');
	const [duration, setDuration] = useState(0);
	const [courseAuthors, setCourseAuthors] = useState([]);
	let hours = Math.floor(duration / 60);
	let minutes = duration - hours * 60;
	if (hours < 10) hours = '0' + hours;
	if (minutes < 10) minutes = '0' + minutes;

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
		authors.set([...authors.list, newAuthor]);
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

			courses.set([...courses.list, newCourse]);
			setCoursePage('course');
		}
	};

	const onReturn = () => {
		setTitle('');
		setDescription('');
		setDuration('');
		setNewAuthor('');
		setCourseAuthors([]);

		setCoursePage('course');
	};

	return (
		<form className='create-course'>
			<div className='spacing'>
				<Input
					labelText='Title'
					type='text'
					placeholder='Enter title...'
					onChange={handleTitel}
				/>
				<Button text='Return' className='float-right' onClick={onReturn} />
				<Button
					text='Create course'
					className='float-right'
					onClick={createCourse}
				/>
			</div>
			<Input
				labelText='Description'
				type='textarea'
				placeholder='Enter description'
				className='form-text-area'
				onChange={handleDescription}
			/>
			<div className='authors-area'>
				<div className='create-author'>
					<h3 className='form-header'>Add author</h3>
					<Input
						type='text'
						labelText='Author name'
						placeholder='Enter author name...'
						onChange={handleNewAuthor}
					/>
					<Button
						text='Create author'
						className='author-create-button'
						onClick={addNewAuthor}
					/>
				</div>
				<div className='author-list'>
					<h3 className='form-header'>Authors</h3>
					{authors.list
						.filter((item) => !courseAuthors.includes(item))
						.map((item) => {
							return (
								<div key={item.id} className='add-author'>
									<p className='float-left author-name'>{item.name}</p>
									<Button
										text='Add author'
										className='float-right'
										onClick={() => addCourseAuthor(item)}
									/>
								</div>
							);
						})}
				</div>
				<div className='course-author-list'>
					<h3 className='form-header'>Course authors</h3>
					{!courseAuthors.length ? (
						<h3>List is empty</h3>
					) : (
						courseAuthors.map((item) => {
							return (
								<div key={item.id} className='add-author'>
									<p className='float-left author-name'>{item.name}</p>
									<Button
										text='Delete author'
										className='float-right'
										onClick={() => removeAuthor(item)}
									/>
								</div>
							);
						})
					)}
				</div>
				<div className='duration-area'>
					<h3 className='form-header'>Duration</h3>
					<Input
						labelText='Duration'
						type='number'
						placeholder='Enter duration in minutes...'
						className='spacing'
						onChange={handleDuration}
					/>
					<p className='duration'>
						<b>Duration:</b> {hours}:{minutes} hours
					</p>
				</div>
			</div>
		</form>
	);
};

export { CourseForm };
