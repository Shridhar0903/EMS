
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import EmployeeComponent from './components/EmployeeComponent'

function App() {


  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>

      <Routes>
        
        <Route path='/' element={<ListEmployeeComponents/>}></Route>
        <Route path='/employees' element={<ListEmployeeComponents/>}></Route>

        {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

      </Routes>

      <Footer/>
    </BrowserRouter>

    
    </>
  )
}

export default App
