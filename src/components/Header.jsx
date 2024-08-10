import Logo from "./Logo";
import CampoBusca from "./CampoBusca";
import CampoConta from "./CampoConta";
import NavBars from "./NavBars";

export default function Header({underline}){
    return(
        <>
            <div className=" flex flex-col pt-[20px] pb-[10px] justify-between px-[40px] w-full h-[160px] bg-[#B5B6F2]">
                <div className="flex justify-between items-center w-[100%]" >
                    <Logo/>
                    <CampoBusca/>
                    <CampoConta/>
                    <img src="../public/assets/mini-cart.svg" alt="" className="w-[25px] h-[25px]" />
                </div>
                <div className="">
                    <NavBars underline={underline}/>
                </div>
            </div>
        </>
    );
}