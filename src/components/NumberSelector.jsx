import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({
  setError,
  error,
  SelectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === SelectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (min-width: 300px) and (max-width: 600px) {
  }

  .flex {
    @media (min-width: 300px) and (max-width: 600px) {
      gap: 12px;
      width: 300px;
      margin: 0 40px 0px 30px;
    }

    display: flex;
    gap: 24px;
    margin-right: 5px;
  }
  p {
   @media (min-width: 300px) and (max-width: 600px){
   font-size: 18px;
   margin: 5px 40px 10px 0px;
   

   }


    font-size: 24px;
    font-weight: 700px;
    margin-top: 10px;
    margin-right: 5px;
  }
  .error {
    @media (min-width: 300px) and (max-width: 600px) {
      font-size: 16px;
      margin: 0px 40px 10px 0px;
    }

    color: red;
    margin: -10px 5px 10px 0px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
