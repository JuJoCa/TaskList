// Ejemplo de uso del Hook useState

// Crear un componente de tipo funcuion y acceder a su estado 
// privado a través de un hook y, ademas, poder modificarlo

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: 'Juan',
        email: 'jjcarvajal@unicauca.edu.co'
    }

    /* Queremos que el VALORINICIAL y PERSONA INICIAL sean parte
    del estado del componente para así poder gestionar su cambio
    y que este se vea reflejado en la vista del componente
    
    const [nombreVariable, funcionparaCambiar] = useState(initialState)
    
    */

    const [contador, setcontador] = useState(valorInicial);
    const [persona, setpersona] = useState(personaInicial);
    

    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? funcionparaCambiar(nuevoValor)
        setcontador(contador+1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(nombre) {
        setpersona(
            {
                nombre: 'Pedro',
                email: 'pedro@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo de useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
