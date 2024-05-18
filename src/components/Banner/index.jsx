import styled from "styled-components";
import BannerImg from "../../assets/imagens/Foto destaque.png";

const StyledBanner = styled.div`
  display: flex;
  width: 100%;
  background: url(${BannerImg});
  background-size: cover;
  border-radius: 10px;
  height: 328px;
  color: white;
  font-family: Gandhi Sans;
  p {
    margin: auto 64px;
    width: 301px;
    height: 144px;
    font-family: Gandhi Sans;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    text-align: left;
  }
`;

export const Banner = () => {
  return (
    <StyledBanner>
      <p>A galeria mais completa de fotos do espaço!</p>
    </StyledBanner>
  );
};
