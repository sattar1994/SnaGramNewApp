import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';
const MenuMaroll = () => {
    return(
        <>
        
         <motion.div initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'2', type:'spring'}} className=" bg-white w-[90%] font-[IranSans] overflow-x-auto whitespace-nowrap border-t-2 border-green-700 rounded-md p-3 mx-auto m-2 text-[.9rem]">
            
                <div className="flex justify-between font-semibold gap-5">
                <NavLink to={'/marollfood/غذااصلی'}>غذااصلی</NavLink>
                <NavLink to={'/marollfood/پیتزا'}>پیتزا</NavLink>
                <NavLink to={'/marollfood/پیش غذا'}>پیش غذا</NavLink>
                <NavLink to={'/marollfood/نوشیدنی'}>نوشیدنی</NavLink>
                <NavLink to={'/marollfood/دسروبستنی'}>دسروبستنی</NavLink>
                <NavLink to={'/marollfood/بارسرد'}>بارسرد</NavLink>
                <NavLink to={'/marollfood/بارگرم'}>بارگرم</NavLink>
                </div>
            
         </motion.div>
        </>
    )
};

export default MenuMaroll;