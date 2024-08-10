import { CiSearch } from "react-icons/ci";

export default function CampoBusca(){
    return(
        <>
            <form action="#" method="get" className="flex items-center relative">
                <input type="text" className="w-[500px] h-[40px] rounded " />

                <button className="absolute right-0 w-[30px] h-[30px] ">
                    <CiSearch className="w-[80%] h-[80%]"/>
                </button>
            </form>
        </>
    );
}