import React from 'react';
import info from "./conference.json";
import "./Conference.css" ;

const Conference = () => {
  return (
    <section>
        <div className="body1">
        <hr className='line'/>
            <div className="section-title">Conference Presentations</div>
            <div className="title-1">{info.title}</div>
            <div className="title-2">{info.title2}</div>
            <div className="names">
                {info.names.n1}<b>{info.names.b}</b>{info.names.n2}</div>
            <div className='submissions'>
                <div className='submission'>
                    <p className='place'>{info.submissions.s1.tag}</p>  
                </div>
                <div className="rbc">
                    <a href={info.submissions.s1.link} className='report-button'>Poster Link</a>
                </div> 
                <div className='submission'>
                    <p className='place'>{info.submissions.s2.tag}</p>
                </div>
                <div className="rbc">
                    <a href={info.submissions.s2.link} className='report-button'>Poster Link</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Conference;
