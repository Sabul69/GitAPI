import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Layouts/Header";
import Followers from "./Pages/Followers/Followers";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Header/>} exact>
    <Route index element={<Home/>}/>
    <Route path="/Followers/:user" element={<Followers/>} exact/>
    <Route path="*" element={<NotFound/>} exact/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
