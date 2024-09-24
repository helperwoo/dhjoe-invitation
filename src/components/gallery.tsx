import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import styled from "styled-components";
import photo1 from "../assets/images/photo1.jpg";
import photo2 from "../assets/images/photo2.jpg";
import photo3 from "../assets/images/photo3.jpg";
import photo4 from "../assets/images/photo4.jpg";
import photo5 from "../assets/images/photo5.jpg";
import photo6 from "../assets/images/photo6.jpg";
import photo7 from "../assets/images/photo7.jpg";
import photo8 from "../assets/images/photo8.jpg";
import photo9 from "../assets/images/photo9.jpg";
import photo10 from "../assets/images/photo10.jpg";
import photo11 from "../assets/images/photo11.jpg";


const Wrapper = styled.div`
  padding-top: 42px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  // font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const images: any[] = [
  { original: photo1, thumbnail: photo1 },
  { original: photo2, thumbnail: photo2 },
  { original: photo3, thumbnail: photo3 },
  { original: photo4, thumbnail: photo4 },
  { original: photo5, thumbnail: photo5 },
  { original: photo6, thumbnail: photo6 },
  { original: photo7, thumbnail: photo7 },
  { original: photo8, thumbnail: photo8 },
  { original: photo9, thumbnail: photo9 },
  { original: photo10, thumbnail: photo10 },
  { original: photo11, thumbnail: photo11 },
];

const Gallery = () => {
  return (
    <Wrapper data-aos="fade-up">
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        disableSwipe
        items={images}
      />
    </Wrapper>
  );
};

export default Gallery;
