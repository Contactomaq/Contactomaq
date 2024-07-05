import React from "react";
import Image from "next/image";
const Section6 = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-lg font-semibold leading-8 text-gray-900">Algunas de las marcas con las que trabajamos</h2>
<div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
<Image  width={100} height={100} src="/sthil1.png" alt="Transistor"  />
<Image src="/husqvarna1.png" alt="Reform" width={100} height={100} />
<Image width={100} height={100} src="/brigs1.png" alt="brigs"/>
<Image src="https://http2.mlstatic.com/D_NQ_NP_810163-MLA25817120547_072017-O.webp" width={100} height={100} alt="SavvyCal" />
<Image  src="https://www.molamaq.com/todohusqvarna/uploads/brands/niwa.png" alt="Statamic" width={100} height={100} />
</div>
</div>
    )
};

export default Section6