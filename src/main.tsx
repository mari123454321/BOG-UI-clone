import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "./style/reset.css"
import './style/index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'
import { LoggedinProvider } from './context/LoggedinContext.tsx'
import { DarkModeProvider } from './context/DarkModeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <LanguageProvider>
      <LoggedinProvider>
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
      </LoggedinProvider>
    </LanguageProvider>
  </BrowserRouter>

)
