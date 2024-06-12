import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="strathmore-ams/" element={<Homepage />}></Route>
        <Route path="strathmore-ams/loginpage" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
