import Nav from './nav'
import './App.css'
import Form from '../Form/form'
import Form1 from '../Form/form1'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/form1' element={<Form1 />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  </BrowserRouter>
)
}

export default App
