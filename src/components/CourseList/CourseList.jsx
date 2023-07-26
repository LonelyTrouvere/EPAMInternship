import "./CourseList.css"
import { useContext } from "react";
import { CourseContext } from "../../contexts/context";
import { CourseCard } from "./CourseCard/CourseCard";
import { SearchBar } from "./SearchBar/SearchBar";
import { useState } from "react";

const CourseList = ({handleView}) => {
    const courses = useContext(CourseContext);
    
    const [searchCourses, setSearchCourses] = useState([]);

    return (
        <div className="course-page"> 
            <SearchBar set={setSearchCourses} onClick={handleView}/>
            <div className="courses">
             {
                !searchCourses.length ?
                courses.list.map(
                    (item) => {
                        return <CourseCard key={item.id} course={item}/>
                    }
                )
                :
                searchCourses.map(
                    (item) => {
                        return <CourseCard key={item.id} course={item}/>
                    }
                )
             } 
             </div>
        </div> 
    );

}

export {CourseList};