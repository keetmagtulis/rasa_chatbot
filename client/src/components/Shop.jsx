import {React} from 'react';
import Chatbot from "./Chatbot";

function Shop() {

return(
 <>
    
<div className="flex flex-col items-center justify-center">

    <div>
        <h2 className='font-bold text-3xl mt-20 mb-10'>SHOP</h2>
    </div>

        <div className='grid grid-cols-4 grid-rows-2 gap-x-5 gap-y-5'>

            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>

            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>
            <div className="w-80 h-80 bg-neutral-200 rounded-lg"></div>

        </div>



</div>

<Chatbot />
 
 </>
);

}

export default Shop;