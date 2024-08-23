import { useState } from "react";
import { Button, Divider, message, Modal } from "antd";
import styled from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import config from "../assets/json/config.json";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 18px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 42px;
`;

const Groom = styled.div`
  font-size: 0.875rem;
  opacity: 0.75;
  color: #7ca0ad;
`;

const Bride = styled.div`
  font-size: 0.875rem;
  opacity: 0.75;
  color: #cd9b9c;
`;

const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.65;
  margin-top: 8px;
  text-align: center;
`;

const ButtonWrap = styled.div`
  // margin-bottom: 3.125rem;
`;
const ContactButton = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid #efddde;
  border-radius: 8px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 6px;
  padding-left: 12px;
`;

const Money = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  return (
    <Wrapper>
      <Divider
        data-aos="fade-up"
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>마음 전하실 곳</Title>
      </Divider>
      <Content data-aos="fade-up">
        참석이 어려우신 분들을 위해
        <br />
        계좌번호를 기재하였습니다.
        <br />
        너그러운 마음으로 양해 부탁드립니다.
      </Content>

      <ButtonWrap>
        <ContactButton data-aos="fade-up" onClick={() => setGroomVisible(true)}>
          <Groom>신랑측</Groom>
        </ContactButton>
        <ContactButton data-aos="fade-up" onClick={() => setBrideVisible(true)}>
          <Bride>신부측</Bride>
        </ContactButton>
      </ButtonWrap>
      <Modal
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        centered
        children={
          <>
            <div>
              <b style={{ color: '#7ca0ad' }}>신랑</b>
              <Divider type="vertical" />
              <br />
              <CopyToClipboard text={config.groom.account}>
                <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  {config.groom.account} {config.groom.name}
                </Button>
              </CopyToClipboard>
            </div>
            <div style={{ marginTop: 24, marginBottom: 24 }}>
              <b style={{ color: '#7ca0ad' }}>신랑 어머니</b>
              <Divider type="vertical" />
              <br />
              <CopyToClipboard text={config.groom.m_account}>
                <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  {config.groom.m_account} {config.groom.m_name}
                </Button>
              </CopyToClipboard>
            </div>
          </>
        }
        footer={[
          <Description>
            계좌번호 클릭 시<br />붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
        ]}
      />
      <Modal
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        centered
        children={
          <>
            <div>
              <b style={{ color: '#cd9b9c' }}>신부</b>
              <Divider type="vertical" />
              <br />
              <CopyToClipboard text={config.bride.account}>
                <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  {config.bride.account} {config.bride.name}
                </Button>
              </CopyToClipboard>
            </div>
            <div style={{ marginTop: 24, marginBottom: 24 }}>
              <b style={{ color: '#cd9b9c' }}>신부 어머니</b>
              <Divider type="vertical" />
              <br />
              <CopyToClipboard text={config.bride.m_account}>
                <Button
                  type="text"
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  {config.bride.m_account} {config.bride.m_name}
                </Button>
              </CopyToClipboard>
            </div>
          </>
        }
        footer={[
          <Description>
            계좌번호 클릭 시<br />붙여넣기 가능한 텍스트로 복사됩니다.
          </Description>
        ]}
      />
    </Wrapper>
  );
};

export default Money;
