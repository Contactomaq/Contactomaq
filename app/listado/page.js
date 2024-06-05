import vehicles from "../Data/vehicles";
import Card from "../components/Card";

function Listado() {
  const vehicleList = vehicles.map((v, index) => {
    return <Card key={index} title={v.name} description={v.description} link={v.link} />;
  });

  return (
    <div className="App">
      <h2 className="text-3xl font-bold text-center py-8" style={{
        backgroundImage: 'linear-gradient(to right, #c8bdba, #a49d9b)',
        WebkitBackgroundClip: 'text',
        color: '#2c3e50', // Color oscuro
        textShadow: '0 0 5px rgba(255,255,255,0.5)'
      }}>
        Repuestos para cada una de las maquinas
      </h2>
      <div className="container">{vehicleList}</div>
    </div>
  );
}

export default Listado;
