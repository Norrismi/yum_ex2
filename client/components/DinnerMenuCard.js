import React from 'react'
import { createClient } from "next-sanity";
import sanityConfig from '../config/sanity.server'

const DinnerMenuCard = ({ dinnerItems }) => {

    //console.log(dinnerItems)

    return (
        <div class="grid grid-cols-1 p-4 lg:grid-cols-2  bg-white w-8/12 rounded-sm m-auto shadow-2xl">

        {dinnerItems && dinnerItems.map(item => (
            <div key={item._id} className="my-6 mx-2">
                <div className="grid grid-cols-3">

                    <h2 className="text-lg col-span-2">
                        {item.foodItem}
                    </h2>
                    <div className=" max-w-fit ">

                        <div>${item.price}</div>
                    </div>
                </div>
                <p>
                    {item.description}
                </p>
                <div className="grid grid-cols-3 max-w-fit  ">
                    {item.new ?
                        <div className='bg-[#BF5B63] w-fit px-2 py-1 mt-2 mr-2 rounded-xl text-white'>New</div>
                        : null}

                    {item.vegan ?
                        <div className='bg-[#849E5E] w-fit px-2 py-1 mt-2 rounded-3xl text-white'>V</div>
                        : null}
                </div>
            </div>
        ))}
    </div>
    )
}

export default DinnerMenuCard




