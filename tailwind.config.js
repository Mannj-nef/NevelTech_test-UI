/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['"PingFang SC"', 'sans-serif']
      },
      colors: {
        darkColor: '#000',
        lightColor: '#fff',
        bgMain: '#FFFFFFCC',
        green03: '#03827E',
        gary0D: '#0000000D',
        blue5C: '#5C6EFF',
        green19: '#19796A',
        yellowC4: '#C48F03',
        black05: '#00000005',
        black06: '#00000066',
        black80: '#00000080'
      }
    }
  },
  plugins: []
}
