
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";

const pishghaza = [
  {title:'سالادسزار', price:'(یکنفره169ت)(دونفره267ت)',},
  {title:'سالادفصل', price:'92.000 ت',},
  {title:'کتف وبال سوخاری سس چیلی', price:'184.000 ت',},
  {title:'سیب زمینی ساده', price:'95.000 ت',},
  {title:'سیب زمینی باسس مارول', price:'137.000 ت',},
  {title:'قارچ سوخاری', price:'134.000 ت',},
  {title:'سیب زمینی با سس قارچ', price:'139.000 ت',},
  {title:'نان سیر', price:'134.000 ت',},
  {title:'سیب زمینی با پنیرموزارلا', price:'147.000 ت',},
  {title:'نان سیرپیتزایی', price:'175.000 ت',},
  
];
const PishGhazaComponent = () => {
  

return(
    <>
    <HeaderMaroll />
    <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
     <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:"spring"}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6" >
       {pishghaza.map((item)=>{
            return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                       <div className="flex dark:bg-black dark:shadow-sm dark:shadow-white bg-[rgba(255,255,255,0.9)] justify-between p-3">
                         <h1 className="font-[IranSans] font-semibold">{item.title} </h1>
                         <h2 className="font-[IranSans] font-bold">{item.price} </h2>
                       </div>
            </div>
        })}
     </motion.div>
     <MenuMaroll />
    </>
)
};


export default PishGhazaComponent;