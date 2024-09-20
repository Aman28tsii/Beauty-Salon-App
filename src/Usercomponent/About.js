import React from 'react';
import BlogData from './BlogData';
function About() {
      return (
<>
<div className="about-contain">
  <div className="A1">
    <div className="about-section">
  <h2 > <b>About Us</b></h2>
      <p >Pamper yourself and unleash your natural beauty at our luxurious women's beauty center, where our expert team is dedicated to providing personalized beauty services tailored to enhance your unique style and confidence.</p>
      <br/> <p>Get ready to glow from head to toe at our make-up, skin care, and hair dayle event! Treat yourself to a day of relaxation and beauty as our skilled professionals pamper you with luxurious treatments and expert advice. Don't miss out on this unique opportunity to elevate your beauty routine and learn new life hacks for a flawless look every day.</p>
 </div>
</div>
<div className="A1">
 <div className="col-12 col-md-10 col-xl-5" id="Aboutpage" >
    <h2 className="text-purple-500"> All Kinds <br className="d-none d-xl-inline-block" />of Skin-rejuvenation </h2>
    <p className="text-white"> Click below for Daily tips on Skin Care secrets and healthier-looking Skin</p>
    <a href="#" className='btn'>free consultation</a>
  </div>
</div>
</div>

   <BlogData/>
   
</>


);
    };
    
   
export default About;
