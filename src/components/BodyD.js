import React from 'react'
import lynx from './../images/lynx.webp'
import fortunes from './../images/fortunes.webp'
import ac from './../images/ac.webp'
import RS from './../images/Rs.webp'
import wr from './../images/wr.webp'
import amn from './../images/amn-nepal.webp'
import ev from './../images/ev.webp'
import ew from './../images/eastwest.webp'
import alpine from './../images/alpine.webp'

export const BodyD = () => {
  return (
    <div className='images'>
      <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30" loop="true" slides-per-view="6">
        <swiper-slide><img src={lynx} alt='lynx' /></swiper-slide>
        <swiper-slide><img src={fortunes}alt="fortunes"/> </swiper-slide>
        <swiper-slide><img src={ac}alt="aci"/> </swiper-slide>
        <swiper-slide><img src={RS}alt="rs"/> </swiper-slide>
        <swiper-slide><img src={wr}alt="whit"/> </swiper-slide>
        <swiper-slide><img src={amn}alt="amn"/> </swiper-slide>
        <swiper-slide><img src={ev}alt="adf"/> </swiper-slide>
        <swiper-slide><img src={ew}alt="adf"/> </swiper-slide>
        <swiper-slide><img src={alpine}alt="adf"/></swiper-slide>
        <swiper-slide><img src={lynx} alt='lynx' /></swiper-slide>
        <swiper-slide><img src={fortunes}alt="fortunes"/></swiper-slide>
        <swiper-slide><img src={ac}alt="aci"/> </swiper-slide>
        <swiper-slide><img src={RS}alt="rs"/> </swiper-slide>
      </swiper-container>
    </div>
  )
}
