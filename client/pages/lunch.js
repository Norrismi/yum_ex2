import React from 'react'
import MenuCard from '../components/LunchMenuCard'
import app from '../assets/appetizer.jpg'
import Image from 'next/image'
import { createClient } from "next-sanity";



export async function getServerSideProps() {
    const client = createClient({
        dataset: 'production',
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
        apiVersion: '2022-09-10',
        useCdn: false
    })

    const lunchItems = await client.fetch(`*[_type == "lunch"]`);


    return {
        props: {
            lunchItems
        }
    }
}

const Lunch = ({lunchItems}) => {
    return (
        <div className='grid grid-cols-3 min-h-screen bg-[#F4EAE4]'>

            <div className=" m-6 col-span-2">
                <MenuCard lunchItems={lunchItems}/>
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