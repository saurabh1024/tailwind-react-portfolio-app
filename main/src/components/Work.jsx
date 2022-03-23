import React from 'react'
import nature2 from '../assets/nature2.png'
import trademynft1 from '../assets/trademynft1.png'
import nature from '../assets/nature.png'
import cryptoshinobi from '../assets/cryptoshinobi.png'

function Work() {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f] md:pt-20'>
        <div className='flex justify-center items-center '>
            <div className='max-w-[1000px] flex-grow p-4 flex-col mt-22'>
                <div className='mt-18 lg:mt-22'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                    <p className='pb-6 pt-2 text-2xl'>Check out some of my recent work</p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {/* grid item or card */}
                    <div style={{backgroundImage:`url(${nature})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-whiter md:px-2'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://drive.google.com/file/d/1vkpcC77_ZMDYkKCskZ0bvq_vsEvTxXtf/view?usp=sharing' >
                                    <button className='text-center rounded-lg px-4 py-3 font-bold text-lg text-gray-400'>View Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{backgroundImage:`url(${trademynft1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white px-2'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://trademynft.net' >
                                    <button className='text-center rounded-lg px-4 py-3 font-bold text-lg text-gray-400'>Visit Site</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${nature2})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-whiter md:px-2'>
                                Angular Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://github.com/saurabh1024/nature_private' >
                                    <button className='text-center rounded-lg px-4 py-3 font-bold text-lg text-gray-400'>View Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{backgroundImage:`url(${cryptoshinobi})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-whiter md:px-2'>
                                NFT Collection
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://opensea.io/collection/cryptoshinobi' >
                                    <button className='text-center rounded-lg px-4 py-3 font-bold text-lg text-gray-400'>Visit Collection</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Work