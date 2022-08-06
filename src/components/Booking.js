import React, { useState } from "react";
import "./CSS/booking.css";
import img1 from "../assets/client-1.png";
import img2 from "../assets/client-2.png";
import img3 from "../assets/client-3.png";
import img4 from "../assets/client-4.png";
import img5 from "../assets/client-5.png";
import img6 from "../assets/client-6.png";
import img7 from "../assets/client-7.png";
import img8 from "../assets/client-8.png";

function Booking() {

  return (
<section id="book-a-table" className="book-a-table">
<div className="review2">
		<div className="review3">
      <h2>Lorem Ipsum</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review3">
        <h2>Dolor Sitema</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review3">
        <h2>Sed ut pers</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
      <div className="review3">
      <h2>Lorem Ipsum</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review3">
        <h2>Dolor Sitema</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			<div className="review3">
        <h2>Sed ut pers</h2>
			<p>Suspendisse vitae enim arcu. Aliqu<br></br> convallis risus a felis blandit, at mollis<br></br> nisi bibendum aliquam noto ricos</p>
			</div>
			</div>
      <div>
        <h1 align="center">Clients</h1>
        <h2 align="center"><span>_______</span></h2>
        <p align="center">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
           Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
           Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      
      <div class="images">
      <img src={img1} alt=""/>
    <img src={img2} alt=""/>
    <img src={img3} alt=""/>
    <img src={img4} alt=""/>
    <img src={img5} alt=""/>
    <img src={img6} alt=""/>
    <img src={img7} alt=""/>
    <img src={img8} alt=""/>
			</div>
		</div>
</section>
  );
}

export default Booking;
