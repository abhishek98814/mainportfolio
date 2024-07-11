
import React from 'react'
import contact from "../../assets/image/Contact.jpg"
import map from '../../assets/image/map.png'
import "./css/contact.css"


export default function Contact() {
  return (
    <>
    <div className='container'>
<div className="contact">
  <div className="contact_container">
    <div className="contact_first">
      <span className="contact_line"></span>
      <h1>Contact</h1>
    </div>
    <div className="contact_img">
      <img src={contact} alt="" />
    </div>
  </div>


<div className="contact_pagedown">
  <div className="contact_text col-md-5">
    <h1>Send me a message</h1>
    <p>Whether you wish to discuss new ideas 
      or have a project for me, simply fill this form
       and I’ll get back to you soon.</p>
  </div>

<div className="contact_form col-md-7">
<form>
  <div className="contact_name">
    <div>
    <label>Name<span className='text-danger'>*</span></label><br/>
    <input type="text" />
    </div>
    <div className='px-4'>
    <label>Last Name<span className='text-danger'>*</span></label><br/>
    <input type="text" />
    </div>
  </div>
   

   <div className='email py-4'>
   <label>Email <span className='text-danger'>*</span></label><br/>
   <input type="text" />
   </div>
 
 <div className="textarea py-3">
 <label htmlFor="">Textarea<span className='text-danger'>*</span></label>
 <br />
<textarea name="" id="" cols="55" rows="5"></textarea>
 </div>

</form>
</div>

</div>

</div>
    </div>

<div className="map">
  <img src={map} alt="" />
</div>
    </>
  )
}
