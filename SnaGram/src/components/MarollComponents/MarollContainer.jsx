
import AddresMaroll from "./AddresMaroll";
import GaleryMaroll from "./GaleryMaroll";
import HeaderMaroll from "./HeaderMaroll";
import MenuMaroll from "./MenuMaroll";
import Wellcome from "./Wellcom";



const MarollContainer = () => {
    return(
        <>
         <div className="overflow-hidden">
         <HeaderMaroll />
         <Wellcome />
         <MenuMaroll />
         <GaleryMaroll />
         <AddresMaroll />
         </div>
        </>
    )
};

export default MarollContainer;