import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";

function App() {

  return (
    <BrowserRouter>
      <Header />

        <main style={{background: "skyblue"}}>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </main>

    </BrowserRouter>
  )
}

export default App
