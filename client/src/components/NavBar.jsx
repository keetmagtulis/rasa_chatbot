import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function NavBar() {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    }


    return(
    <>
    
    <div className='fixed flex justify-end items-center space-x-2 bg-neutral-900 cursor-pointer w-screen h-16 text-md text-neutral-300 pr-20 z-50'>

        <Link to="/shop" ><div className='hover:bg-neutral-700 h-14 px-3 content-center'>Shop</div></Link>   
        <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="hover:bg-neutral-700 px-3 text-center h-14 inline-flex items-center"
        type="button"
      >
        About
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                id="dropdown"
                className="fixed top-16 right-1/4 bg-white divide-y divide-gray-100  shadow w-44 dark:bg-neutral-700 "
                >
                <ul className="py-2 text-sm text-neutral-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                        About Us
                    </a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                        Services
                    </a>
                    </li>
                    <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-600 dark:hover:text-white">
                        Contact
                    </a>
                    </li>
                    
                </ul>
                </div>
            )}

        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Services</div>
        <Link to='/contact'><div className='hover:bg-neutral-700 h-14 px-3 content-center'>Contact Us</div></Link>
        <div className='flex justify-center items-center hover:bg-neutral-700 rounded-full border h-10 w-24'>Log in</div>

    </div>

    <div className='fixed flex justify-start items-center align-middle h-16 pl-10 text-4xl font-sans z-50'>
     <Link to='/'><h1 className='text-white font-bold cursor-pointer'>shoepify.</h1></Link>   
    </div>
        
        
    
    </>

    
    );


}


export default NavBar;