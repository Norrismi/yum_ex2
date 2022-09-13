import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";



const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-[#F4EAE4]">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

  




      {/* <footer className="w-full grid grid-cols-3 justify-items-center  border-t">
        <div className="text-4xl p-6">
          The Latin Cuisine
        </div>
        <div className="p-6">

          <div className=" text-lg">
            123 Main Street,
          </div>
          <div className=" text-lg">
            Bluffton SC, 29910
          </div>
          <div className="m-10">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />

          </div>
        </div>

        <div className="p-6 text-lg">
          (555) 555-5555
        </div>

      </footer> */}
    </div>
  )
}

export default Home
