import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import PageErr from "./PageErr";
import Questions from "./Questions";
import Options from "./Options";
import Login from "./users/Login";
import Signin from "./users/Signin"
import Profile from "./users/Profile";
import AdminPage from "./users/AdminPage";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Admin" element={<AdminPage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Options" element={< Options/>} />
            <Route path="/Options/Questions" element={<Questions />} />


            {/* <Route path="/Options" element={<Options />} />
            <Route path="/Options/Questions" element={<Questions />} />*/}

            <Route path="*" element={<PageErr />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
