import "./Header.css"
import { Logo } from "./Logo/Logo";
import { Button } from "../common/Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="head">
            <div className="logo-holder">
                <Link to='/'><Logo/></Link>
            </div>
            <div className="far-end">
                <Link to='/login'><Button text='Log in'/></Link>
                <Link to='/registration'><Button text='Sign up'/></Link>
            </div>

        </div>
    );
}

export {Header};