import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse , faPeopleGroup , faMugHot } from '@fortawesome/free-solid-svg-icons';


const MenuMobile = () => {
  return (
    <>
      <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}}  className="
      fixed left-4 top-[4.3rem] z-10 text-center mx-auto sm:hidden w-[91%] h-full font-[IranSans] dark:bg-black dark:shadow-sm dark:shadow-white  p-3 rounded-md  bg-gray-50 shadow-sm shadow-black">

      <div className='mt-4 mb-6 '>
      <motion.button initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'3', type:'spring'}} className=" text-gray-800 px-2 font-semibold border-b-2 pb-2 rounded-full border-black w-[90%] text-[.9rem]"><FontAwesomeIcon icon={faHouse} className='text-gray-500' /> <Link to={'/'}>صفحه اصلی </Link> </motion.button>
      </div>

      
      <div className='mt-4 '>
        <motion.button initial={{y:'800px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className=" text-gray-800 px-2 font-semibold pb-2 border-b-2 rounded-full border-black w-[90%] text-[.9rem]"><Link to={'/زیرسقف کافه'}><FontAwesomeIcon className='pl-3 text-gray-500' icon={faMugHot} />زیرسقف کافه</Link></motion.button>
        </div>
      

        <div className='mt-4 '>
        <motion.button initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className=" text-gray-800 px-2 font-semibold pb-2 border-b-2 rounded-full border-black w-[90%] text-[.9rem]"><FontAwesomeIcon className='pl-1 text-gray-500' icon={faPeopleGroup} /><Link to={'/درباره سنه گرام'}>درباره سنه گرام</Link></motion.button>
        </div>
            
      </motion.div>
    </>
  );
};

export default MenuMobile;
