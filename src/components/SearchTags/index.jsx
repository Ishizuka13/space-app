import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 24px;
  li {
    background: #d9d9d94d;
    color: #fff;
    padding: 10px 8px 10px 8px;
    border-radius: 10px;
  }
`;

export const Searchtags = ({ onClick }) => {
  const tags = ["Estrelas", "Galáxias", "Lua", "Planetas", "Todas"];

  return (
    <StyledSection>
      <p>Busque por tags:</p>
      <StyledUl>
        {tags.map((tag, i) => (
          <li key={i} onClick={() => onClick(tag)}>
            {tag}
          </li>
        ))}
      </StyledUl>
    </StyledSection>
  );
};
