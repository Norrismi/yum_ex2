import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForkKnife } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


const NotFound = () => {
    return (
        <>
        <div className='bg-[#F4EAE4] h-screen flex flex-col items-center justify-center'>
            <div className="flex  text-6xl -mt-14 text-[#BF5B63] ">404: Page not found</div>

            <div className="flex text-6xl mt-10 text-[#BF5B63]">
            {/* <FontAwesomeIcon icon="fa-duotone fa-utensils-slash" /> */}
            <FontAwesomeIcon icon={faForkKnife} />
            <FontAwesomeIcon icon={faCoffee} />
            </div>
        </div>
        </>
    )
}

export default NotFound