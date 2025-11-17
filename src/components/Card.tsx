import styled from "styled-components";
import CardTop from "./CardTop";
import CardBottom from "./CardBottom";

const StyledCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
  width: 95%;

  @media screen and (min-width: 768px) {
    width: 750px;
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <CardTop />
      <CardBottom />
    </StyledCard>
  );
};

export default Card;
