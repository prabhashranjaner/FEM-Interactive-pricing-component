import styled from "styled-components";

const StyledCardBottom = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 3rem;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  color: hsl(227, 35%, 25%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    gap: 0.8rem;
  }
`;

const FeatureItem = styled.li`
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 12px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    img {
      width: 16px;
    }
  }
`;

const Button = styled.button`
  margin: 0 auto;
  background-color: hsl(227, 35%, 25%);
  color: 18px;
  outline: none;
  border: none;
  padding: 1rem;
  width: 200px;
  font-weight: 800;
  cursor: pointer;
  border-radius: 100px;
  transition: all 0.3s;
  color: white;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 250px;
  }

  &:hover {
    filter: brightness(150%);
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const CardBottom = () => {
  return (
    <StyledCardBottom>
      <FeatureList>
        <FeatureItem>
          <img src="/images/icon-check.svg" alt="check" />
          <span>Unlimited websites</span>
        </FeatureItem>
        <FeatureItem>
          <img src="/images/icon-check.svg" alt="check" />
          <span>100% data ownership</span>
        </FeatureItem>
        <FeatureItem>
          <img src="/images/icon-check.svg" alt="check" />
          <span>Email reports</span>
        </FeatureItem>
      </FeatureList>
      <Button> Start my trial</Button>
    </StyledCardBottom>
  );
};

export default CardBottom;
