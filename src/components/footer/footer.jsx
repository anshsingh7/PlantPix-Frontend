import React from "react";
import { FaInstagram, FaPinterest, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    // <Footer className='text-center px-20 py-16'>
    //     
    // </Footer>

    <div className="bg-white shadow text-center px-20 py-16 ">
    <div className=" flex flex-col items-center">
    <div className="text-xl pre-wrap">
         <NavLink to={"/about"}>About </NavLink> 
         <NavLink to={"/contactPage"}>Contact </NavLink>
         <NavLink to={"/connect"}>Follow</NavLink>
         </div>
     
     <div className="flex space-x-4 mt-4">
       <NavLink to={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaInstagram size={30} />
       </NavLink>
       <NavLink to={"https://www.pinterest.com"} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaPinterest size={30} />
       </NavLink>
       <NavLink to={"https://www.youtube.com"} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaYoutube size={30} />
       </NavLink>
       <NavLink to={"https://www.twitter.com"} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaTwitter size={30} />
       </NavLink>
       <NavLink to={"mailto:anshsingh1x@gmail.com"} className="text-gray-500 hover:text-mainDark">
         <FaEnvelope size={30} />
       </NavLink>
     </div>
     {/* <p className="text-lg text-gray-700 mb-2">Copyright &#169; 2024 Ansh Singh. All Rights Reserved.</p> */}
   </div>
   </div>
  );
};

export default Footer;