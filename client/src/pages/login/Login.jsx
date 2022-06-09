import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLogin } from "../../assets/api/api";
import CustomizedSnackbars from "../../components/snackBar/SnackBar";
import { Box, ContentContainer, MainContainer } from "./LoginStyle";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token === null) {
    } else {
      navigate("/list");
    }
  }, []);

  useEffect(() => {
    if (response === "login") {
      navigate("/list");
    }
  }, [response]);

  const navigate = useNavigate();

  const onForm = (e) => {
    e.preventDefault();
    getLogin(email, password, setResponse, setIsOpen);
    setEmail("");
    setPassword("");
    console.log(localStorage.getItem("token"));
  };

  return (
    <>
      {isOpen && <CustomizedSnackbars text="Erro no login" tipo="error" />}
      <MainContainer>
        <Box>
          <ContentContainer>
            <p id="loginText">LOGIN</p>
            <form className="forms" onSubmit={onForm}>
              <div id="inputs">
                <p>E-mail</p>
                <input
                  type="email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(typeof email);
                  }}
                  value={email}
                  placeholder="exemplo@email.com"
                />
                <p>Senha</p>
                <input
                  type="password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(typeof password);
                  }}
                  value={password}
                />
              </div>

              <button>Entrar</button>
            </form>
          </ContentContainer>
        </Box>
      </MainContainer>
    </>
  );
}
