import React, {useRef,useLayoutEffect } from 'react'
import { rb, lawyer } from "../assets";
import gsap from 'gsap';
const intro = () => {
  const fint= useRef(null);
 
//   useLayoutEffect(()=>{
//     const first=fint.current
//     gsap.to(first,{
  
    
//     y:'-100px',
   
//     duration:3
      
//     })

  
// },[]
// );

  return (
    <div className="xs:h-[100%] h-[100%] bg-[#fff] xs:flex-row flex   flex-wrap  flex-col justify-center items-center   ">
      <div className="flex-2">
        <div className="flex  justify-center items-center">
          <img
            src={rb}
            className=" blur-lg relative  h-auto w-[100%]  z-0 "
            alt=""
          />
        </div>
        <img
          src={lawyer}
          className="absolute z-1 sm:h-[60%] h-[40%] sm:top-[700px] top-[700px] sm:ml-0 ml-14"
          alt=""
        />
      </div>

      <div className="flex xs:flex-row   flex-col  flex-1   justify-between xs:mr-6">
        <div className="bg-[#30355D] flex-1 text-center ml-4 mt-7 bottom-[100px]  p-5 border-b-4 border-b-cyan-500" >
          <h3 className="text-cyan-500 tracking-wide  intro-h xs:text-[150%] text-[110%]">Introduction</h3>
          <p className="text-white xs:text-[100%]  text-[80%] ">
            I am John Smith, an attorney deeply committed to serving the legal
            needs of my clients. With years of experience in the field of law, I
            approach each case with a passion for justice and a dedication to
            protecting my clients' rights and interests.
          </p>
        </div>
        <div className="bg-[#30355D] flex-1 text-center  ml-4 mt-7 p-5  border-b-4 border-b-cyan-500" >
          <h1 className="text-cyan-500 tracking-wide   intro-h xs:text-[150%] text-[110%]">Field</h1>
          <p className="text-white xs:text-[100%] text-[80%]">My practice encompasses a wide range of legal areas, from personal injury to business litigation, and I take pride in offering tailored legal solutions that address the unique challenges my clients face. </p>
        </div>
        <div className="bg-[#30355D]  flex-1 text-center ml-4 mt-7   p-5 border-b-4 border-b-cyan-500" >
          <h3 className="text-cyan-500 tracking-wide   intro-h xs:text-[150%]  text-[110%]">To Offer</h3>
          <p className="text-white xs:text-[100%] text-[80%]">Your success is my priority, and I am ready to stand by your side and fight for the best possible outcome in your case.</p>
        </div>
      </div>
    </div>
  );
};

export default intro;
