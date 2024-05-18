import styled from "styled-components";
import IconHeader from "../../assets/imagens/logo.png";
import SearchIcon from "../../assets/icones/Vector.png";

const StyledHeader = styled.div`
  padding-inline: 24px;
  padding-top: 60px;
  margin-bottom: 72px;
  display: flex;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  padding: 12px 16px 12px 16px;
  border-radius: 10px;
  opacity: 0px;
  color: #7b78e5;
  border: 2px solid #7b78e5;
  background: transparent;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 190px;
  background-color: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  &::-webkit-input-placeholder {
    color: #7b78e5;
  }
  &:hover {
    background-color: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <img src={IconHeader} alt="" height="64px" />
      <StyledInput placeholder="O que você procura?" />
    </StyledHeader>
  );
};
