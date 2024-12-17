import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const itemsCafeHome = [
    {title:'کافه رستوران مارول', btn:'نمایش منو',image:'marollimages/darbvroodimaroll.jpg'},
];

const Home = () => {
    return(
        <>
         <motion.h1 initial={{y:'-600px', opacity:'.3'}} animate={{y:'0',opacity:'1'}} transition={{delay:'.2',duration:'1', type:'spring'}} className="font-[IranSans] text-center mx-5 mt-9 mb-5 bg-white sm:w-[50%] sm:mx-auto p-2 border-b-2 pb-2 rounded-full border-black font-bold">تلفیقی از <motion.span initial={{opacity:'.1'}} animate={{opacity:'1'}} transition={{delay:'1', duration:'.7'}}className="text-rose-700">فضا دلنشین</motion.span> و <motion.span initial={{opacity:'.1'}} animate={{opacity:'1'}} transition={{delay:'1', duration:'.7'}} className="text-rose-700">کیفیت</motion.span></motion.h1>
         <div transition={{delay:'1',duration:'2'}} className="sm:flex sm:justify-between sm:flex-wrap p-2 w-[90%] mx-auto">
            {itemsCafeHome.map((item)=>{
                return <motion.div key={item.title} initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'2',type:'spring'}} className="font-[IranSans] sm:w-[30%] shadow-black shadow-sm bg-white flex-col justify-between my-4 rounded-md p-2">
                 <img className="w-[100%] sm:w-[100%] rounded-md" src={item.image} />
                <div className='flex mt-4 justify-between items-center'>
                <h2 className="font-extrabold sm:text-[.9rem] text-center">{item.title}</h2>
                <button className="text-[.8rem] bg-rose-700 text-white rounded-full sm:px-1 px-3 p-1">
                    <Link to={item.title == 'کافه رستوران مارول' ? '/marollfood' : null}>{item.btn}</Link>
                </button>
                </div>
            </motion.div>
            })}
           
          
         </div>
          
        </>
    )
};

export default Home;