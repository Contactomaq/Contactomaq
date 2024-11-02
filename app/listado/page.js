"use client";
import { useState } from "react";
import vehicles from "../Data/vehicles"; // Asegúrate de que la ruta sea correcta
import Card from "../components/Card";

export default function Listado({ onProductSelect }) {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (vehicle) => {
    setSelectedCard(vehicle.id);
    onProductSelect(vehicle);
    
  
    window.scrollTo({
      top: window.scrollY + 300,
      behavior: 'smooth',
    });
  };

  const vehicleList = vehicles.map((v) => {
    const isSelected = selectedCard === v.id;

    return (
      <Card 
        key={v.id}
        title={v.name} 
        description={v.description} 
        index={v.id}
        onClick={() => handleCardClick(v)} 
        style={{
          backgroundColor: isSelected ? '#2c3e50' : '#fff', // Cambia a un color más oscuro
          transition: 'background-color 0.3s',
        }}
      />
    );
  });

  return (
    <div className="App">
      <h2 className="text-3xl font-bold text-center py-4" style={{
        backgroundImage: 'linear-gradient(to right, #c8bdba, #a49d9b)',
        WebkitBackgroundClip: 'text',
        textShadow: '0 0 5px rgba(255,255,255,0.5)'
      }}>
        Repuestos para cada una de las máquinas
      </h2>
      <h3 className="text-lg font-semibold text-center py-4" style={{  color: '#2c3e50'}}>Haz clic en las categorías para ver más.</h3>
      <div className="container">{vehicleList}</div>
    </div>
  );
}
