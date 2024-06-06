import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Plant from "./components/plant/Plant";
import Detail from "./components/plant/detail";
import Gallery from "./components/gallery/gallery";
import Login from "./components/login/login";
import ForgotPassword from "./components/login/forgotPassword";
import CreateAccount from "./components/login/createAccount";
import Footer from "./components/footer/footer";
import ContactPage from "./components/footer/contactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<Plant />}>
          <Route path="/plants/all" element={<Plant />} />
          <Route path="/plants/native" element={<Plant />} />
          <Route path="/plants/herb" element={<Plant />} />
          <Route path="/plants/flower" element={<Plant />} />
          <Route path="/plants/fruit" element={<Plant />} />
          <Route path="/plants/fragrant" element={<Plant />} />
          <Route path="/plants/foliage" element={<Plant />} />
          <Route path="/plants/tree" element={<Plant />} />
          <Route path="/plants/hibiscus" element={<Plant />} />
        </Route>
          <Route path="/plants/detail/:type" element={<Detail/>}/>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/contactPage" element={<ContactPage />} />
        <Route path="/contactPage" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
