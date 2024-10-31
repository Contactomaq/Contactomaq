"use client"
import vehicles from "../Data/vehicles"; // Asegúrate de que la ruta sea correcta
import Card from "../components/Card";

export default function Listado({ onProductSelect }) {
  const vehicleList = vehicles.map((v) => {
    return (
      <Card 
        key={v.id}
        title={v.name} 
        description={v.description} 
        index={v.id}
        onClick={() => onProductSelect(v)} 
      />
    );
  });

  return (
    <div className="App">
      <h2 className="text-3xl font-bold text-center py-8" style={{
        backgroundImage: 'linear-gradient(to right, #c8bdba, #a49d9b)',
        WebkitBackgroundClip: 'text',
        color: '#2c3e50',
        textShadow: '0 0 5px rgba(255,255,255,0.5)'
      }}>
        Repuestos para cada una de las máquinas
      </h2>
      <div className="container">{vehicleList}</div>
    </div>
  );
}
