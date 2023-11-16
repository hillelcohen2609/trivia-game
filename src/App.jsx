import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import PageErr from "./PageErr";
import Questions from "./Questions";
import Options from "./Options";
import Login from "./users/Login";
import Signin from "./users/Signin";
import Profile from "./users/Profile";
import AdminPage from "./users/AdminPage";

function App() {
  //initial fake users
  const users = [
    { id: 0, name: "hillel", password: "12345678", scores: [30, 100, 80, 90] },
    {id: 1, name: "moshe", password: "12345678", scores: [ 100, 80, 90]},
    {id: 2, name: "yossi", password: "12345678", scores: [30, 100, 50, 90]},
    {id: 3, name: "david", password: "12345678", scores: [30, 100, 80, 90,70,90]},
  ];
  users.map(user=>{
    localStorage.setItem(`${user.id}`,JSON.stringify(user))
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Options" element={<Options />} />
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
