import './App.css'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Shop } from './components/Shop'
import { Specifications } from './components/Specifications'

function App() {
  return (
   <main className='font-medium'>
     <Header />
     <Shop />
     <Specifications />
   </main>
  )
}

export default App
