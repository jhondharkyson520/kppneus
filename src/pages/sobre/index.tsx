import imgBorracheiro from '../../assets/pneus/borracheiro.webp'
import logo from '../../assets/logo.png'
import WhatsAppButton from '../../components/ButtonWhatsApp'

export function Sobre() {
    return (
        <div className="w-full mx-auto">
            <WhatsAppButton/>
            <div className='relative'>
                <div className='relative'>
                    <img
                        src={imgBorracheiro}
                        alt="Borracheiro"
                        className='w-full h-96 shadow-2xl grayscale'
                    />
                </div>
                <div className='absolute top-0 left-0 w-full h-full flex items-center'>
                    <h1 className="text-4xl font-bold absolute ml-6 text-amber-500">Sobre a empresa</h1>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row mt-20 justify-center shadow-2xl px-4'>
                <div className='relative sm:w-1/2'>

                    <img
                        src={logo}
                        alt="Logo"
                        className='rounded-s-lg h-full'

                    />

                </div>
                <div
                    style={{ backgroundColor: '#FFF' }}
                    className='sm:w-1/2 justify-center py-5 items-center flex rounded-e-lg'
                >

                    <span className='font-medium text-xl flex flex-col mt-10 ml-10 mb-10'>
                    Bem-vindo à KPPNEUS Borracharia e Vulcanização de Pneus, sua parceira de confiança 
                    para todas as suas necessidades relacionadas a pneus. Com um compromisso inabalável 
                    com a qualidade e a excelência em serviço, estamos prontos para atender você e o seu 
                    veículo da melhor maneira possível. Nosso legado é construído através de nossa 
                    experiência no setor, e nossa equipe altamente qualificada está sempre pronta para 
                    lidar com qualquer desafio de pneus que você possa enfrentar. Seja uma simples troca, 
                    reparo, vulcanização ou manutenção preventiva, estamos equipados com as ferramentas mais 
                    avançadas e técnicas de ponta para entregar resultados impecáveis. Priorizamos a 
                    segurança dos nossos clientes, e cada pneu que passa por nossas mãos é tratado com o 
                    mais alto padrão de cuidado e precisão. 
                    </span>
                </div>

            </div>

            <div className='mx-auto px-4 mt-10 sm:mt-20 bg-slate-700 h-auto flex flex-col'>
                <h1 className='text-3xl text-amber-400 text-center mt-10'>
                    Comprometimento com a qualidade de nossos serviços
                </h1>

                <span className='mt-10 text-white font-medium mb-10 text-center'>
                    Na KPPNEUS, nosso compromisso com a qualidade é fundamental. 
                    Como líderes em vulcanização de pneus, dedicamos recursos e experiência para garantir 
                    que cada pneu, independentemente do veículo, seja tratado com os mais altos padrões. 
                    Nossa equipe altamente treinada utiliza tecnologia de ponta para entregar resultados 
                    excepcionais e seguros. A segurança dos nossos clientes é nossa principal prioridade, 
                    e estamos empenhados em oferecer serviços confiáveis que mantêm os pneus prontos para 
                    encarar qualquer desafio nas estradas. Escolha a KPPNEUS para qualidade 
                    inigualável em vulcanização de pneus e uma parceria segura nas suas jornadas.
                </span>
            </div>

        </div>
    )
}