import React from 'react';
// import './App.css';
// import data from './data';
import HomeService from './HomeService';
import BlogData from './BlogData';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
const Home = () => {
    return (
        <>
  
   <section className='kv'>
     <div className='slider-bannerr'>
       <div className='slider-container'>
         <div className="item item-kv-1 active">
           <div className='container'>
             <div className='row'>
               <div className="item-kv-txt col-md-6 col-xl-4"> 
                 <h2 class="color: rgb(240, 138, 138)">Welcome to Glamours Beauty Center</h2>
                 <a href='#' className='btn'>make an appointment</a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </section>
   <section className='doc-section'>
     <div className='container'>
       <div className='row'>
         <div className="col-12 col-md-6 col-xl-4 item">
           <div className="icon icon-pills"></div>
           <h3>Ms.Alemeshet Werku</h3>
           <p> The founder of Glamours beauty center since 2021 EC.</p>
         </div>
         <div className="col-12 col-md-6 col-xl-4 item">
           <div className="icon icon-doctor"></div>
           <h3>Dr. Meron yergalem</h3>
           <p>Expert on Laser And Intense Pulse Light (IPL) Treatments used to remove discoloration and/or tighten sagging skin.</p>
         </div>
         <div className="col-12 col-md-6 col-xl-4 item">
           <div className="icon icon-car"></div>
           <h3>Ms. Nina germa</h3>
           <p> General Manager </p>
         </div>
       </div>
     </div>
   </section>
   <section className="fill-banner banner-1-bg">
     <div className='container'>
       <div className='row'>
         <div className="col-12 col-md-10 col-xl-5">
           <h2> All Kinds <br className="d-none d-xl-inline-block" />of Skin-rejuvenation </h2>
           <p> Click below for Daily tips on Skin Care secrets and healthier-looking Skin</p>
           <a href='#' className='btn'>free consultation</a>
         </div>
       </div>
     </div>
   </section>
   
   <HomeService/>

   <ul className='list-members'>
     <li className='member'>
       <div className='member-image'>
       <img src={require("C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/Hairstylist.png")}/>
       </div>
       <div className='member-info'>
         <h3>Abel Muluneh</h3>
         <p>Hair specialist</p>
         <div className='social-link'>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-pinterest"></i>
         </div>
       </div>
     </li>
     <li className='member'>
       <div className='member-image'>
       <img src={require("C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/Screenshot 2024-04-05 130722.png")}/>
       </div>
       <div className='member-info'>
         <h3>liya kebede</h3>
         <p>Makeup artist</p>
         <div className='social-link'>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-pinterest"></i>
         </div>
       </div>
     </li>
     <li className='member'>
       <div className='member-image'>
         <img src={require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/Cosmetic-Surgeon.jpg')} />
       
       </div> 
       <div className='member-info'>
         <h3>Amen Selemon</h3>
         <p>Cosmetic Surgeon</p>
         <div className='social-link'>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-pinterest"></i>
         </div>
       </div>
     </li>
     <li className='member'>
       <div className='member-image'>
       <img src={require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/photo_2024-04-05_13-15-39.jpg')} />
       </div>
       <div className='member-info'>
         <h3>Melat Seleshi</h3>
         <p>Nail Artist</p>
         <div className='social-link'>
           <i className="fab fa-facebook-f"></i>
           <i className="fab fa-instagram"></i>
           <i className="fab fa-pinterest"></i>
         </div>
       </div>
     </li>
   </ul>
   <section className="fill-banner banner-2-bg">
     <div className='container'>
       <div className='row'>
         <div className="col-12 col-md-10 col-xl-5">
           <h2> Best Skin <br className="d-none d-xl-inline-block" />Care Steps For Acne </h2>
           <p> Click below for Daily tips on Skin Care secrets and healthier-looking Skin</p>
           <a href='#' className='btn'>free consultation</a>
         </div>
       </div>
     </div>
   </section>
  < BlogData/>
  </>   );
}
 
export default Home;
    
   