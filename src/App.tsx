
import { useEffect } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/reset.css";
import Gallery from "./components/gallery";
import Greeting from "./components/greeting";
import Title from "./components/title";
import GroovePaper from "./assets/GroovePaper.png";
import Location from "./components/location";
import Money from "./components/money";
import Share from "./components/share";
import Quote from "./components/quote";
import Calendar from "./components/calendar";
import Song from "./assets/sounds/song.mp3";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

// markup
const { Footer } = Layout;

const Wrapper = styled.div`
  // background: #efebe9;
  background-image: url(${GroovePaper});
  width: 100%;
`;

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <Wrapper>
      <audio autoPlay loop>
        <source src={Song} />
      </audio>
      <Title />
      <Greeting />
      <Calendar />
      <Gallery />
      <Location />
      <Quote />
      <Money />
      <Share />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.3,
          textAlign: "center",
        }}
      >
        <b>Copyright © 2024 helperwoo</b>
      </Footer>
    </Wrapper>
  )
}

export default App
