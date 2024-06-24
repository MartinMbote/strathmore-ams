import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Loginpage from "./pages/Loginpage"
import Studentportalhomepage from "./pages/Studentportalhomepage"
import Self from "./pages/Self"
import Coursework from "./pages/Coursework"
import Feestructure from "./pages/Feestructure"
import Attendance from "./pages/Attendance"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="strathmore-ams/" element={<Homepage />}></Route>
        <Route path="strathmore-ams/loginpage" element={<Loginpage />}></Route>
        <Route path="strathmore-ams/studentportal" element={<Studentportalhomepage />}></Route>
        <Route path="strathmore-ams/self" element={<Self />}   />
        <Route path="strathmore-ams/coursework" element={<Coursework />}/>
        <Route path="strathmore-ams/feestructure" element={<Feestructure />}/>
        <Route path="strathmore-ams/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
