import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {COLORS} from '../../constants';

export const Wrapper = styled.div`
    width: 300px;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1232px) {
        width: 360px;
    }
    @media (max-width: 1115px) {
        width: 330px;
    }
    @media (max-width: 1028px) {
        width: 300px;
    }
    @media (max-width: 950px) {
        width: 400px;
    }
    @media (max-width: 830px) {
        width: 330px;
    }
    @media (max-width: 700px) {
        width: 290px;
    }
    @media (max-width: 630px) {
        width: 450px;
    }
    @media (max-width: 500px) {
        width: 350px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }

`;
export const Image = styled.img`
    height: 170px;
    border-radius: 8px;

`;

export const Info = styled.div`
    
        margin-bottom: 8px;
    & > .title {
        font-size: 1rem;
        overflow: hidden;
    }
    & > .description {
        font-size: .8rem;
    }
    & > .price {
        font-weight: bold;
        margin-bottom: 1rem;
    }
    
`;

export const InfoLink = styled(Link)`
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: ${COLORS.dark};
    background-color: ${COLORS.primary};
    padding:  8px 16px;
    
    font-size: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
    &:hover {
        color: ${COLORS.primary};
        background-color: ${COLORS.dark};
    }
`;