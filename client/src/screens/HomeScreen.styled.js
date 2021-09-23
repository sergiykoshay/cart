import styled from 'styled-components';
import {COLORS} from '../constants';

export const Wrapper = styled.div`
    max-width: 1300px;
    margin: 1rem auto;
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    color: ${COLORS.dark};
    margin-bottom: 1rem;
    margin-left: 8px;
`;

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1232px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 630px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;