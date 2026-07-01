/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2E52', // Dark blue from the image header
        secondary: '#FF4500', // Vibrant orange/red from the package cards
        accent: '#FFD700', // Gold/Orange accent from the logo and icons
        accentHover: '#E0C000', // Darker gold for hover states
        orangeLight: '#FFD700', // Using the same accent for light orange highlights
        darkText: '#333333', // A dark grey for general text
        lightText: '#FFFFFF', // White for text on dark/colored backgrounds
        greenAccent: '#4CAF50', // Green for secure/WhatsApp
        blueAccent: '#2196F3', // Blue for reliable network
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
