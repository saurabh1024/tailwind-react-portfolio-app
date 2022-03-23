import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen text-gray-300 bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/ad6d2e7e-a5b4-46ff-ac5e-c990c2786d64' className=' mt-16 flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='pt-4 text-xl text-gray-300'>Submit the form below or email me - work.saurabhjadhav@gmail.com</p>
            </div>
            <input required className='bg-[#ccd6f6] p-2 text-[#0a192f] text-xl' type='text' placeholder='Name' name='name'/>
            <input required className='my-4 p-2 bg-[#ccd6f6] text-[#0a192f] text-xl' type='email' placeholder='Email' name='email'/>
            <textarea required className='bg-[#ccd6f6] p-2 text-[#0a192f] text-xl' name='message' rows='10' placeholder='Message'/>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex justify-center items-center'>
                Lets Collaborate!
            </button>
        </form>
    </div>
  )
}

export default Contact