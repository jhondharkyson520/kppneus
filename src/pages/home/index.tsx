
import { Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from 'react';
import { register } from 'swiper/element/bundle'
import { Link } from 'react-router-dom';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import 'swiper/swiper-bundle.css';
import Logo from '../../assets/logo.png'
import WhatsAppButton from '../../components/ButtonWhatsApp';

import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
SwiperCore.use([Autoplay]);

import imageSlider1 from '../../assets/pneus/pneu-remold-remoldado-refrisagem-refrisado.webp'
import imageSlider2 from '../../assets/pneus/caminhao.png'
import imageSlider3 from '../../assets/pneus/maopneu.jpg'


import imgRodas from '../../assets/pneus/rodas.jpg'
import imgCarga from '../../assets/pneus/pneucaminhao.jpg'
import imgFiltros from '../../assets/pneus/filtroselubrificantes.webp'
import imgAgro from '../../assets/pneus/pneuagro.webp'
import imgMoto from '../../assets/pneus/moto.jpg'
import imgBorracharia from '../../assets/pneus/itensborracharia.webp'


export function Home(){

    const [sliderPerView, setSliderPerView] = useState<number>();
    const [sliderProducts, setSliderProducts] = useState<number>(4);

    useEffect(() => {
        function handleResize(){
          if(window.innerWidth < 720){
            setSliderPerView(1);
          }else{
            setSliderPerView(1);
          }
        }
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return() => {
          window.removeEventListener("resize", handleResize);
        }
      }, []);

      useEffect(() => {
        function handleResizeProducts(){
          if(window.innerWidth < 720){
            setSliderProducts(1);
          }else{
            setSliderProducts(4);
          }
        }
    
        handleResizeProducts();
    
        window.addEventListener("resize", handleResizeProducts);
    
        return() => {
          window.removeEventListener("resize", handleResizeProducts);
        }
      }, []);
    
    

    return(
        <div className='w-full max-w-7xl mx-auto px-4 mt-10 sm:mt-20'>
          <WhatsAppButton/>
            <Swiper 
            className='shadow-2xl rounded-lg'         
            slidesPerView={sliderPerView}
            pagination={{ clickable: true }}
            navigation
            loop={true} 
            autoplay={{
              delay: 2000, 
              disableOnInteraction: true, 
            }}
          >          
                <SwiperSlide>                  
                  <img 
                    src={imageSlider1} 
                    alt="Imagem01"
                    className='w-full h-96 object-cover' 
                  />
                </SwiperSlide>

              <SwiperSlide>
                  <img 
                    src={imageSlider2} 
                    alt="Imagem01"
                    className='w-full h-96 object-cover' 
                  />
              </SwiperSlide>

              <SwiperSlide>
                  <img 
                    src={imageSlider3} 
                    alt="Imagem01"
                    className='w-full h-96 object-cover' 
                  />
              </SwiperSlide>
          </Swiper>

          <div className='flex flex-col sm:flex-row mt-20 justify-center shadow-2xl'>
            <div style={{backgroundColor: '#FFF'}} className='sm:w-1/2 justify-center py-5 items-center flex rounded-s-lg'>
                    
                      
                    <span className='font-medium text-xl flex flex-col mt-10 ml-10'>
                      <strong className='font-bold text-2xl'>Espaço</strong>
                      Um espaço completamente equipado e pronto para receber você e o seu caminhão. 
                      Equipe capacitada, serviços de ponta e produtos das melhores marcas para a sua 
                      frota ou veículo rodarem com qualidade e segurança.
                    </span>
            </div>
              <div className='relative sm:w-1/2'>

                <img 
                  src={Logo} 
                  alt="Logo" 
                  className='rounded-e-lg'              
                  
                />
                
              </div>
          </div>

          <h1 className='font-bold text-2xl  mt-10 text-center'>Conheça nossos produtos</h1>

          <div className='mt-7 shadow-2xl rounded-lg'>
              <Swiper          
                slidesPerView={sliderProducts}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={30}            
                
                className='bg-white rounded-lg'
                
              >          
                  <SwiperSlide className=' hover:text-amber-400 shadow-2xl'>
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Pneus de Carga</p>
                      </Link><img 
                        src={imgCarga} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all' 
                      />
                      
                    </SwiperSlide>

                    <SwiperSlide className=' hover:text-amber-400 shadow-2xl '>
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Filtros e Lubrificantes</p>
                      </Link><img 
                        src={imgFiltros} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all'
                      />
                     </SwiperSlide> 

                    <SwiperSlide className=' hover:text-amber-400 shadow-2xl '>
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Pneus Agro</p>
                      </Link><img 
                        src={imgAgro} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all' 
                      />                      
                    </SwiperSlide>

                    <SwiperSlide className=' hover:text-amber-400  shadow-2xl'>
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Pneus de Moto</p>
                      </Link><img 
                        src={imgMoto} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all'
                      />                      
                    </SwiperSlide>

                    <SwiperSlide className=' hover:text-amber-400 shadow-2xl'>                  
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Borracharia</p>
                      </Link><img 
                        src={imgBorracharia} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all'
                      />                      
                    </SwiperSlide>

                    <SwiperSlide className=' hover:text-amber-400 shadow-2xl'>
                      <Link to='/products'>
                        <p className='font-medium text-xl text-center cursor-pointer mb-7 mt-7 hover:scale-105'>Rodas</p>
                      </Link>
                      <img 
                        src={imgRodas} 
                        alt="Imagem01"
                        className='w-full h-96 object-cover rounded-lg shadow-2xl hover:scale-105 hover:transition-all'
                      />                     
                      
                  </SwiperSlide>
              </Swiper>

          </div>

          <div className='mt-10 rounded-lg'>
            <h1 className='text-center mb-5 font-bold text-2xl'>Onde estamos</h1>
            <iframe
                  id='onde'
                  width="100%" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.454078099182!2d-49.20664252546679!3d-20.281463649347877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bcddaa5ba1111d%3A0xa9dabde054b21a18!2sSorveteria%20Pinguim!5e0!3m2!1spt-BR!2sbr!4v1690738433326!5m2!1spt-BR!2sbr" 
                  style={{border:0, height: 400}} 
                  className='rounded-lg'
                  
                  loading="lazy">
              </iframe>
          </div>         

        </div>
    )
}