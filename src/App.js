// import logo from './logo.svg';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter basename="/">
      <Nav />
      <div className="App col-lg-12 mx-auto p-2 py-md-5">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
