import { Link } from "react-router-dom";
import { MainContainer } from "./HeaderStyle";

export function Header() {
  const logout = () =>{
    localStorage.clear("token")
  }
  return (
    <MainContainer>
      <p>SPS Consultoria</p>
      <Link to="/" onClick={()=>logout()}>Sair</Link>
    </MainContainer>
  );
}
