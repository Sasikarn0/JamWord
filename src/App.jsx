import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Helloworld from './components/Helloworld';
import Helloworld2 from './components/Helloworld2';
import Subject from './components/Subject';
import Flashcard from './components/Flashcard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Helloworld/>}/>
        <Route path="/2" element={<Helloworld2/>}/>
        <Route path="/3" element={<Subject/>}/>
        <Route path="/4" element={<Flashcard/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
