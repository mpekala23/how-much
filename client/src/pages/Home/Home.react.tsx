import { getTransactionSecret } from "api/Stripe";
import Button from "common/Button/Button.react";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { Background, Foreground, MagicBox } from "./Home.styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import FormCheck from "react-bootstrap/FormCheck";
import "./Home.css";

const HomePage: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const magicRef = useRef<HTMLInputElement>();
  const [magicNumber, setMagicNumber] = useState<"How much?" | number>();
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    if (magicRef.current) magicRef.current.focus();
  }, []);

  const handleSubmit = async () => {
    if (!elements || !stripe) return;
    const card = elements.getElement(CardElement);
    if (!card) return;

    const secret = await getTransactionSecret();
    const res = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card,
      },
    });
  };

  return (
    <Background>
      <Foreground>
        <MagicBox
          ref={magicRef as RefObject<HTMLInputElement>}
          type="number"
          placeholder="How much?"
          value={magicNumber}
          onChange={(event) => {
            setMagicNumber(parseFloat(event.target.value));
          }}
        />
        <div className={!!magicNumber ? "fadeIn" : "fadeOut"}>
          <div style={{ height: 40, width: "100%" }}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "24px",
                    color: "#005940",
                    backgroundColor: "transparent",
                    "::placeholder": {
                      color: "#CCC",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <div style={{ marginBottom: "8px" }}>
            <FormCheck>
              <FormCheck.Input
                isValid={agree}
                type="checkbox"
                onChange={(val: any) => {
                  setAgree(val.target.value === "on");
                  console.log(val);
                }}
              />
              <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
            </FormCheck>
          </div>
          <Button onClick={handleSubmit}>Pay</Button>
        </div>
      </Foreground>
    </Background>
  );
};

export default HomePage;
