import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/global'
import GlobalThemeProvider from './styles/theme'
import { RegionContextProvider } from './components/Context/RegionContext'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RegionContextProvider>
      <GlobalThemeProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </GlobalThemeProvider>
    </RegionContextProvider>
  </React.StrictMode>
)
