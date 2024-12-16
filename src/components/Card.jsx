function Card({ activeLanguage }) {
    return (
        <div className="border p-2">
            <h2>{activeLanguage.title}</h2>
            <p>{activeLanguage.description}</p>
        </div>
    )
}

export default Card;