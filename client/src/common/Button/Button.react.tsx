import React from "react";
import UnderlyingButton from "react-bootstrap/Button";

interface Props {
  onClick: (() => void) | (() => Promise<void>);
  children: string;
}

const Button: React.FC<Props> = ({ onClick, children }: Props) => {
  return <UnderlyingButton onClick={onClick}>{children}</UnderlyingButton>;
};

export default Button;
