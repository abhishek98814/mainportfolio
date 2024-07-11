
import React from 'react'
import abhi from "../../assets/image/Abhishek.jpg"
import './css/home.css'
import HomePage from '../../homepage/HomePage'


export default function Home() {
  return (
    <div>
<main>
    <div className="container home">
        <div className="explaination mt-5">
        <p className='text-secondary mt-5'><span className='hello px-2 '>HELLO,</span> MY NAME IS</p>
        <div className="underline text-secondary"></div>
            <h1 className='mt-5 text-dark mt-5'>Abhishek Jha</h1>
            <h3 className='text-secondary'>Web Developer</h3>
            <div className='iconn'>
           <p className='pt-4'><i className="fa-solid fa-envelope text-primary"></i> <span className='letter px-2'>aj7154264@gmail.com</span></p>
           <p><i className="fa-solid fa-phone text-primary"></i><span className='letter px-2'>929-242-6868</span></p>
            </div>
        </div>
        <div className="profile">
            <img src={abhi} alt="" />
        </div>
    </div>
</main>
<div className='my-5'>
<HomePage />
</div>
</div>
    )
}
