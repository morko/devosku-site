import React from 'react'
import { ThemeProvider } from 'react-jss'
import theme from './src/themes/light-theme'

export const wrapRootElement = ({ element }) => {

  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
