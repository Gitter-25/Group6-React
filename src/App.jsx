import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home"
import Timer from "./pages/activities/activity2/Timer"


const App = () => {

  return (
  
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Timer />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App