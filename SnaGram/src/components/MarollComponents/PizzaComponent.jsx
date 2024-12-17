import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";

const pizza = [
  {title:'پیتزااسپیشیال مارول',describtion:'گوشت چرخ کرده و سینه مرغ گریل و بیکن و قارچ و فلفل دلمه و ذرت شیرین و پنیرمیکس و سس مارینارا', price:'495.000 ت', active: false},
  {title:'پیتزالاکچری مارول',describtion:'گوشت چرخ کرده و تکه استیک گوشت و سینه مرغ گریل و قارچ و فلفل دلمه و ذرت شیرین و پنیرمیکس', price:'579.000 ت', active: false},
  {title:'پیتزاچهارفصل',describtion:'دواسلایس گوشت و دواسلایس مرغ و دواسلایس بیکن و دواسلایس پپرونی', price:'435.000 ت', active: false},
  {title:'پیتزاتروپیکال',describtion:'راسته گوساله و سینه مرغ گریل و قارچ و فلفل دلمه و پنیرمیکس و سس مارینارا', price:'(مدیوم229ت)(لارج315ت)', active: false},
  {title:'پیتزاچیکن',describtion:'سینه مرغ و قارچ و پنیرمیکس و فلفل دلمه و سس مارینارا', price:'(مدیوم219ت)(لارج285ت)', active: false},
  {title:'پیتزاسولومیو',describtion:'راسته گوساله و قارچ و پنیرمیکس و سس مارینارا', price:'(مدیوم245ت)(لارج349ت)', active: false},
  {title:'پیتزاپپرونی',describtion:'پپرونی و پنیرمیکس و سس مارینارا', price:'(مدیوم187ت)(لارج235ت)', active: false},
  {title:'پیتزامخلوط',describtion:'کوکتل پنیری و بیکن و قارچ و ذرت شیرین و فلفل دلمه ای و پنیرمیکس و سس مارینارا', price:'(مدیوم205ت)(لارج259ت)', active: false},
  {title:'پیتزاکلاسیک',describtion:'گوشت چرخ کرده و کوکتل پنیری و قارچ و فلفل دلمه ای و پنیرمیکس و سس مارینارا', price:'(مدیوم229ت)(لارج339ت)', active: false},
  {title:'پیتزاسبزیجات',describtion:'قارچ و نخودفرنگی و گوجه و فلفل دلمه و ذرت شیرین و میکس پنیر و سس مارینارا', price:'(مدیوم160ت)(لارج184ت)', active: false},
];
const PizzaComponent = () => {
  const [pitza, setPitza] = useState(pizza);
  const handelShow = (item)=>{
    pitza.map((item)=>{
      return item.active = false
    });
    item.active = true;
    setPitza([...pitza]);
  }
return(
    <>
    <HeaderMaroll />
    <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
     <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:"spring"}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6" >
       {pitza.map((item)=>{
            return <div className="bg-white rounded-lg shadow-black mb-2 shadow-sm" key={item.title}>
                       <div className="flex bg-[rgba(255,255,255,0.9)] justify-between p-3">
                         <h1 className="font-[IranSans] font-semibold">{item.title} </h1>
                         <h2 className="font-[IranSans] font-bold">{item.price} </h2>
                       </div>
                       <button onClick={()=>handelShow(item)} className='font-[IranSans] px-2 text-[.9rem] m-2 bg-rose-700 text-white rounded-full'>توضیحات</button>
                      <div  className={item.active ? 'block' : 'hidden'}>
                      <div className='w-[100%] p-2 text-black rounded-md'>
                       <span className=" font-[IranSans] text-[.8rem] md:text-[1rem]">{item.describtion} </span>
                       </div>
                      </div>
            </div>
        })}
     </motion.div>
     <MenuMaroll />
    </>
)
};


export default PizzaComponent;