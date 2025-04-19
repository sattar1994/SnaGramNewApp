import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import MenuMobile from './MenuMobile';
const Header = () => {
    const [showBurger, setShowBurger] = useState(true);
    return(
        <>
          <motion.div initial={{y:'-500px'}} animate={{y:'0'}} transition={{duration:.9,}} className="bg-white w-[90%] mx-auto m-2 p-2 rounded-sm shadow-black shadow dark:bg-black dark:shadow-sm dark:shadow-white">
           <div className='flex justify-between items-center sm:justify-center'>
             <h1 className="font-[IranSans] text-[.9rem]">به <span
              className="font-[IranNastaliq] animate-pulse text-rose-700 text-[1.5rem] ">سنه گرام</span> خوشامدید</h1>
              <span className='sm:hidden'>
              { showBurger ? <FontAwesomeIcon onClick={()=>setShowBurger(false)}  size='xl' icon={faBars} />
              :
                   <FontAwesomeIcon onClick={()=>setShowBurger(true)}  size='xl' icon={faXmark} />}
              </span>
           </div>
          
        </motion.div>
        {
          showBurger ? null : <MenuMobile /> 
        }
         
        </>
    )
};

export default Header;