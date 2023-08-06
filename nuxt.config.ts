import axios from 'axios'

// nuxt.config.ts
export default defineNuxtConfig({
  hooks: {
    async "nitro:config"(nitroConfig) {
      if (nitroConfig.dev) {
        return;
      }
      const res = await axios.get("https://api.nuxtjs.dev/mountains");
      if (nitroConfig.prerender?.routes === undefined) {
        return;
      }
      nitroConfig.prerender.routes = res.data.map((mount: any) => {
        return `/mountains/${mount.slug}`;
      });
    },
  },
});