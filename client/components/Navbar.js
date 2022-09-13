import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-[#FAB253] flex justify-end sticky top-0 z-10'>


      <Link href="/">
        <a className='hover:text-white hover:bg-[#BF5B63] p-4 rounded-sm'>Home</a>
      </Link>

      <Link href="/about">
        <a className='hover:text-white hover:bg-[#BF5B63] p-4 rounded-sm'>About</a>
      </Link>

      <Link href="/lunch">
        <a className='hover:text-white hover:bg-[#BF5B63] p-4 rounded-sm'>Lunch</a>
      </Link>


    </div>
  )
}

export default Navbar