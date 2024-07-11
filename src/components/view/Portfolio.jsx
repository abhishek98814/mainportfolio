import React from 'react'
import portfolio from '../../assets/image/Portfolio.jpg'
import './css/portfolio.css'
import IMG2 from '../../assets/img/portfolio4.jpg'
import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio2.jpg'
import IMG5 from '../../assets/img/portfolio5.png'
import IMG6 from '../../assets/img/portfolio6.jpg'

const data = [
  {
  id:1,
  image: IMG1,
  title: 'Crypto Currency Dashboard & Financial Visualization',
 github: 'https://github.com',
 demo: "https://dribbble.com/shots/21015080-Crypto-Exchange-Landing-Page"
},
  {
  id:2,
  image: IMG2,
  title: 'Chart template & infographics in figma',
 github: 'https://github.com',
 demo: 'https://dribbble.com/shots/21015080-Crypto-Exchange-Landing-Page'
},
  {
  id:3,
  image: IMG3,
  title: 'Figma dashboard UI lit for data design web apps',
 github: 'https://github.com',
 demo: 'https://dribbble.com/shots/22329917-A-Health-Tracking-Mobile-iOS-App'
},
  {
  id:4,
  image: IMG4,
  title: 'Maintaining tasks and tracking programs',
 github: 'https://github.com',
 demo: "https://dribbble.com/shots/21015080-Crypto-Exchange-Landing-Page"
},
  {
  id:5,
  image: IMG5,
  title: 'Charts template & infographics in figma',
 github: 'https://github.com',
 demo: 'https://dribbble.com/shots/22332247-Casino-Analytics-Dashboard'
},
  {
  id:6,
  image: IMG6,
  title: 'Crypto Currency Dashboard & Financial Visualization',
 github: 'https://github.com',
 demo: 'https://dribbble.com/shots/19566783-Poker-App-Design'
}
]


export default function Portfolio() {
  return (

    <>
   <div className="container">
    <div className="portfolio">
      <div className="portfolio_container">

        
    <div className='portfolio_first'>
      <span className="portfolio_line"></span>
      <h1>Portfolio</h1>
    </div>

<div className="portfolio_img">
  <img src={portfolio} alt="" />
</div>

</div>
    </div>

   </div>

   <div className='potfolio_down'>
 <h5 className='text-center'>My recent work</h5>
 <h2 className='text-center'>Portfolio</h2>
<div className="container portfolio_containe">
<div className="row container">



{
  data.map(({id, image, title, github, demo}) =>{
    return(
  <div key={id} className="col-md-4">

      <article className="portfolio_item">
  <div className="portfolio_item-image">
    <img src={image} alt="" />
  </div>
  <h3>{title}</h3>
<div className="portfolio_item-cta">
<a href={github} className='btn btn-light mx-2' target='_blank'>Github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
</div>
</article>
</div>

    )
  })
}

</div>
</div>
</div>

   </>
  )
}
