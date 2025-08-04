export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "theme1", "theme2", "theme3",
    "bg-white", "bg-gray-900", "bg-pink-100",
    "text-black", "text-white", "text-pink-700",
    "font-sans", "font-serif", "font-pacifico"
  ],
};
