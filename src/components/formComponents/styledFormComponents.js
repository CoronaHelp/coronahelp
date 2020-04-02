import styled from 'styled-components'
import theme from '../theme'

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin-top: 12vh;
    height: ${props => props.form === 'login' ? '76vh' : '120vh'};
    ${theme.breakpoints.tablet} {
        margin-top: ${props => props.form === 'login' ? '22vh' : '30vh'};
        height: 82vh;
    }
`

export const FormTitle = styled.h2`
    margin-bottom: 16px;
`

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 340px;
    margin: 4px 0;
`;

export const FormButton = styled.button`
    background-color: ${props => props.disabled ? 'grey' : 'black'};
    color: white;
    width: 150px;
    height: 35px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    margin: 25px 0 15px;
`

export const Form = styled.form`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid black;
    outline: none;
    border-radius: 5px;
    
    -webkit-appearance: none;
    padding: 0 10px;
    font-size: 1.2rem;
    font-family: 'sans-serif';
`;

export const Label = styled.label`
    font-size: 1.5rem;
    font-family: 'sans-serif';
    margin: 1px 0 3px 5px;
`;

export const Error = styled.p`
    font-size: 1.4rem;
    font-family: 'sans-serif';
    color: red;
    margin-bottom: 0;
`;