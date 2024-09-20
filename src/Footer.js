
const Footer = () => {
    return ( <>
     <footer className='main-footer' id='main-footerx'>
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
              <div className='footer-logo'>
              <a href='#Footer'>
                  <img  className='logo-light' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JAbr4hLdQULBCshz44wbhohCDibe60l_yA&usqp=CAU" />
                </a>
              </div>
              <ul className='sns'>
                <li className='icon-fb'>
                  <a href='#'>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className='icon-twitter'>
                  <a href='#'>
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className='icon-instagram'>
                  <a href='#'>
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className='icon-pinterest'>
                  <a href='#'>
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-4'>
              <h3>CONTACT US</h3>
              <div className='contact'>
                <div className='contact-icon'>
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className='contact-main'>
                  <a href='#'>+251 94546876</a>
                  <br />
                  <a href='#'>+251 98965324</a>
                </div>
              </div>
              <div className='contact'>
                <div className='contact-icon'>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className='contact-main'>
                  <a href='#'>22,Adiss Abeba, Around down town</a>
                </div>
              </div>
              <div className='contact'>
                <div className='contact-icon'>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className='contact-main'>
                  <a href='#'>glowcity1@mail.com</a>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <h3>Any Query</h3>
              <p> Enter your email address to receive up-to-date blog, new patient services and other useful stuff, delivered right to your inbox. </p>
              <div className='form-group'>
                <input className='form-control' type='text' placeholder="Your e-mail..." />
                <button className='submit-btn' type='submit'>Subscribe</button>
              </div>
            </div>
          </div>
          <div className='row'>
            
           </div>
          </div>
       
      </footer>
      <div id='goTop' className='goTop'></div></> );
}
 
export default Footer;