import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
            <div className="">
                <img src={assets.logo} alt="logo" className='mb-5 w-20 invert' />
                <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam explicabo, voluptates assumenda neque veritatis eligendi commodi earum odio error. Eligendi nam, quam eius voluptates quisquam laboriosam.</p>
            </div>
            <div className="">
                <p className="text-xl font-medium my-5">COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="">
                <p className="text-xl font-medium my-5">GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 9876543210</li>
                    <li>contact@ikstore.com</li>
                </ul>
            </div>

            
        </div>
            <div className="">
                <hr className='text-gray-400' />
                <p className="py-5 text-sm text-center">Copyright 2025@ ikstore.com - All Rights Reserved</p>
            </div>
    </>
  )
}

export default Footer
