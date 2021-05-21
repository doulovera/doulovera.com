import React from 'react'
import './style.css'

export default function Skills({ skill }) {
    return (
        <section className="main__skills" id="skills">
            <h4>Skills <span className="icon-pc"></span></h4>
            <section className="main__skills__container">
                {
                    skill.map((item, index) => 
                        <article className="skills" 
                            style={{
                                backgroundColor: item.background, 
                                color: item.color ? item.color : 'white'}
                            }
                            key={index}
                        >
                            {item.name}
                        </article>
                    )
                }
            </section>
        </section>
    )
}
