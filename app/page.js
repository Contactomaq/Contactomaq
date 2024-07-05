
import React from "react";
import "./globals.css";
import WhatsappIcon from "./components/WhatsappIcon";
import ModalImages from "./components/ModalPagesImages";
import HeroSection from "./components/HeroSection";
import Section3 from "./components/SectionPage3";
import Section4 from "./components/SectionPage4";
import Section5 from "./components/SectionPage5";
import Section6 from "./components/SectionPage6";
import TitlePage from "./components/SectionPageTitle";





export default function Home  ()  {

  
  
  return (
<>
<HeroSection/>

<WhatsappIcon />


<div className="flex justify-center bg-black">
  <ModalImages />
</div>


<div className="bg-gray-300">
 <Section3/>
</div>











<div className="bg-black rounded-lg p-6">
   <TitlePage/>
</div>









<div className="bg-gradient-to-r from-red-600 to-orange-300">
 <Section4/>
</div>








    <div className="bg-gray-200">
      <Section5/>
    </div>





    

<div className="bg-white py-24 sm:py-32">
<Section6/>
</div>


    </>

    );
  
};
