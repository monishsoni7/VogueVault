module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'rose': {
          500: '#FF0066',
          600: '#E6005C'
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif']
      },
      perspective: {
        1000: '1000px',
        500: '500px'
      },
      rotate: {
        'x-10': 'rotateX(10deg)',
        'y-5': 'rotateY(5deg)'
      },
      translate: {
        'z-20': 'translateZ(20px)'
      },
      transitionProperty: {
        'position': 'top, bottom, left, right'
      },
      aspectRatio: {
        square: '1 / 1',
      },
      perspective: {
        1000: '1000px',
        500: '500px'
      },
      rotate: {
        '45': '45deg',
        '-45': '-45deg'
      },
      backdropBlur: {
        xs: '2px',
      },
      backdropBlur: {
        sm: '4px',
      }

    },
  },
  plugins: [],
}