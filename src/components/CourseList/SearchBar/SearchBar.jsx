import "./SerachBar.css"
import { Button } from "../../common/Button/Button";
import { Input } from "../../common/Input/Input";
import { useContext, useState } from "react";
import { CourseContext } from "../../../contexts/context";

const SearchBar = (props) => {

    const [search, setSearch] = useState('');
    const courses = useContext(CourseContext);

    const handleChange = (e) => {
        if (e.target.value === '') props.set([]);
        setSearch(e.target.value);
    }

    const handleSerach = () => {
        props.set(
            courses.list.filter((item) => item.id === search || item.title.toLowerCase().includes(search.toLowerCase()))
        );
    }

    return (
        <div className="course-control">
            <div className="search-bar">
                <Input placeholder="Enter course name or id" onChange={handleChange} className="search-input"/>
                <div className="search-button">
                    <Button text="Search" onClick={handleSerach}/>
                </div>
            </div>
            <div className="add-new-course">
                <Button text="Add new course" onClick={props.onClick}/>
            </div>
        </div>
    );
}

export {SearchBar};