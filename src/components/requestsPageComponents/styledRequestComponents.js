import styled from 'styled-components'
import theme from '../theme'

export const RequestButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.buttonbg};
    color: white;
    width: 100px;
    height: 30px;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;

    &:hover {
        background-color: grey;
    }
`

export const RequestTitle = styled.h3`
    margin: 18px 18px 0 18px;

`

export const RequestText = styled.p`
    margin: 18px;

`

export const RequestStatus = styled.p`
    background: ${props => props.status === 'pending' ? 'rgba(253, 206, 74, 1)' : 'rgba(0, 181, 137, 1)'};
    color: black;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`  

export const RequestContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 73vh;
    margin-top: 15vh;
    ${theme.breakpoints.tablet} {
        margin-top: 25vh;
    }
`



export const RequestCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 400px;
    border: 2px solid black;
    padding: 0px;
    border-radius: 10px;
    margin: 30px;
`

export const RequestList = styled.div`
    
`