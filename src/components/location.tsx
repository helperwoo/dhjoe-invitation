import { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/images/flower.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  // font-weight: bold;
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
  height: 50vw;
  padding: 0;
`;

const Location = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.classList.add("daum_roughmap_loader_script");
    script.src = "https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js";
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => executeScript());
  }, []);

  const executeScript = () => {
    const lat = 37.61155;
    const lng = 127.15229;
    var container = document.getElementById('map');
    var options = {
      // @ts-ignore
      center: new kakao.maps.LatLng(lat, lng),
      level: 4
    };

    // @ts-ignore
    // 지도를 생성합니다
    var map = new kakao.maps.Map(container, options);

    // @ts-ignore
    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(lat, lng);

    // @ts-ignore
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({ position: markerPosition });
    marker.setMap(map);
  };

  return (
    <Wrapper>
      <Divider data-aos="fade-up" plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image data-aos="fade-up" src={Flower} />
      <Map id="map" data-aos="fade-up" />
      <Content data-aos="fade-up">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <a
            href={"tmap://route?goalname=%ED%8C%8C%EB%A1%9C%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98&goalx=127.15229&goaly=37.61155&rpFlag=0"}
            style={{ border: "2px solid var(--title-color)", opacity: 0.8, borderRadius: 10 }}
          >
            <img
              src={"https://play-lh.googleusercontent.com/WcrqQ9atNdC7dp4vG4fWue0kRdMxiDSTKu9E1Zj7EmGcgdQ8j3u9_2Tt8vw-zPvKCkg"}
              style={{ width: "10vw", height: "10vw", borderRadius: 10 }}
            />
          </a>
          <a
            href={"kakaomap://route?ep=37.61155,127.15229&by=CAR"}
            style={{ border: "2px solid var(--title-color)", opacity: 0.8, borderRadius: 10 }}
          >
            <img
              src={"https://developers.kakao.com/tool/resource/static/img/logo/map/kakaomap_basic.png"}
              style={{ width: "10vw", height: "10vw", borderRadius: 10 }}
            />
          </a>
          <a
            href={"https://map.naver.com/p/directions/-/14154511.5448667,4524684.1031492,%ED%8C%8C%EB%A1%9C%EC%8A%A4%EC%BB%A8%EB%B2%A4%EC%85%98,1971573665,PLACE_POI/-/car?c=15.00,0,0,0,dh"}
            style={{ border: "2px solid var(--title-color)", opacity: 0.8, borderRadius: 10 }}
          >
            <img
              src={"https://play-lh.googleusercontent.com/BaWUhtRONqb2Tt0ESjnaEH9KiaAUnOlFJqGzGUYN6oPsEEpZhPwQeHZhuGcM1Y8g1Io=w240-h480-rw"}
              style={{ width: "10vw", height: "10vw", borderRadius: 10 }}
            />
          </a>

        </div>
        <br />
        <br />

        <b>파로스컨벤션 2층 파로스홀</b>
        <br />
        <br />
        경기 남양주시 다산순환로 20
        <br />
        다산현대프리미어캠퍼스몰 E동 2층
        <br />
        <br />
        <Divider />

        <Title>버스</Title>
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 79, 95, 96, 99. 99-1, 170, 땡큐12, 땡큐50
        <br />
        도농고 정류장 하차 (정류장번호 : 23092, 49810)
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 1006
        <br />
        현대아울렛 하차
        <br />
        <br />
        <Divider />

        <Title>지하철</Title>
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 8호선, 경의중앙성선 : 구리역 3번 출구
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 경의중앙선 : 도농역 하차 2번 출구
        <br />
        버스 76번 - [도농고] 하차
        <br />
        [도보시] 1번 출구 도보 15분
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 8호선 : 다산역 하차 4번 출구
        <br />
        버스 76번 승차 [도농고] 하차
        <br />
        <br />
        <Divider />

        <Title>주차안내</Title>
        <br />
        <br />
        <span style={{ color: "var(--title-color)" }}>●</span> 파로스컨벤션 전용 주차장
        <br />
        GATE2 이용 <span style={{ color: "var(--title-color)" }}>▶</span> 지하 3층~4층
      </Content>
    </Wrapper>
  );
};

export default Location;