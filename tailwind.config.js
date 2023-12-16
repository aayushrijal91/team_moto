/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#F9A633',
        secondary: '#32C0EE',
        tertiary: "#2e2e2e",
        grey: '#414141',
        dark: '#414141',
        light: "#ECECEB",
      },
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      fontSize: {
        28: '28px',
        45: '45px',
        85: '85px'
      },
      borderRadius: {
        10: '10px'
      }
    },
  },
  plugins: [],
}

