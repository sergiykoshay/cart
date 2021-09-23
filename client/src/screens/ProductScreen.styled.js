import styled from 'styled-components';
import {COLORS} from '../constants';

export const Wrapper = styled.div`
    max-width: width 1300px;
    margin: 1rem auto;
    display: flex;
    p {
        padding: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &:last-child {
            border: none;
        }
    }
    @media (max-width:960px) {
        flex-direction: column;

    }
`;

export const BlockLeft = styled.div`
    display: flex;
    flex: 0.8;
    &>div {
        margin: 1rem;
        flex: 0.6;
    }

    @media (max-width:960px) {
        flex-direction: column;
        flex: 1;
        &> img {
            flex: 1;
        }
    }

`;

export const BlockRight = styled.div`
    flex: 0.2;
    @media (max-width:960px) {
        flex: 1;
        padding: 1rem;
    }
`;

export const InfoLeft = styled.div`
    margin: 1rem;
    flex: 0.4;
    background-color: #fff;
    height: fit-content;
    font-size: 0.9rem;
    &>.title {
        font-weight: bold;
        font-size: 1.3rem;
        width: 100%;
        text-align: center;

    }
    &>.price {

    }

    &>.description {

    }
    @media (max-width:960px) {
        flex: 1;
    }
`;

export const InfoRight = styled.div`
    width: 250px;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
    &>p{
        padding: 1rem;
        font-size: 0.8rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    &>.price {

    }

    &>.status {

    }

    &>.quality {
        & select {
            padding: 10px 16px;
        }
    }
    & button {
        grid-column: 1/-1;
        padding: 10px 16px;
        background-color: ${COLORS.dark};
        color: ${COLORS.primary};
        border: 1px solid ${COLORS.dark};
        cursor: pointer;
        border-radius: 5px;


    }
    @media (max-width: 960px) {
        width: 100%;
        margin: 0;
    }
`;



