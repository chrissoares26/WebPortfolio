import React from "react";
import { connect, styled } from "frontity";
import { BiDownload } from "react-icons/bi";

/**
 * Button components
 * left sidebar bottom
 * in roots.
 */
const CVButton = () => {
  return (
    <ButtonWrapper className="left-bottom-btn">
      <a
        href="http://portfolio.chrissoarespro.com/wp-content/uploads/2022/06/Chris-Soares-Resume.pdf"
        target="_blank"
      >
        <button type="button">
          DOWNLOAD CV <BiDownload />
        </button>
      </a>
    </ButtonWrapper>
  );
};

export default connect(CVButton);

const ButtonWrapper = styled.div`
  text-align: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & button {
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 15px 20px;
  }
`;
