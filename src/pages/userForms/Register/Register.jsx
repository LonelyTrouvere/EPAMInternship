import "../Form.css"
import { Input } from "../../../components/common/Input/Input";
import { Button } from "../../../components/common/Button/Button";
import { Link } from "react-router-dom";

const Register = () => {

    return (
        <form className="form">
            <h1 className="form-header">Registration</h1>
            <Input labelText = 'Name' type='text' placeholder='Enter name'/>
            <Input labelText = 'Email' type='text' placeholder='Enter email'/>
            <Input labelText = 'Password' type='password' placeholder='Enter password'/>
            <Button text='Registration' className='form-button'/>
            <p>If you have an account you can <Link to='/login'>Login</Link></p>
        </form>
    );

}

export {Register}; 