import React from 'react'
import lady from './../images/lady.webp'
export const BodyA = () => {
  return (
    <div className='main'>
      <div className='partone'>
        <div className='nep'>
            कम्पनी दर्ता सेवा
        </div>
        <div className='title'>
        Get Your New Company Registered in 2 to 3 Days
        </div>
        <div className='bottom'>
        Register your business in Nepal - Call our support at 9851253180. Know what the required documents, fees, and processes are and how to get a start on the fast track.
        </div>
        <div className='red'>
        <ion-icon name="call-outline"></ion-icon>Talk to an Expert
        </div>
      </div>
      <div className='parttwo'>
        <img src={lady}alt='lady'/>
      </div>
    </div>
  )
}
