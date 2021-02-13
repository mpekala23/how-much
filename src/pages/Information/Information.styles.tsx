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
