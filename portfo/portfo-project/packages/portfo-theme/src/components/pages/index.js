import React, { useEffect } from "react";
import { connect, styled } from "frontity";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const { Component: Html2React } = libraries.html2react;

  useEffect(() => {
    if (document.getElementsByClassName("slide-container").length >= 1) {
      let currentSlide = 0;
      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");

      const init = (n) => {
        slides.forEach((slide, index) => {
          slide.style.display = "none";
          dots.forEach((dot, index) => {
            dot.classList.remove("active");
          });
        });
        slides[n].style.display = "block";
        dots[n].classList.add("active");
      };
      document.addEventListener("DOMContentLoaded", init(currentSlide));
      const next = () => {
        currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
        init(currentSlide);
      };

      const prev = () => {
        currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
        init(currentSlide);
      };

      setInterval(() => {
        next();
      }, 5000);

      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          init(i);
          currentSlide = i;
        });
      });
    }
    const tabs = document.querySelectorAll(".tabs");
    const tab = document.querySelectorAll(".tab");
    const panel = document.querySelectorAll(".panel");

    function onTabClick(event) {
      // deactivate existing active tabs and panel

      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
      }

      for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
      }

      // activate new tabs and panel
      event.target.classList.add("active");
      let classString = event.target.getAttribute("id");
      document
        .getElementById("panels")
        .getElementsByClassName(classString)[0]
        .classList.add("active");
    }

    for (let i = 0; i < tab.length; i++) {
      tab[i].addEventListener("click", onTabClick, false);
    }
    !(function () {
      "use strict";
      var t = document,
        e = function () {
          var e, r, o;
          if (t.getElementsByClassName)
            e = t.getElementsByClassName("trustpilot-widget");
          else if (t.querySelectorAll)
            e = t.querySelectorAll(".trustpilot-widget");
          else {
            var s = [],
              a = new RegExp("(^| )trustpilot-widget( |$)"),
              l = t.body.getElementsByTagName("*");
            for (r = 0, o = l.length; o > r; r++)
              a.test(l[r].className) && s.push(l[r]);
            e = s;
          }
          for (r = 0; r < e.length; ++r)
            for (var i = e[r]; i.firstChild; ) i.removeChild(i.firstChild);
        };
      e(),
        t.addEventListener
          ? t.addEventListener("DOMContentLoaded", e)
          : t.attachEvent("onreadystatechange", function () {
              "complete" == t.readyState && e();
            });
      var r = "https:" == t.location.protocol ? "https:" : "http:",
        o = r + "//widget.trustpilot.com",
        s = t.createElement("script");
      (s.src = o + "/bootstrap/v5/tp.widget.bootstrap.min.js"),
        (s.async = !0),
        (s.defer = !0),
        t.querySelector("head").appendChild(s);
    })();
    //# sourceMappingURL=tp.widget.sync.bootstrap.min.js.map
  });

  return (
    <MainContainer>
      <Body>
        <Content>
          <Html2React html={page.content.rendered} />
        </Content>
      </Body>
    </MainContainer>
  );
};
export default connect(Page);
const MainContainer = styled.div`
  margin: 0 25px;
`;
const Body = styled.div``;
const Content = styled.div``;
