"use client"
import Link from 'next/link';

const Card = ({ title = "titulo por defecto", description = "descripcion por defecto", index }) => {
  return (
    <div className="Card" style={{ 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', 
      borderRadius: '8px', 
      padding: '20px', 
      backgroundColor: '#2c3e50',
      transition: 'box-shadow 0.3s ease' // Transición suave para la sombra
    }}
    onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 14px rgba(0, 0, 0, 0.5)' }} // Sombra más oscura al pasar el cursor
    onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)' }} // Restaurar sombra original al quitar el cursor
    >
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/vehicle/${index}`} className="text-red-600 hover:underline rounded-title">
          {title}
        </Link>
      </h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
