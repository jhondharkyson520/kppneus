import imgPneus from '../../assets/pneus/pneusdiversos.webp'
import imgConserto from '../../assets/pneus/conserto.jpg'
import WhatsAppButton from '../../components/ButtonWhatsApp'

export function Consertos() {

    function handleClick(){
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
                    <h1 className="text-4xl font-bold absolute ml-6 text-amber-500">Consertos</h1>
                </div>
            </div>

            <span className='flex flex-col sm:flex-row mt-20 text-slate-800 text-lg justify-center px-4 '>
                Qualidade e tecnologia, com técnicas exclusivas de reparo em pneus Carga, Agro e OTR.
                Duplagem de pneus Agro e OTR com produtos de alto desempenho, melhorando a resistência
                do seu pneu contra danos em operações mais severas.
            </span>

            <div className='flex flex-col sm:flex-row mt-10 justify-center px-4 '>

                <div

                    className='sm:w-1/2 justify-center py-5 items-center flex flex-col px-4 bg-slate-700'
                >

                    <h1 className='font-medium text-3xl items-center text-amber-500 text-center mt-10 ml-10 mb-10'>
                        Técnicas exclusivas de reparo em pneus de Carga e Agro você encontra aqui!
                    </h1>
                    <span className='font-medium text-xl items-center text-center mt-10 ml-10 mb-10'>
                        Garanta rentabilidade com o melhor custo-benefício do mercado.
                    </span>

                    <button
                        onClick={handleClick}   
                        className='bg-amber-400 p-4 text-slate-800 font-bold rounded-3xl shadow-2xl hover:scale-105 hover:transition-all hover:bg-amber-500'
                    >
                        Fale conosco e tire suas dúvidas
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