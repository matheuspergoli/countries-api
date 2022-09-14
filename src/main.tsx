import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/global'
import GlobalThemeProvider from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalThemeProvider>
      <GlobalStyle />
      <App />
    </GlobalThemeProvider>
  </React.StrictMode>
)
