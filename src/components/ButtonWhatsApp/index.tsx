import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=5517988334070&text=Olá, Kelvin gostaria de';
  };

  return (
    <div
      className={`fixed bottom-4 right-4 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300 ease-in-out z-50`}
    >
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-110 hover:transition-all"
        onClick={handleClick}        
      >
        <FaWhatsapp size={30}/>
        
      </button>      
      
    </div>
  );
};

export default WhatsAppButton;
