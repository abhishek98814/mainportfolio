

import React from 'react'
import abhi from '../assets/img/abhi1.png'
import './homepage.css'

export default function HomePage() {
  return (
<>
<div className='about_home'>
    <div className='container '>
    <p className='text-primary about_para'>About me</p>
    <h1 className='about_header'>
    I am an enthusiastic web developer based in New York, with a rich experience of over 6 years in website & product design.
    </h1>
    <section className='section2'>
     <div className='col-md-6 aboutpage'>
<h1 className='text-primary'>
I design professional & beautiful websites
</h1>
<div className="aboutpage_img">
<img src={abhi} alt="" />
</div>

</div>
<div className='col-md-5 about_para'>
<p>
With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.</p>
<p className='mt-4 text-secondary'>I’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, app UI/UX, to my current role designing products for mobile platforms. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.
</p>
<button className='read text-primary my-3'>READ MORE</button>
</div>
</section> 

    </div>
</div>


</>
    )
}
