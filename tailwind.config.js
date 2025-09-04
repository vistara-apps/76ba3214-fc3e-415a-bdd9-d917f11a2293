/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(210 10% 8%)',
        foreground: 'hsl(210 10% 95%)',
        muted: 'hsl(210 10% 60%)',
        accent: 'hsl(210 97% 55%)',
        primary: 'hsl(210 97% 45%)',
        surface: 'hsl(210 10% 12%)',
        'gradient-start': 'hsl(270 100% 60%)',
        'gradient-end': 'hsl(15 100% 60%)',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      boxShadow: {
        card: '0 4px 12px hsla(210, 10%, 10%, 0.2)',
      },
      spacing: {
        lg: '16px',
        md: '8px',
        sm: '4px',
      },
    },
  },
  plugins: [],
}
