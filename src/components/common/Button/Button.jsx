import "./Button.css"

const Button = ({text, onClick, className}) => {
    return <button className={className + ' custom-button'} type="button" onClick={onClick}>{text}</button>
}

export {Button};