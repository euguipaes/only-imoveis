import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import Clientes from "./pages/clientes";
import Imoveis from "./pages/imoveis";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Contratos from "./pages/contratos";
import Signup from "./pages/signup";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />;
};

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Private Item={Home} />} path="/home" />
        <Route element={<Private Item={Imoveis} />} path="/imoveis" />
        <Route element={<Private Item={Clientes} />} path="/clientes" />
        <Route element={<Private Item={Contratos} />} path="/contratos" />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
