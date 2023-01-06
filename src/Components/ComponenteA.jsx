import React from 'react';
import Contacto from '../models/Contacto';
import ComponenteB from './ComponenteB';

const ComponenteA = () => {
    
    const nuevoContacto = new Contacto("Joel","Jalixto","joeljalixto20@gmail.com", true)
    return (
        <div>
            <ComponenteB contacto={nuevoContacto}></ComponenteB>
        </div>
    );
};


export default ComponenteA;
