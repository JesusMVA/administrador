import Navbar from "./components/Navbar.jsx";
import {Routes, Route} from 'react-router-dom';
import {Buttons} from "./hooks/useNavegacion";
import Home from "./pages/Home.jsx";


export default function App() {
  const {NavLinks} = Buttons()

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Navbar datos={NavLinks}/>
    </Routes>
  )
}