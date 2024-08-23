import styled from "styled-components";
import config from "../assets/json/config.json";
import BackgroundVideo from "../assets/sounds/BackgroundVideo.mp4";

const Layout = styled.div`
  width: 90%;
  overflow: hidden;
  margin: 0 auto;
`;

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 42px;
  font-weight: 500 !important;
  color: var(--title-color);
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  width: 100%;
`;

const WeddingInvitation = styled.p`
  font-size: 0.825rem;
  opacity: 0.45;
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
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {config.groom.name} &#38; {config.bride.name}
        </GroomBride>
      </TitleWrapper>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVideo} type="video/mp4" />
      </VideoBackground>
      <ScheduleWrapper>
        <Schedule>
          2024년 11월 30일 토요일 오후 3시 30분
          <br />
          파로스컨벤션
          <br />
          2F 그랜드볼룸
        </Schedule>
      </ScheduleWrapper>
    </Layout>
  );
};

export default Title;
