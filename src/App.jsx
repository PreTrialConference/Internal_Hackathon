import React from 'react'
import styles  from './style';

import {Hero_Lawyer,Intro,Testimonial,Client_search} from './components'

const App = () => {
  
 
 
  return (
  
  <>
    
    <div className={`${styles.boxWidth}`}>
       {/* <Hero_Lawyer/> */}
      </div>
      <div className={`${styles.boxWidth}`}>
      {/* <Intro /> */}
      {/* <Testimonial /> */}
      <Client_search />

     </div></>

      
  )
}

export default App
