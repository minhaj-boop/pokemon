/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      Segoe_UI_Bold: ['Segoe_UI_BOLD'],
      Segoe_UI_Primary: ['Segoe_UI_PRIMARY'],
      Segoe_UI_Italic: ['Segoe_UI_ITALIC'],
      Segoe_UI_Italic_Bold: ['Segoe_UI_ITALIC_BOLD'],
      Inter_Black: [`Inter_Black`],
      Inter_Black_Italic: [`Inter_Black_Italic`],
      Inter_Bold: [`Inter_Bold`],
      Inter_Bold_Italic: [`Inter_Bold_Italic`],
      Inter_Extra_Bold: [`Inter_Extra_Bold`],
      Inter_Extra_Bold_Italic: [`Inter_Extra_Bold_Italic`],
      Inter_Extra_Light: [`Inter_Extra_Light`],
      Inter_Extra_Light_Italic: [`Inter_Extra_Light_Italic`],
      Inter_Italic: [`Inter_Italic`],
      Inter_Light: [`Inter_Light`],
      Inter_Light_Italic: [`Inter_Light_Italic`],
      Inter_Medium: [`Inter_Medium`],
      Inter_Inter_MediumItalic: [`Inter_Inter_MediumItalic`],
      Inter_Regular: [`Inter_Regular`],
      Inter_SemiBold: [`Inter_Inter_SemiBold`],
      Inter_Semi_Bold_Italic: [`Inter_Semi_Bold_Italic`],
      Inter_Thin: [`Inter_Thin`],
      Inter_Thin_Italic: [`Inter_Thin_Italic`],
    }, //set the font family 
    fontSize: {
      xs: '0.75rem', //12px --
      sm: '0.875rem', //14 px --
      base: '1rem', //16px --
      lg: '1.125rem', //18px --
      xl: '1.25rem', //20px --
      '2xl': '1.5rem', //24px
      '3xl': '1.875rem', //30px
      '4xl': '2.25rem', //36px
      '5xl': '3rem', //48px --
      '6xl': '4rem', //64px
      '7xl': '8.75rem', //140px --
      
    },
    colors: {
      yellow: "#FFC93E", // set the yellow color 
      brown: "##725114", // set the second color brown 
      blue: {
        DEFAULT: "#111D5E" ,//Set the default blue 
        variantOne: "#111D5E",
        variantTwo: "#0045FF",
        variantThree: "#0A142F"
      },
      white: {
        light: "#FFFCF6", //set the white color light
        DEFAULT: "#F5F5F5", //set the primary or default white
        light_Two: "#FBFBFB"
      },
      purple: "#BE229C", //set the purple color
      violet: "#7C3EFF", //set the violet color
      grey: {
        DEFAULT: "#F6F6F6",
        dark: "#D4D4D4",
        light: "#F6F6F6"
      },
      black: {
        DEFAULT: "0A142F"
      }
    },
  },
};
