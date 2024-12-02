import React from 'react'
import info from "./experience.json";
import exp from "./Experience.css"

const Experience = () => {
  return (
    <section>
        <div className='body1'>
            <hr className='line'/>
            <div className='section-title'>Experience</div>
            <div className='container1'>
                <div className='title1'>{info.exp1.title}</div>
                <div className='info1'><p>{info.exp1.time}</p></div>
                <div className='content1'>{info.exp1.content}</div>
                <div className='link1'><a href={info.exp1.link.link} className='link'>{info.exp1.link.tag}</a></div>
            </div>
            <div className='container1'>
                <div className='title1'>{info.exp2.title}</div>
                <div className='info1'>
                    <p>{info.exp2.tag} | <a href={info.exp2.proff.link} className='link'>{info.exp2.proff.tag}</a> | {info.exp2.time}</p>
                </div>
                <div className='content1'>{info.exp2.content}</div>
            </div>
        </div>
    </section>
  )
}

export default Experience;
