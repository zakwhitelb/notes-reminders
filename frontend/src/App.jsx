// System
import {Router as BrowserRouter, Routes, Route}  from "react-router-dom"

// Pages
import { Error404 } from "./pages/error/Error404"

// Styles
import './shared/styles/GlobaleStyle.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/authentication" />
          <Route path="/note-area" />
          <Route path="/profile" />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
