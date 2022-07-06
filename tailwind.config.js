/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#6852ED",

          "secondary": "#BA43FC",

          "accent": "#554D89",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#0891b2",

          "success": "#16a34a",

          "warning": "#FBBD23",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
