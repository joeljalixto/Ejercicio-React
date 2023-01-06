import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Contacto from '../models/Contacto';

const ComponenteB = ({ contacto }) => {

    const [conectado, setconecto] = useState(contacto.conectado)
    
    const cambioDeEstado = () => {
        contacto.conectado = !contacto.conectado
        setconecto(contacto.conectado)
    }

    return (
        <div>
            <h1> Nombre: {contacto.nombre}</h1>
            <h2> Apellido: {contacto.apellido}</h2>
            <h3> Email: {contacto.email}</h3>
            <h4> Estado: {conectado ? "Contacto en linea" : "Contacto no disponible"}</h4>
            <button onClick={cambioDeEstado}>Presionar</button>
        </div>
    );
};


ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponenteB;
