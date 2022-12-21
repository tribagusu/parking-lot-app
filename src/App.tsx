import { Route, Routes } from "react-router-dom"
import { Provider } from "jotai"
import DashboardPage from "../src/pages/DashboardPage"
import ParkingLotPage from "../src/pages/ParkingLotPage"

const App = () => {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="parking-lot" element={<ParkingLotPage />} />
      </Routes>
    </Provider>
  )
}

export default App
