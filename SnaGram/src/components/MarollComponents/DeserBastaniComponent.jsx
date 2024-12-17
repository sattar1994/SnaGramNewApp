import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";

const deserbastani = [
  {title:'وافل مخصوص',price:'109.000 ت'},
  {title:'وافل موزنوتلا',price:'94.000 ت'},
  {title:'کیک رافاءلو',price:'59.000 ت'},
  {title:'تیرامیسو',price:'58.000 ت'},
  {title:'کیک شکلاتی',price:'54.000 ت'},
  {title:'بستنی مارول',price:'90.000 ت'},
  {title:'بستنی اسپیشیال',price:'78.000 ت'},
  {title:'بستنی کلاسیک',price:'72.000 ت'},
  {title:'انتخابی هر اسکوپ',price:'17.000 ت'},
  
];
const DeserBastaniComponent = () => {
  

return(
    <>
    <HeaderMaroll />
    <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
     <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:"spring"}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6" >
       {deserbastani.map((item)=>{
            return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                       <div className="flex bg-[rgba(255,255,255,0.9)] justify-between p-3">
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


export default DeserBastaniComponent;