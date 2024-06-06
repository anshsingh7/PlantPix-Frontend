import React from "react";
import { FaInstagram, FaPinterest, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    // <Footer className='text-center px-20 py-16'>
    //     
    // </Footer>

    <div className="bg-white shadow text-center px-20 py-16 ">
    <div className=" flex flex-col items-center">
    <div className="text-xl pre-wrap">
         <a href="/about">About </a> 
         <a href="/contactPage">Contact </a>
         <a href="/connect">Follow</a>
         </div>
     
     <div className="flex space-x-4 mt-4">
       <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaInstagram size={30} />
       </a>
       <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaPinterest size={30} />
       </a>
       <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaYoutube size={30} />
       </a>
       <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-mainDark">
         <FaTwitter size={30} />
       </a>
       <a href="mailto:anshsingh1x@gmail.com" className="text-gray-500 hover:text-mainDark">
         <FaEnvelope size={30} />
       </a>
     </div>
     {/* <p className="text-lg text-gray-700 mb-2">Copyright &#169; 2024 Ansh Singh. All Rights Reserved.</p> */}
   </div>
   </div>
  );
};

export default Footer;