import React from 'react';
const images = [
    { id: 1, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_1_2024-02-04_02-56-47.jpg'),style:'img-hover'},
    { id: 2, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_2_2024-02-04_02-56-47.jpg') ,style:'img-hover'},
    {id: 3, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_3_2024-02-04_02-52-48.jpg'),style:'img-hover'},
    {id: 4, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_10_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 5, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_5_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 6, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_6_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 7, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_14_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 8, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_8_2024-02-04_02-56-47.jpg'),style:'img-hover'},
    {id: 9, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_12_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 10, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_10_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 11, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_11_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 12, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_12_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 13, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_13_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 14, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_16_2024-02-04_02-56-47.jpg'),style:'img-hover'}, 
    {id: 15, src: require('C:/Users/omen/Desktop/beauty Salon/beautySalonApp/src/images/model/photo_15_2024-02-04_02-56-47.jpg'),style:'img-hover'}
  ];

  const imageList = () => (
  <>
    {images.map(image => (
    <article className="col-8 col-md-6 col-xl-4" key={image.id}>
       <div className='post'>
        <a className={image.style}>
   <img src={image.src}/>
         </a>
        </div>
    </article>
  ))} 
  </>

 
  );
  
  export default imageList;