import { Route, Routes } from "react-router-dom"
import DashboardPage from "../src/pages/DashboardPage"
import ParkingLotPage from "../src/pages/ParkingLotPage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="parking-lot" element={<ParkingLotPage />} />
    </Routes>
  )
}

export default App
