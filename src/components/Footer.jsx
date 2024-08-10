
import LogoFooter from './LogoFooter'
import RedeSocial from './RedeSocial'
import Informacoes from './Informacoes'
import json from '../json/informations.json';
console.log(json.map((json) =>json))

export default function Footer(){
    return(
        <div className="bg-[#1F1F1F] flex flex-col justify-between text-[#FFFFFF] h-[200px] w-[100%] py-[20px] px-[80px]">
            <div className='flex h-[120px] gap-[80px] w-full'>
                <div className='flex flex-col justify-around w-[170px]'>
                    <LogoFooter/>
                    <div className='w-[170px] text-justify line-clamp-3 text-[10px]'>
                        <p>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Exercitationem, deleniti enim vel quisquam qui iste itaque in aliquid aliquam maiores! Reprehenderit repellat, commodi eos molestias sed sint nobis pariatur eius!</p>
                    </div>
                    <div className='flex gap-[20px]'>
                        <RedeSocial profile='instagram'/>
                        <RedeSocial profile='facebook'/>
                        <RedeSocial profile='twitter'/>
                    </div>
                </div>
                
                <div className='flex justify-around w-full'>
                    {json.map((json) =><Informacoes title={json.title} key={parseInt(Math.random()*10)} informations={json.text}/>)}

                </div>
            </div>

            <div className='text-center text-[14px]'>   
                <hr className='mb-[10px]'/>
                <p>© 2024 Digital Store</p>
            </div>           
        </div>

    );
}