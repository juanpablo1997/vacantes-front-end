/**
 * ====================
 * Hooks - Dependencias
 * ====================*/
import { useContext } from "react";
import { routesList } from "./views/routes";
import { MyContext } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * ====================
 * Paginas
 * ====================*/
import Jobs from "./views/Jobs";
import Login from "./views/login/Login";
import Homepage from "./views/Homepage";
//import Footer from "./components/common/Footer";
import MyOffers from "./views/myOffers/MyOffers";
import Navbar from "./components/common/navbar/Navbar";
import RegisterCompany from "./views/registerCompany/RegisterCompany";
import Createoffer from "./views/createOffer/Createoffer";

function App() {
  const { userType } = useContext(MyContext);

  return (
    <BrowserRouter>
      <Navbar userType={userType} />
      <Routes>
        <Route path={routesList.login} element={<Login />} />
        <Route path={routesList.homepage} element={<Homepage />} />
        <Route path={routesList.jobs} element={<Jobs />} />
        <Route path={routesList.registerCompany} element={<RegisterCompany />} />
        <Route path={routesList.myOffers} element={<MyOffers />} />
        <Route path={routesList.createOffer} element={<Createoffer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
