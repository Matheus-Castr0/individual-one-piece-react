import { Route, Routes } from "react-router-dom";
import './main.css'
import Main from "./components/pages/Main";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  )
}

export default App
