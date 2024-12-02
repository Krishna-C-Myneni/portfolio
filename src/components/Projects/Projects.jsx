import React from 'react'
import info from "./projects.json";
import "./Projects.css";
import p11 from "./Images/p11.png";
import p12 from "./Images/p12.png";
import p2 from "./Images/p2.png";
import p41 from "./Images/p41.png";
import p42 from "./Images/p42.png";
import p5 from "./Images/p5.png";


const Projects = () => {
  return (
    <section>
      <div className='body1 proj'>
      <hr className='line'/>
        <div className='section-title'>Projects</div>
        <div className='containerp'>
            <div className='titlep1'>{info.p1.title}</div>
            <div className='info1'>{info.p1.content}</div>
            <div className='images'>
              <img src={p11} className='project-image-11'alt="project-image"/>
              <img src={p12} className='project-image-12' alt="project-image"/>
            </div>
            <div className="rb">
              <a href={info.p1.report} className='report-button'>Report</a>
            </div>
        </div>
        <div className='containerp'>
          <div className='titlep'>{info.p2.title}</div>
          <div className='info1'>{info.p2.content}</div>
            <div className='images'>
              <img src={p2} className='project-image-2' alt="project-image"/>
            </div>
          <div className="rb">
            <a href={info.p2.report} className='report-button'>Report</a>
          </div>
        </div>
        <div className='containerp'>
          <div className='titlep'>{info.p3.title}</div>
          <div className='info1'>{info.p3.content}</div>
        </div>
        <div className='containerp'>
            <div className='titlep'>{info.p4.title}</div>
            <div className='info1'>{info.p4.content}</div>
            <div className='images'>
              <img src={p41} className='project-image-41' alt="project-image"/>
              <img src={p42} className='project-image-42' alt="project-image"/>
            </div>
            <div className="rb">
              <a href={info.p4.report} className='report-button'>Report</a>
          </div>
        </div>
        <div className='containerp'>
          <div className='titlep'>{info.p5.title}</div>
          <div className='info1'>{info.p5.content}</div>
            <div className='images'>
              <img src={p5} className='project-image-5' alt="project-image"/>
            </div>
          <div className="rb">
            <a href={info.p5.report} className='report-button'>Report</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
