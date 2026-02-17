// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Clearpath Robotics Documentation",
  url: "https://docs.clearpathrobotics.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "throw",
  favicon: "img/website_images/favicon.ico",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: ['**/components/**'],
        },
      },
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        versions: {
          ros2jazzy: {
            label: 'ROS 2 Jazzy',
          },
          ros2humble: {
            label: 'ROS 2 Humble',
          },
          ros1noetic: {
            label: 'ROS 1 Noetic',
          }
        },
        includeCurrentVersion: false,
        admonitions: {
          keywords: ['safety-danger', 'safety-warning', 'safety-caution'],
          extendDefaults: true,
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs_robots",
        path: "docs_robots",
        routeBasePath: "docs_robots",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        admonitions: {
          keywords: ['safety-danger', 'safety-warning', 'safety-caution'],
          extendDefaults: true,
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        includeCurrentVersion: false,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "proton",
        path: "docs_proton",
        routeBasePath: "docs_proton",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "components",
        path: "components",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        admonitions: {
          keywords: ['safety-danger', 'safety-warning', 'safety-caution'],
          extendDefaults: true,
        },
      },
    ],
    [
      "@docusaurus/theme-mermaid",
      {}
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: " ",
        logo: {
          alt: "Clearpath Robotics",
          src: "img/website_images/logo_rockwell_pipe_clearpath_colour.png",
          srcDark: "img/website_images/logo_rockwell_pipe_clearpath_white.png",
        },
        items: [
          {
            type: "doc",
            docId: "robots",
            label: "Robots",
            position: "left",
            docsPluginId: "docs_robots",
          },
          {
            type: "docsVersion",
            to: "/docs/ros/",
            label: "Software",
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
            type: "doc",
            docId: "index",
            label: "Proton",
            position: "left",
            docsPluginId: "proton",
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
        copyright: `© Clearpath Robotics by Rockwell Automation. All rights reserved. © Rockwell Automation Inc. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {light: "default", dark: 'dark'},
      },
      markdown: {
        mermaid: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'R6SHOZP2CR',

        // Public API key: it is safe to commit it
        apiKey: '656811d089022bbc909acf46732dd073',

        indexName: 'clearpathrobotics',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        //replaceSearchResultPathname: {
        //  from: '/docs/', // or as RegExp: /\/docs\//
        //  to: '/',
        //},

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,

        //... other Algolia params
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
