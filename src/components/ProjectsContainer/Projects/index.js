import React from 'react';
import './style.css';
import HTML from '../../../assets/icons/langs/html.png'
import CSS from '../../../assets/icons/langs/css.png'
import JS from '../../../assets/icons/langs/js.png'
import ReactIcon from '../../../assets/icons/langs/react.png'
import TS from '../../../assets/icons/langs/ts.png'
import BootstrapIcon from '../../../assets/icons/langs/bootstrap.png'
import DiscordJS from '../../../assets/icons/langs/discordjs.png'

export default function Projects({ preview, name, languages, url }) {
    return (
        <article className="main__projects__item">
            <div className="main__projects__image">
                <img src={preview && preview} alt={name} />
            </div>
            <div className="main__projects__body">
                <h5>{name}</h5>
                <div className="main__projects__body-languages">
                    {languages.html && <img src={HTML} alt="HTML 5" title="HTML5" />}
                    {languages.css && <img src={CSS} alt="CSS 3" title="CSS3" />}
                    {languages.js && <img src={JS} alt="JavaScript" title="JavaScript" />}
                    {languages.react && <img src={ReactIcon} alt="React" title="React.js" />}
                    {languages.ts && <img src={TS} alt="TypeScript" title="TypeScript" />}
                    {languages.bootstrap && <img src={BootstrapIcon} alt="Bootstrap 5" title="Bootstrap 5" />}
                    {languages.discordjs && <img src={DiscordJS} alt="Discord.js" title="Discord.js" />}
                </div>
                <div className="main__projects__body-link">
                    <a href={url} target="_blank" rel="noreferrer">View Project</a>
                </div>
            </div>
        </article>
    )
}
