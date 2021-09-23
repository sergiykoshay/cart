import styled from 'styled-components';
import {COLORS} from '../../constants';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
    gap: 8px;
    background-color: #fff;
    border-radius: 3px;
    place-items: center;
    &>.image {

        &>img {

        }
    }
    &>.price {

    }
    &>select {
        padding: 10px 17px;

    }

    &>button {
        padding: 10px 17px;
        color: red;
        background-color: ${COLORS.primary};
        border: 1px solid ${COLORS.dark};
        cursor: pointer;
        transition: all 0.3s ease-out;
        &:hover, &:focus, &:active {
            background-color: ${COLORS.dark};
            transform: scale(1.2);
        }

    }

    @media (max-width:700px){
        &>select, &>button {
            padding: 8px 13px;
        }
        &>.price {
            font-size:  0.8rem;
        }
    }

    @media (max-width:500px){
        &>select, &>button {
            padding: 5px 8px;
        }
        &>.price {
            font-size:  0.6rem;
        }
    }

`;

export const CartItemLink = styled(Link)`
    text-decoration: none;
    color: ${COLORS.dark};
    font-weight: bold;
    &:hover {
        color: ${COLORS.pink};
    }

    @media (max-width:700px){
        font-size: 0.8rem;
    }

    @media (max-width:500px){
        font-size:  0.6rem;
    }

`;