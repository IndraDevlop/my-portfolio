import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'remixicon/fonts/remixicon.css'

import Preloader from './components/Preloader.jsx'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './components/ui/ProfileCard.css';
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Preloader/> */}
        <div className="bg-gradient-to-b from-violet-900 to-zinc-900 w-screen h-screen">
            <div className='container mx-auto px-4'>
            <App />
           
            </div>
            </div>
  </StrictMode>,
)
