import imgCaminhao from '../../assets/pneus/caminhao.png'
import logo from '../../assets/logo.png'
import WhatsAppButton from '../../components/ButtonWhatsApp'

export function Services() {
    return (
        <div className="w-full mx-auto">
            <WhatsAppButton />
            <div className='relative'>
                <div className='relative'>
                    <img
                        src={imgCaminhao}
                        alt="Borracheiro"
                        className='w-full h-96 shadow-2xl grayscale'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-center'>
                    <h1 className="text-4xl font-bold absolute ml-6 text-amber-500">Nossos serviços</h1>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row mt-20 justify-center px-4'>

                <div
                   
                    className='sm:w-1/2 justify-center py-5 items-center flex rounded-e-lg px-4'
                >

                    <span className='font-medium text-xl flex flex-col mt-10 ml-10 mb-10'>
                        Nosso centro de serviços conta com borracharia, alinhamento e balanceamento,
                        troca de óleo, freio, molas, recapagem e uma enorme variedade de produtos e pneus novos.
                        Para o maior conforto do motorista, disponibilizamos uma sala de descanso para
                        aguardarem a execução dos reparos em seus caminhões.
                    </span>
                </div>

                <div className='relative sm:w-1/2'>

                    <img
                        src={logo}
                        alt="Logo"
                        className='rounded-s-lg rounded-e-lg h-full'

                    />

                </div>

            </div>

        </div>
    )
}