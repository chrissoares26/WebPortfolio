import React from "react";
import { connect, styled } from "frontity";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Link from "@frontity/components/link";

const description404 = <>Don’t panic just click the big button to retun home</>;

const description = (
  <>
    Don&apos;t panic! Seems like you encountered an error. If this persists,
    <a href="https://ojjomedia.com"> let us know </a> or try refreshing your
    browser.
  </>
);

const Page404 = ({ state, theme }) => {
  const data = state.source.get(state.router.link);
  const title = "Oops! Something Went Wrong";
  const title404 = "SORRY, PAGE NOT FOUND!";
  return (
    <MainContainer>
      <Img404 className="img-404" />
      <Title> {data.is404 ? title404 : title} </Title>
      <Description> {data.is404 ? description404 : description} </Description>
      <BackButton link="/" className="go-back-btn">
        <HiOutlineArrowNarrowLeft /> Go Back Home
      </BackButton>
    </MainContainer>
  );
};

export default connect(Page404);

const MainContainer = styled.div`
  padding: 40px 0 0px 0;
  text-align: center;
  height: calc(100vh - 90px);
  @media (max-width: 800px) {
    height: calc(100vh - 150px);
  }
`;
const Img404 = styled.div`
  width: 70%;
  height: 500px;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
`;
const Title = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  text-align: center;
`;
const Description = styled.p`
  line-height: 1.6em;
  margin: 18px 0;
  text-align: center;
  margin-bottom: 45px;
`;
const BackButton = styled(Link)``;
