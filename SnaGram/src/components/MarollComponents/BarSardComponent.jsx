import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";

const noshidaniSard = [
  {title:'پشن بری',price:'58.000 ت'},
  {title:'سافرون',price:'66.000 ت'},
  {title:'رزفلاور',price:'58.000 ت'},
  {title:'ردموهیتو',price:'58.000 ت'},
  {title:'بلوموهیتو',price:'58.000 ت'},
  {title:'موهیتو',price:'54.000 ت'},
  {title:'لیموناد',price:'50.000 ت'},
  
];
const smooti = [
  {title:'تروپیکال',price:'60.000 ت'},
  {title:'ردبری',price:'60.000 ت'},
  {title:'آناناس نعنا',price:'60.000 ت'},
  
];
const noshidaniSardGahve = [
  {title:'کافه گلاسه',price:'65.000 ت'},
  {title:'آیس لته',price:'62.000 ت'},
  {title:'آفو گاتو',price:'58.000 ت'},
  {title:'آیس ماکیاتو',price:'62.000 ت'},
  
];
const shake = [
  {title:'بادام زمینی',price:'82.000 ت'},
  {title:'وانیل نوتلا',price:'80.000 ت'},
  {title:'چاکلت لاور',price:'82.000 ت'},
  {title:'نسکافه',price:'78.000 ت'},
  {title:'میوه ای',price:'66.000 ت'},
  {title:'بیسکویت',price:'82.000 ت'},
  {title:'وانیل',price:'64.000 ت'},
  
];
const BarSardComponent = () => {
  

return(
    <>
    <HeaderMaroll />
    <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
     <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:"spring"}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6" >
    <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">نوشیدنی های سرد</p>
       {noshidaniSard.map((item)=>{
            return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                       <div className="flex bg-[rgba(255,255,255,0.9)] justify-between p-3">
                         <h1 className="font-[IranSans] font-semibold">{item.title} </h1>
                         <h2 className="font-[IranSans] font-bold">{item.price} </h2>
                       </div>
            </div>
        })}
        <Smooti />
        <NoshidaniSardGhahve />
        <Shake />
     </motion.div>
     <MenuMaroll />
    </>
)
};

export const Smooti = () => { 
    return(
        <>
         <div className="my-6" >
        <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">اسموتی</p>
           {smooti.map((item)=>{
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

export const NoshidaniSardGhahve = () => { 
return(
    <>
     <div className='my-6'>
    <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">نوشیدنی سرد بر پایه قهوه</p>
       {noshidaniSardGahve.map((item)=>{
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

export const Shake = () => { 
    return(
        <>
         <div className='my-6'>
        <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">شیک ها</p>
           {shake.map((item)=>{
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


export default BarSardComponent;