
import React from 'react'
import './css/footer.css'

export default function Footer() {
  return (
<footer>
<div className="container footer_content">

<div className='container touch'>
<h5>Based in New York, working worldwide.</h5>
<h1 className='mt-3'>Get in touch</h1>
</div>

<div className="social">
<ul className='my-4'>
<h4 className='mx-4'>Social</h4>

    <li><i className="fa-brands fa-instagram px-2 text-primary"></i><span className='social_media'>Instagram</span></li>
    <li><i className="fa-brands fa-dribbble px-2 text-primary"></i><span className='social_media'>Dribble</span></li>
    <li> <i className="fa-brands fa-linkedin px-2 text-primary"></i><span className='social_media'>Linkedin</span></li>
     <li><i className="fa-brands fa-github px-2 text-primary"></i><span className='social_media'>Github</span></li>   
</ul>
<i className="fa-brands fa-instagram px-2 text-primary d-md-none"></i>
    <i className="fa-brands fa-dribbble px-2 text-primary d-md-none"></i>
     <i className="fa-brands fa-linkedin px-2 text-primary d-md-none"></i>
     <i className="fa-brands fa-github px-2 text-primary d-md-none"></i>
</div>

</div>
<p className='footercopy text-secondary pt-5'>Copyright &copy; 2023 Portfolio & CV | Powered by Portfolio & CV</p>
</footer>
   )
}
