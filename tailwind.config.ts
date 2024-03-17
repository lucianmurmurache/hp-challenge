import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
            },
            colors: {
                pirate: '#6a3460',
                'pirate-light': '#ffe8d9',
                red: colors.red,
                green: colors.green,
            },
        },
    },
    plugins: [],
} satisfies Config;
