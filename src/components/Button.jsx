function Button({ language, isActive, onClick }) {
    return (
        <li className="pe-2" onClick={onClick}>
            <button className={`btn ${isActive ? 'btn-warning' : 'btn-primary'}`}>{language.title}</button>
        </li>
    )
}

export default Button;