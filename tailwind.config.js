/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        PRIMARY: "#4388BB",
        BGSCREEN: "#FAFAFA",
        GREYONE: "#8A8A8A",
        GREYTWO: "#EEEEEE",
        BLACK: "#000000",
        WHITE: "#FFFFFF",
        RED: "#FF0000",
      },
      fontWeight: {
        LIGHT: "Inter-Light",
        REGULAR: "Inter-Regular",
        MEDIUM: "Inter-Medium",
        SEMIBOLD: "Inter-SemiBold",
        BOLD: "Inter-Bold",
      },
      fontSize: {
        dp_8: 8,
        dp_10: 10,
        dp_12: 12,
        dp_16: 16,
        dp_14: 14,
        dp_18: 18,
        dp_20: 20,
        dp_22: 22,
        dp_24: 24,
        dp_26: 26,
        dp_28: 28,
        dp_30: 30,
        dp_32: 32,
      },
    },
    plugins: [],
  },
};
