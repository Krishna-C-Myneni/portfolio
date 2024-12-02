import React from 'react';
import info from "./intro.json";
import image from "./IMG_0990.JPG";
import intro from "./Intro.css"

const Intro = () => {
  return (
    <section className='container'>
        <div className='body'>
            <div className='title'> {info.title} </div>
            <div className='schoolinfo'> {info.title2}</div>
            <div className='info'>
                <p>{info.info11}<a href={info.link1.link} className='link'>{info.link1.tag}</a> {info.info12}</p>
            </div>
            <div className='info'>
                <p>{info.info21}<a href={info.link2.link} className='link'>{info.link2.tag}</a> {info.info22}</p>
            </div>
        </div>
        <img src={image} alt="My Image" className='image'/>
    </section>
  )
}

export default Intro
