import { useState } from 'react';
import { ProductoCard } from './ProductoCard';

import cerruchoImg from '../../assets/cerrucho.png';
import herramientasImg from '../../assets/herramientas.png';
import linternaImg from '../../assets/linterna.png';
import martilloImg from '../../assets/martillo.png';
import tornilloImg from '../../assets/tornillo.png';


const apps = [
  { id: 1, nombre: 'Cerrucho', imagen: cerruchoImg,valor:75000},
  { id: 2, nombre: 'Herramientas',  imagen: herramientasImg,valor:124000 },
  { id: 3, nombre: 'Linterna',  imagen: linternaImg,valor:25000 },
   { id: 4, nombre: 'Martillo',  imagen: martilloImg,valor:45000 },
    { id: 5, nombre: 'Tornillo',  imagen: tornilloImg,valor:1000 },
];



export const Section = () => {

    const  [ count, setCount] = useState(0)
    
    console.log(count)


  return (
    <section>
        {
            apps.map((app) => {
                return (
                    <ProductoCard key={app.id} app={app} setCount={setCount} />

                )
            })
        }
    </section>
)
};













