import React from "react";
import {useState} from 'react';
import { justice_b,gavel,menu,close } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full h-16 flex overflow-hidden bg-[#30355D] py-6 justify-between items-center navbar">
      {/* <img src={justice_b} alt="" className="" /> */}
      <ul className="list-none sm:flex  hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))} 
        
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img src={toggle ? close:menu } className="w-28px h-28px object-contain  mr-1 " onClick={()=>settoggle((prev)=>!prev)} alt="" />
        
        <div className={` ${toggle ? 'flex absolute z-1':'hidden'} p-6 bg-[white]   right-0 mx-1  mt-16 top-16 h-[100vh] min-w-[40%] rounded-xl sidebar `}>
        <ul className="list-none flex  justify-end items-center flex-col flex-1">
          
          <li>
            Hello
          </li>
       
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

 