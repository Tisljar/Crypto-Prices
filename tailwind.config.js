/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                'primary-100': '#0085ff',
                'primary-200': '#69b4ff',
                'primary-300': '#e0ffff',
                'accent-100': '#006fff',
                'accent-200': '#e1ffff',
                'text-100': '#FFFFFF',
                'text-200': '#9e9e9e',
                'bg-100': '#1E1E1E',
                'bg-200': '#2d2d2d',
                'bg-300': '#454545',
            },
            fontFamily: {
                robotoSlab: ['Roboto Slab', 'serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            // content: {},
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1060px',
        },
    },
    plugins: [],
};

// 'primary-100': '#0085ff';
// 'primary-200': '#69b4ff';
// 'primary-300':'#e0ffff';
// 'accent-100': '#006fff';
// 'accent-200': '#e1ffff';
// 'text-100': '#FFFFFF';
// 'text-200': '#9e9e9e';
// 'bg-100': '#1E1E1E';
// 'bg-200': '#2d2d2d';
// 'bg-300': '#454545';

