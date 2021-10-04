import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(Link)`
  color: blue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 30px 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
`;
