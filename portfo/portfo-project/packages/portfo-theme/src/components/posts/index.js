import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Thumbnal_Img from "./thumbnail";
import Comments from "./comments";
import SocialLinks from "../common/social-icon";

const Posts = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Aut = state.source.author[post.author];
  const AutImg = state.source.author[post.author].avatar_urls[96];
  const Img = state.theme.thumbnal.showOnPost;
  const { Component: Html2React } = libraries.html2react;
  const date = new Date(post.date);

  useEffect(() => {
    if (document.getElementsByClassName("slide-container").length >= 1) {
      let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");

      const init = (n) => {
        slides.forEach((slide, index) => {
          slide.style.display = "none";
          dots.forEach((dot, index) => {
            dot.classList.remove("active");
          });
        });
        slides[n].style.display = "block";
        dots[n].classList.add("active");
      };
      document.addEventListener("DOMContentLoaded", init(currentSlide));
      const next = () => {
        currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
        init(currentSlide);
      };

      const prev = () => {
        currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
        init(currentSlide);
      };

      setInterval(() => {
        next();
      }, 5000);

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          init(i);
          currentSlide = i;
        });
      });
    }
  });

  return (
    <MainContainer>
      <Body>
        <Content>
          <h2>
            <Html2React html={post.title.rendered} />
          </h2>
          <UserInfowrapper>
            <UserImage>
              <img src={AutImg} width="32px" alt={Aut.name} />
            </UserImage>
            <UserName>
              <p>{Aut.name}</p>
              <p>{date.toDateString()}</p>
            </UserName>
            <UserSocialShare>
              SHARE: <SocialLinks className="post-social-share" />
            </UserSocialShare>
          </UserInfowrapper>
          {post.featured_media > 0 && Img === true && (
            <Thumbnal_Img id={post.featured_media} />
          )}
          <Html2React html={post.content.rendered} />
        </Content>
        <Comments />
      </Body>
    </MainContainer>
  );
};
export default connect(Posts);
const MainContainer = styled.div`
  margin: 50px 25px;
`;
const Body = styled.div``;
const Content = styled.div`
  margin-bottom: 50px;
`;
const UserInfowrapper = styled.div`
  display: flex;
  margin: 25px 0;
  @media (max-width: 500px) {
    display: inline-block;
  }
`;
const UserImage = styled.div`
  display: inline-block;
  align-self: center;
  & img {
    width: 50px;
    border-radius: 100%;
    margin: 0;
  }
`;
const UserName = styled.div`
  display: inline-block;
  align-self: center;
  padding: 0 20px;
  border-right: 1px solid;
  margin-right: 18px;
  @media (max-width: 500px) {
    border-right: none;
    margin-bottom: 20px;
  }
  & p {
    font-weight: 500;
    margin-bottom: 3px;
    &:last-child {
      margin: 0px;
      opacity: 0.7;
      font-weight: 300;
    }
  }
`;
const UserSocialShare = styled.div`
  display: ruby;
  align-self: center;
  & .post-social-share {
    margin: 0 0 0 15px;
    & a {
      margin-bottom: 0;
      & svg {
        font-size: 18px;
        @media (max-width: 500px) {
          font-size: 12px;
        }
      }
    }
  }
`;
