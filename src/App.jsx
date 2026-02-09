import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PartyMaster from './pages/PartyMaster'
import PartyOpening from './pages/PartyOpening'
import SupplierLabour from './pages/SupplierLabour'
import Navbar from './layout/navbar/Navbar'
import Sidebar from './layout/sidebar/Sidebar'
import { Box } from '@mui/material'
import MainLayout from './layout/Mainlayout'
import AddParty from './pages/Addpartymaster'


function App() {
  return (
    <BrowserRouter> 
   <MainLayout>

      <Routes>
        <Route path="/" element={<PartyMaster />} />
        <Route path="/add-party" element={<AddParty />} />
        <Route path="/party-opening" element={<PartyOpening />} />
        <Route path="/supplier-labour" element={<SupplierLabour />} />
      </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
