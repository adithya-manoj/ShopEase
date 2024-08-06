import React from 'react';
import './Styles/TopDeals.css'
import shoppersStop from './Images/shoppersStop.jpg'
import trends from './Images/trends.jpg'
import sony from './Images/sony.jpg'
import allensolly from './Images/allensolly.jpg'
import lp from './Images/lp.jpg'
import ucb from './Images/ucb.jpg'
import homecenter from './Images/homecenter.jpg'
import jack from './Images/jack.jpeg'
import Croma from './Images/Croma.png'       


const TopDeals = () => {
  return (
    <>
    <div className='topdeal'>
        Top Deals
    </div>
    <div className='gridContainer'>
    <div className='dealimages'><img src={shoppersStop} alt="shoppersStop" /></div>
    <div className='dealimages'><img src={allensolly} alt="allensolly" /></div>
    <div className='dealimages'><img src={sony} alt="sony" /></div>
    <div className='dealimages'><img src={lp} alt="lp" /></div>
    <div className='dealimages'><img src={ucb} alt="ucb" /></div>
    <div className='dealimages'><img src={homecenter} alt="homecenter" /></div>
    <div className='dealimages'><img src={Croma} alt="Croma" /></div>
    <div className='dealimages'><img src={trends} alt="shoppersStop" /></div>
    <div className='dealimages'><img src={jack} alt="jack" /></div>
    </div>
    </>
  )
}

export default TopDeals