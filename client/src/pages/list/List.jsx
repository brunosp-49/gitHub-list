import { useContext, useState } from "react";
import { postRepo } from "../../assets/api/api";
import { StateContext } from "../../assets/global/state";
import { Card } from "../../components/card/Card";
import { Header } from "../../components/header/Header";
import { CardContainer, MainContainer } from "./ListStyle";

export function List() {
  const [http, setHttp] = useState("");
  const [handle, setHandle] = useState("")
  const { search, setSearch } = useContext(StateContext);

  const addRepo = () => {
    postRepo(http);
  };

  const sendResponse = (e) =>{
    e.preventDefault()
    setSearch(handle)
  }

  return (
    <>
      <Header />
      <MainContainer>
        <form id="firstForm" onSubmit={sendResponse}>
          <p>Procurar</p>
          <input
            type="text"
            onChange={(e) => {
              setHandle(e.target.value);
            }}
            value={handle}
          />
          <button>Procurar</button>
        </form>
        <p>Respositórios</p>
        <CardContainer>
          <Card />
        </CardContainer>
        <form id="secoundForm">
          <p>Novo Repo</p>
          <input
            type="text"
            onChange={(e) => {
              setHttp(e.target.value);
            }}
            value={http}
          />
          <button onClick={() => addRepo()}>Adicionar</button>
        </form>
      </MainContainer>
    </>
  );
}
