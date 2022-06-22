module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      extend: {
          screens: {
              dark: { raw: '(prefers-color-scheme: dark)' },
          },
      },
      colors: {
          "white": "#fffffffc",
          "light-purple": "#778BEB",
          "dark-purple": "#4A63E4",
          "purple": "#40407A",
          "gray": "#D1CCC0",
          "graydark": "#090a0a",
          "black": "#000000",
          "light-black": "#121314",
          "dark-blue": "#0f172a",
      }
  },
  plugins: [],
  darkmode: "class"
}