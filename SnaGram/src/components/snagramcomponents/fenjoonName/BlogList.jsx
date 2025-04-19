import {motion} from 'framer-motion'
import { useState } from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
const BlogList = ({title, introduction, titleIngrediant, ingrediants1, ingrediants2, ingrediants3, tools1, tools2, tools3, titleDescription, desc1, desc2, desc3,desc4,desc5, image}) => {
    const [show, setShow] = useState(false);
    return(
        <>
         <div className='md:w-[33%]'>
         <motion.div initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}} className=" shadow-sm shadow-black rounded-md p-2 mb-2">
            <h2 className="font-[IranSans] font-semibold text-center text-[.8rem]">{title}</h2>
            <LazyLoadImage effect='blur' className="w-[100%] mx-auto rounded-md my-2" src={image} alt="لاته خونگی بدون دستگاه همراه با فوم شیر" />
             <h4 className="font-[IranSans] text-[.8rem]">{introduction}</h4>
             <button onClick={()=>setShow(!show)} className='font-[IranSans] bg-gray-200 rounded-sm text-[.7rem] p-1'>{show ? 'بستن مطالب...' : 'ادامه مطالب...'}</button>
          
           {
                show ? <div>
                <ul className='font-[IranSans] text-[.7rem] sm:text-[.8rem]'>
                    <li className='font-bold '>{titleIngrediant}</li>
                    <table className=' text-center w-full border border-gray-400 '>
                        <thead>
                            <tr className='bg-gray-100'>
                                <th className='border p-1 border-gray-300'>ردیف</th>
                                <th className='border p-1 border-gray-300'>عنوان</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-400 bg-gray-100'>1</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{ingrediants1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-400 bg-gray-100'>2</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{ingrediants2}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-400 bg-gray-100'>3</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{ingrediants3}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-400 bg-gray-100'>4</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{tools1}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-400 bg-gray-100'>5</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{tools2}</td>
                            </tr>
                            {tools3 ? <tr>
                                <td className='border border-gray-400 bg-gray-100'>{tools3 ? `6` : null}</td>
                                <td className='border border-gray-300 hover:bg-gray-100 p-1'>{tools3 ? tools3 : null}</td>
                            </tr> : null}
                        </tbody>
                    </table>
                </ul>
                <ul className='font-[IranSans] text-[.8rem] mt-2 text-justify '>
                    <li className='font-bold '>{titleDescription}</li>
                    <li>1: {desc1} </li>
                    <li>2: {desc2} </li>
                    <li>3: {desc3} </li>
                    <li>{desc4 ? `4: ${desc4}` : null} </li>
                    <li>{desc5 ? `5: ${desc5}` : null} </li>
                </ul>
                 </div> : null
             }
        
            
         </motion.div>
         </div>
        </>
    )
};

export default BlogList;