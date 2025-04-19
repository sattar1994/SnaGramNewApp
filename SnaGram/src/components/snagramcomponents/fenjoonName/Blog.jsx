import Header from '../Header';
import NavBar from '../NavBar'
import {motion} from 'framer-motion';
import BlogList from './BlogList';
import Posts from './Posts';

const blogItemContent = [
    {id:1, title:" طرزتهیه لاته درخانه بدون دستگاه _ فوم دار و خوشمزه", introduction: "تصورکن یه صبح خنک رو بابوی قهوه و فوم نرم شیر شروع میکنی, اونم نه توی یه کافه لاکچری بلکه روی میز آشپزخونه خودت... امروز قراره باهم یه لاته واقعی درست کنیم بدون هیچ دستگاه خاصی فقط با ابزار ساده که همه توخونه داریم!", 
      titleIngrediant:"مواد لازم :",ingrediants1:"قهوه آسیاب شده (ترجیحا اسپرسو یا فرانسه)",ingrediants2:"آب جوش", ingrediants3:"شیر",tools1:"فرنچ پرس یا صافی معمولی (برای صاف کردن قهوه)", tools2:"شیشه درب دار برای فوم سازی شیر", tools3:"کتری یا هرچیزی برای داغ کردن آب و شیر",titleDescription:"طرزتهیه مرحله به مرحله : ",desc1:'اگه فرنچ پرس داری قهوه رو بریزداخلش آب جوش بریزتوش وبذار 3 الی  4 دقیقه بمونه. بعد فشاربده و بریز تولیوانت. اگه فرنچ پرس نداری قهوه رو بریزداخل یک ماگ , آب جوش بریز روش بعد با صافی قهوه رو صاف کن.',desc2:"شیرروبریز توشیشه درشومحکم ببند و حدود 40 ثانیه خوب تکون بده تا کف کنه بعد درشوبازکن و بذار حدود 30 ثانیه توی ماکروویو یا روی شعله ملایم تا گرم شه و فومش محکمتربشه.", desc3:"قهوه رو توی ماگ بریز . حالا آروم آروم شیر رو بهش اضافه کن و فوم رو با قاشق بنداز روی نوشیدنی",image:'/images/lateArt.webp' },
    {id:2, title:" طرزتهیه موکا در منزل", introduction: "موکا یه نوشیدنی ترکیبی بین قهوه و شکلاته. توی ورژن خنکش هم خستگی میپره, هم گرما! مناسب برای روزهای داغ تابستانی.", 
      titleIngrediant:"مواد لازم :",ingrediants1:"قهوه اسپرسودبل",ingrediants2:"شیر سرد", ingrediants3:"پودریاسس شکلات",tools1:"یخ", tools2:"شکلات چیپ یا پودر کاکائو برای تزئین", titleDescription:"طرزتهیه مرحله به مرحله : ",desc1:'قهوت رو آماده کن(اسپرسویافرنچ پرس یاهرچی بلدی)',desc2:"شکلات رو با قهوه ترکیب کن تا خوب حل بشه.", desc3:"شیرویخ رو بریز توی مخلوط کن یا شیکر",desc4:"قهوه شکلاتی رواضافه کن و حدود20ثانیه مخلوط کن.",desc5:"بریزتوی لیوان خامه روبریزروش و پودرکاکائوبپاش روش.",image:'/images/moca.webp' },
];

const Blog = () => {
  return (
    <>
    <Header />
    <NavBar />
        <h2 className="font-[IranNastaliq] text-[1.5rem] text-center "> زیرسقف کافه</h2>
      <motion.section initial={{x:'900px'}} animate={{x:'0'}} transition={{duration:'1', type:'spring'}} className='bg-white w-[90%] mx-auto m-2 p-2 rounded-md shadow-black shadow dark:bg-black dark:shadow-sm dark:shadow-white' >
        <h3 className='font-[IranNastaliq] text-[1.5rem] text-center'>زیر سقف کافه : جایی برای مزه کردن زندگی</h3>
        <h4 className='font-[IranSans] font-semibold mt-3 text-[.8rem] '>معرفی : </h4>
        <p className='font-[IranSans] font-extralight mt-1 text-[.8rem]'>اینجا توی<span className='font-semibold'> سنه گرام «زیر سقف کافه»</span> فقط یه بلاگ نیست؛ یه گوشه دنج برای همه آدماییه که به نوشیدنی های خاص علاقه دارن چه توی خونه باشن, چه وسط یه کافه خلوت تو دل شهر.</p>
        <p className='font-[IranSans] font-extralight text-[.8rem]'>مااینجا هرماه ازفرمول نوشیدنی ها میگیم از رازهای ساده دم دستی اما خاص و از غذاهای سبک و <span className='font-bold'>ترفندهایی که کافه ها استفاده میکنن</span> وتوهم میتونی اجراشون کنی حتی توی خونه خودت!</p>
      </motion.section>
       <motion.section initial={{y:'-900px'}} animate={{y:'0'}} transition={{duration:'1', type:'spring'}}>
        <Posts />
       </motion.section>
       <div className='flex flex-wrap gap-1 w-[90%] mx-auto'>
       {blogItemContent.map((item)=>{
        return  <BlogList key={item.id} title={item.title} introduction={item.introduction} titleIngrediant={item.titleIngrediant} ingrediants1={item.ingrediants1} ingrediants2={item.ingrediants2} ingrediants3={item.ingrediants3} tools1={item.tools1} tools2={item.tools2} tools3={item.tools3} titleDescription={item.titleDescription} desc1={item.desc1}  desc2={item.desc2} desc3={item.desc3} desc4={item.desc4} desc5={item.desc5} image={item.image} />
       })}
       </div>

    </>
  );
};

export default Blog;
