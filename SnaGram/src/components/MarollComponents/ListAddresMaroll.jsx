import { Link } from 'react-router-dom';
const ListAddresMaroll = ({title, image, link}) => {
    return(
        <>
          <footer>
            <div className='flex gap-2 mb-5 items-center'>
                    <img className='md:w-[12%] w-[12%]' src={image}/>
                    <h2 className='text-[.8rem]'><Link target='_blank' to={link}>{title}</Link></h2>
                </div>
          </footer>
        </>
    )
};
export default ListAddresMaroll;