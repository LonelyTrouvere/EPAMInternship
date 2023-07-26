import "./Input.css"

const Input = (props) => {

    const {labelText, type, ...inputProps} = props;

    return (
        <>
            <label>{labelText}</label>
            { props.type === 'textarea' ?
                <textarea {...inputProps}/>
                :
                <input className="input" type={type} {...inputProps}/> 
            }
        </>
    );
}

export {Input};