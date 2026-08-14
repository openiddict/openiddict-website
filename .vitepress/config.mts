import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OpenIddict",
  description: "OpenIddict website",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Documentation", link: "https://documentation.openiddict.com/" },
      { text: "Samples", link: "https://github.com/openiddict/openiddict-samples" },
      { text: "Changelog", link: "https://github.com/openiddict/openiddict-core/releases" },
      { text: "Community", link: "https://app.gitter.im/#/room/#openiddict_openiddict-core:gitter.im" },
      { text: "Support", link: "/support" }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/openiddict/openiddict-core" },
      { icon: "twitter", link: "https://x.com/openiddict" }
    ],

    externalLinkIcon: true,
    logo: "/logo.png",

    editLink: {
      pattern: "https://github.com/openiddict/openiddict-website/edit/dev/:path",
      text: "Edit this page on GitHub"
    },

    footer: {
      message: "Proudly powered by VitePress."
    }
  }
})
