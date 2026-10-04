import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2C2D6D',
          dark: '#1B1C46',
          light: '#42438F'
        },
        pink: {
          DEFAULT: '#EA4894',
          dark: '#C4306F',
          light: '#F485B8'
        },
        cream: '#FBF9F5',
        ink: '#181829'
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'Georgia', 'serif'],
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      maxWidth: {
        content: '1180px'
      }
    }
  },
  plugins: []
}
