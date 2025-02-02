import { useEffect, useState } from "react";
import PersianDate from "persian-date";
import { motion } from 'framer-motion';

const DateComponent = () => {
  const [date, setDate] = useState(new PersianDate());
  useEffect(()=>{
   const timer = setInterval(()=>{
        setDate(new PersianDate())
    }, 1000)
    return ()=>{
        clearInterval(timer)
    }
  }, [])
  return (
    <>
      <motion.div initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="text-center flex items-center justify-around">
        <h1 className="font-[IranNastaliq] text-[1.7rem]"><span className="ml-1">امروز</span>{date.format("dddd YYYY/MM/DD")}</h1>
        <h1 className="font-[IranSans]">{date.format(" HH:mm:ss")}</h1>
      </motion.div>
    </>
  );
};

export default DateComponent;
