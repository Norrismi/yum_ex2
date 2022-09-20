import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import restaurant from '../assets/restaurant.jpg'
import Link from 'next/link'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#F4EAE4]">



      <h2 className="text-6xl mt-10">The Latin Cusine</h2>

      <div className="mt-10 shadow-2xl">

        <Image

          // loader={myLoader}
          src={restaurant}
          alt="Picture of the the restaurant"
        // width={500}
        // height={500}
        />
      </div>


      <div className="mt-10 flex row w-4/12 justify-evenly">

        <Link href="/lunch" >
          <button className="bg-[#BF5B63] hover:bg-[#9d3740] shadow-2xl text-white font-bold py-2 px-4 rounded-full">
            Lunch Menu
          </button>
        </Link>

        <Link href="/dinner" >
          <button className="bg-[#BF5B63] hover:bg-[#9d3740] shadow-2xl text-white font-bold py-2 px-4 rounded-full">
            Dinner Menu
          </button>
        </Link>

      </div>



    </div>
  )
}

export default Home
