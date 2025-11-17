import styled from "styled-components";
import Card from "./components/Card";

const AppWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 850px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-top: 3rem;
  @media screen and (min-width: 768px) {
    margin-top: 4rem;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  color: hsl(227, 35%, 25%);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;

const SubTitle = styled.p`
  font-size: 16px;
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const CardWrapper = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-top: 3rem;
  }
`;

function App() {
  return (
    <AppWrapper>
      <Header>
        <Title>Simple, traffic-based pricing</Title>
        <SubTitle>
          Sign-up for our 30-day trail. No credid card required
        </SubTitle>
      </Header>

      <CardWrapper>
        <Card />
      </CardWrapper>
    </AppWrapper>
  );
}

export default App;
