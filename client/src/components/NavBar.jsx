import React from 'react';


function NavBar() {

    return(
    
    <div className='fixed flex justify-end items-center space-x-2 bg-neutral-900 cursor-pointer w-screen h-16 text-md text-neutral-300 pr-20'>

        <div className='hover:bg-neutral-700 h-14 px-2 content-center'>HOME</div>
        <div className='hover:bg-neutral-700 h-14 px-2 content-center'>ABOUT</div>
        <div className='hover:bg-neutral-700 h-14 px-2 content-center'>SERVICES</div>
        <div className='hover:bg-neutral-700 h-14 px-2 content-center'>CONTACT US</div>

    </div>
    
    );


}


export default NavBar;