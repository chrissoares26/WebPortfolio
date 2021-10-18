import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import LeftSidebar from "./left-sidebar"; // left sidebar compoents
import RightSidebar from "./right-sidebar"; // right sidebar compoents
import gutenbergStyle from "./styles/style.css"; // Import gutenberg theme and Style
import gutenbergTheme from "./styles/theme.css"; // Import gutenberg theme and Style
import { fixCss } from "./helper/css";
const fixedGutenbergThemeCSS = fixCss(gutenbergTheme); // Gutenberg style imported. The style provided by WordPress.
const fixedGutenbergStyleCSS = fixCss(gutenbergStyle); // Gutenberg style imported. The style provided by WordPress.
import LocalStorage from "./hook/localStorage"; // Import LocalStorage for Dark Theme
import GlobalCSS from "./styles/global"; // Global css. all the css used for dark and light mode
import { FaRegCopyright } from "react-icons/fa"; // Footer Copyright Icon import here
import Title from "./page-meta-title"; // improt page meta title page here
import Page from "./pages"; // import all gutenberg page here
import Page404 from "./404"; // import 404 page here
import MobileNavigation from "./mobile/navigation"; // import Mobile navigation bar here
import FontFace from "./styles/font-face"; // import Fonts here
import Loading from "./loading"; // import face loading page here
import Posts from "./posts"; // import post single page here

/*
 * Theme Component
 * All the components are imported
 * Author: Chris Soares <chris@chrissoarespro.com>
 */
const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  const [theme, setTheme] = LocalStorage("lightmode", true); // Assume screen is bigger than 600px in Node (SSR)
  return (
    <>
      <Global styles={css([fixedGutenbergThemeCSS, fixedGutenbergStyleCSS])} />
      <GlobalCSS theme={theme} />
      <FontFace />
      <Title />
      <Head>
        <html lang="en" />
        <meta name="description" content={state.frontity.description} />
      </Head>
      <MobileNavigation Theme={() => setTheme(!theme)} theme={theme} />
      <MainWrapper>
        <LeftSidebar theme={theme} />
        <ContentWrapper>
          {data.isFetching && <Loading theme={theme} />}
          {data.isPage && <Page />}
          {data.isPost && <Posts />}
          {data.isPortfolio && <Posts />}
          {data.is404 && <Page404 theme={theme} />}
          <Footer className="footer-wrapper">
            <FaRegCopyright /> 2021 All Rights Chris Soares
          </Footer>
        </ContentWrapper>
        <RightSidebar Theme={() => setTheme(!theme)} theme={theme} />
      </MainWrapper>
    </>
  );
};

export default connect(Theme);

// components css started here
const MainWrapper = styled.div`
  display: flex;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  flex-wrap: nowrap;
  position: relative;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
const ContentWrapper = styled.div`
  padding: 0 110px 0 290px;
  width: 100%;
  @media (max-width: 800px) {
    padding: 0;
    margin-top: 60px;
  }
`;
const Footer = styled.div`
  padding: 15px;
  text-align: center;
  font-size: 15px;
  margin: 0 25px;
  @media (max-width: 800px) {
    font-size: 12px;
  }
  & svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 5px;
    @media (max-width: 800px) {
      width: 15px;
      height: 15px;
    }
  }
`;
