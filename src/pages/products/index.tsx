import imgPneus from '../../assets/pneus/pneusdiversos.webp'
import imgConserto from '../../assets/pneus/conserto.jpg'
import WhatsAppButton from '../../components/ButtonWhatsApp'
import imgCarga from '../../assets/pneus/pneucaminhao.jpg'
import imgFiltros from '../../assets/pneus/filtroselubrificantes.webp'
import imgAgro from '../../assets/pneus/pneuagro.webp'
import imgMoto from '../../assets/pneus/moto.jpg'
import imgBorracharia from '../../assets/pneus/itensborracharia.webp'
import { Link } from 'react-router-dom'

export function Products() {

    function handleClick() {
        window.location.href = 'https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de';
    };

    return (
        <div className="w-full mx-auto">
            <WhatsAppButton />

            <div className='relative'>

                <div className='relative'>
                    <img
                        src={imgPneus}
                        alt="Borracheiro"
                        className='w-full h-96 shadow-2xl grayscale'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-center'>
                    <h1 className="text-4xl font-bold absolute ml-6 text-amber-500">Nossos produtos</h1>
                </div>
            </div>



            <div
                className='relative mt-7 sm:flex sm:flex-row flex flex-col px-4 gap-5 
                items-center justify-center rounded-lg'
            >

                <div
                    className='relative flex flex-col justify-center bg-white border-slate-700 
                    border-2 w-full h-auto rounded-ss-3xl rounded-ee-3xl shadow-2xl 
                    hover:transition-all'
                >
                    <Link
                        target='_blank' 
                        to='https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de'
                        className='justify-center items-center flex flex-col rounded-ss-3xl  
                        bg-amber-300 shadow-lg'
                    >
                        <h1 
                            className='py-3 text-center hover:scale-110 font-medium text-xl 
                            hover:transition-all text-slate-800 hover:text-slate-500'
                        >
                            Pneus de carga
                        </h1>
                    </Link>
                        <img
                            src={imgCarga}
                            alt="Pneus de carga"
                            className='mt-7 relative rounded-ee-3xl'
                        />
                    
                </div>



                <div
                    className='relative flex flex-col justify-center border-2 border-slate-700
                    bg-white w-full h-auto rounded-ss-3xl rounded-ee-3xl shadow-2xl 
                    hover:transition-all'
                >
                    <Link
                        target='_blank'  
                        to='https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de' 
                        className='justify-center items-center flex flex-col rounded-ss-3xl  
                        bg-amber-300 shadow-lg'
                    >
                        <h1 
                            className='py-3 text-center hover:scale-110 font-medium text-xl 
                            hover:transition-all text-slate-800 hover:text-slate-500'
                        >
                            Filtros e Lubrificantes
                        </h1>
                    </Link>
                        <img
                            src={imgFiltros}
                            alt="Filtros e lubrificantes"
                            className='mt-7 rounded-ee-3xl'
                            
                        />
                    
                </div>



                <div
                    className='relative flex flex-col justify-center border-2 border-slate-700
                    bg-white w-full h-auto rounded-ss-3xl rounded-ee-3xl shadow-2xl 
                    hover:transition-all'
                >
                    <Link 
                        target='_blank' 
                        to='https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de' 
                        className='justify-center items-center flex flex-col rounded-ss-3xl  
                        bg-amber-300 shadow-lg'
                    >
                        <h1 
                            className='py-3 text-center hover:scale-110 font-medium text-xl 
                            hover:transition-all text-slate-800 hover:text-slate-500'
                        >
                            Pneus Agro
                        </h1>
                    </Link>
                        <img
                            src={imgAgro}
                            alt="Pneus agro"
                            className='mt-7 rounded-ee-3xl'
                        />
                    
                </div>


                <div
                    className='relative flex flex-col justify-center border-2 border-slate-700 
                    bg-white w-full h-auto rounded-ss-3xl rounded-ee-3xl shadow-2xl 
                    hover:transition-all'
                >
                    <Link 
                        target='_blank' 
                        to='https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de' 
                        className='justify-center items-center flex flex-col rounded-ss-3xl  
                        bg-amber-300 shadow-lg'
                    >
                        <h1 
                            className='py-3 text-center hover:scale-110 font-medium text-xl 
                            hover:transition-all text-slate-800 hover:text-slate-500'
                        >
                            Pneus de moto
                        </h1>
                    </Link>
                        <img
                            src={imgMoto}
                            alt="Pneus de moto"
                            className='mt-7 rounded-ee-3xl'
                        />
                    
                </div>



                <div
                    className='relative flex flex-col justify-center border-2 border-slate-700 
                    bg-white w-full h-auto rounded-ss-3xl rounded-ee-3xl shadow-2xl 
                    hover:transition-all'
                >
                    <Link 
                        target='_blank' 
                        to='https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de' 
                        className='justify-center items-center flex flex-col rounded-ss-3xl  
                        bg-amber-300 shadow-lg'
                    >
                        <h1 
                            className='py-3 text-center hover:scale-110 font-medium text-xl 
                            hover:transition-all text-slate-800 hover:text-slate-500'
                        >
                            Borracharia
                        </h1>
                    </Link>
                        <img
                            src={imgBorracharia}
                            alt="iItens de borracharia"
                            className='mt-7 rounded-ee-3xl'
                        />
                    
                </div>


            </div>



            <div className='flex flex-col sm:flex-row mt-10 justify-center px-4 '>

                <div

                    className='sm:w-1/2 justify-center py-5 items-center flex flex-col px-4 bg-slate-700'
                >

                    <h1 className='font-medium text-3xl items-center text-amber-500 text-center mt-10 ml-10 mb-10'>
                        Aqui temos o preço que cabe em seu bolso, faça já seu orçamento!
                    </h1>
                    <span className='font-medium text-xl items-center text-center mt-10 ml-10 mb-10'>
                        Garanta rentabilidade com o melhor custo-benefício do mercado.
                    </span>

                    <button
                        onClick={handleClick}
                        className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                    >
                        Faça seu orçamento aqui!
                    </button>
                </div>

                <div className='relative sm:w-1/2'>

                    <img
                        src={imgConserto}
                        alt="Conserto"
                        className=' h-full'

                    />

                </div>

            </div>

        </div>
    )
}