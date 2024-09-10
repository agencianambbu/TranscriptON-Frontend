import React from "react";
import { Container, Item } from "./styles";
import { FaHome } from "react-icons/fa";
import { theme } from "../../theme";

import NavIndicator from '../../assets/nav-indicator.svg'


interface IProps {
  label: string;
  isActive: boolean;
  icon: any;
}

export const NavigationItem = ({ label, isActive, icon }: IProps) => {
  return (
    <Container isActive={isActive}>
      <img src={NavIndicator} />
      <Item isActive={isActive}>
        {icon}
        <p>{label}</p>
      </Item>
    </Container>
  );
};
