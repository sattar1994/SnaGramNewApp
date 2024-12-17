import { useState } from "react";
import { motion } from 'framer-motion';
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";
import { Link } from "react-router-dom";
const foodAsli = [
    {title:'بشقاب مخصوص مارول',describtion:'120 گرم استیک فیله گوساله و 250گرم استیک مرغ و 150 گرم ماهی سوخاری و پاستا آلفردو و سیب زمینی و دورچین', price:'570.000 ت', active: false},
    {title:'بشقاب سوخاری',describtion:'2 تیکه فیله استریپس و ماهی سوخاری و پیاز سوخاری و قارچ سوخاری و سیب زمینی و سوسیس انگشتی', price:'350.000 ت', active: false},
    {title:'مرغ سوخاری کلاسیک',describtion:'نصف مرغ 2/5 کیلویی سوخاری شده و سیب زمینی سرخ شده و سالادکلم و سس مخصوص', price:'285.000 ت', active: false},
    {title:'استیک گوشت',describtion:'آیتم مورد نظر بدون توضیحات میباشد', price:'435.000 ت', active: false},
    {title:'استیک مرغ',describtion:'آیتم موردنظر بدون توضیحات میباشد', price:'290.000 ت', active: false},
];
const pasta = [
  {title:'بیف آلفردو',describtion:'آیتم مورد نظر بدون توضیحات میباشد', price:'214.000 ت', active: false},
  {title:'پاستامخصوص',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'218.000 ت', active: false},
  {title:'چیکن آلفردو',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'189.000 ت', active: false},
  {title:'لازانیا',describtion:'آیتم مورد نظر بدون توضیحات میباشد', price:'228.000 ت', active: false},
  
];
const kentaki = [
  {title:'فیله استریپس',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'(2تیکه149ت)(4تیکه239ت)', active: false},
  {title:'کنتاکی مرغ',describtion:'آیتم مورد نظر بدون توضیحات میباشد', price:'(2تیکه189ت)(3تیکه239ت)', active: false},
  {title:'دبل دان',describtion:'آیتم مورد نظربدون توضیحات میباشد', price:'236.000 ت', active: false},
  {title:'چیکن چیلی چیز',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'238.000 ت', active: false},
  {title:'فیش اندچیپس',describtion:'250گرم فیله ماهی سوخاری شده و سیب زمینی و سالادکلم و سس مخصوص', price:'268.000 ت', active: false},
];
const sandwichgril = [
  {title:'برگرمخصوص مارول',describtion:'چیزبرگر و سیب زمینی سرخ شده و دورچین', price:'242.000 ت', active: false},
  {title:'برگرکلاسیک',describtion:'آیتم انتخابی برگرکلاسیک:(بیکن12 ت)(قارچ12 ت)(پنیر10 ت)', price:'189.000 ت', active: false},
  {title:'ساندویچ مخصوص مارول',describtion:'گوشت چرخ کرده و سینه مرغ و قارچ و پنیر', price:'195.000 ت', active: false},
  {title:'ساندویچ فیله مرغ',describtion:'200گرم فیله مرغ و پنیر گودا', price:'168.000 ت', active: false},
  {title:'میکس میت',describtion:'سینه مرغ گریل و برگرزغالی و پنیرگودا', price:'259.000 ت', active: false},
  {title:'هات داگ ویژه',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'142.000 ت', active: false},
  {title:'ژامبون',describtion:'آیتم موردنظربدون توضیحات میباشد', price:'105.000 ت', active: false},
  
];
const FoodAsli = () => {
    const [lists, setLists] = useState(foodAsli);
    const [pastas, setPastas] = useState(pasta);
    const [kentakis, setKentakis] = useState(kentaki);
    const [sandwich, setSandwich] = useState(sandwichgril);
    const handelShow = (item) => {

      pasta.map((item)=>{
        return item.active = false
     })
     item.active = true;
     setPastas([...pasta]);

     kentakis.map((item)=>{
      return item.active = false
     })
     item.active = true;
     setKentakis([...kentakis]);

     sandwich.map((item)=>{
      return item.active = false
        })
      item.active = true;
      setSandwich([...sandwich]);

     lists.map((item)=>{
        return item.active = false
     })
     item.active = true;
     setLists([...lists])
    }
    return( 
         <>
          <HeaderMaroll />
          <motion.h2 initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1',type:'spring'}} className="font-[IranNastaliq] text-center font-semibold text-[2rem]"><Link to={'/marollfood'}>کافه رستوران مارول</Link></motion.h2>
         <motion.div initial={{y:'700px'}} animate={{y:'0'}} transition={{duration:'1.5', type:'spring'}} className="gap-4 md:h-[70vh] h-[65vh] overflow-y-auto mt-3 w-[90%] mx-auto  my-6">
          <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">غذااصلی</p>
           {foodAsli.map((item)=>{
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
            <PastaComponent foodasli={lists} setfoodasli={setLists} pasta={pastas} setpasta={setPastas} kentakii={kentakis} setkentakii={setKentakis} sandwichh={sandwich} setsandwichh={setSandwich}   />
            <KfcComponent foodasli={lists} setfoodasli={setLists} kentakii={kentakis} setkentakii={setKentakis} pasta={pastas} setpasta={setPastas} sandwichh={sandwich} setsandwichh={setSandwich}  />
            <Sandwich sandwichh={sandwich} setsandwichh={setSandwich} foodasli={lists} setfoodasli={setLists} pasta={pastas} setpasta={setPastas} kentakii={kentakis} setkentakii={setKentakis} />
           </motion.div>    
           <MenuMaroll/>
         </>
      )
};
export const PastaComponent = ({pasta,setpasta, kentakii, setkentakii, foodasli, setfoodasli, sandwichh, setsandwichh}) => {
     
      const handelShow = (item) => {

        
        kentakii.map((item)=>{
          return item.active = false
         })
         item.active = true;
         setkentakii([...kentakii]);

         sandwichh.map((item)=>{
          return item.active = false
            })
          item.active = true;
          setsandwichh([...sandwichh]);

         foodasli.map((item)=>{
          return item.active = false
       })
       item.active = true;
       setfoodasli([...foodasli])


       pasta.map((item)=>{
          return item.active = false
       })
       item.active = true;
       setpasta([...pasta])
      }
  
  return(
      <>
       <div>
       <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">پاستا</p>
         {pasta.map((item)=>{
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
       </div>
      </>
  )
};
export const KfcComponent = ({kentakii,setkentakii, pasta, setpasta, foodasli, setfoodasli, sandwichh, setsandwichh}) => {

      const handelShow = (item) => {

        pasta.map((item)=>{
          return item.active = false
       })
       item.active = true;
       setpasta([...pasta]);

       sandwichh.map((item)=>{
        return item.active = false
          })
        item.active = true;
        setsandwichh([...sandwichh]);

       foodasli.map((item)=>{
        return item.active = false
     })
     item.active = true;
     setfoodasli([...foodasli])


        kentakii.map((item)=>{
               return item.active = false
              })
              item.active = true;
              setkentakii([...kentakii])
           
      }


  return(
      <>
      <div>
      <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">کنتاکی</p>
         {kentakii.map((item)=>{
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
      </div>
      
      </>
  )
};
export const Sandwich = ({pasta,setpasta, kentakii, setkentakii, foodasli, setfoodasli, sandwichh, setsandwichh}) => {
     
  const handelShow = (item) => {

    
    kentakii.map((item)=>{
      return item.active = false
     })
     item.active = true;
     setkentakii([...kentakii])

     foodasli.map((item)=>{
      return item.active = false
   })
   item.active = true;
   setfoodasli([...foodasli])


   pasta.map((item)=>{
      return item.active = false
   })
   item.active = true;
   setpasta([...pasta]);


   sandwichh.map((item)=>{
    return item.active = false
      })
    item.active = true;
    setsandwichh([...sandwichh]);


  }

return(
  <>
   <div>
   <p className="font-[IranNastaliq] text-center text-[1.8rem] my-2">ساندویج و گریل</p>
     {sandwichh.map((item)=>{
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
   </div>
  </>
)
};
export default FoodAsli;