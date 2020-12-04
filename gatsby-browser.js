import React from 'react'
import { ThemeProvider } from 'react-jss'
import Loader from './src/components/Loader'
import theme from './src/themes/light-theme'

export const wrapRootElement = ({ element }) => {

  return <ThemeProvider theme={theme}><Loader>{element}</Loader></ThemeProvider>
}