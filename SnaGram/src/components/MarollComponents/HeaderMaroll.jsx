import { motion, useScroll } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const HeaderMaroll = () => {
    const [moon, setMoon] = useState(localStorage.getItem('theme') === 'dark');
    useEffect(()=>{
        if(moon){
            document.documentElement.classList.add("dark");
            localStorage.setItem('theme', 'dark')
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    },[moon]);
   

    const handelDarkMode = () => {
        setMoon(!moon);
    }
    const handelLightMode = () => {
        setMoon(!moon);
    }
    return(
        <>   
         
            <motion.div initial={{y:'-500px'}} animate={{y:'0'}} transition={{duration:.9,}} className="bg-white dark:bg-black dark:shadow-sm dark:shadow-white w-[90%] mx-auto m-2 p-2 rounded-md shadow-black shadow flex justify-between items-center">
             <h1 className="font-[IranNastaliq] dark:text-white text-[1.8rem] text-rose-700 ">سنه گرام</h1>
            
           
            {moon ? <img onClick={()=>handelLightMode()} src="/images/sunicon.png" className='md:w-[3%] w-[12%] animate-bounce'/> : <img onClick={()=>handelDarkMode()} src="/images/moonicon.png" className='md:w-[3%] w-[12%] animate-bounce'/>}
            
             
             
             <h1 className='text-rose-700 dark:text-white'><Link to={'/'}><FontAwesomeIcon icon={faCircleLeft} size='xl'  beatFade /></Link></h1>
        </motion.div>
        
        </>
    )
};

export default HeaderMaroll;