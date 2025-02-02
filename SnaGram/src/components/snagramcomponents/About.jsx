import { motion } from 'framer-motion';
import Header from "./Header";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const About = () => {
    const handelShareMenu = () => {
        return navigator.share ? navigator.share({title:"وب سایت سنه گرام", url:"https://www.snagram.ir"}) : alert("مرورگر شما از این قابلیت پشتیبانی نمی کند")
    }
    return(
        <>
        <Header />
        <NavBar />
        <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] bg-white dark:bg-black dark:shadow-sm dark:shadow-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto">
            <p className="text-justify">
                <span className="bg-yellow-300 text-black font-[IranNastaliq] text-[1.4rem] px-1 rounded-md ml-1">سنه گرام  </span>
                یک پلتفرم با هدف به ارمغان رساندن معرفی و شناخت کافه رستوران های شهر زیبای سنندج میباشد.
                شمادراین پلتفرم بامشاهده منو ولوکیشن زیباترین ودلنشین ترین کافه رستوران های سنندج روبرو هستید و درکنار انتخاب منو میزبان خود  دیگر برندهای سنندج را بشناسید.!
            </p>

        </motion.div>
        <motion.div initial={{y:'-700px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] dark:bg-black dark:shadow-sm dark:shadow-white bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto">
            <p className="font-bold">راه ارتباطی برای کسب اطلاعات و عضویت در پلتفرم : <Link target='_blank' to={'tel:09036139085'}>09036139085</Link></p>
        </motion.div>
            <motion.div initial={{y:'800px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className='font-[IranSans] text-center dark:bg-black dark:shadow-sm dark:shadow-white bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto'>
          <p className='font-semibold'>طراحی و توسعه : </p>
          <h2><span className='font-semibold'>تیم سنه گرام</span> : <Link target='_blank' to={'tel:09036139085'}>09036139085</Link></h2>
            </motion.div>
          <div onClick={()=>handelShareMenu()} className='flex gap-2 justify-center items-center'>
             <img className='md:w-[10%] w-[10%]' src="/images/shareicon.png"/>
             <h2 className='text-[.9rem] font-[IranSans] font-semibold'>اشتراک گذاری سنه گرام با دوستانتان</h2>
           </div>
            
        
        </>
    )
};

export default About;