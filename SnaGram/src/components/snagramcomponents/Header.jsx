import { motion } from 'framer-motion'
const Header = () => {
    return(
        <>
          <motion.div initial={{y:'-500px'}} animate={{y:'0'}} transition={{duration:.9,}} className="bg-white w-[90%] mx-auto m-2 p-2 rounded-md shadow-black shadow dark:bg-black dark:shadow-sm dark:shadow-white">
            <h1 className="font-[IranSans] text-[1.2rem] text-center ">به <span
           className="font-[IranNastaliq] animate-pulse text-rose-700 text-[2rem] ">سنه گرام</span> خوشامدید</h1>
        </motion.div>
        </>
    )
};

export default Header;