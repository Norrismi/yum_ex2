import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full grid grid-cols-3 justify-items-center  border-t border-t-orange-300 p-10 bg-[#9d3740]">
            <div className="text-white text-4xl p-6">
                The Latin Cuisine
            </div>
            <div className="p-6">

                <div className=" text-white text-lg">
                    123 Main Street,
                </div>
                <div className=" text-white text-lg">
                    Bluffton SC, 29910
                </div>
                <div className="m-10">
                    {/* <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} /> */}

                </div>
            </div>

            <div className="p-6 text-white text-lg">
                (555) 555-5555
            </div>

        </footer>
    )
}

export default Footer