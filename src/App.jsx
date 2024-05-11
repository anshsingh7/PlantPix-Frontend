import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home/home";
import Plant from "./components/plant/Plant";
import Gallery from "./components/gallery/gallery";
import Login from "./components/login/login";
import './App.css';
function App() {

  return (
    // <main className="bg-primary text-tertiary">
      <BrowserRouter>
      {/* <Header/> */}
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/plants" element={<Plant/>}>
          <Route path="/plants/all" element={<Plant/>}/>
          <Route path="/plants/native" element={<Plant/>}/>
          <Route path="/plants/herb" element={<Plant/>}/>
          <Route path="/plants/flowers" element={<Plant/>}/>
          <Route path="/plants/tree" element={<Plant/>}/>
          <Route path="/plants/foliage" element={<Plant/>}/>
          <Route path="/plants/fruits" element={<Plant/>}/>
          </Route>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    <Footer/>
      </BrowserRouter>
    // </main>
  )
}

export default App;
