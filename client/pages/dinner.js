import React from 'react'
import DinnerMenuCard from '../components/DinnerMenuCard';
import { createClient } from "next-sanity";
import Image from 'next/image'
import burrito from '../assets/burrito.jpg'

export async function getServerSideProps() {
    const client = createClient({
        dataset: 'production',
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        apiVersion: '2022-09-10',
        useCdn: false
    })

    const dinnerItems = await client.fetch(`*[_type == "dinner"]`);


    return {
        props: {
            dinnerItems
        }
    }
}


const dinner = ({ dinnerItems }) => {
    //console.log(dinnerItems)
    return (
        <div className='sm:flex sm:flex-col lg:flex-row min-h-screen bg-[#F4EAE4]'>
            <div className=" p-6 w-11/12 ">

            <DinnerMenuCard dinnerItems={dinnerItems} />
            </div>

            <div className="p-6 flex sm:flex-col place-items-center">
            <Image
                    // loader={myLoader}
                    src={burrito}
                    alt="burrito"
                // width={500}
                // height={500}
                />
            </div>


        </div>
    )
}

export default dinner