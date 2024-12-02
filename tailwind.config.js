/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'custom-hover': '#ccd8ff',
        'body-color':'#f9f9f9',
        'blue':'#003DFF',
        'table-green':'#5EC32033',
        'table-yellow':'#F9B43633',
        'table-blue':'#26A5FF33',
        'txt-blue':'#26A5FF',
        'txt-yellow':'#F9B436',
        'txt-green':'#5EC320',
      },
    },
  },
  plugins: [],
}

