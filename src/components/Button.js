import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  padding: 0.5rem;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  display: block;
  width: 100%;
  max-width: 40rem;
`;

const Button = (props) => {
  return (
    <StyledButton
      color={props.color}
      type={props.type}
      onClick={props.clickAction}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
