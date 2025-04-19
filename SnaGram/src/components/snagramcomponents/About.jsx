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
                <span className="font-bold text-[.8rem]">معرفی سنه گرام:</span>
            <p className="text-justify text-[.8rem]">
                یک پلتفرم با هدف به ارمغان رساندن معرفی و شناخت کافه رستوران های شهر زیبای سنندج میباشد.
                شمادراین پلتفرم بامشاهده منو ولوکیشن زیباترین ودلنشین ترین کافه رستوران های سنندج روبرو هستید و درکنار انتخاب منو میزبان خود  دیگر برندهای سنندج را بشناسید.!
            </p>
        
            <h3 className='font-[IranSans] text-center mt-4 font-semibold'>چرا سنه گرام ؟</h3>
            <ul className='text-[.8rem] mt-3'>
                <li className='mb-3'>
                  <span className='font-bold'>✅صفحه اختصاصی برای هر مجموعه:</span>
                  <p>عکس و توضیحات و فضای داخلی و منوی کاملتون رو توی یه صفحه اختصاصی نمایش بدید</p>
                </li>
                <li className='mb-3'>
                <span className='font-bold' >✅دسته بندی منظم آیتم ها:</span>
                  <p>آیتم ها با نظم کامل در دسته بندی های مرتبط  قرار گرفتن تا راحت انتخاب بشن</p>
                </li>
                <li className='mb-3'>
                  <span className='font-bold' >✅طراحی زیبا و سرعت بالا:</span>
                  <p>یک رابط کاربری زیبا و مدرن که هم سریع اجرا میشه و هم به کاربر حس خوبی القا میکنه</p>
                </li>
                <li className='mb-3'>
                  <span className='font-bold' >✅شروع از سنندج, اماده برای همه جا</span>
                  <p>ماازسنندج شروع کردیم ولی SnaGram برای تمام شهرها قابل گسترشه</p>
                </li>
            </ul>

        </motion.div>
        <motion.section initial={{y:'-700px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className="font-[IranSans] dark:bg-black dark:shadow-sm dark:shadow-white bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto">
            <p className="font-bold text-center text-[.8rem]">راه ارتباطی برای کسب اطلاعات و عضویت در پلتفرم  <Link target='_blank' to={'tel:09036139085'}>09036139085</Link></p>
        </motion.section>
            <motion.footer initial={{y:'800px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className='font-[IranSans] text-center dark:bg-black dark:shadow-sm dark:shadow-white bg-white p-3 my-5 rounded-md shadow-black shadow-sm w-[90%] mx-auto'>
          <p className='font-semibold text-[.8rem]'>طراحی و توسعه : </p>
          <h2><span className='font-semibold'>تیم سنه گرام</span> : <Link target='_blank' to={'tel:09036139085'}>09036139085</Link></h2>
            </motion.footer>
          <div onClick={()=>handelShareMenu()} className='flex gap-2 justify-center items-center my-2'>
             <img className='md:w-[3%] w-[7%]' src="/images/shareicon.webp"/>
             <h2 className='text-[.8rem] font-[IranSans] font-semibold'>اشتراک گذاری سنه گرام با دوستانتان</h2>
           </div>
            
        
        </>
    )
};

export default About;