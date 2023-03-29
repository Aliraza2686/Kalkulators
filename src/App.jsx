import './App.css'
import { Routes, Route } from "react-router-dom"
import FirstScreen from './pages/FirstScreen'
import SecondScreen from './pages/SecondScreen'

function App() {
  return (
    <div className="">
       <Routes>
          <Route path='/' element={ <FirstScreen /> } />
           <Route path='/second/screen' element={ <SecondScreen /> } />
          
       </Routes>
    </div>
  )
}

export default App
