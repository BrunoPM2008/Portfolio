import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './sections/Hero'
import Aboutme from './sections/Aboutme'
import Projects from './sections/Projects'
import Stack from './sections/Stack'
import Contact from './sections/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Aboutme />
    <Projects />
    <Stack />
    <Contact />
  </StrictMode>,
)
