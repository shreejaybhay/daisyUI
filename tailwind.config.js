/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: ["light", "dark", "cupcake", "bumblebee", "emerald",
  //     "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "aqua"],
  // },
  daisyui: {
    themes: [
      {
        dark: {

          "primary": "#242526",

          "secondary": "#4A4D6E",

          "accent": "#00dfc6",

          "neutral": "#0d0602",

          "base-100": "#4C4F5D",
          "base-200": "#090A11",
          "base-300": "#F7F7FF",

          "--svg-color-1": "#414360",
          "--svg-color-2": "#F7F7FF",
          "--svg-color-3": "#B092FF",
          "--svg-color-4": "#585B82",
          "--bg-secondary": "#585B82",
          "--text-secondary": "#F7F7FF",
          "--bg-searchbox": "#15172A",
          "--bg-inputbox": "#000",
          "--bg-inputboxborder": "#A697CE",
          "--bg-boxbottom": "#1E2136",
          "--bg-boxbottomkbd": "#4A4C6A",



          "--box-1": "#444765",
          "--overlay-black": "rgb(0 0 0 / 0.15)",


          "base-kbd": "#4A4C6A",

          "info": "#00aae1",

          "success": "#00b966",

          "warning": "#ffaa00",

          "error": "#ff7893",

          "text-primary-content": "#CFCFCF",
        },
      },

      {
        light: {
          "primary": "#fff",

          "secondary": "#F2F2FD",



          "accent": "#00dfc6",

          "neutral": "#0d0602",

          "base-100": "#969FAF",
          "base-200": "#EBEDF0",
          "base-300": "#414360",

          "--svg-color-1": "#F7F7FF",
          "--svg-color-2": "#414360",
          "--svg-color-3": "#A38CE0",
          "--svg-color-4": "#D5D6F5",
          "--bg-secondary": "#D5D6F5",
          "--text-secondary": "#414360",
          "--bg-searchbox": "#F5F6F7",
          "--bg-inputbox": "#FFFFFF",
          "--bg-inputboxborder": "#613CC4",
          "--bg-boxbottom": "#FFFFFF",
          "--bg-boxbottomkbd": "#F0F1F3",


          "--box-1": "#fff",
          "--overlay-black": "rgb(255 255 255 / 0.15)",


          "base-kbd": "#EBEEF1",

          "info": "#00aae1",

          "success": "#00b966",

          "warning": "#ffaa00",

          "error": "#ff7893",

          "text-primary-content": "#1C1E21",

        },
      },
    ],
  },
  plugins: [
    require("daisyui")
  ],
}

