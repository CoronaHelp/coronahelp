import styled from 'styled-components'

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 340px;
    margin: 4px 0;
`;

export const Button = styled.button`
    background-color: ${props => props.disabled ? 'grey' : '#7F7FFF'};
    color: white;
    width: 150px;
    height: 35px;
    font-size: 1rem;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    margin: 15px 0;
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
    max-width: ${props => props.search ? '180px' : '320px'};
    min-width: ${props => props.search ? '180px' : '280px'};
    background-color: ${props => props.submit ? (props.disabled ? 'grey' : 'red') : 'white'};
    color: ${props => props.submit ? 'white' : 'black'};
    height: 30px;
    border: 1px solid #7F7FFF;
    outline: none;
    border-radius: 5px;
    
    -webkit-appearance: none;
    padding: 0 10px;
    font-size: 1.2rem;
    font-family: 'sans-serif';
    cursor: ${props => props.submit ? 'pointer' : 'text'};
`;

export const Label = styled.label`
    font-size: 1rem;
    font-family: 'sans-serif';
    margin: 1px 0 3px 5px;
`;

export const Error = styled.p`
    font-size: 1.0rem;
    font-family: 'sans-serif';
    color: red;
`;