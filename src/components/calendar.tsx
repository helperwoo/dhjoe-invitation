import styled from "styled-components";

const Wrapper = styled.div`
    width: 80%;
    border-top: 1px solid var(--title-color);
    border-bottom: 1px solid var(--title-color);
    margin: 16px auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
`;

const Day = styled.div`
    position: relative;
    width: 36px;
    height: 36px;
    opacity: 0.5;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Calendar = () => {
    return (
        <div style={{ marginTop: 40, textAlign: 'left' }}>
            <span style={{ color: "var(--title-color)" }}>
                <span style={{ marginLeft: 40, lineHeight: 2 }}>십일월의</span>
                <br />
                <span style={{ marginLeft: 40 }}>서른번째 날.</span>
            </span>
            <Wrapper>
                <Row style={{ fontWeight: "bold" }}>
                    <Day>일</Day>
                    <Day>월</Day>
                    <Day>화</Day>
                    <Day>수</Day>
                    <Day>목</Day>
                    <Day>금</Day>
                    <Day style={{ color: "var(--title-color)" }}>토</Day>
                </Row>
                <Row>
                    <Day></Day>
                    <Day></Day>
                    <Day></Day>
                    <Day></Day>
                    <Day></Day>
                    <Day>1</Day>
                    <Day>2</Day>
                </Row>
                <Row>
                    <Day>3</Day>
                    <Day>4</Day>
                    <Day>5</Day>
                    <Day>6</Day>
                    <Day>7</Day>
                    <Day>8</Day>
                    <Day>9</Day>
                </Row>
                <Row>
                    <Day>10</Day>
                    <Day>11</Day>
                    <Day>12</Day>
                    <Day>13</Day>
                    <Day>14</Day>
                    <Day>15</Day>
                    <Day>16</Day>
                </Row>
                <Row>
                    <Day>17</Day>
                    <Day>18</Day>
                    <Day>19</Day>
                    <Day>20</Day>
                    <Day>21</Day>
                    <Day>22</Day>
                    <Day>23</Day>
                </Row>
                <Row>
                    <Day>24</Day>
                    <Day>25</Day>
                    <Day>26</Day>
                    <Day>27</Day>
                    <Day>28</Day>
                    <Day>29</Day>
                    <Day style={{
                        backgroundColor: "var(--title-color)",
                        padding: "4px 0",
                        borderRadius: 400,
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                    >
                        <span>30</span>
                        <span style={{
                            width: 80,
                            position: "absolute",
                            bottom: -14,
                            opacity: 0.8,
                            fontSize: 9,
                            color: 'black',
                        }}>
                            오후 3시30분
                        </span>
                    </Day>
                </Row>
            </Wrapper>
        </div>
    );
}
export default Calendar;