import React from "react";
import styles from "../style";
import { client } from "../assets";

const testimonial = () => {
  return (
    <div className={`${styles.boxWidth} mt-7 bg-[#f1f1f1e2] xs:h-[100%] h-[100vh]`}>
      <div className="flex xs:flex-row flex-col justify-around items-start xs:pt-[7%] pt-[78%] xs:ml-0 ml-5 h-[50vh] ">
        <div>
          <h1 className="text-[#30355D] xs:text-[320%] xs:ml-0 ml-5 text-[200%] font-medium test-h">
            Testimonials
          </h1>
          <hr className=" border-2 border-[#25b4fc] xs:ml-2 ml-6 w-20" />
        </div> 
        <div className="flex flex-col  xs:mt-0 mt-8">
          <div className="flex flex-1">
            <img src={client} alt=""  className="w-[50px] h-[50px] mr-3"/>
            <div className="">
              <h2 className="test-c  text-[120%] font-medium text-[#646464]">
                Sheldon Moreno
              </h2>

              <p className="text-[#25b4fc]  test-p font-semibold tracking-wide">Business Guy</p>
           
          </div>
       
            </div>
            <div className="xs:w-[250px] pt-2"> <p className="text-[#646464]">Choosing our lawyer was the best decision we made. Their calm and confident demeanor in the courtroom reassured us every step of the way. Their expertise is unmatched.</p></div>
        </div>
        <div className="flex  flex-col xs:mt-0 mt-8">
          <div className="flex flex-1">
            <img src={client} alt=""  className="w-[50px] h-[50px] mr-3 "/>
            <div className="">
              <h2 className="test-c  text-[120%] font-medium text-[#646464]">
                Sheldon Moreno
              </h2>

              <p className="text-[#25b4fc] test-p font-semibold tracking-wide ">Business Guy</p>
            </div>
          </div>
          <div className="xs:w-[250px] pt-2"> <p className="text-[#646464]">From the moment we met our lawyer, we knew we were in capable hands. Their confidence in our legal matter was unwavering, and it paid off. They exceeded our expectations and delivered a successful resolution.</p></div>
        </div>
        <div className="flex flex-col  xs:mt-0 mt-8">
          <div className="flex flex-1">
            <img src={client} alt=""  className="w-[50px] h-[50px] mr-3"/>
            {/* <hr  className=" border-2 border-[#25b4fc] w-10"/> */}
            <div className="">
              <h2 className="test-c  text-[120%] font-medium text-[#646464]">
                Sheldon Moreno
              </h2>

              <p className="text-[#25b4fc] test-p font-semibold tracking-wide ">Business Guy</p>
            </div>
          </div>
          <div className="xs:w-[250px] pt-2"> <p className="text-[#646464]">Our lawyer's exceptional legal acumen and unwavering support were instrumental in our case. Their confidence in their abilities inspired confidence in us. Thanks to their tireless efforts.</p></div>
        </div>
      </div>
    </div>
  );
};

export default testimonial;
