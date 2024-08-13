import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          100: "#FFD1A3",
          200: "#FFB974",
          300: "#FFA246",
          400: "#FF8A17",
          500: "#FF5F06", // Central accent color
          600: "#CC4C05",
          700: "#993904",
          800: "#662603",
          900: "#331302",
        },
        navy: {
          50: "#E5E5F2",
          100: "#BFBFDE",
          200: "#9999CA",
          300: "#7373B5",
          400: "#4D4DA1",
          500: "#27278D",
          600: "#1F1F70",
          700: "#171754",
          800: "#0F0F37",
          900: "#08081B",
        },
        gray: {
          50: "#EBEAF0",
          100: "#D7D5E1",
          200: "#C3C1D3",
          300: "#AFACC4",
          400: "#9B97B5",
          500: "#5E5B6D",
          600: "#4B4857",
          700: "#373541",
          800: "#24222B",
          900: "#121115",
        },
      },
      clipPath: {
        "penta-tl-xs": "polygon(1rem 0, 100% 0, 100% 100%, 0 100%, 0 1rem)",
        "penta-tl-sm": "polygon(2rem 0, 100% 0, 100% 100%, 0 100%, 0 2rem)",
        "penta-tl-md": "polygon(3rem 0, 100% 0, 100% 100%, 0 100%, 0 3rem)",
        "penta-tl-lg": "polygon(5rem 0, 100% 0, 100% 100%, 0 100%, 0 5rem)",
        "penta-tl-xl": "polygon(7rem 0, 100% 0, 100% 100%, 0 100%, 0 7rem)",
        "penta-tl-2xl": "polygon(10rem 0, 100% 0, 100% 100%, 0 100%, 0 10rem)",

        "penta-tr-xs":
          "polygon(0 0, calc(100% - 1rem) 0, 100% 1rem, 100% 100%, 0 100%)",
        "penta-tr-sm":
          "polygon(0 0, calc(100% - 2rem) 0, 100% 2rem, 100% 100%, 0 100%)",
        "penta-tr-md":
          "polygon(0 0, calc(100% - 3rem) 0, 100% 3rem, 100% 100%, 0 100%)",
        "penta-tr-lg":
          "polygon(0 0, calc(100% - 5rem) 0, 100% 5rem, 100% 100%, 0 100%)",
        "penta-tr-xl":
          "polygon(0 0, calc(100% - 7rem) 0, 100% 7rem, 100% 100%, 0 100%)",
        "penta-tr-2xl":
          "polygon(0 0, calc(100% - 10rem) 0, 100% 10rem, 100% 100%, 0 100%)",

        "penta-bl-xs":
          "polygon(0 0, 100% 0, 100% 100%, 1rem 100%, 0 calc(100% - 1rem))",
        "penta-bl-sm":
          "polygon(0 0, 100% 0, 100% 100%, 2rem 100%, 0 calc(100% - 2rem))",
        "penta-bl-md":
          "polygon(0 0, 100% 0, 100% 100%, 3rem 100%, 0 calc(100% - 3rem))",
        "penta-bl-lg":
          "polygon(0 0, 100% 0, 100% 100%, 5rem 100%, 0 calc(100% - 5rem))",
        "penta-bl-xl":
          "polygon(0 0, 100% 0, 100% 100%, 7rem 100%, 0 calc(100% - 7rem))",
        "penta-bl-2xl":
          "polygon(0 0, 100% 0, 100% 100%, 10rem 100%, 0 calc(100% - 10rem))",

        "penta-br-xs":
          "polygon(0 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%)",
        "penta-br-sm":
          "polygon(0 0, 100% 0, 100% calc(100% - 2rem), calc(100% - 2rem) 100%, 0 100%)",
        "penta-br-md":
          "polygon(0 0, 100% 0, 100% calc(100% - 3rem), calc(100% - 3rem) 100%, 0 100%)",
        "penta-br-lg":
          "polygon(0 0, 100% 0, 100% calc(100% - 5rem), calc(100% - 5rem) 100%, 0 100%)",
        "penta-br-xl":
          "polygon(0 0, 100% 0, 100% calc(100% - 7rem), calc(100% - 7rem) 100%, 0 100%)",
        "penta-br-2xl":
          "polygon(0 0, 100% 0, 100% calc(100% - 10rem), calc(100% - 10rem) 100%, 0 100%)",

        "testimonial-xs":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "testimonial-sm":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "testimonial-md":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "testimonial-lg":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "testimonial-xl":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",

        "service-xs":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "service-sm":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "service-md":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "service-lg":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
        "service-xl":
          "polygon(100% 0, 100% calc(100% - 3rem), 40% calc(100% - 3rem), calc(40% - 3rem) 100%, 0 100%, 0 0)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
export default config;
