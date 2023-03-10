import styled from "styled-components";
import { BaseButton, GoogleButton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 370px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;

  ${BaseButton},${GoogleButton},${InvertedButton} {
    margin-top: auto
  }

  ${'' /* button {
    margin-top: auto;
  } */}
`;
export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  // overflow: scroll;
  // -webkit-scrollbar: none;
`;
