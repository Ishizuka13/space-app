import styled from "styled-components";
import InicioIcon from "../../assets/icones/home-ativo.png";
import MaisCurtidasIcon from "../../assets/icones/mais-curtidas-ativo.png";
import MaisVistasIcon from "../../assets/icones/mais-vistas-ativo.png";
import NovasAtivoIcon from "../../assets/icones/novas-ativo.png";
import SurpreendaMeIcon from "../../assets/icones/surpreenda-me-ativo.png";

const StyledBar = styled.div`
  width: 212px;
  height: 276px;
  top: 190px;
  left: 24px;
  gap: 0px;
  opacity: 0px;
  padding-right: 24px;
`;

const StyledUl = styled.ul`
  list-style: none;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
    font-family: "Gandhi Sans";
    color: #d9d9d9;

    img {
      height: 32px;
      padding-right: 16px;
    }
  }
`;

export const Sidebar = () => {
  return (
    <StyledBar>
      <StyledUl>
        <li>
          <img src={InicioIcon} alt="" /> <p>Início</p>
        </li>
        <li>
          <img src={MaisVistasIcon} alt="" /> <p>Mais vistas</p>
        </li>
        <li>
          <img src={MaisCurtidasIcon} alt="" /> <p>Mais curtidas</p>
        </li>
        <li>
          <img src={NovasAtivoIcon} alt="" /> <p>Novas</p>
        </li>
        <li>
          <img src={SurpreendaMeIcon} alt="" /> <p>Surpreenda-me</p>
        </li>
      </StyledUl>
    </StyledBar>
  );
};
