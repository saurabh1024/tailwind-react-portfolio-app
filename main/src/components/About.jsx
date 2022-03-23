import React from 'react'

function About() {
  return (
    <div name='about'>
        <div  className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center'>
        <div className='flex flex-col'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 sm:pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                    {/* empty div */}
                </div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Saurabh, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className=''>I am passionate about building efficient software that improves the lives of those 
                        around me. I have worked for clients ranging from individuals and small businesses
                        all the way to large enterprise corporations. And now that you're here, you have a
                        software expert available at your fingertips.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default About