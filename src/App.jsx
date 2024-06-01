import { Route, Routes } from 'react-router-dom'
import { Films } from './pages/Films';
import { Planets } from './pages/Planets';
import { People } from './pages/People';
import { Starships } from './pages/Starships';
import { Vehicles } from './pages/Vehicles';
import { Species } from './pages/Species';
import { User } from './pages/User';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/people" element={ <People /> } />
        <Route path="/planets" element={ <Planets /> } />
        <Route path="/starships" element={ <Starships /> } />
        <Route path="/vehicles" element={ <Vehicles /> } />
        <Route path="/films" element={ <Films /> } />
        <Route path="/species" element={ <Species /> } />
        <Route path="/user" element={ <User /> } />
      </Routes>
    </div>
  )
}

export default App
