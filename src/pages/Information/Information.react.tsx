import React from "react";
import { Link } from "react-router-dom";
import { Background, Foreground } from "./Information.styles";

const InformationPage: React.FC = () => {
  return (
    <Background>
      <Foreground>
        <p
          style={{
            fontSize: "36pt",
            color: "#005940",
          }}
        >
          What we're selling?
        </p>
        <p
          style={{
            fontSize: "24pt",
            color: "#005940",
          }}
        >
          A next generation digital status symbol for the world.
        </p>
        <Link to="/">
          <p
            style={{
              fontSize: "36pt",
              borderBottom: "10px solid black",
            }}
          >
            Checkout Page
          </p>
        </Link>
        <p
          style={{
            fontSize: "36pt",
            color: "#005940",
          }}
        >
          Contact Info
        </p>
        <p
          style={{
            fontSize: "24pt",
            color: "#005940",
          }}
        >
          Email us at bsholdingcompanyllc@gmail.com.
        </p>
      </Foreground>
    </Background>
  );
};

export default InformationPage;
