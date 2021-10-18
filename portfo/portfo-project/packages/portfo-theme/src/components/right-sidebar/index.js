import React, { useRef } from "react";
import { connect, styled } from "frontity";
import ThemeMode from "./theme-mode";
import Link from "@frontity/components/link";
import {
  RiBriefcase4Fill,
  RiHome2Fill,
  RiChat4Fill,
  RiQuillPenFill,
} from "react-icons/ri";
import useFocusEffect from "../hook/use-focus-effect";
import useFocusTrap from "../hook/use-trap-focus";
import { MdClose } from "react-icons/md";
import { FaFileCode, FaUserGraduate } from "react-icons/fa";

const RightSidebar = ({ state, Theme, actions }) => {
  // Get the nav state and action
  const { isMobileRightSidebar } = state.theme;
  const { closeMobileRightSidebar } = actions.theme;

  const HomeOne = state.theme.home_one.on;

  // Right sidebar menu import
  const menuHome = state.theme.rightMenu.home;
  const menuHomeOne = state.theme.rightMenu.homeOne;
  const HomeisThereLinks = menuHome != null && menuHome.length > 0;
  const HomeOneisThereLinks = menuHomeOne != null && menuHomeOne.length > 0;

  /**
   * Keep a reference to the close button so we can focus on it when
   * the modal opens
   */
  const closeButtonRef = useRef();

  // Focus on the close button when the mobile menu is open
  useFocusEffect(isMobileRightSidebar);

  // Trap focus within the menu when the mobile menu is open
  useFocusTrap(isMobileRightSidebar);

  return (
    <Section
      className="right-sidebar"
      data-open={isMobileRightSidebar}
      role="dialog"
      aria-modal="true"
    >
      {/* Mobile navigation close button */}
      <CloseModal
        data-open={isMobileRightSidebar}
        role="dialog"
        aria-modal="true"
        ref={closeButtonRef}
        aria-expanded={isMobileRightSidebar}
        onClick={closeMobileRightSidebar}
      >
        <MdClose />
      </CloseModal>
      <div className="sidebarBox">
        <ThemeMode className="right-sidebar-theme-mode" OnTheme={Theme} />
        <MenuWrapper className="menu-wrapper">
          <ul>
            {HomeisThereLinks &&
              !HomeOne &&
              menuHome.map(([name, link]) => {
                const isCurrentpage = state.router.link === link;
                return (
                  <li key={name}>
                    <Link
                      link={link}
                      aria-current={isCurrentpage ? "page" : undefined}
                    >
                      {name === "Home" && <RiHome2Fill />}
                      {name === "Service" && <FaFileCode />}
                      {name === "Education" && <FaUserGraduate />}
                      {name === "Portfolios" && <RiBriefcase4Fill />}
                      {name === "Blog" && <RiQuillPenFill />}
                      {name === "Contact" && <RiChat4Fill />}
                      <span className="tooltip">{name}</span>
                    </Link>
                  </li>
                );
              })}
            {HomeOneisThereLinks &&
              HomeOne &&
              menuHomeOne.map(([name, link]) => {
                const isCurrentpage = state.router.link === link;
                return (
                  <li key={name}>
                    <a
                      href={link}
                      aria-current={isCurrentpage ? "page" : undefined}
                    >
                      {name === "Home" && <RiHome2Fill />}
                      {name === "Service" && <FaFileCode />}
                      {name === "Education" && <FaUserGraduate />}
                      {name === "Portfolios" && <RiBriefcase4Fill />}
                      {name === "Blog" && <RiQuillPenFill />}
                      {name === "Contact" && <RiChat4Fill />}
                      <span className="tooltip">{name}</span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </MenuWrapper>
      </div>
    </Section>
  );
};

export default connect(RightSidebar);

const Section = styled.div`
  width: 110px;
  position: absolute;
  right: 0;
  z-index: 9999;
  & h2 {
    font-size: 22px;
    text-align: center;
  }
  & .sidebarBox {
    position: fixed;
    width: 110px;
    height: calc(100vh - 0px);
  }
  @media (max-width: 800px) {
    position: fixed;
    right: -110px;
    transition: 0.55s ease-in-out;
  }
  &[data-open="true"] {
    -webkit-transform: translateX(-110px);
    transform: translateX(-110px);
  }
`;
const MenuWrapper = styled.div`
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  margin-top: 40px;
  @media (max-width: 800px) {
    margin-top: 0px;
  }
`;
const CloseModal = styled.div`
  position: absolute;
  width: 100%;
  display: none;
  z-index: 99999;
  cursor: pointer;
  @media (max-width: 800px) {
    display: none;
    transition: 0.55s ease-in-out;
    &[data-open="true"] {
      display: block;
    }
  }
  & svg {
    padding: 20px;
    width: 30px;
    height: 30px;
    float: left;
    cursor: pointer;
  }
`;
