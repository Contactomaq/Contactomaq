"use client";

const Card = ({ title = "titulo por defecto", description = "descripcion por defecto", onClick }) => {
  return (
    <div 
      className="Card" 
      style={{ 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', 
        borderRadius: '8px', 
        padding: '20px', 
        backgroundColor: '#2c3e50', // Fondo oscuro
        transition: 'box-shadow 0.3s ease' 
      }}
      onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 10px 14px rgba(0, 0, 0, 0.5)' }}
      onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)' }}
      onClick={onClick} // Llama a onClick al hacer clic
    >
      <h2 className="text-xl font-bold mb-2 text-red-600 hover:underline rounded-title">
        {title}
      </h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Card;
