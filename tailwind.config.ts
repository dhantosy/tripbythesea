import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      'xs-2': '380px',
      'xs-3': '425px',
      sm: '480px',
      'sm-2': '540px',
      'sm-3': '640px',
      md: '768px',
      'md-2': '860px',
      'md-3': '980px',
      lg: '1024px',
      'lg-2': '1180px',
      'lg-3': '1280px',
      xl: '1440px',
      'xl-2': '1600px',
      'xl-3': '1800px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
