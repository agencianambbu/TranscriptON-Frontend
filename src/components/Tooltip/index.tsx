import React from "react";
import { Container } from "./styles";

interface IProps {
  label: string;
  isActive?: boolean;
}

export const Tooltip = ({ label, isActive }: IProps) => {
  return(
    isActive ? (
      <Container>
        <p>{label}</p>
      </Container>
    ) : (
      <p></p>
    )
  )

};
