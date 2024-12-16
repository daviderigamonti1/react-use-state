import languages from '../data/languages'

function Button() {
    return (
        <ul className="d-flex">
            {languages.map((language) => {
                return (
                    <li key={language.id} className="pe-2">
                        <button className="btn btn-primary">{language.title}</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Button;