import './App.css'
import { Enthusiast } from './components/Enthusiast'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Related } from './components/Related'
import { Shop } from './components/Shop'
import { Signature } from './components/Signature'
import { Specifications } from './components/Specifications'

function App() {
  return (
   <main className='font-medium'>
     <Header />
     <Shop /> 
     <Specifications /> 
     <Signature /> 
     <Related/> 
     <Features/> 
     <Enthusiast/> 
     <Footer/>
   </main>
  )
}

export default App
