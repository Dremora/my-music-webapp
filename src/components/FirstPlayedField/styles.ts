import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Label = styled.div`
  padding-bottom: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
`;

export const RadioLabel = styled.label`
  margin-right: 15px;
  display: flex;
  align-items: baseline;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const DateInputContainer = styled.div`
  margin: 10px 0;
  display: flex;
`;

export const YearInputField = styled.div`
  width: 65px;
  font-variant-numeric: tabular-nums;
`;

export const MonthDayField = styled.div`
  width: 55px;
  font-variant-numeric: tabular-nums;
  margin-left: 10px;
`;
