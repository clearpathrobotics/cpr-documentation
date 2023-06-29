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
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/website_images/favicon.ico",
  staticDirectories: ['static', 'docs/static'],

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
        id: "docs",
        path: "docs",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars-docs.js"),
        remarkPlugins: [math],
        rehypePlugins: [katex],
        showLastUpdateTime: true,
        lastVersion: 'current',
        versions: { 
          current: {
            label: 'ROS 2 Humble',
            // path: 'ros2humble',
          }
        },
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
            type: "docsVersion",
            to: "/docs/robots",
            label: "Robots",
            position: "left",
            docsPluginId: "docs",
          },
          {
            type: "docsVersion",
            to: "/docs/ros",
            label: "ROS",
            position: "left",
            docsPluginId: "docs",
          },
          {
            type: "docsVersion",
            label: "OutdoorNav",
            position: "left",
            docsPluginId: "outdoornav_user_manual",
          },
          {
            type: "doc",
            docId: "index",
            label: "IndoorNav",
            position: "left",
            docsPluginId: "indoornav_user_manual",
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            docsPluginId: "docs"
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: '/docs/navigation_packages',
                label: 'All versions',
              },
            ],
            docsPluginId: "outdoornav_user_manual",
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
