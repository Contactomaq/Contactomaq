import vehicles from "../Data/vehicles"; // Asegúrate de que la ruta sea correcta
import Card from "../components/Card";

function Listado({ onProductSelect }) {
  const vehicleList = vehicles.map((v) => {
    return (
      <Card 
        key={v.id} // Usa v.id para asegurar una clave única
        title={v.name} 
        description={v.description} 
        index={v.id} // Pasa el id para la navegación
        onClick={() => onProductSelect(v)} // Llama a onProductSelect con el vehículo
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

export default Listado;
