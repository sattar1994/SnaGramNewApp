import { motion } from 'framer-motion';
import Header from "./Header";
import NavBar from "./NavBar";

const About = () => {
    return(
        <>
        <Header />
        <NavBar />
        <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto">
            <p className="text-justify">
                <span className="bg-blue-700 text-white px-2 rounded-md ml-1">سنه گرام  </span>
                یک پلتفرم با هدف به ارمغان رساندن معرفی و شناخت کافه رستوران های شهر زیبای سنندج میباشد.
                شمادراین پلتفرم بامشاهده منو ولوکیشن زیباترین ودلنشین ترین کافه رستوران های سنندج روبرو هستید و درکنار انتخاب منو میزبان خود  دیگر برندهای سنندج را بشناسید.!
            </p>

        </motion.div>
        <motion.div initial={{y:'-700px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto">
            <p className="font-bold">راه ارتباطی برای کسب اطلاعات و عضویت در پلتفرم : <span>09036139085</span> </p>
        </motion.div>
            <motion.div initial={{y:'800px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className='font-[IranSans] text-center bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto'>
          <p className='font-semibold'>طراحی و توسعه : </p>
          <h2><span className='font-semibold'>تیم سنه گرام</span> : 09036139085</h2>
            </motion.div>
            
        
        </>
    )
};

export default About;