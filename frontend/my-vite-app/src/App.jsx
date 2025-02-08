import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Login from './Pages/Login'; 
import Register from './Pages/Register'; 
import Home from './Pages/Home'; 
import AddBlog from './Pages/AddBlog'; 
import AddCategory from './Pages/AddCategory'; 
import PrivateRoute from './Services/ProtectedRoutes'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/add-category' element={<AddCategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
