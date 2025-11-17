import { useState } from "react";
import styled from "styled-components";
import type { dataType } from "../types";
import RangeSlider from "./RangeSlider";
import Toggle from "./Toggle";

const data: dataType[] = [
  { cost: 8, pageviews: "10K" },
  { cost: 12, pageviews: "50K" },
  { cost: 16, pageviews: "100K" },
  { cost: 24, pageviews: "500K" },
  { cost: 36, pageviews: "1M" },
];

const StyledCardTop = styled.div`
  padding: 0.8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-bottom: 1px solid hsl(224, 65%, 95%);
  padding-bottom: 2rem;

  @media screen and (min-width: 768px) {
    padding-inline: 3rem;
    padding-block: 2rem;
    gap: 2rem;
  }
`;

const FirstRow = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
`;

const PageView = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 3px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
`;

const Rate = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
  color: hsl(225, 20%, 60%);

  &.small {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.large {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      font-size: 18px;
    }
  }
`;

const Amount = styled.span`
  font-weight: 800;
  font-size: 28px;
  color: hsl(227, 35%, 25%);
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

const Discount = styled.p`
  margin-left: 6px;
  color: hsl(15, 100%, 70%);
  font-size: 12px;
  background-color: hsl(14, 92%, 95%);
  border-radius: 5px;
  padding: 3px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 5px;
    margin-left: 8px;
    width: 100px;
  }

  & span {
    display: none;

    @media screen and (min-width: 768px) {
      display: inline-block;
    }
  }
`;

const ToggleLabel = styled.p`
  font-size: 14px;
  display: flex;
  align-items: center;

  &.active {
    color: hsl(227, 35%, 25%);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const CardTop = () => {
  const [level, setLevel] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  function onSliderChange(value: number) {
    setLevel(value);
  }
  return (
    <StyledCardTop>
      <FirstRow>
        <PageView>{data[level - 1].pageviews} Pageviews</PageView>
        <Rate className="large">
          <Amount>${data[level - 1].cost.toFixed(2)} </Amount> / month
        </Rate>
      </FirstRow>

      <SliderWrapper>
        <RangeSlider onChange={onSliderChange} />
      </SliderWrapper>
      <Rate className="small">
        <Amount>${data[level - 1].cost.toFixed(2)} </Amount> / month
      </Rate>

      <ToggleWrapper>
        <ToggleLabel className={`${isYearly ? "" : "active"}`}>
          Monthly Billing
        </ToggleLabel>
        <Toggle isYearly={isYearly} setIsYearly={setIsYearly} />
        <ToggleLabel className={`${isYearly ? "active" : ""}`}>
          Yearly Billing{" "}
          <Discount>
            -25% <span>discount</span>
          </Discount>
        </ToggleLabel>
      </ToggleWrapper>
    </StyledCardTop>
  );
};

export default CardTop;
