import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Helloworld from './components/Helloworld';
import Helloworld2 from './components/Helloworld2';
import Test from './components/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Helloworld/>}/>
        <Route path="/2" element={<Helloworld2/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
