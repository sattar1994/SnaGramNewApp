import { motion } from 'framer-motion';
const listImage = [
    {image:"/images/fazamaroll.webp"},
    {image:"/images/bergermaroll.webp"},
    {image:"/images/pitz.webp"},
    {image:"/images/cacke.webp"},
    {image:"/images/mojito.webp"},
    {image:"/images/chicnchilichiz.webp"},
    {image:"/images/pitza.webp"},
    {image:"/images/redmojito.webp"},
    {image:"/images/sezarsalad.webp"},
];
const GaleryMaroll = () => {
    return(

        <>
       
        <motion.h2 initial={{y:'900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="text-center font-[IranNastaliq] text-[2rem] animate-bounce">کافه رستوران مارول</motion.h2>
        
        <motion.div initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className="w-[90%] flex gap-2 mx-auto p-2  my-1 h-[50vh] overflow-y-auto">
              {listImage.map((item)=>{
                return <img loading='lazy' alt='منو کافه رستوران مارول' key={item.image} src={item.image} className="rounded-md shadow-black shadow-sm" />
              })}
        
        </motion.div>
       
        </>
    )
};

export default GaleryMaroll;