import styled from "styled-components";
import { colors, fonts } from "@style-utils";

export const FixedWrapper = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  transition: opacity 200ms ease-out;
  background-color: rgba(0, 0, 0, 0.7);
  /* visibility: ${(props) => (props.show ? "visible" : "hidden")}; */

  @media (min-width: 1200px) {
    visibility: hidden;
  }
`;

export const MobileNavFixedContainer = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 22;
  width: 50%;
  max-width: 378px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  height: 100%;
  min-height: 100vh;
  background-color: #fff;
  padding: 60px 0 80px;
  transform: translateX(-378px);
  transition: transform 150ms cubic-bezier(0.2, 0, 1, 0.9);
  overflow-y: scroll;

  ${({ show }) =>
    show &&
    `transform: translateX(0); transition:transform 250ms cubic-bezier(0,0,.38,.9);`}

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const MobileLinkAnchor = styled.a`
  display: block;
  padding: 1.5rem 2rem;
  border-top: 1px solid #eee;
  color: ${colors.secondary};
  font-family: ${fonts.heading};
  font-size: 12px;

  :hover {
    background-color: #fafafa;
  }

  ${({ last }) => last && `border-bottom: 1px solid #eee;`}
`;
