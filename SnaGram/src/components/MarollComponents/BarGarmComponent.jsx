import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";

const noshidaniGarm = [
  {title:'اسپرسوسولو',price:'37.000 ت'},
  {title:'اسپرسودوپیو',price:'43.000 ت'},
  {title:'لته',price:'58.000 ت'},
  {title:'کاپوچینو',price:'58.000 ت'},
  {title:'هات چاکلت',price:'58.000 ت'},
  {title:'وایت چاکلت',price:'58.000 ت'},
  {title:'ماسالا',price:'47.000 ت'},
  {title:'موکا',price:'58.000 ت'},
  {title:'کارامل ماکیاتو',price:'58.000 ت'},
  {title:'آمریکانو',price:'52.000 ت'},
  {title:'قهوه ترک',price:'47.000 ت'},
  {title:'نسکافه',price:'65.000 ت'},
  {title:'قهوه فرانسه',price:'58.000 ت'},
  
];
const damnoshChaii = [
  {title:'مراکشی',price:'48.000 ت'},
  {title:'سیب به دارچین',price:'48.000 ت'},
  {title:'گل گاوزبان',price:'54.000 ت'},
  {title:'چایی ترش',price:'45.000 ت'},
  {title:'آرامش',price:'48.000 ت'},
  {title:'نشاط آور',price:'48.000 ت'},
  {title:'چایی سبز',price:'45.000 ت'},
  {title:'چایی سیاه',price:'25.000 ت'},
  
];

const BarGarmComponent = () => {
  

return(
    <>
    <HeaderMaroll />
    <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
     <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:"spring"}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6" >
    <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">نوشیدنی های گرم</p>
       {noshidaniGarm.map((item)=>{
            return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                       <div className="flex bg-[rgba(255,255,255,0.9)] justify-between p-3">
                         <h1 className="font-[IranSans] font-semibold">{item.title} </h1>
                         <h2 className="font-[IranSans] font-bold">{item.price} </h2>
                       </div>
            </div>
        })}
        <Damnosh />
        
     </motion.div>
     <MenuMaroll />
    </>
)
};

export const Damnosh = () => { 
    return(
        <>
         <div className="my-6" >
        <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">دمنوش و چایی</p>
           {damnoshChaii.map((item)=>{
                return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                           <div className="flex bg-[rgba(255,255,255,0.9)] justify-between p-3">
                             <h1 className="font-[IranSans] font-semibold">{item.title} </h1>
                             <h2 className="font-[IranSans] font-bold">{item.price} </h2>
                           </div>
                </div>
            })}
         </div>
        </>
    )
    };

export default BarGarmComponent;