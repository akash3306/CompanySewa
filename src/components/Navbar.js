import React from 'react'
import companylogo from './../images/companylogo.svg'
import twitter from './../images/twitter.svg.png'
import facebook from './../images/faccebook.png'
import instagram from './../images/instagram.png'

export const Navbar = () => {
  const hamhover = () => {
    if(document.getElementsByClassName('hamhover')[0].style.left == "0px"){
      document.getElementsByClassName('hamhover')[0].style.left = "-r170%";
    }
    else{
      document.getElementsByClassName('hamhover')[0].style.left = "0px";
    }
  };
  return (
    <div className='navbar'>
      <div className='companylogo'>
           <img src={companylogo}alt="logoo"/>
      </div>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Sercives</li>
            <li>Blog</li>
            <li>Contact</li>
         </ul>
         <div className='content'>
         <img src={twitter}alt="tweet"/>
         <img src={facebook}alt ="fb"/>
         <img className='in'src={instagram}alt="inst"/>
         </div>
         <div className='ham' onClick={hamhover}><ion-icon name="menu-outline"></ion-icon></div>
         <div className='hamhover'>
         <ion-icon name="close-outline" onClick={hamhover}></ion-icon>
          <div className='hammenu'>Home</div>
          <div className='hammenu'>About Us</div>
          <div className='hammenu'>Sercives</div>
          <div className='hammenu'>Blog</div>
          <div className='hammenu'>Contact</div>
         </div>
   </div>
  )
}

