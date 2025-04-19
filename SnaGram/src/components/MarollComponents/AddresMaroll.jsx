import { motion } from 'framer-motion';
import ListAddresMaroll from './ListAddresMaroll';
const AddresMaroll = () => {
    const handelShareMenu = () => {
        return navigator.share ? navigator.share({title:"کافه رستوران مارول", url:"https://www.snagram.ir/#/marollfood"}) : alert("مرورگر شما از این قابلیت پشتیبانی نمی کند")
    }
    return(
        <>
         <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="bg-[#ffffff] shadow-box dark:text-white dark:bg-black dark:shadow-sm dark:shadow-white p-3 w-[90%] mx-auto m-2 md:flex md:flex-row font-[IranSans] shadow-black shadow-md rounded-lg ">
            <ListAddresMaroll title={'همه روزه 11 الی 23'} image={'/images/calander.webp'} />
            <ListAddresMaroll title={'اینستاگرام کافه رستوران مارول'} image={'/images/instagram.webp'} link={'https://www.instagram.com/marollfood?igsh=bGVreDNmZHptb2N3'} />
            <ListAddresMaroll title={'087-33611142-43'} image={'/images/phone.webp'} link={'tel:08733611142'} />
            <ListAddresMaroll title={'سنندج خیابان پاسداران پایین تر از مجتمع تجاری کردستان'} image={'/images/location.webp'} link={'https://maps.app.goo.gl/L3cyMZL7iLwdtLdG7'} />
           <div onClick={()=>handelShareMenu()} className='flex gap-2 mb-5 items-center'>
             <img className='md:w-[12%] w-[12%]' src="/images/shareicon.webp"/>
             <h2 className='text-[.8rem]'>اشتراک گذاری منو با دوستانتان</h2>
           </div>
         </motion.div>
        </>
    )
};
export default AddresMaroll;