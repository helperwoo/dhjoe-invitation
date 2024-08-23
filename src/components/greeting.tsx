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
  font-weight: bold;
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
        <Title data-aos="fade-up">소중한 분들을 초대합니다.</Title>
      </Divider>
      <Content data-aos="fade-up">
        함께 있을 때 가장 나다운 모습이 되고
        <br />
        함께 있을 때 미래를 꿈꾸게 하는 사람을 만나
        <br />
        함께 맞는 4 번째 가을, 결혼합니다.
        <br />
        <br />
        지금처럼 서로에게 가장 친한 친구가 되어
        <br />
        예쁘고 행복하게 잘 살겠습니다.
        <br />
        <br />
        저희 두 사람의 새로운 시작을
        <br />
        함께하시어 축복해 주시면 감사하겠습니다.
        <br />
        <br />
      </Content>
      <GroomBride data-aos="fade-up">
        <div>
          <span style={{fontSize: 11, color: "#7ca0ad"}}>신랑</span> {config.groom.name}
          <br />
          <span style={{fontSize: 11}}>{config.groom.m_name}의 아들</span>
        </div>
        <br />
        <div>
          <span style={{fontSize: 11, color: "#cd9b9c"}}>신부</span> {config.bride.name}
          <br />
          <span style={{fontSize: 11}}>{config.bride.m_name}의 딸</span>
        </div>
      </GroomBride>
    </Wrapper>
  );
};

export default Greeting;
