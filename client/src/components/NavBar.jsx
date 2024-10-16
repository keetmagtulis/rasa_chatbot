import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {

    return(
    <>
    
    <div className='fixed flex justify-end items-center space-x-2 bg-neutral-900 cursor-pointer w-screen h-16 text-md text-neutral-300 pr-20 z-50'>

        <Link to="/shop" ><div className='hover:bg-neutral-700 h-14 px-3 content-center'>Shop</div></Link>   

        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" hover:bg-neutral-700 px-3 text-center h-14 inline-flex items-center" type="button">About

        <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <       path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>

        </button>

        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Services</div>
        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Contact Us</div>
        <div className='flex justify-center items-center hover:bg-neutral-700 rounded-full border h-10 w-24'>Log in</div>

    </div>

    <div className='fixed flex justify-start items-center align-middle h-16 pl-10 text-4xl font-sans z-50'>
     <Link to='/'><h1 className='text-white font-bold cursor-pointer'>shoepify.</h1></Link>   
    </div>
        
        
    
    </>

    
    );


}


export default NavBar;