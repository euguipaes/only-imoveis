import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/logo-white.png";
import "../../App.css";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="content">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem vindo(a)! </span>

            <span className="login-form-title">
              <img src={logo} alt="Only Imóveis" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
              <span className="focus-input"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
              <span className="focus-input"></span>
            </div>
            <C.labelError>{error}</C.labelError>
            <div className="container-login-form-btn">
              <Button
                Text="Entrar"
                onClick={handleLogin}
                className="login-form-btn"
              />
            </div>

            <C.LabelSignup>
              Não tem uma conta?{" "}
              <C.Strong>
                <Link to="/signup">&nbsp;Registre-se</Link>{" "}
              </C.Strong>{" "}
            </C.LabelSignup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
