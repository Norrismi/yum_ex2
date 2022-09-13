import React from 'react'
import MenuCard from '../components/MenuCard'
import app from '../assets/appetizer.jpg'
import Image from 'next/image'

const Lunch = () => {
    return (
        <div className='grid grid-cols-3 bg-[#F4EAE4]'>

            <div className=" m-6 col-span-2">
                <MenuCard  />
            </div>

            <div className="m-6 justify-self-start">
                <Image
                    // loader={myLoader}
                    src={app}
                    alt="Appetizer"
                    // width={500}
                    // height={500}
                />
            </div>


        </div>
    )
}

export default Lunch