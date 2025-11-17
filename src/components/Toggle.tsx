import type { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const StyledToggle = styled.label`
  position: relative;
  width: 45px;
  height: 20px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 65px;
    height: 30px;
  }
`;

const Tray = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsl(223, 50%, 87%);
  border-radius: 100px;
  transition: all 0.3s;

  &.active {
    background-color: hsl(174, 77%, 80%);
  }

  &::after {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 3px;
    right: auto;
    transition: all 0.5s;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
      top: 5px;
      left: 5px;
    }
  }

  &.active::after {
    right: 3px;
    left: auto;
  }
`;

const HiddenInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Toggle = ({ isYearly, setIsYearly }: PropsType) => {
  return (
    <StyledToggle>
      <HiddenInput
        type="checkbox"
        checked={isYearly}
        onChange={(e) => setIsYearly(e.target.checked)}
      />
      <Tray className={`${isYearly ? "active" : ""}`}></Tray>
    </StyledToggle>
  );
};

export default Toggle;

type PropsType = {
  setIsYearly: Dispatch<SetStateAction<boolean>>;
  isYearly: boolean;
};
