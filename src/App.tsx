import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { lazy, Suspense } from "react";
import Loader from "./Components/loader";
const Home = lazy(() => import("./pages/home"))
const Search = lazy(() => import('./pages/search'))
const Cart = lazy(() => import("./pages/cart"))


function App() {

  return (
    <Router>
      {/* Header */}
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
export default App