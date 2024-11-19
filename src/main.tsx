import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Other/> */}
    <App />
  
  </StrictMode>,
)