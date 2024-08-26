import styled from "styled-components";
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

const VideoBackground = styled.video`
  width: 100%;
  height: 600px;
  object-fit: fill;
`;

const WeddingName = styled.p`
  color: #fff0d0;
  font-size: 1rem;
`;

const WeddingInvitation = styled.p`
  font-family: Amarillo;
  font-weight: normal;
  color: #fff0d0;
  font-size: 2.3rem;
  line-height: 4rem;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const ScheduleWrapper = styled.div`
  width: 80%;
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
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
      <ScheduleWrapper>
        <Schedule>
          <b>2024년 11월 30일 토요일 오후 3시30분</b>
          <br />
          <b>파로스컨벤션</b>
          <br />
          <b>2F Pharos Hall</b>
        </Schedule>
      </ScheduleWrapper>
    </Layout>
  );
};

export default Title;
