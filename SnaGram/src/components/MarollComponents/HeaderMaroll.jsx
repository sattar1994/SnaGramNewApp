import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const HeaderMaroll = () => {
    return(
        <>   
            <motion.div initial={{y:'-500px'}} animate={{y:'0'}} transition={{duration:.9,}} className="bg-white w-[90%] mx-auto m-2 p-2 rounded-md shadow-black shadow flex justify-between items-center">
            <h1 className="font-[IranNastaliq] text-[1.8rem] text-rose-700 text-center ">سنه گرام</h1>
             <h1 className='text-rose-700'><Link to={'/'}><FontAwesomeIcon icon={faCircleLeft} size='xl'  beatFade /></Link></h1>
        </motion.div>
        
        </>
    )
};

export default HeaderMaroll;