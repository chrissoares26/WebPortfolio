import React from "react";
import { connect, styled } from "frontity";
import { GiMoon } from "react-icons/gi";

const ThemeMode = ({ OnTheme, ...restProps }) => {
  return (
    <Iconbox onClick={OnTheme} {...restProps}>
      <GiMoon />
    </Iconbox>
  );
};

export default connect(ThemeMode);

const Iconbox = styled.div`
  cursor: pointer;
  justify-content: center;
  display: grid;
  padding: 20px;
  margin-top: 30%;
  @media (max-width: 800px) {
    padding: 17px;
    margin-top: 0px;
  }
  & svg {
    width: 30px;
    height: 30px;
    transform: rotate(200deg);
    transition: all ease-in 300ms;
    @media (max-width: 800px) {
      width: 25px;
      height: 25px;
    }
  }
`;
