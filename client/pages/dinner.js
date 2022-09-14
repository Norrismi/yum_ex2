import React from 'react'
import MenuCard from '../components/LunchMenuCard';
import { createClient } from "next-sanity";

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


const dinner = ({dinnerItems}) => {
    
    console.log(dinnerItems)
  return (
    <div>
      
            <MenuCard dinnerItems={dinnerItems}/>
       

    </div>
  )
}

export default dinner