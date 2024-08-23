import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";
import config from "../assets/json/config.json";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  width: 100%;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background-color: rgba(217, 125, 131, 0.2);
  border-color: rgba(217, 125, 131, 0.2) !important;
  color: var(--title-color) !important;
  font-weight: 400 !important;
  align-item: center;
  width: 100%;
  &:hover {
    background-color: rgb(217 125 131 / 48%) !important;
    border-color: rgb(217 125 131 / 48%) !important;
    color: var(--title-color) !important;
  }
`;
const Share = () => {
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    // @ts-ignore
    if (window.Kakao) {
      // @ts-ignore
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(config.kakao.api_token);
      }

      // @ts-ignore
      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `${config.groom.name}♥${config.bride.name} 결혼합니다.`,
          description: "11월 30일 토요일 오후 3시 30분",
          imageUrl: config.kakao.share_img,
          link: {
            mobileWebUrl: config.url,
            webUrl: config.url,
          },
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: config.url,
              webUrl: config.url,
            },
          },
          {
            title: "위치 보기",
            link: {
              mobileWebUrl: "https://map.kakao.com/?map_type=TYPE_MAP&itemId=124496353&q=%ED%8C%8C%EB%A1%9C%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98&urlLevel=3&urlX=533615&urlY=1142238",
              webUrl: "https://map.kakao.com/?map_type=TYPE_MAP&itemId=124496353&q=%ED%8C%8C%EB%A1%9C%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98&urlLevel=3&urlX=533615&urlY=1142238",
            },
          },
        ],
      });
    }
  };

  return (
    <Wrapper data-aos="fade-up">
      <Divider
        plain
        style={{ marginTop: 0, marginBottom: 32 }}
      >
        <Title>청첩장 공유</Title>
      </Divider>
      <KakaoTalkShareButton
        style={{ margin: 0, marginRight: 20 }}
        icon={<MessageFilled />}
        id="kakaotalk-sharing-btn"
        size="large"
        onClick={() => createKakaoButton()}
      />
      <CopyToClipboard text={config.url}>
        <LinkShareButton
          style={{ margin: 0 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("링크가 복사되었습니다.")}
        />
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;
