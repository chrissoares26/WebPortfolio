const settings = {
  name: "portfo-project",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Portfo Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "portfo-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Portfolio", "/portfolio"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://portfolio.chrissoarespro.com",
          homepage: "/home/",
          postTypes: [
            {
              type: "portfolio",
              endpoint: "Portfolio",
              archive: "/portfolio",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
  ],
};

export default settings;
