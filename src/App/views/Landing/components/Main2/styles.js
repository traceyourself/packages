import { StyleSheet } from 'aphrodite/no-important'

const wrapperStyles = {
  position: 'relative',
  height: '800px',
  textShadow: '0 1px 2px rgba(255, 255, 255, 0.4)',

  display: 'flex',
  alignItems: 'center'
}

export default StyleSheet.create({
  wrapper: {
    ...wrapperStyles,

    justifyContent: 'flex-end',
    paddingRight: '32px'
  },

  'wrapper-mobile': {
    ...wrapperStyles,

    justifyContent: 'center'
  },

  gradient: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: `linear-gradient(to right, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7))`,
    zIndex: '-1'
  },

  backgroundImage: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    background: '#000',
    backgroundImage: `url('/assets/images/Main2/tracepackagereal.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    zIndex: '-1'
  }
})
