import React from "react";
import styled from "styled-components";

const CircleWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #9a9fac;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  margin-right: 53px;

  &:hover {
    color: #346bff;
  }
`;

const CircleContent = styled.div`
  position: absolute;

  margin-top: 14px;
  margin-left: 4px;
`;

const Circle = styled.input`
  position: absolute;
  appearance: none;

  width: 140px;
  height: 140px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 53px;

  cursor: pointer;

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
  }
`;

type Props = {
  icon: string;
  value: string;
  onChange: any;
};

const CategoryCircle: React.FC<Props> = ({
  icon,
  value,
  onChange,
  children,
}) => {
  return (
    <CircleWrapper>
      <CircleContent>
        <img src={icon} alt={value} />
        <p>{children}</p>
      </CircleContent>
      <Circle type="radio" name="category" value={value} onChange={onChange} />
    </CircleWrapper>
  );
};

export default CategoryCircle;
