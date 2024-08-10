
export default function Informacoes({title,informations}){
 
    return(
        <>
            <div className="flex flex-col items-center w-[200px] h-[120px] rounded-lg py-[10px] bg-[#ffffff] text-black">
                <h1 className=" h-[30%] font-semibold">{title}</h1>
                <div className="h-[70%] text-[14px] px-[10px] text-center">
                    {informations}
                </div>
            </div>
        </>
    );
}