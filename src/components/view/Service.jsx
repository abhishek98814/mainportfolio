
import React from 'react'
import Serviceimg from "../../assets/image/service.jpg"
import "./css/service.css"


export default function Service() {
  return (
  

<section className='service_main'>
  <div className="container">
    <div className="service">
      <div className="port">
        <div className='service_line'></div>
        <h1 className=''>My Work</h1>
      </div>
       <div className="service_image">
   <img src={Serviceimg} alt="" />
</div>
    </div>
    <div>
    </div>
  </div>

  <div className="service_page">
<div className="container">
    
    <div className="col-md-8">
<h1>What I do</h1>
<p className='service_paragraph'>From understanding your requirements, designing a blueprint
   and delivering the final product,
   I do everything that falls in between these lines</p>
    </div>
  
  <div className="row service_box">
    <div className="col-md-4 container">
      <h5 className='py-2'><i className="fa-solid fa-pen-nib text-primary"></i><span className='px-2'>UI/UX  Design</span></h5>
      <p className='text-secondary service_paragraph px-4'>
An effective UI/UX is what captures attention 
and spreads a clear message. I make sure the design is
 innovative and neat with all of this.</p>
    </div>
    <div className="col-md-4 container">
      <h5 className='py-2'><i className="fa-brands fa-aws text-primary"></i><span className="px-2">Web Development</span></h5>
      <p className='text-secondary service_paragraph px-4'>
      If you are looking for a developer who’ll take over the
       research and development of your website,
       I am a well-established professional to help you with this.</p>
    </div>
    <div className="col-md-4 container">
      <h5 className='py-2'><i className="fa-solid fa-mobile text-primary"></i><span className="px-2">App Development</span></h5>
      <p className='text-secondary service_paragraph px-4'>
An If you are looking for a user-friendly app that will attract 
more mobile users, I can help you design and build a platform 
with the latest and trendiest look and feel.</p>
    </div>
    <div className="col-md-4 container">
      <h5 className='py-2'><i className="fa-solid fa-gamepad text-primary"></i><span className="px-2">Game Development</span></h5>
      {/* <p className='text-secondary service_pargaraph px-4'>
      Have a crazy gaming idea that you wish to bring to reality? I can
       help you build this for you.
       Having worked on various platforms, I can be your right choice.</p> */}
        <p className='text-secondary service_paragraph px-4'>
An If you are looking for a user-friendly app that will attract 
more mobile users, I can help you design and build a platform 
with the latest and trendiest look and feel.</p>
    </div>
    <div className="col-md-4 container">
      <h5 className='py-2'><i className="fa-brands fa-microblog text-primary"></i><span className="px-2">Graphic Design</span></h5>
      <p className='text-secondary service_paragraph px-4'>
An It's a good practise to get your logos, images and website
 done from one source. I can help you design 
those that will fit and match into the website and app quickly.</p>
    </div>
    <div className="col-md-4 container">
      <h5 className='py-2'><i class="fa-solid fa-copyright text-primary"></i><span className="px-2">Copy & Content Writing</span></h5>
      <p className='text-secondary service_paragraph px-4'>
      Just like graphics, the content and your website or app design
       should also go hand-in-hand. So, I can help you create
       amazing content that complements my design and your business.</p>
    </div>
  </div>

  <div className="services_last">
    <h1 className='text-primary'>My Last Work </h1>
    <button><i className="fa-solid fa-right-long text-primary"></i></button>
  </div>
  
  </div>
</div>

</section>

    )
}
