import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider} from "./Context/AuthContext";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import SignIn from "./Components/SignIn";
import Protected from "./Components/Protected";
import RecipeDetails from "./Components/RecipeDetails";
import Footer from "./Components/Footer";
import Profile from "./Pages/Profile";
import FourOFour from "./Components/FourOFour";


function App() {
  
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Protected><Profile/></Protected>} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
