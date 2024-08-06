import React from 'react';
import './Styles/Scan.css'
import { IoArrowBackOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";


const Scan = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='scan-container w-50'>

        <div className='buttoncontainer d-flex justify-content-between'>
          <div className='backbutton'><IoArrowBackOutline /></div>
          <div className='cartbutton'><FaCartShopping /></div>
        </div>

        <div className='d-flex justify-content-center '>
          <div className='camera bg-dark text-white text-center'><FaCamera /></div>
        </div>

       <div className='d-flex justify-content-center'>
          <div className='uploadcontainer d-flex justify-content-center '>
            <div className='uploadicon'><CiImageOn /></div>
            <div className='uploadtext'>Upload from gallery </div>
          </div>
          </div>


        <div className='d-flex justify-content-center '>
          <div className='camera text-center'>Scan QR Code</div>
        </div>

      </div>
    </div>
  )
}

export default Scan