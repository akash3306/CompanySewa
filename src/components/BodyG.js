import React from 'react'
import cm from './../images/cmp1.webp'
import cmm from './../images/cmp2.webp'
export const BodyG = () => {
  return (
    <div className='division1'>
        <div className='wrhead'>
       Sample of Company Registration Certificate & PAN
        </div>
        <div className='wrtail'>
        A company certificate is a document issued by the Company Registrar's Office Nepal. It serves as proof of a company's registration and contains <br></br>important information such as the company name, registration number, and date of registration
        </div>
        <div className='piccc'>
        <div className='pic'>
        <img src={cm}alt="reg"/>
       </div>
       <div className='picc'>
        <img src={cmm}alt="reg"/>
       </div>
       </div>
   </div> 
  )
}
