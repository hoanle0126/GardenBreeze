import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#73c93d",
                secondary: "#FCB142",
            },
            backgroundImage: {
                landing: "url('resources/assets/background1.png')",
                footer: "url('resources/assets/footer.png')",
                contact: "url('resources/assets/contact.png')",
            }
        },
    },

    plugins: [forms],
};
