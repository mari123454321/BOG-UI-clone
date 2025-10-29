import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import "./style/reset.css"
import './style/index.css'
import App from './App.tsx'
import { LanguageProvider } from './context/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>

)
