import React from 'react'
import './CSS/about.css'
import { Button, Carousel } from 'react-bootstrap';
import img1 from '../assets/slide-1.jpg'
import img2 from '../assets/slide-2.jpg'
import img3 from '../assets/slide-3.jpg'

function AboutUs() {
  return (
    <section id="about" className="about">
 <div>
<div className='container-fluid' >
<div className="row">
</div>
<div className="row">
<div className="col-12">
<Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src={img1}
alt="First slide"
/>
<Carousel.Caption>
  <div className='slide1'>
<h1>Welcome to <span>Eterna</span> </h1>
<p >Ut velit est quam dolor ad a aliquid qui aliquid.
   Sequi ea ut et est quaerat sequi nihil ut aliquam.
    Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
     Esse doloremque accusamus repellendus deleniti vel. 
     Minus et tempore modi architecto.</p>
     <button>Read More</button>
     </div>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={img2}
alt="Second slide"
/>
<Carousel.Caption>
<div className='slide1'>
<h1>Lorem <span>Ipsum Dolor</span></h1>
<p>Ut velit est quam dolor ad a aliquid qui aliquid. 
  Sequi ea ut et est quaerat sequi nihil ut aliquam.
   Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
    Esse doloremque accusamus repellendus deleniti vel.
   Minus et tempore modi architecto.</p>
   <button>Read More</button>
   </div>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src={img3}
alt="Third slide"
/>
<Carousel.Caption>
<div className='slide1'>
<h1>Sequi ea <span>Dime Lara</span></h1>
<p>Ut velit est quam dolor ad a aliquid qui aliquid.
   Sequi ea ut et est quaerat sequi nihil ut aliquam.
    Occaecati alias dolorem mollitia ut. Similique ea voluptatem. 
    Esse doloremque accusamus repellendus deleniti vel. 
    Minus et tempore modi architecto.</p>
    <button>Read More</button>
    </div>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
  </section>
  )
}

export default AboutUs