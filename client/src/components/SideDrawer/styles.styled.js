import styled from 'styled-components';
import {COLORS} from '../../constants'

export const Wrapper = styled.div`
    width: 70%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: ${props => props.show ? "translateX(0)" : "translateX(-100%)"};
    transition: all .3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 960px) {
        display: none;
    }
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    &  > li {
        display: flex;
        align-items: center;
        & > a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            flex: 1;
            padding: 1rem;
            text-decoration: none;
            color: ${COLORS.dark};
            font-size: 1.6rem;
            text-transform: uppercase;
            & > span {
                display: flex;
                align-items: center;
                margin-left: 8px;
            }
            &:hover {
                background-color: ${COLORS.dark};
                color: ${COLORS.primary};
                & > span >  .badge {
                    background-color: ${COLORS.primary};
                    color: ${COLORS.pink};
                }
            }
        }
    }

`;


export const Badge = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${COLORS.dark};
    color: ${COLORS.primary};
    font-size: 1rem;
    margin-left: 8px;
`;