import "./CourseCard.css"
import { Button } from "../../common/Button/Button";
import { useContext } from "react";
import { AuthorContext } from "../../../contexts/context";


const CourseCard = ({course}) => {

    const authors = useContext(AuthorContext);
    let hours = Math.floor(course.duration/60);
    let minutes = course.duration - hours*60;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;

    return (
        <div className="card">
            <div className="description">
                <h3 className="course-title">{course.title}</h3>
                <p>{course.description}</p>
            </div>
            <div className="aditional">
                <p><b>Authors:</b> {
                    authors.list.filter(item => course.authors.includes(item.id))
                    .map((item, index) => {
                        if (index === authors.list.length-1)
                            return <span key={item.id}>{item.name}</span>
                        else
                            return <span key={item.id}>{item.name}, </span>
                            }
                        )
                } </p>
                <p><b>Duration:</b> {hours}:{minutes} hours</p>
                <p><b>Created:</b> {course.creationDate}</p>
                <div className="show-course">
                    <Button text="Show course"/>
                </div>
            </div>
        </div>
    );
}

export {CourseCard};