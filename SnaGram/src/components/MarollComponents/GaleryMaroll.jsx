import { motion } from 'framer-motion';

const listImage = [
    {image:"/images/fazamaroll.jpg"},
    {image:"/images/bergermaroll.jpg"},
    {image:"/images/pitz.jpg"},
    {image:"/images/cacke.jpg"},
    {image:"/images/mojito.jpg"},
    {image:"/images/chicnchilichiz.jpg"},
    {image:"/images/pitza.jpg"},
    {image:"/images/redmojito.jpg"},
    {image:"/images/sezarsalad.jpg"},
];
const GaleryMaroll = () => {
    return(

        <>
        <motion.h2 initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="text-center font-[IranNastaliq] text-[2rem] animate-bounce">کافه رستوران مارول</motion.h2>
        <motion.div initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="w-[90%] flex gap-2 mx-auto p-2  my-1 h-[50vh] overflow-y-auto">
              {listImage.map((item)=>{
                return <img key={item.image} src={item.image} className="rounded-md shadow-black shadow-sm " />
              })}
        
        </motion.div>
       
        </>
    )
};

export default GaleryMaroll;