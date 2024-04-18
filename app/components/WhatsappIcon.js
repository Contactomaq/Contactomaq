import React from "react";
import Link from 'next/link';

const WhatsappIcon = () => { 
  return(  

    
   
  
    <div className="fixed bottom-4 right-4 z-50">

      <Link href="https://api.whatsapp.com/send?phone=123345" className="btn-wsp">
        <i className="fab fa-whatsapp text-4xl text-white"></i> {/* Agrega el icono de WhatsApp */}
      </Link>
    </div>
  )
}

export default WhatsappIcon;
