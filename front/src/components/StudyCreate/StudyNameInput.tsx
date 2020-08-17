import React from "react";
import styled from "styled-components";

const InputTitle = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
`;

const InputForm = styled.input`
  width: 660px;
  height: 30px;
  border: none;
  border-bottom: 1px #9a9fac solid;
`;

export default class StudyNameInput extends React.Component {
  render() {
    return (
      <>
        <InputTitle>스터디 그룹 이름</InputTitle>
        <InputForm placeholder="원하는 스터디 그룹 이름을 적어주세요" />
      </>
    );
  }
}
