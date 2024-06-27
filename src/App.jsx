import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Sidebar from "./components/Sidebar.jsx";
import UploadPicture from "./pages/UploadPicture.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/upload-picture" element={<UploadPicture />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
