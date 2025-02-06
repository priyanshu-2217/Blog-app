import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Route,Routes} from "react-router-dom"


function App() {
  

  return (
    <>
    <Header/>
     <Routes > 
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/add-blog' element={<AddBlog/>}/>
      <Route path='/add-category' element={<AddCategory/>}/>
      <Route path='/blog/' element={<AddCategory/>}/>
     </Routes>
    </>
  )
}

export default App
