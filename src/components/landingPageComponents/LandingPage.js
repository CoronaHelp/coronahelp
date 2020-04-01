import React from 'react'
import { Wrapper, Section, HomeHeaderImg, HomeHeaderContent, GettingStarted,
    SectionHeader, StepsContainer, Step, StepHeader } from './styledLandingComponents'
import QuickSearchForm from '../formComponents/QuickSearchForm'

const LandingPage = () => {
    return(
        <div>
            <Wrapper>
                <Section>
                    <HomeHeaderImg src="./dont-panic.jpg" className="home-header-img" alt="the words 'don't panic' on a toilet paper roll"/>
                    <HomeHeaderContent>
                        <div><h2 style={{marginBottom: '20px'}}>Welcome to Supply Helper</h2></div>
                        <div>
                            <p style={{textIndent: '40px'}}>We're here to help you find the supplies that you need and that can be difficult to find right now. We'll let you know where you can find the items that you are looking for, so that you can meet your needs during these difficult times. If you enjoy the service, please help others in your community by alerting others when you find a location with in demand products in stock.</p>
                        </div>
                    </HomeHeaderContent>
                </Section>
                <hr style={{border: '1px solid black' }}/>
                <Section style={{margin: '30px 0 0px'}}>
                    <SectionHeader>Quick Search</SectionHeader>
                    <p style={{textIndent: '40px', width: '450px', marginBottom: '20px'}}>If you don't want to create an account right now, we can still help you find what you're needing right now. Simply fill out the Quick Search form below with your zip code and the item that you need.</p>
                    <QuickSearchForm />
                </Section>
                <hr style={{border: '1px solid black', marginTop: '20px'}}/>
                <GettingStarted>
                    <SectionHeader>Getting Started</SectionHeader>
                    <StepsContainer>
                        <Step>
                            <StepHeader>Create an account</StepHeader>
                            <p>Click the 'Sign Up' button on the upper-right corner of your screen. Then, fill out the Sing Up form to finish setting up your account.</p>
                        </Step>
                        <Step>
                            <StepHeader>Search your area</StepHeader>
                            <p>Let us know which supplies you are searching for, and we'll let you know where in your area they've been spotted by others in your community.</p>
                        </Step>
                        <Step>
                            <StepHeader>Help others like you</StepHeader>
                            <p>There are others in your community that are also looking for supplies. Next time you're shopping, let others know whats in stock at your location.</p>
                        </Step>
                    </StepsContainer>
                </GettingStarted>
            </Wrapper>
        </div>
    )
}

export default LandingPage