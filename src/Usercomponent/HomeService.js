import service from './serviceData';

const HomeService  = () => {
    return (
        <div className='services-container'>
        <div className='inner-container'>
<h1 className='section-title'>services</h1>
<div className='border'></div>
<div className='service-container'>

    
{service.map(service => (
    <div className='service-box' key={service.id}>
        <div className='service-icon'> <img src={service.src}/>
        </div>
        <div className='service-title'>
      <b>{service.name} </b>
    </div>
    <div className='description'>{service.description} 
    </div>
     
    </div>
  ))} 
        </div>
        
      </div>
      </div>
      );
}
 
export default HomeService ;