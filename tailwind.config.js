/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F4F1', // Light grey/white background
        navigation: '#565D56', // Dark color for navigation
        text: '#FFFFFF', // White text for navigation
        card: '#FFFFFF', // White for cards
        button: '#9DA69F', // Greenish accent for buttons
        buttonHover: '#565D56', // Darker hover effect for buttons
        textDark: '#383B39', // Dark text for content
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'], // Clean sans-serif font
      },
    },
  },
  plugins: [],
}
