import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <>
        <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] dark:bg-black dark:shadow-sm dark:shadow-white my-9 bg-white w-[90%] mx-auto p-3 shadow-black shadow-sm rounded-md flex justify-between">
            <button className="bg-rose-700 text-white px-2 text-[1rem] rounded-full"> <Link to={'/'}>صفحه اصلی</Link> </button>
            <button className="bg-rose-700 text-white px-2 text-[1rem] rounded-full animate-bounce"><Link to={'/درباره سنه گرام'}>درباره سنه گرام</Link></button>
        </motion.div>
        
        </>
    )
};

export default NavBar;