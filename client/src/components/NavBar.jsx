import React from 'react';


function NavBar() {

    return(
    
    <div className='fixed flex justify-end items-center space-x-2 bg-neutral-900 cursor-pointer w-screen h-16 text-md text-neutral-300 pr-20'>

        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Shop</div>
        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>About</div>
        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Services</div>
        <div className='hover:bg-neutral-700 h-14 px-3 content-center'>Contact Us</div>
        <div className='flex justify-center items-center hover:bg-neutral-700 rounded-full border h-10 w-24'>Log in</div>

    </div>
    
    );


}


export default NavBar;