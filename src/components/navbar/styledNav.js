import styled from "styled-components";
import theme from "../theme";

export const Nav = styled.nav`
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: "Raleway", "sans-serif";
  height: 12vh;
  margin-bottom: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
  top: 0;

  ${theme.breakpoints.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    height: 18vh;
  }
`;

export const NavHead = styled.div`
  font-size: 2rem;
  display: flex;
  padding-top: 15px;
  margin-left: 30px;
`;

// export const Nav = styled.nav`
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     flex-direction: row;
//     font-family: 'Raleway', "sans-serif";
//     height: 12vh;
//     margin-bottom: 0;
//     background-color: ${theme.colors.lavender};
//     background-color: ${theme.colors.lavender};
//     position: fixed;
//     top: 0;

//     ${theme.breakpoints.tablet} {
//         flex-direction: column;
//         justify-content: flex-start;
//         align-content: center;
//         height: 18vh;
//     }
// `;

// export const NavLogo = styled.div`
 
//   width: 200px;
//   ${theme.breakpoints.tablet} {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 200px;
//     margin: -15px 0 -20px;
//   }
// `;

export const NavLinksSection = styled.div`
border: 1px solid black;
  padding-top: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  margin-right: 30px;
  ${theme.breakpoints.tablet} {
    width: 100%;
    justify-content: center;
  }
`;

export const StyledLink = styled.p`

  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin: 0 150px 0 0;
  &:hover {
    color: black;
  }
`;

export const SignUpButton = styled.p`

  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin: 0 20px 0 0;
  &:hover {
    color: black;
  }
`;
