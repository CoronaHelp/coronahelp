import styled from 'styled-components'
import theme from './theme'

export const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    font-family: 'Raleway', "sans-serif";
    height: 12vh;
    margin-bottom: 0;
    background-color: ${theme.colors.main};
    position: fixed;
    top: 0;

    ${theme.breakpoints.tablet} {
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        height: 18vh;
    }
`;

export const NavLogo = styled.div`
    margin-left: 20px;
    width: 200px;
    ${theme.breakpoints.tablet} {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        margin: -15px 0 -20px;
    }
`

export const NavLinksSection = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    ${theme.breakpoints.tablet} {
        width: 100%;
        justify-content: center;
    }
`

export const StyledLink = styled.p`
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin: 0 20px;
    &:hover {
        color: red;
    }
`

export const SignUpButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.buttonbg};
    color: white;
    width: 150px;
    height: 35px;
    font-size: 1.6rem;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: ${theme.colors.buttonbg};
        border-color: ${theme.colors.buttonbg};
    }
`;