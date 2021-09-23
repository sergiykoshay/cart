import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    @media (min-width: 960px) {
        display: none;
    }

`;