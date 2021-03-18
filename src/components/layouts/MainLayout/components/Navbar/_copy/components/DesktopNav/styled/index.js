import styled from "styled-components";
import { colors } from "@style-utils";

export const DesktopNavLinkList = styled.ul`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const DesktopNavLinkAnchor = styled.a`
  padding: 0.67rem;
  font-weight: 500;
  color: ${colors.secondary};
  font-size: 0.9rem;
`;

export const BasketIcon = styled.li`
  margin-left: 0.35rem;
  cursor: pointer;
  position: relative;

  img {
    width: 25px;
  }
`;

export const CartCountDesktop = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: ${colors.lemon};
  color: ${colors.secondary};
  text-align: center;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -7px;
  font-size: 9px;
  right: -20px;
`;
