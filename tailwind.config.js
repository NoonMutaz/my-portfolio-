const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

// filepath: c:\Users\noona\react\react1\react1\tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".flowbite-react\\class-list.json"],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
};