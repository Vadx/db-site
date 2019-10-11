import React from 'react'
import { createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Header } from './common/Header'
import { Footer } from './common/Footer'
import { MainNav } from './common/MainNav'
import { TopBar } from './common/TopBar'

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#21C0F1',
      contrastText: '#fff'
    },
    secondary: {
      main: '#e95b5b',
      contrastText: '#fff'
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Header/>
        <MainNav />
        <TopBar />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App
