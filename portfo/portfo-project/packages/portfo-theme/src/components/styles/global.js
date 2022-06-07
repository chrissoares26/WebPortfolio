import React from "react";
import { connect, Global, css } from "frontity";
import Close from "../assets/img/close.png";
import Checkmark from "../assets/img/checked.png";
import Light404 from "../assets/img/Light-404.png";
import Dark404 from "../assets/img/Dark-404.png";

const GlobalCSS = ({ state, theme }) => {
  // const { primary, Success, sidebar, base, light, text, bodyBG } = state.theme.Colors.black;
  const {
    primary,
    banner,
    secondary,
    barShadow,
    baseColor,
    lightColor,
    headingColor,
    textColor,
    bodyBG,
  } = theme ? state.theme.colors.lightTheme : state.theme.colors.darkTheme;
  return (
    <Global
      styles={css`
        html,
        body {
          border: none;
          margin: 0;
          padding: 0;
          background-color: ${bodyBG};
          color: ${textColor};
          transition: all ease-in 300ms;
          box-sizing: border-box;
          font-family: "Inter", sans-serif;
          font-size: 15px;
          font-weight: "regular";
          letter-spacing: -0.015em;
          text-align: left;
          scroll-behavior: smooth;
          @media (max-width: 800px) {
            font-size: 14px;
          }
          @media (max-width: 500px) {
            font-size: 12px;
          }
        }
        p,
        blockquote,
        address,
        big,
        cite,
        code,
        em,
        font,
        img,
        small,
        strike,
        sub,
        sup,
        li,
        ol,
        ul,
        fieldset,
        form,
        label,
        legend,
        button,
        table,
        caption,
        tr,
        th,
        td {
          border: none;
          font-size: 15px;
          line-height: inherit;
          margin: 0;
          padding: 0;
          text-align: inherit;
          transition: all ease-in 400ms;
          @media (max-width: 800px) {
            font-size: 14px;
          }
          @media (max-width: 500px) {
            font-size: 12px;
          }
          &:focus {
            outline: none;
          }
        }
        figure {
          margin: 0px;
        }
        button {
          cursor: pointer;
        }
        h1 {
          font-weight: 800;
          font-size: 48px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 48px;
          }
          @media (max-width: 500px) {
            font-size: 32px;
          }
        }
        h2 {
          font-weight: 700;
          font-size: 32px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 24px;
          }
          @media (max-width: 500px) {
            font-size: 24px;
          }
        }
        h3 {
          font-weight: 600;
          font-size: 24px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 18px;
          }
          @media (max-width: 500px) {
            font-size: 18px;
          }
        }
        h4 {
          font-weight: 600;
          font-size: 18px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 17px;
          }
          @media (max-width: 500px) {
            font-size: 17px;
          }
        }
        h5 {
          font-weight: 500;
          font-size: 17px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 16px;
          }
          @media (max-width: 500px) {
            font-size: 16px;
          }
        }
        h6 {
          font-weight: "regular";
          font-size: 16px;
          line-height: 1.5;
          text-align: inherit;
          margin-bottom: 8px;
          color: ${headingColor};
          transition: all ease-in 400ms;
          margin: 0;
          padding: 0;
          @media (max-width: 800px) {
            font-size: 15px;
          }
          @media (max-width: 500px) {
            font-size: 15px;
          }
        }
        p {
          font-weight: "regular";
          font-size: 15px;
          line-height: 1.5;
          margin-bottom: 15px;
          color: ${textColor};
          @media (max-width: 800px) {
            font-size: 15px;
          }
          @media (max-width: 500px) {
            font-size: 15px;
          }
        }
        blockquote::before,
        blockquote::after {
          content: "";
        }
        a {
          color: ${theme ? "#0A9141" : "#28d56e"};
        }
        a,
        path {
          transition: all 0.15s linear;
          text-decoration: none;
          font-weight: 500;
        }
        img {
          width: 100%;
          margin-bottom: 15px;
        }
        .left-sidebar {
          background: ${secondary};
          box-shadow: ${barShadow};
          transition: all ease-in 300ms;
        }
        .left-header {
          background: ${secondary};
          transition: all ease-in 300ms;
        }
        .primary {
          color: ${banner};
        }
        .author-wrapper li p {
          background-color: ${primary};
          color: ${theme ? "#DFE6E8" : "#052b37"};
        }
        .btn-fill-primary a {
          color: ${theme ? "#052b37" : "#DFE6E8"};
          background-color: ${primary};
          transition: all ease-in 300ms;
          & :hover {
            color: ${theme ? "#DFE6E8" : "#052b37"};
          }
        }
        .right-sidebar {
          & .sidebarBox {
            background: ${secondary};
            box-shadow: ${barShadow};
            transition: all ease-in 300ms;
            & .right-sidebar-theme-mode {
              position: absolute;
              width: 110px;
              padding: 20px 0;
              color: ${headingColor};
              @media (max-width: 800px) {
                display: none;
              }
            }
          }
          & button {
            font-size: 16px;
            padding: 5px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 25px;
            background: ${primary};
          }
        }
        .left-bottom-btn {
          & button {
            background: ${primary};
            color: ${theme ? "#DFE6E8" : "#052B37"};
            &:focus {
              outline: none;
            }
          }
          & svg {
            color: ${theme ? "#DFE6E8" : "#052B37"};
          }
        }
        input[type="submit" i]:focus {
          outline: none;
        }
        .social-link-list {
          & svg {
            color: ${theme ? "#052B37" : "#052B37"};
            fill: ${theme ? "#DFE6E8" : "#052B37"};
          }
          & a:hover svg {
            color: ${theme ? "#DFE6E8" : "#052B37"};
          }
          & a {
            background-color: ${primary};
          }
        }
        .author-name {
          & a {
            color: ${headingColor};
            transition: all ease-in 400ms;
          }
        }
        .content-wrapper::-webkit-scrollbar {
          display: none;
        }
        .mobiel-nav-wrapper {
          background: ${secondary};
          box-shadow: ${barShadow};
        }
        .overlay {
          width: 100%;
          height: 100%;
          position: absolute;
          background: ${primary};
          opacity: 0;
          transition: 0.4s ease-in-out;
        }
        .portfolio-icon {
          width: 100%;
          height: 100%;
          position: absolute;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .wp-block-portfolio li svg {
          position: absolute;
          z-index: 9;
          cursor: pointer;
          color: ${theme ? "#052b37" : "#df36e8"};
          font-size: 32px;
          opacity: 0;
          transform: translatey(30px);
          transition: 0.4s ease-in-out;
        }
        .wp-block-portfolio.columns-3 li:hover svg {
          opacity: 1;
          transform: translatey(0px);
        }
        .wp-block-portfolio.columns-3 li:hover .overlay {
          opacity: 0.8;
          transform: translatey(0px);
        }
        .wp-block-portfolio.columns-3 li {
          position: relative;
          background: transparent;
          box-shadow: none;
        }
        .wp-block-portfolio.columns-3 li img {
          margin: 0 0 -3px 0;
        }
        // Gutenberg Patterns Style
        .wp-block-cover-image .wp-block-subhead:not(.has-text-color),
        .wp-block-cover-image h1:not(.has-text-color),
        .wp-block-cover-image h2:not(.has-text-color),
        .wp-block-cover-image h3:not(.has-text-color),
        .wp-block-cover-image h4:not(.has-text-color),
        .wp-block-cover-image h5:not(.has-text-color),
        .wp-block-cover-image h6:not(.has-text-color),
        .wp-block-cover .wp-block-subhead:not(.has-text-color),
        .wp-block-cover h1:not(.has-text-color),
        .wp-block-cover h2:not(.has-text-color),
        .wp-block-cover h3:not(.has-text-color),
        .wp-block-cover h4:not(.has-text-color),
        .wp-block-cover h5:not(.has-text-color),
        .wp-block-cover h6:not(.has-text-color) {
          color: ${headingColor};
        }
        .wp-block-cover-image p:not(.has-text-color),
        .wp-block-cover p:not(.has-text-color) {
          color: ${textColor};
        }
        .w-80 {
          width: 80%;
          @media (max-width: 800px) {
            margin: 0 auto;
          }
          @media (max-width: 500px) {
            width: 100%;
            margin: 0 auto;
          }
        }
        .width-60 {
          width: 60%;
          margin: 0 auto;
          @media (max-width: 500px) {
            width: 100%;
          }
        }
        .uppercase {
          text-transform: uppercase;
        }
        .bg-secondary {
          background: ${secondary};
          transition: all ease-in 400ms;
        }
        .p-1 {
          padding: 10px;
        }
        .p-2 {
          padding: 20px;
        }
        .p-3 {
          padding: 30px;
        }
        .p-4 {
          padding: 40px;
        }
        .p-5 {
          padding: 50px;
        }
        .m-0 {
          margin: 0;
        }
        .svg-icon-color figure {
          margin: 0;
        }
        .space-between {
          display: flex;
          justify-content: space-between;
          &:first-of-type {
            font-size: 18px;
          }
        }
        .space-between li {
          list-style: none;
        }
        /* Contact Form 7 CSS */
        .wpcf7-form-control-wrap {
          display: flex;
          position: relative;
          & span {
            position: absolute;
            bottom: -20px;
          }
        }
        .wpcf7-form p {
          margin-bottom: 20px;
        }
        .wpcf7-form-control {
          padding: 10px;
          font-size: 16px;
          color: ${textColor};
          background: ${theme ? bodyBG : "#DFE6E8"};
          border: none;
          width: 100%;
        }
        .wpcf7-form-control.wpcf7-submit {
          cursor: pointer;
          background: ${primary};
          text-transform: uppercase;
          color: ${theme ? secondary : "#052B37"};
          font-size: 14px;
          font-weight: 600;
          font-family: "Inter";
          padding: 9px 24px;
        }
        .wpcf7-submit {
          width: auto;
        }
        .my-services,
        .home-banner,
        .price-plans,
        .client-testimonials,
        .client-logo,
        .contact-form,
        .location,
        .portfolios-wrapper {
          margin-bottom: 50px;
        }
        .home-banner .wp-block-columns {
          margin: 0px;
        }
        .banner-img {
          margin: 0;
          & figure,
          & img {
            margin-bottom: -3px;
          }
        }
        .banner-bottom-bg {
          background-color: ${theme ? primary : baseColor};
          transition: all ease-in-out 0.4s;
        }
        .banner-bg .has-black-background-color {
          background-color: ${secondary};
          transition: all ease-in-out 0.4s;
        }
        .header .btn-primary {
          color: #2b2b2b !important;
          background-color: ${primary};
          border-radius: 5px;
          font-weight: 600;
          padding: 15px 35px;
        }
        .btn-primary > .wp-block-button__link {
          color: ${secondary};
          background-color: ${primary};
          padding: 15px 35px;
          transition: all ease-in-out 0.4s;
        }
        .progress_bar,
        .progress_bar_outline {
          color: ${theme ? primary : baseColor};
        }
        .btn-white-color > .wp-block-button__link {
          color: ${headingColor};
          padding: 10px 35px;
          transition: all ease-in-out 0.4s;
        }
        @media screen and (-webkit-min-device-pixel-ratio: 0) {
          .home-banner .wp-block-cover {
            align-items: flex-end !important;
            @media (max-width: 800px) {
              align-items: center !important;
            }
          }
        }
        .home-banner .wp-block-cover {
          align-items: end;
          overflow: hidden;
          @media (max-width: 800px) {
            align-items: center;
            text-align: center;
          }
        }
        .home-banner .has-text-align-left {
          @media (max-width: 800px) {
            text-align: center;
          }
        }
        .home-banner .is-content-justification-left {
          @media (max-width: 800px) {
            justify-content: center;
          }
        }
        .cube {
          position: absolute;
          bottom: -15px;
          left: 28vw;
          width: 10px;
          height: 10px;
          border: solid 1px #05ff00;
          transform-origin: top left;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation: cube 12s ease-in forwards infinite;

          &:nth-of-type(2n) {
            border-color: #ffb400;
          }

          &:nth-of-type(2) {
            animation-delay: 2s;
            border-radius: 100%;
            left: 23vw;
          }

          &:nth-of-type(3) {
            animation-delay: 4s;
            left: 50vw;
            border-color: #0047ff;
          }

          &:nth-of-type(4) {
            animation-delay: 6s;
            border-radius: 3px;
            left: 6vw;
          }

          &:nth-of-type(5) {
            animation-delay: 8s;
            left: 14vw;
            border-radius: 3px;
            border-color: #ff2e00;
          }

          &:nth-of-type(6) {
            animation-delay: 10s;
            left: 47vw;
          }
        }

        @keyframes cube {
          from {
            transform: translateY(0px) rotate(0deg);
          }
          to {
            transform: translateY(-700px) rotate(560deg);
          }
        }
        .banner-animat {
          z-index: -1;
        }
        .hide-on-tab {
          @media (max-width: 800px) {
            display: none;
          }
        }
        .hide-for-desktop {
          display: none;
          @media (max-width: 800px) {
            display: block;
          }
        }
        .home-banner .on-tab {
          @media (max-width: 800px) {
            position: absolute;
            z-index: -5;
            left: 0;
            top: 5%;
            margin: 0 !important;
          }
          @media (max-width: 500px) {
            top: 4%;
          }
        }
        .plans-offer-time {
          font-size: 14px;
          opacity: 0.5;
        }
        .plans-bg-primary {
          background: ${primary};
          padding: 8px 0;
          transition: all ease-in 400ms;
          & p {
            color: ${headingColor};
            margin: 0;
          }
        }
        .price-plans-col {
          background: ${secondary};
          transition: all ease-in 400ms;
        }
        .price-plans-popular-col {
          background: ${secondary};
          box-shadow: ${barShadow};
          transition: all ease-in 400ms;
        }
        .price-plans-body {
          padding: 40px;
        }
        .price-plan-list {
          & ul:last-child {
            margin-bottom: 30px;
            & li:last-child {
              border: none !important;
            }
          }
        }
        .price-plan-list ul li {
          list-style: none;
          border-bottom: 1px solid;
          border-color: ${lightColor};
          position: relative;
          padding: 10px 0 10px 30px;
          font-size: 14px;
          @media (max-width: 799px) {
            font-size: 12px;
          }
        }
        .price-plan-list ul li::before {
          content: url("${Checkmark}");
          left: 0;
          position: absolute;
        }
        .price-plan-list .disabled li::before {
          content: url("${Close}");
          left: 0;
          position: absolute;
        }
        .plan-order-btn {
          & a:hover {
            color: ${primary};
          }
        }
        .plan-order-btn a {
          font-size: 16px;
          text-transform: uppercase;
          font-weight: bold;
          padding: 12px 35px;
          box-shadow: 4px 0px 10px rgba(4, 4, 4, 0.1);
          color: #000;
          @media (max-width: 799px) {
            font-size: 12px;
          }
        }
        .plan-popular-order-btn a {
          font-size: 16px;
          text-transform: uppercase;
          font-weight: bold;
          padding: 12px 35px;
          background: ${primary};
          box-shadow: 4px 0px 10px rgba(4, 4, 4, 0.1);
          color: #000;
          @media (max-width: 799px) {
            font-size: 12px;
          }
        }
        .contact-icon img {
          margin-bottom: 0px;
        }
        .contact-icon figure {
          width: 40px;
          height: 40px;
          align-content: center;
          justify-content: center;
          display: grid !important;
          border-radius: 100%;
          background: ${primary};
          line-height: 0px;
          margin: 0 0 30px 0;
        }
        .wp-block-latest-posts li {
          background: ${secondary};
          box-shadow: ${barShadow};
        }
        .wp-block-latest-posts__featured-image img {
          width: 100%;
        }
        .wp-block-latest-posts__featured-image > a {
          padding: 0px !important;
        }
        .wp-block-latest-posts a {
          padding: 0 20px 0 20px;
          text-transform: capitalize;
          font-size: 18px;
          display: inline-block;
          @media (max-width: 800px) {
            font-size: 17px;
          }
        }
        .wp-block-latest-posts__post-excerpt .more-link {
          font-size: 14px !important;
          padding: 10px 0 10px 0 !important;
          display: block;
          @media (max-width: 800px) {
            font-size: 13px;
          }
        }
        .wp-block-latest-posts.columns-2 li:nth-of-type(2n) {
          margin-right: 0;
        }
        .wp-block-latest-posts.columns-3 li:nth-of-type(3n) {
          margin-right: 0;
        }
        .wp-block-latest-posts.columns-4 li:nth-of-type(4n) {
          margin-right: 0;
        }
        .wp-block-latest-posts.columns-5 li:nth-of-type(5n) {
          margin-right: 0;
        }
        .wp-block-latest-posts.columns-6 li:nth-of-type(6n) {
          margin-right: 0;
        }
        .wp-block-latest-posts__post-excerpt .more-link span {
          display: none;
        }
        .wp-block-latest-posts .wp-block-latest-posts__post-excerpt {
          padding: 0 20px 0 20px;
          font-size: 15px;
          @media (max-width: 800px) {
            font-size: 14px;
          }
        }
        .go-back-btn {
          cursor: pointer;
          background: ${primary};
          padding: 15px 30px;
          color: ${theme ? "#052B37" : "#DFE6E8"};
          font-size: 17px;
          font-weight: 500;
          & svg {
            vertical-align: sub;
          }
        }
        .ptam-block-post-grid .is-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr;
          grid-gap: 0 1.3em;
        }
        .ptam-block-post-grid .is-grid.columns-1 {
          grid-template-columns: 1fr;
        }
        .ptam-block-post-grid .is-grid.columns-2 {
          grid-template-columns: 1fr 1fr;
          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
        .ptam-block-post-grid .is-grid.columns-3 {
          grid-template-columns: 1fr 1fr 1fr;
          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
        .ptam-block-post-grid .is-grid.columns-4 {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
        .ptam-block-post-grid .is-grid.columns-5 {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
        .ptam-block-post-grid .is-grid.columns-6 {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          @media (max-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr;
          }
          @media (max-width: 500px) {
            grid-template-columns: 1fr;
          }
        }
        .ptam-post-grid-items.is-grid article {
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .portfolios-wrapper .ptam-block-post-grid-text {
          background: ${primary};
          position: absolute;
          width: 100%;
          bottom: 0;
        }
        .portfolios-wrapper
          .ptam-block-post-grid-text
          .ptam-block-post-grid-title {
          padding: 10px 20px;
          text-align: center;
        }
        .portfolios-wrapper
          .ptam-block-post-grid-text
          .ptam-block-post-grid-excerpt {
          margin: 0;
        }
        /* 404 Page image */
        .img-404 {
          background: url(${theme ? Light404 : Dark404});
          background-repeat: no-repeat;
          background-size: contain;
        }
        // Banner Css
        .banner {
          height: 500px;
          width: 100%;
          position: relative;
          display: inline-block;
          transform-origin: 50% 50% 0px;
          visibility: inherit;
          opacity: 1;
          transform: perspective(600px) translate3d(0px, 0px, 1px);
        }
        .white-border {
          text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        }
        .history-wrapper .bg-primary {
          background: ${primary};
          color: ${theme ? "#DFE6E8" : " #052B37"};
          font-size: 10px;
          padding: 3px 10px;
          margin-left: 20px;
        }

        .history-info .wp-block-columns {
          margin-top: 1.75em;
          &:first-of-type {
            margin-top: 0px;
          }
          &:last-child {
            margin-bottom: 0px;
          }
        }

        /*  */

        .dots-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
        }

        .dots-container .dot {
          cursor: pointer;
          margin: 5px;
          width: 10px;
          height: 10px;
          color: #333;
          border-radius: 50%;
          background-color: #dfd6ce;
        }

        .dots-container .dot.active {
          background-color: ${primary};
        }

        .slide-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 100%;
          margin: auto;
          position: relative;
        }

        .slide-container .slide {
          display: none;
          width: 100%;
        }

        .fade {
          -webkit-animation-name: fade-image;
          -webkit-animation-duration: 1.5s;
          animation-name: fade-image;
          animation-duration: 1.5s;
        }

        @-webkit-keyframes fade-image {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-image {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }

        .slide-container .slide img {
          width: auto;
        }
        /*  */

        // Gutenberg Custome style
        .tabs .wp-block-group__inner-container {
          display: flex;
          justify-content: center;
          margin: 0px 2px 20px 2px;
          @media (max-width: 500px) {
            display: block;
          }
        }
        .tabs .wp-block-group__inner-container > * {
          color: ${headingColor};
          height: 100%;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 30px;
          &:last-child {
            margin-right: 0px;
          }
          @media (max-width: 500px) {
            display: inline-grid;
          }
        }
        .tabs .wp-block-group__inner-container > *:hover:not(.active) {
          color: ${primary};
        }
        .tabs .wp-block-group__inner-container > .active {
          color: ${primary};
        }
        .panel {
          transition: 0.4s ease-in-out;
          opacity: 0;
          transform: translateY(100px);
          visibility: hidden;
          position: absolute;
          top: 0;
        }
        .panel.active {
          opacity: 1;
          transform: translateY(0px);
          visibility: visible;
          position: initial;
        }
        #panels .wp-block-group__inner-container {
          position: relative;
        }
        .portfolios-wrapper
          .layout-1
          .ptam-post-grid-items
          article:hover
          .ptam-block-post-grid-image
          a::before {
          opacity: 0.8;
          transform: translateY(0%);
        }
        .portfolios-wrapper .ptam-block-post-grid-image {
          position: relative;
          overflow: hidden;
          & img {
            margin: 0 0 -4px 0;
            max-width: 100%;
          }
          & a::before {
            content: "";
            width: 100%;
            height: 100%;
            background: ${primary};
            position: absolute;
            opacity: 0;
            transition: all ease-in-out 0.4s;
            transform: translateY(80%);
          }
        }
        .portfolios-wrapper
          .ptam-post-grid-items
          article
          .ptam-block-post-grid-text {
          background: ${primary};
          position: absolute;
          width: 100%;
          bottom: 0;
          transform: translateY(50px);
          opacity: 0;
          transition: all ease-in-out 0.4s;
        }
        .portfolios-wrapper
          .layout-2
          .ptam-post-grid-items
          article:hover
          .ptam-block-post-grid-text {
          opacity: 1;
          transform: translateY(0px);
        }
        .trustpilot .dark {
          display: ${theme ? "none" : " block"};
        }
        .trustpilot .light {
          display: ${theme ? "block" : " none"};
        }
        .flip-box {
          perspective: 1000px;
        }
        .flip-box-inner,
        .flip-box-inner .wp-block-group__inner-container {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }
        .flip-box:hover .flip-box-inner {
          transform: rotateX(180deg);
        }
        .flip-box-front,
        .flip-box-back {
          position: initial;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          transition: all ease-in 400ms;
        }
        .flip-box:hover .flip-box-inner .flip-box-front {
          position: absolute;
          transition: all ease-in 400ms;
          visibility: hidden;
          overflow: hidden;
        }
        .flip-box-back {
          transform: rotateX(180deg);
          position: inherit;
          display: none;
          transition: all ease-in 400ms;
        }
        .flip-box:hover .flip-box-inner .flip-box-back {
          display: block;
        }

        .wp-block-image.alignfull img,
        .wp-block-image.alignwide img {
          width: 100%;
          height: auto;
        }
        .wp-block-buttons {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .wp-block-buttons.is-content-justification-center {
          justify-content: center;
        }
        .footer-wrapper {
          background: ${secondary};
          transition: all ease-in-out 0.4s;
        }
        .service-quote {
          border: none;
          background: ${theme ? "rgba(255, 180, 0, 0.2)" : "#242526"};
          padding: 14px 18px;
        }
        .service-quote p {
          margin: 0;
        }
        .wp-block-cover__image-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          max-width: none;
          max-height: none;
          -o-object-fit: cover;
          object-fit: cover;
          outline: none;
          border: none;
          box-shadow: none;
        }
        .wp-block-cover .wp-block-cover__inner-container {
          width: calc(100% - calc(100px));
        }
        /* Right Sidebar Menu  */
        .menu-wrapper ul li {
          list-style: none;
          margin-bottom: 43px;
          &:last-child {
            margin-bottom: 0px;
          }
          & a {
            background-color: ${lightColor};
            display: flex;
            padding: 10px;
            border-radius: 100%;
            & svg {
              color: ${baseColor};
              width: 20px;
              height: 20px;
            }
            &:hover .tooltip {
              visibility: visible;
              transform: translatey(0px);
              opacity: 1;
            }
            &[aria-current="page"] .tooltip {
              visibility: visible;
              transform: translatey(0px);
              opacity: 1;
            }
            &:hover,
            &[aria-current="page"] {
              background-color: ${primary};
              & svg {
                color: ${secondary};
              }
            }
            .tooltip {
              visibility: hidden;
              width: 100px;
              background-color: ${theme ? "#052B37" : "#DFE6E8"};
              color: ${theme ? "#DFE6E8" : "#052B37"};
              text-align: center;
              border-radius: 2px;
              padding: 5px 0;
              position: absolute;
              z-index: 1;
              margin-top: -47px;
              left: 6px;
              text-transform: capitalize;
              font-size: 12px;
              transition: 0.4s ease-in-out;
              transform: translatey(30px);
              opacity: 0;
              &::after {
                content: "";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -7px;
                border-width: 6px;
                border-style: solid;
                border-color: ${theme ? "#2B2B2B" : "#FFFFFF"} transparent
                  transparent transparent;
              }
            }
          }
        }
      `}
    />
  );
};
export default connect(GlobalCSS);
