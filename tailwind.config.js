/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "#161c2e",
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://assets.weforum.org/article/image/responsive_big_webp_JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.webp')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
