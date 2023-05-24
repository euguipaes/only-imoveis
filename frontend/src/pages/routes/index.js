// import { Fragment } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../home";
// import Clientes from "../clientes";
// import Contratos from "../contratos";
// import Imoveis from "../imoveis";
// import Signin from "../signin";
// import Signup from "../signup";
// import useAuth from "../../hooks/useAuth";

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };

// const RoutesApp = () => {
//   return (
//     <BrowserRouter>
//       <Fragment>
//         <Routes>
//           <Route exact path="/home" element={<Private Item={Home} />} />
//           <Route exact path="/imoveis" element={<Private Item={Imoveis} />} />
//           <Route
//             exact
//             path="/contratos"
//             element={<Private Item={Clientes} />}
//           />
//           <Route
//             exact
//             path="/clientes"
//             element={<Private Item={Contratos} />}
//           />
//           <Route path="/" element={<Signin />} />
//           <Route exact path="/signup" element={<Signup />} />
//           <Route path="*" element={<Signin />} />
//         </Routes>
//       </Fragment>
//     </BrowserRouter>
//   );
// };

// export default RoutesApp;

import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home";
import Clientes from "../clientes";
import Contratos from "../contratos";
import Imoveis from "../imoveis";
import Signin from "../signin";
import Signup from "../signup";
import useAuth from "../../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Private Item={Home} />} path="/home" />
        <Route element={<Private Item={Imoveis} />} path="/imoveis" />
        <Route element={<Private Item={Clientes} />} path="/contratos" />
        <Route element={<Private Item={Contratos} />} path="/clientes" />
        <Route path="*" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
