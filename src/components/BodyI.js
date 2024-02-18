import React from 'react'
import loan from './../images/loan.webp'
import capital from './../images/capital.webp'
import brand from './../images/brand.webp'
import gain from './../images/trust.webp'
export const BodyI = () => {
  return (
    <div className='division2'>
        <div className='BOCR'>
        Benefits of Company Registration
        </div>
        <div className='BOCRR'>
        There are several benefits to registering a company, including:
        </div>
        <div className='Box'>
        <div className='ONE'>
        <div className='PM'>
        <img src={loan}alt="loan"/>
        </div>
        <span className='pmhead'>Helps in Loan</span>
       <span className='pmcontent'>Legally registered businesses can raise more money through business loans. Banks and financial have more confidence in legal entities.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={capital}alt="loan"/>
        </div>
        <span className='pmhead'>Raise Capital</span>
       <span className='pmcontent'>Investors invest in registered companies. When your business is registered, it becomes easier to attract investors and raise funds.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={brand}alt="loan"/>
        </div>
        <span className='pmhead'>Brand Awareness</span>
       <span className='pmcontent'>As a company, people know a lot more about your company and its services. This creates a brand name and value in people's minds.</span>
        </div>
        <div className='ONE'>
        <div className='PM'>
        <img src={gain}alt="loan"/>
        </div>
        <span className='pmhead'>Gain Trust</span>
       <span className='pmcontent'>Registered companies gain more trust from customers and are preferred by many third-party businesses for transactions and engagements.</span>
        </div>
        </div>
    </div>
  )
}
