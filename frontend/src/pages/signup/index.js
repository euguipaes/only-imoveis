import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/img/logo-white.png";
import "../../App.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
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
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                placeholder="Confirme seu e-mail"
                value={emailConf}
                onChange={(e) => [setEmailConf(e.target.value), setError("")]}
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
                Text="Registrar-se"
                onClick={handleSignup}
                className="login-form-btn"
              />
            </div>

            <C.LabelSignin>
              Já tem uma conta?
              <C.Strong>
                <Link to="/">&nbsp;Entre</Link>
              </C.Strong>
            </C.LabelSignin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
