import React from 'react';
import './Styles/Menu.css';
import scan from './Images/scan.png';
import cart from './Images/cart.png';
import shop from './Images/shop.jpg';
import purchases from './Images/purchases.jpeg';
import events from './Images/events.jpg';
import offers from './Images/offers.jpg';
import TopDeals from './TopDeals';
import { Link, Outlet } from 'react-router-dom';


const Menu = () => {
  return (
    <>
    <div className='divcontainer container-fluid d-flex justify-content-around'>
        
        <div className='imagecontainer mx-2 '> <Link to='/Scanitems'> <img src={scan} alt="Scan"/> </Link><div>Scan Items</div> </div>
        
        
        <div className='imagecontainer mx-2'><Link to='/Cart'>  <img src={cart} alt="View Cart" /> </Link><div>View Cart</div> </div>
        <div className='imagecontainer mx-2'> <img src={shop} alt="Shop List"/> <div>Shop List</div> </div>
        <div className='imagecontainer mx-2'> <img src={purchases} alt="Purchases"/> <div>Previous</div> </div>
        <div className='imagecontainer mx-2'> <img src={events} alt="Events"/> <div>Events</div> </div>
        <div className='imagecontainer mx-2'> <img src={offers} alt="Offers"/> <div>Offers</div> </div>
    </div>
    <div>
    <TopDeals/>
    </div>
    </>
  )
}

export default Menu