module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // body: ['Crimson Text'],
      karla: ['Karla', 'sans-serif'],
      crimson: ["Crimson Text", 'serif']
    },
    colors: {
      hultBrown: '#4E4E4E',
      hultChalk: '#F5F4ED',
      hultDarkGreen: '#314833',
      hultCream: '#EFDDB9',
      hultRoseGold: '#EDB599',
      hultLightGreen: '#92A58B',
      hultWhite: '#ffffff'
    },
    screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px'
    },
    extend: {
      width: {
        'content-box' : '1060px',
        'hr':'1054px',
        'cardPost' : '1282px'
      },
      maxWidth:{
        'menu':'631px',
        'hr':'1054px',
        'cardPost' : '1282px',
        '1/2': '50%',
      },
      margin: {
        'header':'60px',
        hero: '7%',
        contentBottom: '165px',
        manualCardGap: '23px',
        cardBottom:'75px'

      },
      lineHeight: {
        'normal': '26px',
        'heading50':'50px'
      },


    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ]

}
