import React, { useEffect } from "react";
import { connect, styled } from "frontity";

/*
 * Link Component
 * Link are passing to every components
 * Author: ojjomedia <info@ojjomedia.com>
 */

const Link = ({
  state,
  actions,
  href,
  children,
  "aria-current": ariaCurrent,
  Active,
  className,
  rel,
  ...restProps
}) => {
  const isExternal = href.startsWith("http");
  const { primary, link } = state.theme.colors;
  const onMouseEnter = () => {
    // Set the router to auto data fetch
    if (state.theme.autoPreFetch === "hover" && !isExternal);
    actions.source.fetch(href);
  };
  {
    state.theme.autoPreFetch === "all" &&
      useEffect(() => {
        const isitExternal = href.startsWith("http");
        if (state.theme.autoPreFetch === "all" && !isitExternal);
        actions.source.fetch(href);
      }, []);
  }
  const onClick = (event) => {
    event.preventDefault();
    // Set the router to new url
    actions.router.set(href);

    window.scrollTo(0, 0);
  };
  return (
    <Item
      href={href}
      onClick={onClick}
      hover={link}
      className={className}
      active={Active}
      aria-current={ariaCurrent}
      rel={isExternal ? "noopener noreferrer" : rel}
      onMouseEnter={onMouseEnter}
      {...restProps}
    >
      {children}
    </Item>
  );
};

export default connect(Link);

const Item = styled.a`
  color: ${({ color }) => (color ? color : "#000")};
  font-size: ${({ size }) => (size ? size : "16px")};
  font-weight: 600;
  font-family: "Rubik", "Helvetica Neue", Helvetica, sans-serif;
  line-height: 20px;
  & :hover,
  &[aria-current="active"],
  & :focus {
    text-decoration: none;
    color: ${(props) => props.hover} !important;
  }
`;
