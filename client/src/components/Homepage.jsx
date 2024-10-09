import { useEffect, useState } from "react";
import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import {motion} from 'framer-motion';


function Home() {

    const home_images = [
        "/images/nike-aj1.png",
        "/images/nike-v2k.png",
    ]

    

    useEffect (() => {
         const interval = setInterval(() => {
            setCurrentIndex((prev) => prev === home_images.length - 1 ? 0 : prev + 1)

         }, 4000)

         return () =>  clearInterval(interval);
    }, [home_images.length])


    const [currentIndex, setCurrentIndex] = useState(0)


    return (
        
        
        <div className="w-screen h-screen bg-neutral-800 columns-2">
            
            
            <div className='flex flex-col h-full px-10 justify-center'>
                <h1 className='text-white text-6xl font-bold mb-3'>Create your own shoes,</h1>
                <h1 className='text-neutral-100 text-4xl mb-5'>Let us make your ideas into reality.</h1>
                <p className='text-neutral-300 text-md mb-5'>with shoepify you can make your ideas into reality <br/> by costumizing your own shoes.</p>
                <button className='flex justify-center items-center text-white w-40 rounded-full bg-transparent border px-3 py-3 hover:bg-neutral-600'>Customize now <FaExternalLinkAlt className='ml-2' /> </button>
                
            </div>

            <div className='flex flex-col justify-center items-center h-full'>
                <motion.img
                    key = {home_images[currentIndex]}
                    src = {home_images[currentIndex]}
                    alt= 'Error 404 Not Found'
                    className="h-full w-3/4 "

                    initial={{opacity: 0, scale: 0.9, x: 50}}
                    animate={{opacity: 1, scale: 1, x: 0}}
                    exit={{opacity: 0, scale: 0.9, x: -50}}
                    transition={{duration: 0.7}}
                />
            
            </div>
        
        
        
        
        </div>
    );
}

export default Home;
