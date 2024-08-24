import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  return (

    <div className='footer' id='footer'>
      
      <div className="footer-content">

        <div className='footer-content-left'>


        <img src={assets.logo} alt="" />
 
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus. Sapiente tenetur ut architecto perferendis?</p>

        <div className="footer-social-icons flex">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />

        </div>


        </div>

    

        <div className='footer-content-center'>

        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>

        </div>


        <div className='footer-content-right'>


        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+88017-------4</li>
            <li>example@gmai.com</li>
        </ul>

        </div>

      </div>

        <hr />

          <p className='footer-copyright'>© Copyright @murad00. All Rights Reserved 2024</p>

    </div>
  )
}

export default Footer
