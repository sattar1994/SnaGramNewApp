import { motion } from 'framer-motion';
const Wellcome = () => {
    return(
        <>
          <motion.p initial={{x:'900px'}} animate={{x:'0'}} transition={{duration:'1'}} className='font-[IranNastaliq] mt-4 text-[1.8rem] text-center'>خوشامدید لطفا منو خود را انتخاب نمایید</motion.p>
        </>
    )
};

export default Wellcome;