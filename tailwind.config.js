module.exports = {
  content: [
    'src/components/**/*.{scss,css,vue,jsx,html}',
    'src/general/*.{scss,css,vue,jsx,html}',
    `../test/fixture/../../src/components/**/*.{vue,js}`,
    `../test/fixture/../../src/components/market/**/*.{vue,js}`,
    `../test/fixture/../../src/components/blog/**/*.{vue,js}`,
    `../test/fixture/../../src/layouts/**/*.vue`,
    `pages/**/*.vue`,
    `../test/fixture/../../src/composables/**/*.{js,ts}`,
    `../test/fixture/../../src/plugins/**/*.{js,ts}`,
    `../test/fixture/pages/**/*.vue`,
    `../test/fixture/pages/*.vue`,
    `../test/fixture/components/**/*.{vue,js}`,
    `../test/fixture/layouts/**/*.vue`,
    `../test/fixture/pages/**/*.vue`,
    `../test/fixture/composables/**/*.{js,ts}`,
    `../test/fixture/plugins/**/*.{js,ts}`,
    `../test/fixture/App.{js,ts,vue}`,
    `../test/fixture/app.{js,ts,vue}`,
    './node_modules/flowbite/**/*.{js}',
    './node_modules/tw-elements/dist/js/**/*.{js}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        secondary: '#008eb2',
        error: '#f44336',
        success: '#1e7c1e',
        alert: '#ff9800',
        dark: '#212121',
        primary: '#a41919',
        accent: '#343232',
        light: '#EEE',
      },
    },
  },
};
