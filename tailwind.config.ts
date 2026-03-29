import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#1F1720",
          ember: "#A13F35",
          sand: "#EFE3D0",
          gold: "#D5A441",
          mist: "#F7F3EE",
          leaf: "#56664B"
        }
      },
      boxShadow: {
        glow: "0 24px 60px rgba(31, 23, 32, 0.18)"
      },
      backgroundImage: {
        "radial-brand":
          "radial-gradient(circle at top, rgba(213, 164, 65, 0.16), transparent 40%), radial-gradient(circle at bottom right, rgba(161, 63, 53, 0.16), transparent 35%)"
      }
    }
  },
  plugins: []
};

export default config;
