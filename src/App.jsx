import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import PageErr from "./PageErr";
import Questions from "./Questions";
import Options from "./Options";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Options" element={<Options />} />
            <Route path="/Options/Questions" element={<Questions />} />

            <Route path="*" element={<PageErr />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
