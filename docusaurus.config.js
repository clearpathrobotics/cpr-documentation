// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Clearpath Robotics Documentation",
  url: "https://docs.clearpathrobotics.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/website_images/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        path: "docs",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "indoornav_user_manual",
        path: "docs_indoornav_user_manual",
        routeBasePath: "docs_indoornav_user_manual",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "outdoornav_user_manual",
        path: "docs_outdoornav_user_manual",
        routeBasePath: "docs_outdoornav_user_manual",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: " ",
        logo: {
          alt: "Clearpath Robotics",
          src: "img/website_images/logo_yellow.png",
          srcDark: "img/website_images/logo_white.png",
        },
        items: [
          {
            to: "/docs/robots",
            label: "Robots",
            position: "left",
          },
          {
            to: "/docs/computers",
            label: "Computers",
            position: "left",
          },
          {
            to: "/docs/sensors",
            label: "Sensors",
            position: "left",
          },
          {
            to: "/docs/manipulators",
            label: "Manipulators",
            position: "left",
          },
          {
            to: "/docs/accessories",
            label: "Accessories",
            position: "left",
          },
          {
            to: "/docs/components",
            label: "Components",
            position: "left",
          },
          {
            to: "/docs/software",
            label: "Software",
            position: "left",
          },
          {
            to: "/docs/tools",
            label: "Tools",
            position: "left",
          },
          {
            to: "about",
            label: "About",
            position: "right",
          },
          {
            to: "https://github.com/clearpathrobotics/cpr-documentation",
            label: "GitHub",
            position: "right",
          },
          {
            to: "https://store.clearpathrobotics.com/",
            label: "Store",
            position: "right",
          },
          {
            to: "https://clearpathrobotics.com/",
            label: "Home",
            position: "right",
          },
          {
            type: 'custom-signInButton', 
            position: "right"
          },
          {
            type: 'custom-signOutButton', 
            position: "right"
          },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'outdoornav_user_manual',
          // }
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      footer: {
        copyright: `Copyright © 2023 Clearpath Robotics Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
