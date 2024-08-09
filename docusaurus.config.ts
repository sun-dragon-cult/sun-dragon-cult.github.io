import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RuneQuest Glorantha for Foundry VTT",
  tagline: "by Sun Dragon Cult",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://sun-dragon-cult.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sun-dragon-cult", // Usually your GitHub org/user name.
  projectName: "sun-dragon-cult.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          path: "release-notes",
          routeBasePath: "release-notes",
          blogSidebarTitle: "Release Notes",
          blogSidebarCount: "ALL",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/sdc.jpg",
    navbar: {
      title: "RQG Foundry VTT System",
      logo: {
        alt: "Sun Dragon Cult Logo",
        src: "img/sdc.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "rqgSidebar",
        //   position: "left",
        //   label: "RQG System",
        // },
        {
          type: "docSidebar",
          sidebarId: "wikiSidebar",
          position: "left",
          label: "Wiki Module",
        },
        { to: "/release-notes", label: "Release Notes", position: "left" },
        {
          href: "https://github.com/sun-dragon-cult/fvtt-system-rqg",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        src: "img/sdc.svg",
        width: 100,
      },
      links: [
        {
          label: "Overview",
          to: "/",
        },
        {
          label: "About Sun Dragon Cult",
          to: "/about",
        },

        {
          label: "Release Notes",
          to: "/release-notes",
        },
        {
          label: "Discord",
          href: "https://discord.gg/foundryvtt",
        },
        {
          label: "GitHub",
          href: "https://github.com/sun-dragon-cult/fvtt-system-rqg",
        },
      ],
      copyright: `Sun Dragon Cult — RuneQuest Glorantha for Foundry VTT`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
