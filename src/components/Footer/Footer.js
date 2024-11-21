import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './footer.css'


const Footer = ()=> {
  return  (
    <div className='footer_container'>

      <div className="footer_container1">
          {/* socialmedia links */}

          <ul>
            <li><FacebookIcon /></li>
            <li><YouTubeIcon /></li>
            <li><InstagramIcon /></li>
          </ul>
      </div>

      <div className="footer_container2" >
            {/* normal content */}
            <ul>
              <li>Audio Descriptions</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
              <li>Service code</li>
              <li>©️1997-2024 Netflix.inc</li>
            </ul>


            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie prefrences</li>
            </ul>


            <ul>
              <li>Gift cards</li>
              <li>Terms of use </li>
              <li>Corporate information</li>
            </ul>


            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>


      </div>


    </div>
  )
}

export default Footer