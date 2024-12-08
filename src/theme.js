import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trelloCustom:{
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform:'none'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform:'none'
        }
      }
    }
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252'
        }

      }
    },
    dark: {
      palette: {
        primary: {
          main: '#000'
        }

      }
    }
  }
})
export default theme