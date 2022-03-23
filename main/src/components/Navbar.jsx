import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import { useState } from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const onToggle = () => setNav(!nav)
  return (
    <>
    <div className='flex justify-between w-full fixed h-[80px] px-4 items-center bg-[#18396b] text-gray-300 z-10'>
            <div>
            <p style={{fontFamily: 'Ruthie,cursive'}} className='w-[50px] text-2xl font-bold hover:scale-125 duration-100 md:w-[80px] md:text-4xl bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text'>SCJ</p>
            </div> 
            {/* menu */}
        <div>
             <ul className='hidden md:flex'>
                <li className='hover:scale-125 duration-100 p-6 '> 
                    <Link  to="home" smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:scale-125 duration-100 p-6 '> 
                    <Link  to="about" smooth={true}  duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:scale-125 duration-100 p-6 '> 
                    <Link  to="skills" smooth={true}  duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:scale-125 duration-100 p-6 '> 
                    <Link  to="work" smooth={true}  duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:scale-125 duration-100 p-6 '> 
                    <Link  to="contact" smooth={true}  duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
           
      
        {/* hamburger */}
        <div onClick={onToggle} className='md:hidden z-10'>
            {!nav? <FaBars/> : <FaTimes/>}
        </div>
         {/* mobile menu */}
        
            <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={onToggle}  to="home" smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={onToggle}  to="about" smooth={true}  duration={500}>
                    About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={onToggle} offset={-80}  to="skills" smooth={true}  duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={onToggle} offset={-80} to="work" smooth={true}  duration={500}>
                    Work
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={onToggle} offset={80} to="contact" smooth={true}  duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>  
    </div>
    {/* social handles */}
    <div className='hidden lg:flex fixed flex-col left-0 top-[35%] text-gray-300'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between w-full items-center ' href='https://www.linkedin.com/in/saurabh-jadhav-518718184/'>LinkedIn <FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between w-full items-center  ' href='https://github.com/saurabh1024/'>Github <FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between w-full items-center ' href='mailto:work.saurabhjadhav@gmail.com'>Mail <HiOutlineMail size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between text-gray-300 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                <a className='flex justify-between w-full items-center ' href='https://drive.google.com/file/d/1ifaWKmr_Q4qZotrPEgaF5wGPv5eMXodG/view?usp=sharing'>Resume <BsFillPersonFill size={30}/></a>
            </li>
        </ul>
    </div>
    </>
   
   
  )
}

export default Navbar

