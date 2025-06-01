import { createContext, useContext } from 'react'
import type { Theme } from './types'

export interface ThemeProviderProps {
  children: React.ReactNode
  theme: Theme
}

// @ts-expect-error
const ThemeContext = createContext<Theme>()

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);
