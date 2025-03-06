import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './layout'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main className='flex flex-col items-contain justify-between static h-screen m-0 pt-16 lg:pl-18'>
          {/* <h1 className='text-black justify-center text-5xl'>Vite + React</h1> */}
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="home/U5Community" />
            <Route path="home/inventory" />
            <Route path="home/sales" />
            <Route path="home/operations" />
          </Routes>          
        </main>
      </Layout>
    </BrowserRouter>
  )
}

export default App
