import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Final from "./Component/Final/Final";
import First from "./Component/First/First";
import Second from "./Component/Second/Second";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="second" element={<Second />} />
          <Route path="/" element={<First />} />
          <Route path="final" element={<Final />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
