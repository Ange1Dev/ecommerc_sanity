import React from 'react'
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 store | headphones all rights reserved</p>
      <p className='icons'>
        <AiFillInstagram></AiFillInstagram>
        <AiOutlineTwitter></AiOutlineTwitter>
      </p>
    </div>
  )
}

export default Footer