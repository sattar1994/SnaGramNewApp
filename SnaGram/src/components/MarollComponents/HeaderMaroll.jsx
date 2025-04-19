import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars , faXmark } from '@fortawesome/free-solid-svg-icons';
import MenuMobile from '../SnagramComponents/MenuMobile';
import { useState } from 'react';
const HeaderMaroll = () => {
    const [showBurger, setShowBurger] = useState(true);
    
    return(
        <>   
         
            <motion.div initial={{y:'-500px'}} animate={{y:'0'}} transition={{duration:.9,}} className="bg-white dark:bg-black dark:shadow-sm dark:shadow-white w-[90%] mx-auto m-2 p-2 rounded-md shadow-black shadow flex justify-between items-center">
             <h1 className="font-[IranNastaliq] dark:text-white text-[1.8rem] text-rose-700 ">سنه گرام</h1>

             <span className='sm:hidden'>
              { showBurger ? <FontAwesomeIcon onClick={()=>setShowBurger(false)}  size='xl' icon={faBars} />
              :
                   <FontAwesomeIcon onClick={()=>setShowBurger(true)}  size='xl' icon={faXmark} />}
              </span>
              {
          showBurger ? null : <MenuMobile /> 
        }
             
             {/* <h1 className='text-rose-700 dark:text-white'><Link to={'/'}><FontAwesomeIcon icon={faCircleLeft} size='xl' /></Link></h1> */}
        </motion.div>
        
        </>
    )
};

export default HeaderMaroll;