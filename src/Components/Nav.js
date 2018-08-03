import React from 'react';
// import SearchIcon from 'react-icons/lib/fa/search'


export default function(){
    return(
        <footer className="nav_footer" >
            <div className='footer_button' >
                {/* <SearchIcon /> */}
                <h4>Search</h4>
            </div>
            <div className='footer_button' >
            
                <h4>Shopping List</h4>
            </div>
            <div className='footer_button' >
            
                <h4>Meal plan</h4>
            </div>
            <div className='footer_button' >            
            <a href={process.env.REACT_APP_LOGOUT}>
                <h4>
                        Logout
                </h4>
            </a>
            </div>
        </footer>
    )
}