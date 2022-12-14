import React from 'react'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 41%)'
    },
    secondary: {
      main: 'hsl(0, 0%, 8%)'
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
