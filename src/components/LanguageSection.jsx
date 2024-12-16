import { useState } from "react";
import languages from '../data/languages'
import Button from './Button'
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
                        <Button
                            key={language.id}
                            language={language}
                            isActive={isActive}
                            onClick={() => setActiveLanguage(language)} />
                    )
                })}
            </ul>
            <Card activeLanguage={activeLanguage} />
        </section>
    )
}

export default LanguageSection;