
import React from 'react'
import about from '../../assets/image/about.jpg'
import Abhishek from "../../assets/image/Abhishek.jpg"
import './css/about.css'
import { BsPatchCheckFill } from "react-icons/bs"


export default function About() {
  return (
    <div className='about_main'>
      <div className='container about'>
        <div className="about_header">
          <h1 className='headerh1'>About</h1>
        </div>
        <div className='about_img'>
          <img src={about} alt="" />
        </div>
      </div>

      <section className='about_page'>

        <div className="container">
          <p className='text-primary'>About Me</p>
          <h1>I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.</h1>
        </div>

        <div className='about_pageflex'>
          <div className='pageFlex1 container'>

            <div className="pageFlex_image">
              <img src={Abhishek} alt="" />
            </div>

          </div>
          <div className='pageFlex2 col-md-6'>
            <h2 className='text-primary py-4'>Award-winning web design & development professional
            </h2>
            <p className='text-secondary'>
              I’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together
            </p>
          </div>
        </div>

      <div className="skill">
        <div className="container">
          <h2 className='text-center'>Skill</h2>
          <div className="experience_container">

            <div className="frontend_experience">
              <h3>Frontend Development</h3>

              <div className="expereince_content">
                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />

                  <div>
                    <h4>Javascript</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>

                  <BsPatchCheckFill className='experience_details_icon' />
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>React Js</h4>
                    <small className='text-light'>Experienced</small>
                  </div>

                </article>

              </div>

            </div>
            <div className="experience_backend">
              <h3>Back-End Developer</h3>

              <div className="expereince_content">
                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>Node js</h4>
                    <small className='text-light'>Experienced</small>
                  </div>

                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>Nextjs</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />
                  <div>
                    <h4>Mongodb</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <BsPatchCheckFill className="experience_details_icon" />

                  <div>
                    <h4>SQL</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

              </div>

            </div>

          </div>
        </div>
      </div>
      </section>


    </div>
  )
}
