import React from 'react'
import peace from './../images/peace.webp'
import time from './../images/time.webp'
import legal from './../images/legal.webp'
import add from './../images/add.webp'
export const BodyE = () => {
  return (
    <div className='CONTENT'>
        <div className='Title'>
            Why Choose Our Company Registration Service
        </div>
        <div className='paragraph'>
        Company registration is not an easy process in Nepal. There is too much hassle and lots of paperwork.<br></br>If you are not familiar with the process then it can become a frustrating, bad experience, and takes many days.<br></br>But don't worry! Now we do all these required tasks for you. Preparing documents to obtain the company registration certificate and PAN.<br></br>Register your company with Company Sewa and get your new company registered within 2 to 3 business days after name approval.
        </div>
        <div className='Box'>
        <div className='ONE'>
        <div className='PM'>
        <img src={peace}alt="peace"/>
        </div>
        <span className='pmhead'>Peace of mind</span>
       <span className='pmcontent'>Avoid the hassle of paperwork, processing, and dealing with government agencies.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={time}alt="time"/>
        </div>
        <span className='pmhead'>Time Saving</span>
       <span className='pmcontent'>Business owners can save their important time and focus on other aspects of their business.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={legal}alt="legal"/>
        </div>
        <span className='pmhead'>Legal compliance</span>
       <span className='pmcontent'>Ensure legal compliance and avoid fines and reduce the risk of legal issues in the future.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={add}alt="add"/>
        </div>
        <span className='pmhead'>Additional services</span>
       <span className='pmcontent'>As company updates, taxation and legal advice benefit new business owners.</span>
        </div>
        </div>
    </div>
  )
}
  

