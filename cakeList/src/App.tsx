// import { useState } from 'react'
import './App.css'
import { ProductsBox } from './Components/productsBox';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex h-screen w-screen justify-center items-center bg-[#8CBEB2]'>
        <ProductsBox />
      </div>
    </>
  )
}

export default App
