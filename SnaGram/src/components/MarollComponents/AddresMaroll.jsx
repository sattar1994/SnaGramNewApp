import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const listIcon = [
    {title:'همه روزه 11 الی 23', image:'../iconimages/calander.png', active:false}, 
    {title:'اینستاگرام کافه رستوران مارول', image:'../iconimages/instagram.png', active:true}, 
    {title:'087-33611142-43', image:'../iconimages/phone.png', active:false}, 
    {title:'سنندج خیابان پاسداران پایین تر از مجتمع تجاری کردستان', image:'../iconimages/location.png', active:false}, 
];

const AddresMaroll = () => {
    return(
        <>
         <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="bg-white p-3 w-[90%] mx-auto m-2 md:flex md:flex-row font-[IranSans] shadow-black shadow-md rounded-lg ">
            {listIcon.map((item)=>{
                return <div className='flex gap-2 mb-5 items-center' key={item.image}>
                    <img className='md:w-[12%] w-[12%]' src={item.image}/>
                    <h2 className='text-[.8rem]'><Link target={item.active ? '_blank' : null} to={item.active ? 'https://www.instagram.com/marollfood?igsh=bGVreDNmZHptb2N3' : null }>{item.title}</Link></h2>
                </div>
            })}
           
         </motion.div>
         
        </>
    )
};

export default AddresMaroll;