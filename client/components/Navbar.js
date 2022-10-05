import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const bars = <FontAwesomeIcon icon={faBars} />;
  const close = <FontAwesomeIcon icon={faXmark} />;

  return (
    <div className={`flex  flex-col p-4 md:p-0  md:flex-row md:justify-end   bg-[#FAB253] ${open ? 'top-20' : 'flex-row'}`} >
      {/* <div className="asdf">
        <FontAwesomeIcon icon={faXmark} />
      </div> */}

      {
        open ? bars : close
      }


      <button onClick={() => setOpen(true)}>
        Click Me
      </button>


      <div
        // onClick={() => setOpen(true)} 
        icon={faBars} className={`absolute top-4 right-4 text-3xl cursor-pointer text-[#BF5B63] md:hidden `} >
        <FontAwesomeIcon />
      </div>

      <Link href="/">
        <a className='hover:text-white w-fit hover:bg-[#BF5B63] p-4 rounded-sm'>Home</a>
      </Link>

      <Link href="/about">
        <a className='hover:text-white w-fit hover:bg-[#BF5B63] p-4 rounded-sm'>About</a>
      </Link>

      <Link href="/lunch">
        <a className='hover:text-white w-fit hover:bg-[#BF5B63] p-4 rounded-sm'>Lunch</a>
      </Link>

      <Link href="/dinner">
        <a className='hover:text-white w-fit hover:bg-[#BF5B63] p-4 rounded-sm'>Dinner</a>
      </Link>

    </div>
  )
}

export default Navbar