import React from 'react'
import { Navbar } from './components/Navbar'
import {BodyA} from './components/BodyA'
import {BodyB} from './components/BodyB'
import {BodyC} from './components/BodyC'
import {BodyD} from './components/BodyD'
import {BodyE} from './components/BodyE'
import {BodyF} from './components/BodyF'
import {BodyG} from './components/BodyG'
import {BodyH} from './components/BodyH'
import {BodyI} from './components/BodyI'
import {BodyJ} from './components/BodyJ'
import {Bodyk} from './components/Bodyk'
import {Question} from './components/Question'
import {Bottom} from './components/Bottom'
import {Butum} from './components/Butum'
export const App = () => {
  return (
    <div className='mainn'>
       <Navbar/>
        <BodyA/>
        <BodyB/>
        <BodyC/>
        <BodyD/>
        <BodyE/>
        <BodyF/>
        <BodyG/>
        <BodyH/>
        <BodyI/>
        <BodyJ/>
        <Bodyk/>
        <Question/>
       <Bottom/>
       <Butum/>
    </div>
  );
}



