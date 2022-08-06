import React from 'react'
import '../components/CSS/menu.css'
import img from "../assets/about.jpg";
function Menu() {
  return (
    <section id="menu">
      <div className="review">
		<div className="review1">
      <h2>Lorem Ipsum</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review1">
        <h2>Dolor Sitema</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review1">
        <h2>Sed ut pers</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			</div>
      <div class="section">
    <img src={img} alt='about'/>
    <div><h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      <br></br>tempor incididunt ut labore et dolore magna aliqua.</p>
      <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
      <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
      <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute</li>
      <p>irure dolor in reprehenderit in voluptate trideta storacalaperda
         mastiro dolore eu fugiat nulla pariatur.</p>
         <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur.
           Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
  </div>
    </section>
  )
}

export default Menu