import ItemsNavbars from './ItemsNavbars'
import { Link } from 'react-router-dom';

export default function NavBars({underline}){

    
    return(
        <>
            <div className='flex'>
                <ItemsNavbars >
                    <Link to={'/'}><p className={underline=='home' ? 'underline' : 'no-underline'}>Home</p></Link>
                </ItemsNavbars>

                <ItemsNavbars>
                    <Link to={'/produtos'}><p className={underline=='produtos' ? 'underline' : 'no-underline'} >Produtos</p></Link>
                    
                </ItemsNavbars>

                <ItemsNavbars>
                    <Link to={'/categorias'}><p className={underline=='categorias' ? 'underline' : ''}>Categorias</p></Link>
                    
                </ItemsNavbars>

                <ItemsNavbars>
                    <Link to={'/meus-pedidos'}><p className={underline=='meus-pedidos' ? 'underline' : ''}>Meus Pedidos</p></Link>
                    
                </ItemsNavbars>
            </div>
        </>
    );
};