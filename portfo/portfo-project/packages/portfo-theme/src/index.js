import Theme from "./components";
import link from "@frontity/html2react/processors/link";

export default {
  name: "portfo-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      home_one: { on: false }, // if you want to use single home_one page type here true
      rightMenu: {
        home: [
          ["Home", "/"], // Type here page name and page link type like this ( / link here / )
          // ["Service", "/service/"], // Type here page name and page link type like this ( / link here / )
          ["Education", "/education/"], // Type here page name and page link type like this ( / link here / )
          // ["Portfolios", "/portfolios/"], // Type here page name and page link type like this ( / link here / )
          // ["Blog", "/blog/"], // Type here page name and page link type like this ( / link here / )
          ["Contact", "/contact/"], // Type here page name and page link type like this ( / link here / )
        ],
        homeOne: [
          ["Home", "#home"], // Type here section ID name with (#) tag
          // ["Service", "#services"], // Type here section ID name with (#) tag
          ["Education", "#education"], // Type here section ID name with (#) tag
          // ["Portfolios", "#portfolios"], // Type here section ID name with (#) tag
          ["Blog", "#blog"], // Type here section ID name with (#) tag
          ["Contact", "#contact"], // Type here section ID name with (#) tag
        ],
      },
      colors: {
        // All the global color properties can be control from here
        // color will apply on Light Theme mode
        lightTheme: {
          // Praimary color
          primary: "#182865",
          secondary: "#FFFFFF",
          barShadow: "4px 0px 10px rgba(47, 122, 249, 0.1)",
          baseColor: "#767676",
          lightColor: "#FAFAFA",
          headingColor: "#2B2B2B",
          textColor: "#767676",
          bodyBG: "#F0F0F6",
        },
        // color will apply on Dark Theme mode
        darkTheme: {
          primary: "#DD663B",
          secondary: "#242526",
          barShadow: "4px 0px 10px rgba(28, 28, 28, 0.1)",
          baseColor: "#3A3B3C",
          lightColor: "#767676",
          headingColor: "#FAFAFA",
          textColor: "#E4E6EB",
          bodyBG: "#18191A",
        },
      },

      // Settings for the Author Information
      authorinfo: {
        name: "Chris Soares",
        position: "Software Engineer",
        age: 28,
        residence: "Rexburg,ID",
        address: "111 W 7th S",
      },

      // Settings for the Author Language's
      language_off: {
        off: true,
      },

      language: [
        ["Portuguese", "100%"],
        ["English", "90%"],
        ["Spanish", "60%"],
      ],

      // Settings for the Author Skill's
      skill_off: {
        off: true,
      },

      skill: [
        ["Html", "90%"],
        ["CSS", "90%"],
        ["JS", "80%"],
        ["PHP", "70%"],
        ["WordPress", "80%"],
      ],

      // Settings for the Author Extra Skill's
      exskill_off: {
        off: true,
      },

      exskill: [
        ["Python"],
        ["MySQL"],
        ["Node.js"],
        ["Git Knowledge"],
      ],

      // Post Thumbnail Show & Hide option here ( Show = ture) ( Hide = false)
      thumbnal: {
        showOnPost: true,
      },

      // Settings for the featured media (image or video)
      featuredMedia: {
        // Whether to show it on archive view
        showOnArchive: true,
        // Whether to show it on post
        showOnPost: true,
      },

      // Site link auto fetch option set here
      // if you don't want to auto fetch then type herer "unhover"
      // if you want to auto fetch when hover then type herer "hover"
      // if you want to auto fetch all data then type here "all"
      autoPreFetch: "all",

      // All social media link set here
      // if set off it will remove from you site
      // set your social media link here
      social: {
        facebook: "off",
        facebook_url: "https://www.facebook.com/",

        twitter: "off",
        twitter_url: "https://twitter.com/",

        linkedin: "on",
        linkedin_url: "https://www.linkedin.com/in/chrissoares26/",

        instagram: "off",
        instagram_url: "https://www.instagram.com/",

        youtube: "off",
        youtube_url: "https://www.youtube.com/",

        whatsapp: "on",
        whatsapp_url: "https://wa.me/18016661888",

        pinterest: "off",
        pinterest_url: "https://www.pinterest.com/",
      },
    },
  },

  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [link],
    },
  },
  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      // Mobile Left-Sidebar Mneu
      openMobileLeftSidebar: ({ state }) => {
        state.theme.isMobileLeftSidebarOpen = true;
      },
      closeMobileLeftSidebar: ({ state }) => {
        state.theme.isMobileLeftSidebarOpen = false;
      },

      // Mobile Right-Sidebar Mneu
      openMobileRightSidebar: ({ state }) => {
        state.theme.isMobileRightSidebar = true;
      },
      closeMobileRightSidebar: ({ state }) => {
        state.theme.isMobileRightSidebar = false;
      },
    },
  },
};
