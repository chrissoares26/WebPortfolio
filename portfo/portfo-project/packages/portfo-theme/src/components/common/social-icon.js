import React from "react";
import { connect, styled } from "frontity";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinks = ({ state, classes, ...restProps }) => {
  const Social = state.theme.social;
  return (
    <SocialWrapper className={classes} {...restProps}>
      <SocialLinkList className="social-link-list">
        {Social.facebook === "on" && (
          <SocialLink href={Social.facebook_url} target="_blank">
            <FaFacebookF />
          </SocialLink>
        )}
        {Social.twitter === "on" && (
          <SocialLink href={Social.twitter_url} target="_blank">
            <FaTwitter />
          </SocialLink>
        )}
        {Social.linkedin === "on" && (
          <SocialLink href={Social.linkedin_url} target="_blank">
            <FaLinkedinIn />
          </SocialLink>
        )}
        {Social.instagram === "on" && (
          <SocialLink href={Social.instagram_url} target="_blank">
            <FaInstagram />
          </SocialLink>
        )}
        {Social.youtube === "on" && (
          <SocialLink href={Social.youtube_url} target="_blank">
            <FaYoutube />
          </SocialLink>
        )}
        {Social.whatsapp === "on" && (
          <SocialLink href={Social.whatsapp_url} target="_blank">
            <FaWhatsapp />
          </SocialLink>
        )}
        {Social.pinterest === "on" && (
          <SocialLink href={Social.pinterest_url} target="_blank">
            <FaPinterest />
          </SocialLink>
        )}
      </SocialLinkList>
    </SocialWrapper>
  );
};

export default connect(SocialLinks);
const SocialWrapper = styled.div`
  text-align: center;
  margin: 15px 0;
  & svg {
    font-size: 12px;
    vertical-align: middle;
    fill: white;
  }
  & a {
    padding: 7px;
    transition: all ease-in 300ms;
  }
  & a:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
const SocialLinkList = styled.div`
  & a:last-child {
    margin-right: 0px !important;
  }
`;
const SocialLink = styled.a`
  display: inline-block;
  line-height: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 100px;
`;
