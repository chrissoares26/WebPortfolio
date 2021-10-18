import React from "react";
import { connect, styled } from "frontity";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import ThemeMode from "../right-sidebar/theme-mode";

const MobileNavigation = ({ state, Theme, actions }) => {
  // Get the menu state and action
  const { isMobileLeftSidebarOpen, isMobileRightSidebar } = state.theme;
  const { openMobileLeftSidebar, openMobileRightSidebar } = actions.theme;
  return (
    <NavWrapper className="mobiel-nav-wrapper">
      <SectionWrapper>
        <LeftNavWrapper>
          <Icon>
            <FiMenu
              aria-expanded={isMobileRightSidebar}
              onClick={openMobileLeftSidebar}
            />
          </Icon>
        </LeftNavWrapper>
        <ThemeMode OnTheme={Theme} />
        <RightNavWrapper>
          <Icon>
            <FiMoreVertical
              aria-expanded={isMobileRightSidebar}
              onClick={openMobileRightSidebar}
            />
          </Icon>
        </RightNavWrapper>
      </SectionWrapper>
    </NavWrapper>
  );
};

export default connect(MobileNavigation);

const NavWrapper = styled.div`
  display: none;
  width: 100%;
  position: absolute;
  z-index: 9999;
  @media (max-width: 800px) {
    display: block;
  }
`;
const SectionWrapper = styled.div`
  justify-content: space-between;
  display: flex;
`;
const LeftNavWrapper = styled.div``;
const RightNavWrapper = styled.div``;
const Icon = styled.div`
  cursor: pointer;
  & svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    padding: 20px;
  }
`;
