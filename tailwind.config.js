/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        'todo-bg': '#EBEBEB',
        'text-color': '#1C73F4',
      },
      screens: {
        'small': {'max' : '450px'},
        'medium' : {'max' : '650px'},
        'large' : {'max':'720px'}
      }
    },
  },
  plugins: [],
}
