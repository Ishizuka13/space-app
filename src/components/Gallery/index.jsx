import styled from "styled-components";
import { GallerySource } from "../../Images/galeria";
import IconLoveTrue from "../../assets/icones/favorito-ativo.png";
import IconLoveFalse from "../../assets/icones/favorito.png";
import IconExpand from "../../assets/icones/expandir.png";

import { useEffect, useState } from "react";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  top: -50%;
  left: -50%;
`;
const StyledDescription = styled.section`
  background: #001634;
  margin-top: -4px;
  padding: 18px 22px;
  height: 80px;
  color: white;
  h3 {
    margin: 0;
    padding: 0;
  }
`;
const StyledIcons = styled.section`
  display: flex;
  margin-right: 0px;
  gap: 24px;
`;

const StyledActions = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
  p {
    margin: 0;
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

const StyledUl = styled.ul`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 0;
  gap: 24px;
  width: 100%;
  li {
    list-style: none;
    overflow: hidden;
    border-radius: 20px;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  padding: 0;
  z-index: 2;
  width: 1056px;
  height: 640px;
  overflow: hidden;
  box-shadow: 10px 10px 10px;
  border-radius: 20px;
`;

const StyledBackground = styled.div`
  opacity: 0.8;
  background-color: #2a2733;
  opacity: 0.8;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;
`;

export const Gallery = ({ photos, set }) => {
  const [isSelectedPhoto, setIsSelectedPhoto] = useState("");
  const [isModal, setIsModal] = useState(false);
  // const [isSelectedTag, setIsSelectedTag] = useState("");

  const handleLike = (id) => {
    let copy = photos.filter((e) => e.id === id);
    let store = photos.filter((e) => e.id !== id);
    copy[0].favorite = !copy[0].favorite;
    store.push(copy[0]);
    let organized = store.sort((a, b) => a.id - b.id);
    set(organized);
  };

  const handleModal = (id) => {
    const SelectedPhoto = photos.filter((e) => e.id === id);
    setIsModal(!isModal);
    setIsSelectedPhoto(SelectedPhoto[0]);
  };

  return (
    <>
      <StyledSection>
        {isModal && <StyledBackground />}
        {window.addEventListener("click", (e) => {
          if (e.target.localName !== "img") setIsModal(false);
        })}

        <StyledP>Navegue pela galeria</StyledP>
        <StyledUl>
          {isModal && (
            <>
              <StyledModal key={isSelectedPhoto.id}>
                <img
                  src={isSelectedPhoto.photo}
                  alt=""
                  width="1056px"
                  height="561px"
                />
                <StyledDescription>
                  <h3>{isSelectedPhoto.name}</h3>
                  <StyledActions>
                    <p>Fonte/fotógrafo/satélite</p>
                    <StyledIcons>
                      <img
                        src={
                          isSelectedPhoto.favorite
                            ? IconLoveTrue
                            : IconLoveFalse
                        }
                        alt=""
                        height="18px"
                        onClick={() => handleLike(isSelectedPhoto.id)}
                      />
                      <img
                        src={IconExpand}
                        alt=""
                        onClick={() => handleModal(isSelectedPhoto.id)}
                      />
                    </StyledIcons>
                  </StyledActions>
                </StyledDescription>
              </StyledModal>
            </>
          )}
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.photo} alt="" width="448px" height="256px" />
              <StyledDescription>
                <h3>{photo.name}</h3>
                <StyledActions>
                  <p>Fonte/fotógrafo/satélite</p>
                  <StyledIcons>
                    <img
                      src={photo.favorite ? IconLoveTrue : IconLoveFalse}
                      alt=""
                      height="18px"
                      onClick={() => handleLike(photo.id)}
                    />
                    <img
                      src={IconExpand}
                      alt=""
                      onClick={() => handleModal(photo.id)}
                    />
                  </StyledIcons>
                </StyledActions>
              </StyledDescription>
            </li>
          ))}
        </StyledUl>
      </StyledSection>
    </>
  );
};
