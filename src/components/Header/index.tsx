import { Link } from 'react-router-dom'
import logoS from '../../assets/logosemfundo.png'

export function Header(){
    return(
        <header style={{backgroundColor: '#4F5B68'}} className='  shadow-2xl w-full flex mt-10 items-center justify-center h-16 drop-shadow mb-4'>
            <nav className='flex w-full items-center justify-between px-4 mx-auto shadow-2xl '>
              <div className='flex justify-between'>
                <div className='w-full scale-50 justify-center items-center flex' >
                        <Link to='/'>
                            <img 
                            src={logoS} 
                            alt="Logo do site"
                            className='relative'
                            />
                        </Link>
                    </div>

                <div className='w-full flex gap-10 items-center justify-center text-white font-bold  '>
                        <Link 
                            to='/sobre'
                            className='cursor-pointer hover:text-amber-400 '
                        >
                            Sobre
                        </Link>

                        <Link to='/services' className='cursor-pointer hover:text-amber-400'>
                            Serviços
                        </Link>

                        <Link to='/consertos' className='cursor-pointer hover:text-amber-400'>
                            Consertos
                        </Link>

                        <Link to='/products' className='cursor-pointer hover:text-amber-400'>
                            Produtos
                        </Link>

                        <Link to='/contact' className='cursor-pointer hover:text-amber-400'>
                            Contato
                        </Link>
                </div>
              </div>
            </nav>
        </header>
    )
}