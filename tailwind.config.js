const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('node:path');
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    presets: [
        // Use path.resolve to point to the exact file location
        require(path.resolve(__dirname, 'node_modules/@spartan-ng/brain/hlm-tailwind-preset.js'))
    ],
    content: [
        join(__dirname, 'src/**/*.{html,ts}'),
        join(__dirname, 'libs/**/*.{html,ts}'),
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