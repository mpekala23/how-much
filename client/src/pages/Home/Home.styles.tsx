import styled from "styled-components";
import { Spacing } from "styles";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1fff2;
  min-height: 100vh;
`;

export const Foreground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${Spacing.PADDING};
  border-radius: ${Spacing.BORDER_RADIUS};
  width: 40vw;
`;

export const MagicBox = styled.input`
  width: 100%;
  background: transparent;
  border-width: 0px;
  border: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
  text-align: left;
  font-size: 80pt;
  color: #005940;
`;
