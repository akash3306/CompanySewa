import React from 'react'
import lady2 from './../images/lady2.webp'
export const BodyC = () => {
  return (
    <div className='contents'>
        <div className='lady2'>
        <img src={lady2}alt="lady2"/>
        </div>
        <div className='texts'>
            <p className='Am'>About us</p>
            <h1 className='crs'>#1 Company Registration Service <br></br>Provider in Nepal</h1>
            <p className='Tt'>Company Sewa is a leading company registration service provider in Nepal. We<br></br> have over 10 years of experience in the industry. Our office is in Maitighar Chowk,<br></br> Kathmandu, Nepal.</p>
            <p className='Ttt'>We understand that the process of company registration is a hassle and time-<br></br>consuming. That's why our mission is to provide efficient and hassle-free services.</p>
            <p className='Tit'>We take pride in our exceptional services that have helped more than 1,500 clients<br></br> register their businesses with ease.</p>
        </div>
    </div>
  )
}
