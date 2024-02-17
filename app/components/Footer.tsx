import React from 'react'
import Container from './common/Container'
import { devices, footerLinks, socialLinks } from '../data/item'
import Icon from './common/Icon'
import { IoIosCall } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='w-full border-t-[1px] border-gray-400'>
      <Container>
        <div className='md:flex mt-8 mb-8 gap-10'>
          <div className=' md:flex flex-1 justify-between'>
            {footerLinks.map((item, index) => (
              <ul key={index} className='flex flex-col gap-2'>
                <li className='font-bold uppercase '>{item.title}</li>
                {Object.values(item.list).map((lists, i) => (
                  <li key={i} className='text-gray-500 cursor-pointer'>{lists}</li>
                ))}
              </ul>
            ))}
          </div>

          <div className='flex flex-col justify-between'>
            {socialLinks.map((section, index) => (
              <div className='flex flex-col gap-4' key={index}>
                <li className='list-none font-bold uppercase '>{section.title}</li>
                <div className='flex gap-4'>
                  {Object.values(section.icons).map((icon, i) => (

                    <Icon icon={icon} key={i} />

                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>

      <div className='w-full bg-gray-200 '>
        <Container>
          <div className='grid md:grid-cols-2 py-4 '>
            <div className='flex flex-col gap-2'>
            {devices.map((item, index) => (
              <ul className=' flex  gap-2' key={index}>

                <li className='font-bold text-sm '>{item.title}: </li>
                {item.devices.map((device, index) => (
                  <ul key={index} className='flex gap-1 '>
                    <li className='text-gray-500 text-xs cursor-pointer'>{device}</li>
                    <span className='text-gray-500'>|</span>
                  </ul>
                ))}
                <span className='text-sm text-blue-500 cursor-pointer'>View all</span>
              </ul>
            ))}
            </div>
            <div className='flex flex-col justify-center items-center md:items-start m-auto'>
              <div className='bg-blue-500 p-2 rounded-full text-white shrink-0 mt-4 md:mt-0'>
              <IoIosCall />
              </div>
              <p className='text-xs'>Helpline</p>
              <h6 className='font-bold md:text-lg'>1800 456 84788</h6>
            </div>
          </div>
                 
          <div className='flex justify-between items-center text-gray-500  border-t-2 border-gray-400 text-xs md:text-md'>
          <span className='mt-4'>Demo  © 2023. All Rights Reserved</span>
          <Link href="https://github.com/Sujith-Rajan" className='flex items-center gap-2'>
          <FaSquareGithub size={18}/>
          <span>Created by Sujith Rajan</span>
          </Link>
          
        </div>
        </Container>
        <hr />
       
      </div>


    </div>
  )
}

export default Footer
