import React from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`;

const Formulario = () => {
    
    const [SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
    // const [SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda');

    return (
    <form>
        <SelectMonedas/>
        {/* <SelectCriptomonedas/> */}
        <InputSubmit
            type="submit" 
            value="Cotizar"
        />
    </form>
    )
}

export default Formulario
