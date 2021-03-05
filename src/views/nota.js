import React from 'react';
import CardNotas from '../components/card_notas';
import '../css/nota.css';

const Nota = () => {
    let pedido
    return(
        <div>
            <h3>Nota</h3>
            <div>
                <button>Nova Nota</button>
            </div>
            <div>
                <h4>Notas Registradas</h4>
                <div>
                    filtros
                </div>
                <div>
                    <CardNotas />
                </div>
            </div>
        </div>
    );
}
export default Nota;