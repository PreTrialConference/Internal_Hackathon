import React, {useRef,useLayoutEffect } from 'react'
import styles from '../style'
import {gsap} from 'gsap'
// import $ from 'jquery'
import 'textillate'
import Navbar from './navbar'

import { gavel } from '../assets'

const hero_Lawyer = () => {
 
  const hi= useRef();
 
  useLayoutEffect(()=>{

    gsap.to(hi.current,{
  
    opacity:1,
    y:'-100px',
   
    duration:3
      
    })

  
}
);
  return (
    <div className={  `bg-[#d2e6fc] h-[100vh]  ${styles.flexCenter} flex-col` }>
      <div className="flex-2 w-full">
    <Navbar/>
    </div>

      <h1 className="text-[#000] font-weight-[500] relative sm:text-[20vh] text-[10vh] land tracking-wide opacity-0 flex items-center text-center z-0 flex-1"  ref={hi}  >THE LAW OF JUSTICE</h1>

    </div>
  )
}

export default hero_Lawyer
