import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background: #ffbd59;
  background: -webkit-linear-gradient(to left, #ffbd59, #ffeb0f);
  background: -o-linear-gradient(to left, #ffbd59, #ffeb0f);
  background: -moz-linear-gradient(to left, #ffbd59, #ffeb0f);
  background: linear-gradient(to left, #ffbd59, #ffeb0f);
  color: black;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;

  &:hover {
    cursor: pointer;
    color: #111;
    font-weight: bold;
    background: #ff9e0c;
    background: -webkit-linear-gradient(to left, #ff9e0c, #ffeb0f);
    background: -o-linear-gradient(to left, #ff9e0c, #ffeb0f);
    background: -moz-linear-gradient(to left, #ff9e0c, #ffeb0f);
    background: linear-gradient(to left, #ff9e0c, #ffeb0f);
  }
`;
