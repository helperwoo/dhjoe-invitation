import styled from "styled-components";
import HeaderImage from "../assets/images/photo2.jpg";
import BackgroundVideo from "../assets/videos/BackgroundVideo.mp4";

const Layout = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: white;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const WeddingName = styled.p`
  color: white;
  font-size: 3.5vw;
`;

const WeddingInvitation = styled.p`
  font-family: Amarillo;
  font-weight: normal;
  color: white;
  font-size: 8.1vw;
  line-height: 13vw;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const ScheduleWrapper = styled.div`
  width: 60%;
  border-top: 1px solid var(--title-color);
  border-bottom: 1px solid var(--title-color);
  margin: 20px auto;
`;

const Schedule = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 12px;
  margin-bottom: 12px;
`;

const Title = () => {
  return (
    <Layout>
      <TitleWrapper>
        <GroomBride>
          <WeddingName>DONG HYUN and SEO HEE</WeddingName>
          <WeddingInvitation>
            our
            <br />
            wedding
            <br />
            day
          </WeddingInvitation>
        </GroomBride>
      </TitleWrapper>
      <img src={HeaderImage} style={{maxWidth: "448px", width: "100%", opacity: 1}} />
      <source src={BackgroundVideo} type="video/mp4" />
      <ScheduleWrapper>
        <Schedule>
          2024년 11월 30일 토요일 오후 3시30분
          <br />
          파로스컨벤션
          <br />
          2F Pharos Hall
        </Schedule>
      </ScheduleWrapper>
    </Layout>
  );
};

export default Title;
