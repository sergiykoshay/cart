import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../constants';



export const Wrapper = styled.nav`
    width: 100%;
    background-color: ${COLORS.dark};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    z-index: 50;
`;

export const Logo = styled.div`
    color: ${COLORS.primary};
    font-size: 1.4rem;
    cursor: pointer;
    @media (max-width: 500px) {
        h2 {
            font-size: 1rem;
        }
    }
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: 960px) {
        display: none;
    }
`;

export const MenuItem = styled.li`
    padding:  0 1.5rem;
    a {
        text-decoration: none;
        color: ${COLORS.primary};
        font-size: 1.2rem;
        display: flex;
        align-items: center;
    }
`;
export const CartLink = styled(Link)`
    background-color: #334;
    padding: 10px;
    border-radius: 8px;
    span{
        display: flex;
        align-items: center;
        margin-left: 8px;
    }
    &:hover{
        background-color: ${COLORS.pink};
        color: ${COLORS.primary};
    }

`;
export const Badge = styled.span`
    width: 30px;
    height: 30px;
    background-color: ${COLORS.primary};
    border-radius: 50%;
    margin-left: 8px;
    color: ${COLORS.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1rem;
`;

export const Hamburger = styled.div`
    width: 30px;
    height: 30px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    div {
        width: 100%;
        height: 3px;
        background-color: ${COLORS.primary};

    }
    &:hover > div{
        background-color: ${COLORS.pink}
    }
    @media  (max-width: 960px) {
        display: flex;
    }
`;
