import Layout from './components/Layout'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 98%)'
    },
    secondary: {
      light: 'hsl(0, 0%, 41%)',
      main: 'hsl(0, 0%, 8%)',
    },
    text: {
      primary: 'hsl(0, 0%, 41%)',
      secondary: 'hsl(0, 0%, 8%)'
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'Epilogue',
    fontWeightRegular: 500,
    fontWeightBold: 700,
    fontSize: 14,
    button: {
      textTransform: "none"
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1115,
      lg: 1200,
      xl: 1750,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <NavBar />
        <Hero />
      </Layout>
    </ThemeProvider>
  )
}

export default App
