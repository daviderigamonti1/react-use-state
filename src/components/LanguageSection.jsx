import { useState } from "react";
import languages from '../data/languages'

function LanguageSection() {
    const languageList = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(languageList[0]);

    return (
        <section>
            <ul className="d-flex">
                {languageList.map((language) => {
                    return (
                        <li key={language.id} className="pe-2" onClick={() => setActiveLanguage(language)}>
                            <button className="btn btn-primary">{language.title}</button>
                        </li>
                    )
                })}
            </ul>
            <div className="border">
                <h2>{activeLanguage.title}</h2>
                <p>{activeLanguage.description}</p>
            </div>
        </section>
    )
}

export default LanguageSection;