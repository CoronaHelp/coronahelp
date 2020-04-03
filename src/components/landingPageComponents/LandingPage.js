import React from "react";
import {
  Wrapper,
  Section,
  HomeHeaderImg,
  HomeHeaderContent,
  GettingStarted,
  SectionHeader,
  StepsContainer,
  Step,
  StepHeader,
} from "./styledLandingComponents";
import QuickSearchForm from "../formComponents/QuickSearchForm";
import blueTile from "./assets/blueTile2.svg";
import "./landing.css";

const LandingPage = () => {
  return (
    <div className="test">
      <Wrapper>
        <Section>
          {/* <div className="left">
            {" "}
            <h1 style={{ margin: "20px 0px", fontSize: "7rem" }}>
              Welcome to Supply Helper
            </h1>{" "}
            <p style={{ fontSize: "4rem" }}>
              What's going on in the world today is stressful. We are here to
              help- our community is driven by caring people who want to help
              one another find the supplies they desperately need.
            </p>
          </div>
          <div className="right"></div> */}
          <HomeHeaderContent>
            <div>
              <h1 style={{ margin: "20px 0px", fontSize: "7rem" }}>
                Welcome to Supply Helper
              </h1>
            </div>
            <div>
              <p style={{ fontSize: "4rem" }}>
                What's going on in the world today is stressful. We are here to
                help- our community is driven by caring people who want to help
                one another find the supplies they desperately need.
              </p>
            </div>
          </HomeHeaderContent>
          <HomeHeaderImg
            // src={blueTile}
            // className="home-header-img"
            // alt="blue tile"
          />
        </Section>
        <Section style={{ margin: "30px 0 0px" }}>
          <SectionHeader>Quick Search</SectionHeader>
          <p
            style={{ textIndent: "40px", width: "450px", marginBottom: "20px" }}
          >
            If you don't want to create an account right now, we can still help
            you find what you're needing right now. Simply fill out the Quick
            Search form below with your zip code and the item that you need.
          </p>
          <QuickSearchForm />
        </Section>
        <GettingStarted>
          <SectionHeader>Getting Started</SectionHeader>
          <StepsContainer>
            <Step>
              <StepHeader>Create an account</StepHeader>
              <p>
                Click the 'Sign Up' button on the upper-right corner of your
                screen. Then, fill out the Sing Up form to finish setting up
                your account.
              </p>
            </Step>
            <Step>
              <StepHeader>Search your area</StepHeader>
              <p>
                Let us know which supplies you are searching for, and we'll let
                you know where in your area they've been spotted by others in
                your community.
              </p>
            </Step>
            <Step>
              <StepHeader>Help others like you</StepHeader>
              <p>
                There are others in your community that are also looking for
                supplies. Next time you're shopping, let others know whats in
                stock at your location.
              </p>
            </Step>
          </StepsContainer>
        </GettingStarted>
      </Wrapper>
    </div>
  );
};

export default LandingPage;
