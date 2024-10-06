import React from 'react'
import {Route , Routes, Link,useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import Create from './components/create'
import Edit from './components/Edit'
const App=()=> {
  
  const {search,pathname} = useLocation();  
    return (
      <div className='w-full h-screen flex'>
      {(pathname != "/" || search.length>0)&&(
      <Link to="/" className= "text-red-500 absolute left-[16%] top-[5%] px-1 py-1 border rounded border-blue-500">HOME</Link>)}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Create" element={<Create/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
      
  );
} 
    
    

export default App