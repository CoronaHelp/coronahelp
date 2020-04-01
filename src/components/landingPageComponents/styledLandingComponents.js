import styled from 'styled-components'
import theme from '../theme'

export const Wrapper = styled.div`
    max-width: 840px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    margin-top: 12vh;
    ${theme.breakpoints.tablet} {
        margin-top: 18vh;
    }
`

// Header components
export const Section = styled.section` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${theme.breakpoints.phone} {
        margin-bottom: 15px;
    }
`

export const HomeHeaderImg = styled.img` 
    width: 100%;
    height: 300px;
    border-radius: 0;
    ${theme.breakpoints.tablet} {
        height: 230px;
    }
    ${theme.breakpoints.phone} {
        height: 185px;
    }
`

export const HomeHeaderContent = styled.div` 
    width: 100%;
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${theme.breakpoints.phone} {
        margin-top: 25px;
    }
`

// Getting Started section components

export const GettingStarted = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 35px 0 40px;
    ${theme.breakpoints.phone} {
        margin-bottom: 15px;
    }
`

export const SectionHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
`

export const StepsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const Step = styled.div`
    text-align: center;
    width: 30%;
    border-radius: 10px;
    padding: 5px;
    ${theme.breakpoints.tablet} {
        width: 42%;
        margin-bottom: 10px;
    }
    ${theme.breakpoints.phone} {
        width: 90%;
    }
`

export const StepHeader = styled.h3`
    margin-bottom: 20px;
`

// others




