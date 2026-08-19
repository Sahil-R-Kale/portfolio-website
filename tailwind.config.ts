import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './content/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { ink: '#17243A', cloud: '#F5F7FA', sky: '#3D83A5', coral: '#D96C4F', mist: '#DCE7EE' },
      fontFamily: { sans: ['var(--font-roboto)', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'], display: ['Georgia', 'ui-serif', 'serif'] }
    }
  },
  plugins: []
};

export default config;
