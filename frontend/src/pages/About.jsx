import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <>
      <div>
        <div className="text-2xl text-center pt-8 border-t border-gray-300">
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consectetur fugiat reiciendis eum doloribus voluptatibus? Ipsam repellat suscipit fugit est maxime, perferendis nobis necessitatibus dolorum vitae laboriosam distinctio, magni deleniti itaque! Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptates!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellat architecto sunt neque corrupti aspernatur eos sapiente, adipisci inventore nisi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, mollitia!</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat placeat ea sequi, mollitia accusamus recusandae beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maxime.</p>
          </div>
        </div>

        <div className="text-xl py-4">
            <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis atque nobis quasi praesentium ab veritatis tempore magnam exercitationem aperiam qui.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quibusdam, consequuntur esse veniam cupiditate alias! Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sapiente libero labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, mollitia!</p>
          </div>
        </div>

        <NewsletterBox />

      </div>
    </>
  )
}

export default About
