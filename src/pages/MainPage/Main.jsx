import { CourseList } from "../../components/CourseList/CourseList";
import { CourseForm } from "../../components/CourseForm/CourseForm";
import { useState } from "react";

const Main = () => {

    const [view, setView] = useState('course');
    const handleView = () => {
        view === 'course' ? setView('form') : setView('course');
    }

    return (
        <div className="main-page">
            {
            view === 'course' ? 
                <CourseList handleView={handleView}/>
            :
                <CourseForm setCoursePage={handleView}/>
            }
        </div>
    );

}

export {Main};