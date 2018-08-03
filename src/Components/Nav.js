import React from 'react';
import {FaSearch, FaShoppingCart, FaPowerOff, FaCalendarAlt } from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function(){
    return(
        <footer className="nav_footer" >
            <Link to='/'>
                <div className='footer_button' >
                    <FaSearch />
                    <h4>Search</h4>
                </div>
            </Link>
            <Link to="/">
            <div className='footer_button' >
                <FaShoppingCart />
                <h4>Shopping List</h4>
            </div>
            </Link>
            <Link to="/">            
            <div className='footer_button' >
                <FaCalendarAlt/>
                <h4>Meal plan</h4>
            </div>
            </Link>          
            <a href={process.env.REACT_APP_LOGOUT}>
            <div className='footer_button' >            
                <FaPowerOff/>
                <h4>
                        Logout
                </h4>
            </div>
            </a>
        </footer>
    )
}