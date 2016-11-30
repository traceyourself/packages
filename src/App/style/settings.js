/**
 * #TEXT / #FONT
 ---------------------------------------------------*/
export const txt = {
  baseFontSize: '16px'
}

/**
 * #COLORS
 * Color Naming Convention/Guidlines:
 * http://sachagreif.com/sass-color-variables/
 *
 * Optional Color Naming Tool:
 * http://chir.ag/projects/name-that-color/
 ---------------------------------------------------*/
// const  blue =         '#4FC1E9' // eslint-disable-line
// const  darkBlue =     '#3BAFDA' // eslint-disable-line
//
// const  mint =         '#48CFAD' // eslint-disable-line
// const  darkMint =     '#37BC9B' // eslint-disable-line
//
// const  pink =         '#EC87C0' // eslint-disable-line
// const  darkPink =     '#D770AD' // eslint-disable-line
//
// const  red =          '#ED5565' // eslint-disable-line
// const  darkRed =      '#DA4453' // eslint-disable-line
//
// const  yellow =       '#FFCE54' // eslint-disable-line
// const  darkYellow =   '#F6BB42' // eslint-disable-line
//
// const  grey =         '#BBBBBB' // eslint-disable-line
// const  darkGrey =     '#9B9B9B' // eslint-disable-line
// const  darkerGrey =   '#8C8C8C' // eslint-disable-line
// const  darkestGrey =  '#555459' // eslint-disable-line
//
// const  white =        '#FFFFFF' // eslint-disable-line
// const  wildSand =     '#F5F5F5' // eslint-disable-line
// const  alto =         '#D8D8D8' // eslint-disable-line
//
// export const clr = {
//   primary: blue,
//   darkPrimary: darkBlue,
//
//   secondary: yellow,
//   darkSecondary: darkYellow,
//
//   positive: mint,
//   darkPositive: darkMint,
//
//   negative: red,
//
//   copy: darkestGrey,
//
//   lightBase: white,
//   base: wildSand,
//   darkBase: alto
// }

export const colors = {
  blue: {
    '-2': '#66B8F9',
    '-1': '#54B0F9',
    '0': '#44A8F9',
    '1': '#3D97DF',
    '2': '#3685C7'
  },
  teal: {
    '-2': '#54CCD4',
    '-1': '#43C6CF',
    '0': '#35C0CA',
    '1': '#2FACB5',
    '2': '#2999A1'
  },
  slate: {
    '-2': '#718CA3',
    '-1': '#607E98',
    '0': '#4E708D',
    '1': '#46647E',
    '2': '#3E5970'
  },
  heather: {
    '-2': '#B4C1CB',
    '-1': '#ABB9C4',
    '0': '#A3B2BE',
    '1': '#919FAA',
    '2': '#818E98'
  }
}

/**
 * #BREAKPOINTS
 ---------------------------------------------------*/
export const breakpoints = {
  x: {
    full: '68.75rem',
    wide: '50.00rem',
    narrow: '31.25rem'
  }
}

/**
 * #MEDIA-QUERIES
 ---------------------------------------------------*/
export const mediaQueries = {
  narrow: `@media (min-width: ${breakpoints.x.narrow})`,
  wide: `@media (min-width: ${breakpoints.x.wide})`,
  full: `@media (min-width: ${breakpoints.x.full})`
}
