import { Link } from 'react-router-dom'
import logoS from '../../assets/logosemfundo.png'
import logo from '../../assets/logoheader.png'
import { useState } from 'react'

export function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <header className="bg-slate-700 p-4 shadow-2xl h-30 sm:h-36">
            <div className="container mx-auto flex justify-between items-center h-14 ">
                <Link to='/'>
                    <img
                        src={logoS}
                        alt="Logo"
                        className='sm:w-1/2 w-2/3 sm:rounded-s-none mb-0 sm:mt-12 rounded-full '
                        
                    />
                </Link>
                <button
                    className="text-white sm:hidden hover:text-amber-400 sm:mb-0"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        {openMenu ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
                {openMenu && (
                    <div className="sm:hidden fixed inset-0 bg-white h-full z-50">
                        <button
                            onClick={closeMenu}
                            className="absolute top-4 right-4 text-black hover:text-amber-400"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <nav className="flex flex-col items-center justify-center h-full text-2xl  bg-slate-100">


                            <Link to='/sobre'>
                                <a className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Sobre</a>
                            </Link>

                            <Link to='/services'>
                                <a className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Serviços</a>
                            </Link>
                            <Link to='/consertos'>
                                <a href="#" className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Consertos</a>
                            </Link>
                            <Link to='/products'>
                                <a href="#" className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Produtos</a>
                            </Link>
                            <Link to='/contact'>
                                <a href="#" className="text-slate-800 hover:text-amber-400 hover:underline" onClick={closeMenu}>Contato</a>
                            </Link>

                        </nav>
                    </div>
                )}

                <nav className="items-center justify-center h-full space-x-10 hidden md:block sm:mt-16 text-2xl mt-6">


                    <Link to='/sobre'>
                        <a className="text-white hover:text-amber-400">Sobre</a>
                    </Link>
                    <Link to='/services'>
                        <a className="text-white hover:text-amber-400">Serviços</a>
                    </Link>
                    <Link to='/consertos'>
                        <a href="#" className="text-white hover:text-amber-400">Consertos</a>
                    </Link>
                    <Link to='/products'>
                        <a href="#" className="text-white hover:text-amber-400">Produtos</a>
                    </Link>
                    <Link to='/contact'>
                        <a href="#" className="text-white hover:text-amber-400">Contato</a>
                    </Link>

                </nav>
            </div>

        </header>
    )
}