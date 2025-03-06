import React from 'react'
import U5Community from './U5Community'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout'

const RouterComp = () => {
  return (
    <BrowserRouter>
    <Layout>
      <main className='flex flex-col items-contain justify-between static h-screen'>
        {/* <h1 className='text-black justify-center text-5xl'>Vite + React</h1> */}
        <Routes>
            <Route path="components/U5Community" element={<U5Community />} />
        </Routes>          
      </main>
    </Layout>
  </BrowserRouter>
  )
}

export default RouterComp