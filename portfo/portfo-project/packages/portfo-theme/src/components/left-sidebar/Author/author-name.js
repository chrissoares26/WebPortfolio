import React from "react";
import { connect, styled } from "frontity";
import ProfileImg from "../../assets/img/profile.png";
import { Separator } from "../../common/separator";
import SocialIcon from "../../common/social-icon";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";

/*
 * This components for left sidebar profile Name or Company Name
 * title
 * Author: ojjomedia <info@ojjomedia.com>
 */
const AuthorName = ({ state }) => {
  const Author = state.theme.authorinfo;
  return (
    <>
      <AuthorInfoWrapper>
        <AuthorInfo>
          <AutImgBox>
            <Image src={ProfileImg} alt="author-image" />
            <AvailableCircle></AvailableCircle>
          </AutImgBox>
          <Name className="author-name">
            <Link link="/">{Author.name}</Link>
          </Name>
          <AuthorTitle>{Author.position}</AuthorTitle>
          <SocialIcon />
          <Separator />
        </AuthorInfo>
      </AuthorInfoWrapper>
    </>
  );
};

export default connect(AuthorName);

const AuthorInfoWrapper = styled.div`
  text-align: center;
  width: 100%;
`;
const AuthorInfo = styled.div`
  padding: 0 30px;
`;
const Name = styled.h4`
  margin-bottom: 15px;
  margin-top: 15px;

  & a {
    text-decoration: none;
  }
`;
const AuthorTitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  opacity: 0.5;
`;
const AutImgBox = styled.div`
  & img {
    width: auto;
  }
`;

const AvailableCircle = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 175px;
  top: 130px;
  border-radius: 100px;
  background: #7eb942;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
`;
