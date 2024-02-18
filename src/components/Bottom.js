import React from 'react'
import companylogoo from './../images/logowhite.svg'
import facebook from './../images/faccebook.png'
import twitter from './../images/twitter.svg.png'
import pin from './../images/pin.png'
import you from './../images/you.png'
export const Bottom = () => {
  return (
    <div className='ending'>
         
        <div className='divi'>
            <div className='logo'>
               <img src={companylogoo}alt="logoo"/>
            </div>
            <div className='WAS'>
              We are specialized in setting up businesses<br></br> and providing operational services.
              </div>  
              <div className='logos'>
          <div className='fbb'>
          <img src={facebook}alt ="fb"/>
          </div>
          <div className='tweett'>
          <img src={twitter}alt="tweet"/>
          </div>
          <div className='tweett'>
          <img src={pin}alt="tweet"/>
          </div>
          <div className='tweett'>
          <img src={you}alt="tweet"/>
          </div>
         </div>
       </div>
       <div className='divie'>
        <div className='GL'>General Links</div>
       <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
       </ul>
     </div>
         <div className='diviee'>
        <div className='PPP'>Privacy Policy</div>
          <ul>
          <li>TOS</li>
          <li>Privacy Policy</li>
          </ul>
         </div>
         <div className='divieee'>
        <div className='Add'>Address</div>
     <ion-icon name="location-outline"></ion-icon>  Maitighar Chowk (Nepal Patrakar Sangh),<br></br> Kathmandu, Nepal
     <div className='contactt'>
        <ion-icon name="call-outline"></ion-icon> +977 9812-000-000
        </div>
        <div className='mail'>
        <ion-icon name="mail-outline"></ion-icon>
         companysewa7@gmail.com
        </div>
         </div>
    </div>
  )
}
