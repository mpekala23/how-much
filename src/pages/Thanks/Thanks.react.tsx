import React from "react";
import { useHistory } from "react-router-dom";
import { Background } from "./Thanks.styles";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const ThanksPage: React.FC = () => {
  const history = useHistory();
  if (!history) return <Background />;
  if (!history.location || !history.location.state) {
    history.goBack();
    return <Background />;
  }
  const amount = (history.location.state as any)["amount"];
  if (!amount) {
    history.goBack();
    return <Background />;
  }

  const url = "https://howmuch.rocks";
  const testimonial = `My score is ${amount}. Now I challenge you, how much?`;

  return (
    <Background>
      <p
        style={{
          fontSize: "36pt",
          color: "#005940",
          textAlign: "center",
          width: "90vw",
          maxWidth: "800px",
        }}
      >
        Thanks for {amount}!
      </p>
      <p
        style={{
          fontSize: "24pt",
          color: "#005940",
          textAlign: "center",
          width: "90vw",
          maxWidth: "800px",
        }}
      >
        Share your score...
      </p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <FacebookShareButton url={url} quote={testimonial} hashtag="#howmuch">
          <FacebookIcon />
        </FacebookShareButton>
        <LinkedinShareButton
          url={url}
          title="An important announcement about my future..."
          summary={testimonial}
        >
          <LinkedinIcon />
        </LinkedinShareButton>
        <RedditShareButton url={url} title={testimonial}>
          <RedditIcon />
        </RedditShareButton>
        <TelegramShareButton url={url} title={testimonial}>
          <TelegramIcon />
        </TelegramShareButton>
        <TwitterShareButton
          url={url}
          title={testimonial}
          hashtags={["howmuch"]}
        >
          <TwitterIcon />
        </TwitterShareButton>
      </div>
    </Background>
  );
};

export default ThanksPage;
