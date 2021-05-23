import React from 'react';
import Photo from '../../assets/images/me.png';
import './style.css';

export default function AboutMe() {
    return (
        <section className="main__aboutme" id="contact">
            <img src={Photo} alt="" className="main__aboutme__picture" />
            <div>
                <div className="main__aboutme__container">
                    <h2 className="main__aboutme__title">Hi!</h2>
                    <p className="main__aboutme__body">
                        I am a Douglas, a <b>Frontend</b> developer, entering the world of Backend and Full Stack. I am studing Systems Engineering. I love creating things and learn every day.
                    </p>
                </div>
                <div className="main__aboutme__contact">
                    <a href="https://twitter.com/doulovera/" target="_blank" rel="noreferrer" className="icon"><i className="fab fa-twitter"></i></a>
                    <a href="https://github.com/doulovera/" target="_blank" rel="noreferrer" className="icon"><i className="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/douglaslovera/" target="_blank" rel="noreferrer" className="icon"><i className="fab fa-linkedin"></i></a>
                    <a href="https://dev.to/doulovera/" target="_blank" rel="noreferrer" className="icon"><i className="fab fa-dev"></i></a>
                </div>
            </div>
        </section>
    )
}
