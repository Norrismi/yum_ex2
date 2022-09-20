import React from 'react'


const LunchMenuCard = ({ lunchItems }) => {


//console.log(lunchItems)


    return (
        // container
        <div className='grid grid-cols-2 gap-4 p-4 bg-white w-8/12 rounded-sm m-auto shadow-2xl   '>




            {/* left */}
            <div className="">

                {lunchItems && lunchItems.map(item => (
                    <div key={item._id} className="my-10 mx-2">
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
                            {/* {item.new ?
                                <div  className='bg-[#BF5B63] w-fit px-2 py-1 mt-2 mr-2 rounded-xl text-white'>New</div>
                                : null}

                            {item.vegan ?
                                <div  className='bg-[#849E5E] w-fit px-2 py-1 mt-2 rounded-3xl text-white'>V</div>
                                : null} */}
                        </div>
                    </div>
                ))}
            </div>


            {/* right */}
            <div className="">



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
                        Test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt minus expedita temporibus enim mollitia repellat inventore voluptatem
                    </p>
                </div>







            </div>


        </div>
    )
}

export default LunchMenuCard




