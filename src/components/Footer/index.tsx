import logoS from '../../assets/logosemfundo.png'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export function Footer(){
    return(
        <footer className="flex flex-col items-center justify-center mt-10 text-white bg-slate-700 h-72">
            <h1 className='text-center text-xl mb-4 mt-4'>Fale conosco em nossas redes sociais!</h1>
            <div className='flex items-center justify-center gap-4'>
                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de "
                    target='_blank'
                    >
                        <FaWhatsapp class='FaWhatsapp' size={35} style={{color: '#25d366'}}/>
                </a>

                <a 
                    className='hover:scale-125 hover:transition-all' 
                    href="https://https://www.instagram.com/"
                    target='_blank'
                    >
                        <FaInstagram class='FaWhatsapp' size={35} style={{color: '#BE2E85'}}/>
                </a>
            </div>
            <img src={logoS} alt="Logo" className='w-72 ' />
            <h1 className='sm:text-lg text-sm mb-5'>Copyright | KPPNEUS - Todos os direitos reservados</h1>
        </footer>
    )
}