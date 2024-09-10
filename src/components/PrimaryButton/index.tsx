import React from "react";
import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

export const PrimaryButton = ({ children, onClick }: IProps) => {
  return <Container onClick={onClick}>{children}</Container>;
};
