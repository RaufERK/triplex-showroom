import { StrictMode, type RefObject } from 'react'
import { createRoot } from 'react-dom/client'
import '@sberbusiness/triplex-next/styles/triplex-next.css'
import '@sberbusiness/icons-next/styles/icons.css'
import './index.css'
import { ThemeProvider, ETriplexNextTheme } from '@sberbusiness/triplex-next'
import App from './App'

const themeScopeRef = {
  current: document.documentElement,
} as RefObject<HTMLElement>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider scopeRef={themeScopeRef} theme={ETriplexNextTheme.LIGHT}>
      <App />
    </ThemeProvider>
  </StrictMode>
)
