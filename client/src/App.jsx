import {Routes, Route} from "react-router-dom"
// * =============== Components =====================
import Home from "./pages/Principal/Home.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route index path={"/"} element={<Home />} />
        </Routes>
    </>
  );
}

export default App;
