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
          A next generation digital status symbol for the world. This is simply
          the ability to access a page that says, "Thanks for X", where X is the
          amount in $USD that the you provide on the checkout page. This page
          also contains buttons that make it easy to share your accomplishment
          on social media.
        </p>
        <p
          style={{
            fontSize: "36pt",
            color: "#005940",
          }}
        >
          Transaction Currency
        </p>
        <p
          style={{
            fontSize: "24pt",
            color: "#005940",
          }}
        >
          $USD
        </p>
        <p
          style={{
            fontSize: "36pt",
            color: "#005940",
          }}
        >
          Returns / refunds
        </p>
        <p
          style={{
            fontSize: "24pt",
            color: "#005940",
          }}
        >
          We do not offer any returns or refunds.
        </p>
        <p
          style={{
            fontSize: "36pt",
            color: "#005940",
          }}
        >
          Privacy Policy
        </p>
        <p
          style={{
            fontSize: "24pt",
            color: "#005940",
          }}
        >
          No user personal information will be held or shared by BS Holding
          Company, LLC. All payment information will be proceeded through Stripe
          Inc. Users can direct their questions to
          bsholdingcompanyllc@gmail.com.
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
