import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        while: '#ffffff',
        black: '#092635',
        teal: '#1B4242',
        sage: '#5C8374',
        winter: '#9EC8B9'
      },
      fontFamily: {
        Poppins: "Poppins",
        Serif: "Serif"
      }
    },
  },
  plugins: [],
}
export default config
