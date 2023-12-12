import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMyself from"./pages/AboutMyself"
import Menu from "./components/Menu";
import Rodape from "components/Rodape";
import StandartPage from "components/StandartPage";
import Post from "components/Post";
import NotFound from "pages/NotFound";


function AppRoutes() {
  return (
      <BrowserRouter>
      <Menu/>
        <Routes>
        <Route path="/" element={<StandartPage/>}>
          <Route index element={<Home/>}/>
          <Route path="Aboutmyself" element={<AboutMyself/>}/>
        </Route>
          <Route path="post/:id" element={<Post/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Rodape/>
      </BrowserRouter>
  );
}

export default AppRoutes;
