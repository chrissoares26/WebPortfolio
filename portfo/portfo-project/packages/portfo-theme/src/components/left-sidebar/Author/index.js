import React from "react";
import { connect, styled } from "frontity";
import AuthorName from "./author-name";

/*
 * This components for left sidebar profile pic/logo/
 * title
 * Author: ojjomedia <info@ojjomedia.com>
 */
const AuthorInfo = () => {
  return (
    <AuthorSection className="left-header">
      <AuthorName />
    </AuthorSection>
  );
};

export default connect(AuthorInfo);
const AuthorSection = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;
  left: 0;
`;
