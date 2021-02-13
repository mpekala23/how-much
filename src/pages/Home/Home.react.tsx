import { getTransactionSecret } from "api/Stripe";
import Button from "react-bootstrap/Button";
import React, { RefObject, useEffect, useRef, useState } from "react";
import {
  Background,
  Currency,
  Foreground,
  MagicBox,
  PopupLink,
} from "./Home.styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import FormCheck from "react-bootstrap/FormCheck";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import "./Home.css";

const HomePage: React.FC = () => {
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();
  const cardElement = elements && elements.getElement(CardElement);

  const magicRef = useRef<HTMLTextAreaElement>();
  const [magicNumber, setMagicNumber] = useState<string>();
  const [agree, setAgree] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);
  const [termsLive, setTermsLive] = useState(false);
  const [privacyLive, setPrivacyLive] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState<Error | null>();

  useEffect(() => {
    if (magicRef.current) magicRef.current.focus();
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      if (!elements || !stripe) throw Error("Can't load stripe");
      const card = elements.getElement(CardElement);
      if (!card) throw Error("Can't load stripe");

      if (!magicNumber) throw Error("No amount entered");

      const num = parseInt(magicNumber);
      if (!num || isNaN(num)) throw Error("Not a valid number");

      const secret = await getTransactionSecret(num);
      const res = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card,
        },
      });
      if (res.paymentIntent && res.paymentIntent.status === "succeeded") {
        history.push("/thanks", { amount: num });
      } else {
        throw Error(
          res.paymentIntent && res.paymentIntent.last_payment_error
            ? res.paymentIntent.last_payment_error.message
            : "Stripe error"
        );
      }
    } catch (err) {
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Background>
      <Modal show={termsLive} onHide={() => setTermsLive(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            THE LEGAL AGREEMENT SET OUT BELOW GOVERNS YOUR USE OF HOWMUCH.ROCKS.
            TO AGREE TO THESE TERMS AND CONDITIONS, CLICK “AGREE.” IF YOU DO NOT
            AGREE TO THESE TERMS AND CONDITIONS, DO NOT CLICK “AGREE,” AND DO
            NOT USE HOWMUCH.ROCKS.
          </p>
          <p>
            BS Holding Company, LLC is not responsible for any damages of any
            kind arising from the use of howmuch.rocks, including loss of all
            funds sent. By submitting a payment through howmuch.rocks the user
            consents to fully forfeit their payment without the chance for
            refund. To maximize security, BS Holding Company, LLC does not hold
            your payment information, which is held by a 3rd party, Stripe Inc.
            BS Holding Company, LLC is not a non-profit organization and
            payments do not count as tax-deductible donations. The user
            acknowledges that BS Holding Company, LLC will provide no services
            in exchange for the user’s payment. User purchases on howmuch.rocks
            are just a status symbol. The user is free to stop using
            howmuch.rocks at any time.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setTermsLive(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={privacyLive} onHide={() => setPrivacyLive(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            No user personal information will be held or shared by BS Holding
            Company, LLC. All payment information will be proceeded through
            Stripe Inc. Users can direct their questions to
            bsholdingcompanylls@gmail.com.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setPrivacyLive(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Foreground>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Currency className={!!magicNumber ? "currencyIn" : "currencyOut"}>
            $
          </Currency>
          <MagicBox
            ref={magicRef as RefObject<HTMLTextAreaElement>}
            style={{ height: magicNumber ? "120px" : "260px" }}
            placeholder="How much?"
            value={magicNumber}
            onChange={(event) => {
              if (!event.target.value.length) setMagicNumber("");
              else setMagicNumber(event.target.value);
            }}
            onKeyDown={(e) => {
              if ((e.key === "Enter" || e.key === "Tab") && cardElement) {
                cardElement.focus();
              }
              const theEvent = e || window.event;

              // Handle paste
              if (theEvent.type === "paste") {
                theEvent.preventDefault();
                return;
              }
              // Handle key press
              const key = theEvent.key;
              const regex = /[0-9]|\./;
              if (
                !regex.test(key) &&
                key !== "Backspace" &&
                key !== "Delete" &&
                key !== "ArrowLeft" &&
                key !== "ArrowRight"
              ) {
                theEvent.preventDefault();
                return;
              }
              if (regex.test(key) && magicNumber && magicNumber.length >= 9) {
                theEvent.preventDefault();
                return;
              }
            }}
          />
        </div>
        <div className={!!magicNumber ? "fadeIn" : "fadeOut"}>
          <div
            style={{
              height: 40,
              width: "100%",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <CardElement
              onChange={(val) => {
                setCardComplete(val.complete);
              }}
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
          <div style={{ marginTop: "8px", marginBottom: "8px" }}>
            <FormCheck
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <FormCheck.Input
                className="grow"
                isValid={agree}
                type="checkbox"
                onChange={(val: any) => {
                  setAgree(val.target.checked);
                }}
              />
              <FormCheck.Label>
                <p
                  style={{
                    fontSize: "14pt",
                    marginLeft: "16px",
                    color: "#005940",
                  }}
                >
                  I accept and have read the{" "}
                  <PopupLink onClick={() => setTermsLive(true)}>
                    Terms and Conditions
                  </PopupLink>{" "}
                  and{" "}
                  <PopupLink onClick={() => setPrivacyLive(true)}>
                    Privacy Policy
                  </PopupLink>
                  .
                </p>
              </FormCheck.Label>
            </FormCheck>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              disabled={!agree || !cardComplete || submitting}
              onClick={handleSubmit}
              variant="primary"
            >
              {submitting ? "Submitting..." : "Pay"}
            </Button>
            <div className={!cardComplete ? "fadeIn" : "fadeOut"}>
              <p
                style={{
                  fontSize: "8pt",
                  marginTop: "16px",
                  color: "#005940",
                  textAlign: "center",
                }}
              >
                You have not entered a valid credit card.{" "}
              </p>
            </div>
            <div className={!agree ? "fadeIn" : "fadeOut"}>
              <p
                style={{
                  fontSize: "8pt",
                  color: "#005940",
                  textAlign: "center",
                }}
              >
                You have not read and agreed to the{" "}
                <PopupLink onClick={() => setTermsLive(true)}>
                  Terms and Conditions
                </PopupLink>{" "}
                and{" "}
                <PopupLink onClick={() => setPrivacyLive(true)}>
                  Privacy Policy
                </PopupLink>
                .
              </p>
            </div>
          </div>
        </div>
      </Foreground>
      {!!error && (
        <div
          style={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Alert variant="danger" onClose={() => setError(null)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{error?.message}</p>
          </Alert>
        </div>
      )}
    </Background>
  );
};

export default HomePage;
