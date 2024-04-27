// En el archivo vehicle/[id].js
import vehicles from "@/app/Data/vehicles";

const VehicleDetailPage = ({ vehicle }) => {
  return (
    <div>
      <h1>{vehicle.name}</h1>
      <p>{vehicle.description}</p>
      {/* Puedes mostrar más detalles del vehículo aquí si lo deseas */}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = vehicles.map(vehicle => ({
    params: { id: vehicle.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const vehicle = vehicles.find(vehicle => vehicle.id.toString() === params.id);

  return { props: { vehicle } };
}

export default VehicleDetailPage;
