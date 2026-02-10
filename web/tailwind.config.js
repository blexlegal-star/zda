/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6B21A8", // Purple from screenshots (approx)
                secondary: "#3B82F6", // Blue from screenshots (approx)
            }
        },
    },
    plugins: [],
}
