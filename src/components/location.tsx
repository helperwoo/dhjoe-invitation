import { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1652464367301",
    "key" : "2a8fe",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      // @ts-ignore
      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) return;
      // @ts-ignore
      window.daum = window.daum || {};
      // @ts-ignore
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      scriptTag.classList.add("daum_roughmap_loader_script");
      scriptTag.src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1724316380508"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        경기 남양주시 다산순환로 20
        <br />
        다산현대프리미어캠퍼스몰 E동 2층 파로스컨벤션
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        ● 79, 95, 96, 99. 99-1, 170, 땡큐12, 땡큐50 도농고 정류장 하차 (정류장번호 : 23092, 49810)
        <br />
        ● 1006 현대아울렛 하차
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        ● 8호선, 경의중앙성선 구리역 3번 출구
        <br />
        ● 경의중앙선 도농역 하차
        2번 출구 - 버스 76번 - [도농고] 하차
        [도보시] 1번 출구 도보 15분
        <br />
        ● 8호선 다산역 하차
        4번 출구 - 버스 76번 승차 [도농고] 하차
      </Content>
    </Wrapper>
  );
};

export default Location;


// <!-- * 카카오맵 - 지도퍼가기 -->
// <!-- 1. 지도 노드 -->
// <div id="daumRoughmapContainer1724316380508" class="root_daum_roughmap root_daum_roughmap_landing"></div>

// <!--
// 	2. 설치 스크립트
// 	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
// -->
// <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

// <!-- 3. 실행 스크립트 -->
// <script charset="UTF-8">
// 	new daum.roughmap.Lander({
// 		"timestamp" : "1724316380508",
// 		"key" : "2kf9e",
// 		"mapWidth" : "640",
// 		"mapHeight" : "360"
// 	}).render();
// </script>