/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#262c36",
        "text-color": "#eee",
        "text-color2": "#f1f1f1",
        "profile-cover": "#202b47",
        "text-box": "hsla(0,0%,95%,.1)",
        "vd-control-bar": "#2c3d4f",
        avatar: "rgba(212,132,50,.2)",
        "select-cont": "hsla(0,0%,93%,.2)",
        "progress-color": "#2c3d4f",
        "second-white": "#15181e",
        "brand-color": "#f3912e",
        "brand-color-text": "hsla(0,0%,100%,.95)",
        "brand-color-shade": "rgba(243,145,46,.1)",
        "border-color": "hsla(0,0%,100%,.1)",
        shadow2: "0 0 15px hsla(0,0%,100%,.2)",
        "card-normal": "#fff9f3",
        heading: "hsla(0,0%,100%,.85)",
        "sub-heading": "hsla(0,0%,100%,.7)",
        paragraph: "hsla(0,0%,100%,.75)",
        "second-button": "hsla(0,0%,100%,.95)",
        "second-button-text": "rgba(8,15,15,.95)",
      },
    },
  },
  plugins: [
    
  ],
};
