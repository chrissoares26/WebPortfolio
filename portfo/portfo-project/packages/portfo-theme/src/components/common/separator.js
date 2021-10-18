import { styled } from "frontity";
import React from "react";

/*
 * Separator components
 * this components will help you to separate two section on left side with border
 * Author: ojjomedia <info@ojjomedia.com>
 */
export const Separator = ({ children, ...restProps }) => {
  return <SeparatorWrapper {...restProps}>{children}</SeparatorWrapper>;
};

// css of this components started here
const SeparatorWrapper = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 2px;
  padding: 0 0 0 0;
  opacity: 0.8;
`;
