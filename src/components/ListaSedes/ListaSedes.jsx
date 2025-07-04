import React from 'react';
import { useState } from 'react';
import Img1 from '../../assets/linterna.png'; 
 export function ListaSedes () {

    const sedes = [
      {  id:1,
        nombre:"Ecopetrol",
        administrador:"Padre Domingo",
        imagen:Img1

    },
     {
        id:2,
        nombre:"Asoinca",
        administrador:"Chokas",
        imagen:Img1
    },
     {
        id:3,
        nombre:"Cafe la Palma",
        administrador:"Padre Domingo",
         imagen:Img1
    },
     {
        id:4,
        nombre:"SENA",
        administrador:"Padre Domingo",
         imagen:Img1
    },
     {
        id:5,
        nombre:"Rayo Mcqueen",
        administrador:"Padre Domingo",
         imagen:Img1
    }
    ];

 return (
    <section>

  
    <div className="min-h-screen bg-amber-200-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Publicaciones</h1>
      <div className="w-full max-w-md">
        {sedes.map(({nombre,administrador,imagen}) => (
            <div className="list" key={id}>
                <img src={imagen} alt={nombre} />
                 <h1>{nombre}</h1>
          <h5>{administrador}</h5>
          </div>
         
        ))}
      </div>
        
    </div>
      </section>
  );
 };     