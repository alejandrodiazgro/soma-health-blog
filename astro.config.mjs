import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.somahealth.com.mx",
  base: "/blog",
  output: "static",
  integrations: [sitemap()],
  trailingSlash: "never"
});
