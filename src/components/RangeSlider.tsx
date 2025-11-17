import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type TouchEvent,
} from "react";
import styled from "styled-components";

const StyledRangeSlider = styled.div`
  position: relative;
  height: 10px;
  background-color: hsl(224, 65%, 95%);
  cursor: pointer;
  width: 100%;
  border-radius: 40px;
  @media screen and (min-width: 768px) {
    height: 16px;
  }
`;

const SliderBar = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  background-color: hsl(174, 77%, 80%);
  border-radius: 40px;
`;

const SliderHandle = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: hsl(174, 86%, 45%);
  border-radius: 50%;
  right: -20px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;

  img {
    width: 30px;
  }

  &:hover {
    box-shadow: 0 0 30px hsla(174, 86%, 45%, 50%);
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const RangeSlider = ({ onChange }: PropsType) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentValue, setCurrentValue] = useState(2);
  const [isDragging, setIsDragging] = useState(false);

  const min = 1;
  const max = 5;
  const step = 1;

  const moveSliderPosistion = useCallback(
    (event: MouseEvent | TouchEvent) => {
      const sliderBoundingClientRect =
        sliderRef.current?.getBoundingClientRect();
      if (sliderBoundingClientRect) {
        const posX =
          ((event as MouseEvent).clientX ||
            (event as TouchEvent).touches[0].clientX) -
          sliderBoundingClientRect.left;

        const totalWidth = sliderBoundingClientRect.width;
        console.log({ totalWidth });
        console.log({ posX });

        let selectedValue = Math.round((posX / totalWidth) * (max - min) + min);

        console.log({ selectedValue });

        //! valuue should be between the min and max
        selectedValue = Math.max(min, selectedValue);
        selectedValue = Math.min(max, selectedValue);

        setCurrentValue(selectedValue);
      }
    },
    [max, min]
  );

  //!============Mouse Events =======================
  const onMouseDown = (event: MouseEvent) => {
    moveSliderPosistion(event);
    setIsDragging(true);
  };

  const onMouseMove = useCallback(
    (event: Event) => {
      if (isDragging) moveSliderPosistion(event as unknown as MouseEvent);
    },
    [isDragging, moveSliderPosistion]
  );

  const onMouseUp = useCallback(() => {
    onChange(currentValue);
    setIsDragging(false);
  }, [currentValue, onChange]);

  //!=======================Key Events ==============
  const onKeyDown = (event: KeyboardEvent) => {
    console.log(event);
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      let selectedValue = currentValue;

      if (event.key === "ArrowLeft") {
        selectedValue = Math.max(currentValue - step, min);
      } else {
        selectedValue = Math.min(currentValue + step, max);
      }

      setCurrentValue(selectedValue);
      onChange(selectedValue);
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp]);

  console.log(currentValue);
  return (
    <StyledRangeSlider
      role="slider"
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      tabIndex={0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={currentValue}
    >
      <SliderBar
        style={{ width: `${((currentValue - min) / (max - min)) * 100}%` }}
      >
        <SliderHandle style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          <img src="/images/icon-slider.svg" alt="slider" />
        </SliderHandle>
      </SliderBar>
    </StyledRangeSlider>
  );
};

export default RangeSlider;

type PropsType = {
  onChange: (value: number) => void;
};
