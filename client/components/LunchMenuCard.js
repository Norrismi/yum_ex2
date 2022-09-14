import React from 'react'
import { createClient } from "next-sanity";
import sanityConfig from '../config/sanity.server'

const LunchMenuCard = ({lunchItems}) => {

 

    return (
        // container
        <div className='grid grid-cols-2 gap-4 p-4 bg-white w-8/12 rounded-sm m-auto shadow-2xl   '>


{lunchItems.map(item => (
                <div key={item._id}>{item.foodItem}</div>
               ))}







         
            {/* <div className="">

                <div className="m-4">
                    <h2 className="text-lg">
                        Smoky Chorizo
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className="grid grid-cols-3 max-w-fit  ">
                        <div className='bg-[#BF5B63] w-fit px-2 py-1 mt-2 mr-2 rounded-xl text-white'>New</div>
                        <div className='bg-[#849E5E] w-fit px-2 py-1 mt-2 rounded-3xl text-white'>V</div>
                        <div className=" flex items-end justify-end ">$5.55</div>
                    </div>
                </div>

                <div className="m-4">
                    <h2 className="text-lg">
                        Smoky Chorizo
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className=" max-w-fit ">

                        <div className=" ">$5.55</div>
                    </div>
                </div>

                <div className="m-4">
                    <h2 className="text-lg">
                        Tacos
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className=" max-w-fit ">

                        <div className=" ">$5.55</div>
                    </div>
                </div>



                <div className="m-4">
                    <h2 className="text-lg">
                        Smoky Chorizo
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className=" max-w-fit ">

                        <div className=" ">$5.55</div>
                    </div>
                </div>
            </div>


       
            <div className="">

                <div className="m-4">
                    <h2 className="text-lg">
                        Smoky Chorizo
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                </div>

                <div className="m-4">

                    <div className="grid grid-cols-3">
                        <h2 className="text-lg col-span-2">
                            Fish
                        </h2>

                        <div className=" max-w-fit ">

                            <div className=" ">$5.55</div>
                        </div>
                    </div>




                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                </div>

                <div className="m-4">
                    <h2 className="text-lg">
                        Salad
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className=" max-w-fit ">

                        <div className=" ">$5.55</div>
                    </div>
                </div>


                <div className="m-4">
                    <h2 className="text-lg">
                        Burrito
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                    <div className=" max-w-fit ">

                        <div className=" ">$5.55</div>
                    </div>
                </div>

            </div> */}

            
        </div>
    )
}

export default LunchMenuCard




