import React from 'react'
import Navbar from './components/Nav/Navbar'
import { createTheme, ThemeProvider, Grid } from '@material-ui/core'
import ViewImage from './components/Main/ViewImage'
import { ProductDescription } from './components/Main/ProductDescription'
import { useMatchMedia } from './components/useMatchMedia'
import Slider from './components/Nav/Slider'
import { CountProvider } from './components/Store/CreateContext'

export default function App() {
  const isMobileResolution = useMatchMedia('(max-width:1024px)', true)
  const theme = createTheme({
    typography: {
      fontFamily: ['Kumbh Sans', 'sans-serif'].join(','),
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CountProvider>
        <Navbar />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {isMobileResolution ? <Slider /> : <ViewImage />}
          </Grid>
          <Grid item xs={12} sm={6}>
            <ProductDescription />
          </Grid>
        </Grid>
      </CountProvider>
    </ThemeProvider>
  )
}
