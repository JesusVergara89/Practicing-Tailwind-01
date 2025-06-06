/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '547px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#FF00FF',
        blueShades: {
          450: '#93C5FD', 
          460: '#7DAEFF',
          470: '#5F99F7', 
          480: '#3B82F6', 
          490: '#2563EB',  
        },
      },
    },
  },
  plugins: [],
}

