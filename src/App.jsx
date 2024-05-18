import { GlobalStyles } from "./components/GlobalStyles";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Banner } from "./components/Banner";
import { Searchtags } from "./components/SearchTags";
import { Popular } from "./components/Popular";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GallerySource } from "./Images/galeria";
import { Gallery } from "./components/Gallery";

const StyledDiv = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100svh;
`;

const StyledSection = styled.section`
  display: flex;
  margin: auto;
`;
const StyledPhotos = styled.section`
  display: flex;
  margin: auto;
  justify-content: center;
`;
const StyledSection1 = styled.section`
  margin-right: 24px;
  width: 100%;
`;

function App() {
  const [isPhotos, setIsPhotos] = useState(GallerySource);

  const HandleTagSelection = (tag) => {
    let filter = GallerySource.filter((e) => e.tag === tag);
    if (tag === "Todas") {
      setIsPhotos(GallerySource);
      return;
    }

    console.log(filter);
    setIsPhotos(filter);
  };

  return (
    <StyledDiv>
      <GlobalStyles />
      <Header />
      <StyledSection>
        <Sidebar />
        <StyledSection1>
          <Banner />
          <StyledSection>
            <Searchtags onClick={(tag) => HandleTagSelection(tag)} />
          </StyledSection>
          <StyledPhotos>
            <Gallery photos={isPhotos} set={(e) => setIsPhotos(e)} />
            <Popular />
          </StyledPhotos>
        </StyledSection1>
      </StyledSection>
    </StyledDiv>
  );
}

export default App;
