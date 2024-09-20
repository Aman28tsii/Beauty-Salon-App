import React from 'react';

const datas = [
    {  id: 1,
       src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_15_2024-02-04_02-56-47.jpg'),
      link :'Best skin care products',
      time:'Feb 30, 2024 at 5:12pm',
      description:'Join us for a day of pampering and self-care! Get ready to relax, rejuvenate, and revitalize with our professional make-up, skin care, and hair styling services. Do not miss out on this opportunity to treat yourself and experience the ultimate spa day'
    },
      
   
      { id: 2, 
        src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_17_2024-02-04_02-56-47.jpg'), 
        link :'Skin care secrets for healthier-looking skin',
        time:'March 17, 2024 at 9:45am',
        description:'Calling all beauty enthusiasts! Indulge in a day of glamour and luxury with our exclusive make-up, skin care, and hair treatments. Discover the latest beauty trends and life hacks to enhance your natural beauty. Join us for a day of beauty and self-care that you wont soon forget!'
      },
    {id: 3,
    src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_11_2024-02-04_02-56-47.jpg'),
    link :'Nail polish design ideas',
    time:'March 28, 2024 at 5:12pm',
    description:'Get ready to glow from head to toe at our make-up, skin care, and hair dayle event! Treat yourself to a day of relaxation and beauty as our skilled professionals pamper you with luxurious treatments and expert advice. Do not miss out on this unique opportunity to elevate your beauty routine and learn new life hacks for a flawless look every day.'
  }
  ];

  const BlogData = () => (
    <section className='blog'>
    <div className='container'>
      <div className='row'>
        <h2 className='col-12'>Latest Blog Posts</h2>
    {datas.map(data => (
    <article className="col-8 col-md-6 col-xl-4" key={data.id}>
       <div className='post'>
        <a className={data.style}>
   <img src={data.src}/>
    <a className={data.link}></a>
     <h3>{data.time}</h3>
     <p>{data.description}</p>
         </a>
        </div>
    </article>
  ))} 
      </div>
     </div>
   </section>

 
  );
  
  export default BlogData;

  