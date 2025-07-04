import React from 'react';
import { useState } from 'react';

import cerruchoImg from '../../assets/cerrucho.png';
import herramientasImg from '../../assets/herramientas.png';
import linternaImg from '../../assets/linterna.png';
import martilloImg from '../../assets/martillo.png';
import tornilloImg from '../../assets/tornillo.png';

const herramientas = [
  { id: 1, nombre: 'Cerrucho', imagen: cerruchoImg,valor:75000},
  { id: 2, nombre: 'Herramientas',  imagen: herramientasImg,valor:124000 },
  { id: 3, nombre: 'Linterna',  imagen: linternaImg,valor:25000 },
   { id: 4, nombre: 'Martillo',  imagen: martilloImg,valor:45000 },
    { id: 5, nombre: 'Tornillo',  imagen: tornilloImg,valor:1000 },
];

export const ProductoCard = () => {
    const [isContacted ,setIsContacted ] = useState(false)

const handleClick = () => {
    const newState = !isContacted;          
    setIsContacted(newState);               
    alert(newState ? 'Compra este elemento' : 'Compra cancelada'); 


  const handleClick = ({nombre}) => {
    alert(`Has elegido la herramienta: ${nombre}`);
  };
  

  return (
    <section className="contenedor">
      {herramientas.map(({ id, nombre, imagen,valor }) => (
        <div className="bg-indigo-900 shadow-md rounded-lg p-4 flex flex-col  items-center text-center transition-transform hover:scale-105 justify-center" key={id}>
          <img src={imagen} alt={nombre} className="w-24 h-24 mb-4 object-contain" />
          <h2>{nombre}</h2>
          <p>{valor}</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => handleClick({nombre})}>Seleccionar</button>
         <button  className=" bg-indigo-700 px-4 py-2 bg-indigo-800-500 text-white rounded hover:bg-indigo-800 transition cursor-pointer" id={id} onClick={() =>handleClick()} >
            {
                isContacted ? 'Comprado' : 'Comprar'
             
            }
          </button>
        </div>
      ))}
    </section>
  );
};
}
