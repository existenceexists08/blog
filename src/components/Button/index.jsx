import React from "react";
import { StyledButton } from "./styles";

const Button = ({ type = "primary", children }) => {
  return <StyledButton type={type}>{children}</StyledButton>;
};

export default Button;
