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
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#EF4056',
        secondary: '#008eb2',
        error: '#f44336',
        success: '#4caf50',
        alert: '#ff9800',
        dark: '#212121',
        'dark-primary': '#131212',
        'dark-accent': '#343232',
        'light-accent': '#CCC',
        light: '#EEE',
      },
    },
  },
};
