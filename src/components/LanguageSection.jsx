import { useState } from "react";
import languages from '../data/languages'
import Card from './Card'

function LanguageSection() {
    const languageList = [...languages];
    const [activeLanguage, setActiveLanguage] = useState(languageList[0]);

    return (
        <section>
            <ul className="d-flex">
                {languageList.map((language) => {
                    const isActive = activeLanguage.id === language.id;
                    return (
                        <li key={language.id} className="pe-2" onClick={() => setActiveLanguage(language)}>
                            <button className={`btn ${isActive ? 'btn-warning' : 'btn-primary'}`}>{language.title}</button>
                        </li>
                    )
                })}
            </ul>
            <Card activeLanguage={activeLanguage} />
        </section>
    )
}

export default LanguageSection;