import cover from "../../assets/header-cover.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <img src={cover} alt="" />
    </HeaderContainer>
  )
} 