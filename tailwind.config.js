module.exports = {
  // mode: 'jit',
  // purge: ['./src/**/*.{html,ts}'],
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  }
};
