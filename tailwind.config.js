/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoC: ['Roboto Condensed', 'sans-serif']
      },
      backgroundImage: {
        'heart': "url('/images/heartBg.webp')",
        'bodybuilding': "url('/images/bodybuildBg.webp')",
        'bodyweight': "url('/images/BodyweightBg.webp')",
        'diet': "url('/images/dietBg.webp')",
        'sleep': "url('/images/sleepBg.webp')",
        'resistance': "url('/images/resistanceBg.webp')",
        'smartdevices': "url('/images/smartdeviceBg.jpg')",
        'massager': "url('/images/massagegunBg.webp')",
        'virtual': "url('/images/vrfitnessBg.jpeg')",
      },
      boxShadow: {
        'neon-blue': '0 0 5px #0ff, 0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
        'neon-red': '0 0 5px #ff6f6f, 0 0 10px #ff6f6f, 0 0 20px #ff6f6f, 0 0 40px #ff6f6f',
        'neon-blue-two': '0 0 3px #0ff, 0 0 6px #0ff, 0 0 12px #0ff',
        'neon-indigo': '0 0 10px #c77dff, 0 0 20px #c77dff, 0 0 30px #c77dff, 0 0 40px #c77dff',
      },
    }
  },
  plugins: [],
  darkMode: "class",
}