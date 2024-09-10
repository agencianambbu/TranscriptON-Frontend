import React from "react";
import { Container } from "./styles";

interface IProps {
  children: React.ReactNode;
  icon?: any;
  onClick: any;
  className?: any;
}

export const SecondaryButton = ({children, icon, onClick, className} : IProps) => {
  return(
    <Container className={className} onClick={onClick}>
      {children}
      {icon}
    </Container>
  )
}