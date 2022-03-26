import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import NavBar from "./shared/Navbar/Navbar";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
function App() {
  return (
    <div className="App">
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/create/:id" element={<CreateBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
