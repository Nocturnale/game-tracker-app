import { BrowserRouter, Route, Routes } from "react-router"
import Homepage from "./pages/Homepage"
import Header from "./components/layout/Header"
import GameCreatePage from "./pages/GameCreatePage"


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/games/new" element={<GameCreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
