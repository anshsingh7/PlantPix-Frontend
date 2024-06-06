import React from "react";
import { FaInstagram, FaPinterest, FaYoutube, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-lime-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-4xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
        <div className="bg-white shadow sm:rounded-lg sm:flex sm:justify-between p-6">
           <div className="lg:w-1/2 flex flex-col items-center">
            <img
              src="./plant_1.jpg" // replace with your image URL
              alt="Contact"
              className="rounded-full w-64 h-64 mb-6"
            />
            <p className="text-lg text-gray-700 mb-2">anshsingh1x@gmail.com</p>
            <p className="text-lg text-gray-700 mb-2">New Delhi, India</p>
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
          </div>
          <div className="mt-8 sm:mt-0 sm:w-1/2">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex space-x-4">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    placeholder="First Name"
                    required
                    className="block w-1/2 px-3 py-2 border bg-lime-100 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  />
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    placeholder="Last Name"
                    className="block w-1/2 px-3 py-2 border bg-lime-100 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full px-3 py-2 border bg-lime-100 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="block w-full px-3 py-2 border bg-lime-100 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;