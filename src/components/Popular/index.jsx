import styled from "styled-components";
import { Populares } from "../../Images/galeria";

const StyledPopular = styled.section`
  z-index: 0;
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 16px 0 0 0;
  justify-content: center;
  align-items: start;
  align-content: center;
  gap: 24px;
  li {
    border-radius: 20px;
    overflow: hidden;
    list-style: none;
  }
`;

const StyledP = styled.p`
  flex-wrap: wrap;
  font-family: Gandhi Sans;
  font-size: 32px;
  font-weight: 400;
  line-height: 38.4px;
  text-align: left;
  color: #7b78e5;
`;

export const Popular = () => {
  return (
    <StyledPopular>
      <StyledP>Populares</StyledP>
      <StyledUl>
        {Populares.map((photo) => (
          <li key={photo.id}>
            <img src={photo.photo} width="212px" height="158px" alt="" />
          </li>
        ))}
      </StyledUl>
    </StyledPopular>
  );
};
