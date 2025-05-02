const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    presets: [require('@spartan-ng/brain/hlm-tailwind-preset.js')],
    content: [
        join(__dirname, 'src/**/*.{html,ts}'),
        join(__dirname, 'index.html'),
        ...createGlobPatternsForDependencies(__dirname),
    ],
    theme: {
        extend: {
            borderColor: {
                border: 'hsl(var(--border))'
            },
            colors: {
                border: 'hsl(var(--border))'
            }
        },
    },
};