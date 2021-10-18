import React, { useRef } from "react";
import { connect, styled } from "frontity";
import AuthorInfo from "./Author";
import { Separator } from "../common/separator";
import AuthorTable from "./author-table";
import Language from "./language";
import Skills from "./skills";
import ExtraSkills from "./skills/extra-skills";
import CVButton from "../common/button/cv-button";
import useFocusEffect from "../hook/use-focus-effect";
import useFocusTrap from "../hook/use-trap-focus";
import { MdClose } from "react-icons/md";

const LeftSidebar = ({ state, actions }) => {
  // Get the nav state and action
  const { isMobileLeftSidebarOpen } = state.theme;
  const { closeMobileLeftSidebar } = actions.theme;

  /**
   * Keep a reference to the close button so we can focus on it when
   * the modal opens
   */
  const closeButtonRef = useRef();

  // Focus on the close button when the mobile menu is open
  useFocusEffect(isMobileLeftSidebarOpen);

  // Trap focus within the menu when the mobile menu is open
  useFocusTrap(isMobileLeftSidebarOpen);

  return (
    <LeftSibebarWrapper
      className="left-sidebar"
      data-open={isMobileLeftSidebarOpen}
      role="dialog"
      aria-modal="true"
    >
      {/* Mobile navigation close button */}
      <CloseModal
        ref={closeButtonRef}
        aria-expanded={isMobileLeftSidebarOpen}
        onClick={closeMobileLeftSidebar}
      >
        <MdClose />
      </CloseModal>
      {/* Desktop & Mobile navigation modal */}
      <SidebarSectionWrapper>
        <AuthorInfo />
        <ContentWrapper className="content-wrapper">
          <AuthorTable />
          <Separator />
          <Language />
          <Skills />
          <ExtraSkills />
        </ContentWrapper>
        <CVButton />
      </SidebarSectionWrapper>
    </LeftSibebarWrapper>
  );
};

export default connect(LeftSidebar);

const LeftSibebarWrapper = styled.div`
  width: 290px;
  height: 100vh;
  display: table-cell;
  position: fixed;
  z-index: 9999;
  @media (max-width: 800px) {
    left: -290px;
    transition: 0.55s ease-in-out;
  }
  &[data-open="true"] {
    -webkit-transform: translateX(290px);
    transform: translateX(290px);
  }
`;
const SidebarSectionWrapper = styled.div`
  padding: 30px;
`;

const ContentWrapper = styled.div`
  padding-top: 315px;
  overflow: auto;
  position: relative;
  height: calc(100vh - 440px);
  scrollbar-width: none;
`;
const CloseModal = styled.div`
  position: absolute;
  width: 100%;
  display: none;
  z-index: 99999;
  cursor: pointer;
  @media (max-width: 800px) {
    display: inline-block;
  }
  & svg {
    padding: 20px;
    width: 30px;
    height: 30px;
    float: right;
    cursor: pointer;
  }
`;
