import Login from "./pages/login/Login";
import { Route,Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home"
import RequireUser from "./components/RequireUser";
import Feed from "./components/feed/Feed";
import Profile from "./components/profile/Profile";
import UpdateProfile from "./components/updateProfile/UpdateProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        <Route element={<RequireUser/>}>
          <Route element={<Home/>}>
            <Route path="/" element={<Feed/>}/>
            <Route path="/profile/:userId" element={<Profile/>}/>
            <Route path="/updateProfile" element={<UpdateProfile/>}/>
          </Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
