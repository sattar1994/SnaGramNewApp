import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
const NavBar = () => {
    return(
        <>
        <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] hidden dark:bg-black dark:shadow-sm dark:shadow-white my-3 bg-white w-[90%] mx-auto p-3 shadow-black shadow-sm rounded-md sm:flex justify-between">
            <button className="bg-[#FB8C00] font-bold text-black px-2 text-[.9rem] rounded-md"> <Link to={'/'}>صفحه اصلی</Link> </button>
            <button className="bg-[#FB8C00] font-bold text-black px-2 text-[.9rem] rounded-md"> <Link to={'/زیرسقف کافه'}>زیرسقف کافه</Link> </button>
            <button className="bg-[#FB8C00] font-bold text-black px-2 text-[.9rem] rounded-md"><Link to={'/درباره سنه گرام'}>درباره سنه گرام</Link></button>
        </motion.div>
        
        </>
    )
};

export default NavBar;