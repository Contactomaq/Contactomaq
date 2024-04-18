"use client"
import React from "react";
import Image from "next/image";

function VehicleView({ vehicle }) {
  return (
    <div className="VehicleView">
      <h1 className="text-xl font-bold mb-2">{vehicle.name}</h1>
      <h2 className="text-lg text-gray-700 mb-4">{vehicle.description}</h2>
      <div className="relative w-full h-72">
        <Image
          src={vehicle.image}
          alt={vehicle.name + " src"}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
}

export default VehicleView;
