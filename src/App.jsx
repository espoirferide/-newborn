import './App.css'
import { Header } from './components/Header'
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
   </main>
  )
}

export default App
