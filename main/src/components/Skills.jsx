import React from 'react'
import HTML from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import angular from '../assets/angular.png'

function Skills() {
  return (
      <div name="skills" className=''>
          <div  className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center'>
        {/* container */}
        <div className='flex-grow mb-10'>
            <div className='max-w-[1000px] mx-auto p-4 flex-col w-full h-full'>
                <div className='text-4xl'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                    <p className='pt-4 text-xl'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-8'>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="html5" />
                        <p className='my-4'>HTML5</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="css3" />
                        <p className='my-4'>CSS3</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={javascript} alt="javascript" />
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="tailwind" />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={angular} alt="angular" />
                        <p className='my-4'>Angular</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="react" />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={node} alt="node" />
                        <p className='my-4'>Node</p>
                    </div>
                    <div className='shadow-md shadow-[#0a192f] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={mongo} alt="mongo" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
      </div>
    
  )
}

export default Skills