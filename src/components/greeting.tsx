import styled from "styled-components";
import { Divider } from "antd";
import config from "../assets/json/config.json";

const Wrapper = styled.div`
  // padding-top: 42px;
  margin: 0 auto;
  width: 90%;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  // font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
  text-align: center;
`;

const Content = styled.p`
  font-size: 0.72rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const GroomBride = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 0px;
  width: 100%;
  text-align: center;
`;

const Greeting = () => {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 32, marginBottom: 32 }} plain>
        <Title data-aos="fade-up">소중한 분들을 초대합니다</Title>
      </Divider>
      <Content data-aos="fade-up">
        단풍잎이 짙게 물드는 가을
        <br />
        따뜻한 햇살 아래에서
        <br />
        아름다운 인연을 맺고자 합니다.
        <br />
        새 인생을 시작하는 두 사람을
        <br />
        가까이에서 축복해 주시면 더 없는 기쁨이 되겠습니다.
        <br />
        <br />
        깊어가는 가을의 길목에서
        <br />
        결혼이라는 길을 함께 걸어가려 합니다.
        <br />
        저희가 내딛는 첫 걸음을
        <br />
        함께 축복해주시면 감사하겠습니다.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-up">
        <div>
          <span style={{fontSize: 11, color: "#7ca0ad"}}>신랑</span> {config.groom.name}
          <br />
          <span style={{fontSize: 11}}>{config.groom.m_name}의 장남</span>
        </div>
        <br />
        <div>
          <span style={{fontSize: 11, color: "#cd9b9c"}}>신부</span> {config.bride.name}
          <br />
          <span style={{fontSize: 11}}>{config.bride.f_name}, {config.bride.m_name}의 차녀</span>
        </div>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
