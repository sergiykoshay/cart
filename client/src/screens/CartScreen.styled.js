import styled from 'styled-components';
import {COLORS} from '../constants';
export const Wrapper = styled.div`
    display: flex;
    max-width: 1300px;
    margin: 2rem auto;
    @media (max-width:1320px) {
        max-width: 900px;
    }
    @media (max-width:960px) {
        max-width: 800px;
        flex-direction: column;
    }

`;

export const BlockLeft = styled.div`
    flex: 0.7;
    margin-right: 1rem;
    background-color: transparent;
    padding: 1rem;
    &>h2 {
        margin-bottom: 1rem;
    }
    @media (max-width:960px) {
        margin-right: 0;
    }
`;

export const BlockRight = styled.div`
    flex: 0.3;
    background-color: #fff;
    box-shadow : 0 1px 4px rgba(0, 0, 0, 0.4);
    height: fit-content;
    &>div{
        border-bottom: 1px solid rgba(0,0,0,0.2);
        padding: 1rem;
        &:last-child{
            border: none;
        }
        & p {
            padding: 8px;
        }
        & button {
            padding: 10px 17px;
            width: 100%;
            background-color: ${COLORS.dark};
            color: ${COLORS.primary};
            border: 1px solid ${COLORS.dark};
            cursor: pointer;
            &:hover {
                opacity: 0.9;

            }
        }
    }
    @media (max-width:960px) {
        margin: 1rem;
    }
`;


