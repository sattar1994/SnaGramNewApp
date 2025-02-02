import DateComponent from '../snagramcomponents/Date'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const listIcon = [
    {title:'همه روزه 11 الی 23', image:'/images/calander.png',number: 1, active:false}, 
    {title:'اینستاگرام کافه رستوران مارول', image:'/images/instagram.png',number: 2, active:true}, 
    {title:'087-33611142-43', image:'/images/phone.png',number: 3, active:true}, 
    {title:'سنندج خیابان پاسداران پایین تر از مجتمع تجاری کردستان',number: 4, image:'/images/location.png', active:true}, 
];

const AddresMaroll = () => {
    const handelShareMenu = () => {
        return navigator.share ? navigator.share({title:"کافه رستوران مارول", url:"https://www.snagram.ir/#/marollfood"}) : alert("مرورگر شما از این قابلیت پشتیبانی نمی کند")
    }
    return(
        <>
         <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="bg-white dark:text-white dark:bg-black dark:shadow-sm dark:shadow-white p-3 w-[90%] mx-auto m-2 md:flex md:flex-row font-[IranSans] shadow-black shadow-md rounded-lg ">
            {listIcon.map((item)=>{
                return <div className='flex gap-2 mb-5 items-center' key={item.image}>
                    <img className='md:w-[12%] w-[12%]' src={item.image}/>
                    <h2 className='text-[.8rem]'><Link target={item.active ? '_blank' : null} to={item.number == 2 ? 'https://www.instagram.com/marollfood?igsh=bGVreDNmZHptb2N3' : item.number == 3 ? 'tel:08733611142' : item.number == 4 ? 'https://maps.app.goo.gl/L3cyMZL7iLwdtLdG7' : null }>{item.title}</Link></h2>
                </div>
            })}
           <div onClick={()=>handelShareMenu()} className='flex gap-2 mb-5 items-center'>
             <img className='md:w-[12%] w-[12%]' src="/images/shareicon.png"/>
             <h2 className='text-[.8rem]'>اشتراک گذاری منو با دوستانتان</h2>
           </div>
         </motion.div>
          
         
        </>
    )
};

export default AddresMaroll;