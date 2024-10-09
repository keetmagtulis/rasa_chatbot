import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";



function Home() {
    return (
        
        
        <div className="w-screen h-screen bg-neutral-800 columns-2">
            
            
            <div className='flex flex-col h-full px-10 py-28 '>
                <h1 className='text-white text-6xl font-bold mb-3'>Create your own shoes,</h1>
                <h1 className='text-neutral-100 text-4xl mb-5'>Let us make your ideas into reality.</h1>
                <p className='text-neutral-300 text-md mb-5'>with shoepify you can make your ideas into reality <br/> by costumizing your own shoes.</p>
                <button className='flex justify-center items-center text-white w-40 rounded-full bg-transparent border px-3 py-3 hover:bg-neutral-600'>Customize now  <FaExternalLinkAlt className='ml-2' /> </button>
            </div>

            <div className='flex flex-col justify-center items-center h-full'>

            </div>
        
        
        
        
        </div>
    );
}

export default Home;
