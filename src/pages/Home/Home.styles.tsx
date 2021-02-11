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
  width: 80vw;
  max-width: 800px;
  @media only screen and (max-device-width: 640px) {
    width: 90vw;
    padding: 0px;
  }
`;

export const MagicBox = styled.textarea`
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
  overflow: hidden;
  resize: none;
  @media only screen and (max-device-width: 640px) {
    font-size: 60pt;
  }
`;

export const Currency = styled.p`
  font-size: 80pt;
  color: #005940;
  @media only screen and (max-device-width: 640px) {
    font-size: 60pt;
    transform: translateY(2px);
  }
  transform: translateY(-8px);
`;

export const PopupLink = styled.a`
  color: #005940;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
    color: #000000;
  }
`;
