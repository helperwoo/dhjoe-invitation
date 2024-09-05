import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: Bingre;
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        <br />
        <br />
        봄의 그대는 벚꽃이었고
        <br />
        여름의 그대는 바람이었으며
        <br />
        가을의 그대는 하늘이었고
        <br />
        겨울의 그대는 하얀눈이었다.
        <br />
        <br />
        그대는 언제나
        <br />
        행복 그 자체였다.
        <br />
        <br />
        {"<사계, 강현욱>"}
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
