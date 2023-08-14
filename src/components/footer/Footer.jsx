import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {BsInstagram, BsFacebook, BsWhatsapp, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerRow">
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Countries</Link>
            </li>
            <li>
              <Link to="/">Cities</Link>
            </li>
            <li>
              <Link to="/">Airports</Link>
            </li>
            <li>
              <Link to="/">Hotels</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Apartments</Link>
            </li>
            <li>
              <Link to="/">Resorts</Link>
            </li>
            <li>
              <Link to="/">Villas</Link>
            </li>
            <li>
              <Link to="/">Hostels</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">All destinations</Link>
            </li>
            <li>
              <Link to="/">Discovers</Link>
            </li>
            <li>
              <Link to="/">Reviews</Link>
            </li>
            <li>
              <Link to="/">Seasonal deals</Link>
            </li>
          </ul>
        </div>
        <div className="footerCol">
          <ul>
            <li>
              <Link to="/">Car rental</Link>
            </li>
            <li>
              <Link to="/">Bus</Link>
            </li>
            <li>
              <Link to="/">Food</Link>
            </li>
            <li>
              <Link to="/">Terms & conditions</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerRow">
          <div className="footerCol">
        <h3>To stay updated with our new plans.. Follow Us!</h3>
        <div class="icons">
            <a href="https://www.instagram.com" className='ig'><BsInstagram /></a>
            <a href="https://www.facebook.com" className='fb'><BsFacebook /></a>
            <a href="https://www.whatsapp.com" className='wp'><BsWhatsapp /></a>
            <a href="https://www.twitter.com" className='tw'><BsTwitter /></a>
        </div>
              
          </div>
      </div>
    </div>
  )
}

export default Footer
