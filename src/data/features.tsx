import React from "react";
import Translate, { translate } from "@docusaurus/Translate";

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: "JACKAL",
      id: "homepage_jackal",
    }),
    image: {
      src: "/img/website_images/jackal_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/jackal/user_manual_jackal",
    },
    text: <Translate id="homepage_jackal">Small Outdoor Platform</Translate>,
  },
  {
    title: translate({
      message: "HUSKY",
      id: "homepage_husky",
    }),
    image: {
      src: "/img/website_images/husky_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/husky/user_manual_husky",
    },
    text: <Translate id="homepage_husky">Medium Outdoor Platform</Translate>,
  },
  {
    title: translate({
      message: "WARTHOG",
      id: "homepage_warthog",
    }),
    image: {
      src: "/img/website_images/warthog_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/warthog/user_manual_warthog",
    },
    text: <Translate id="homepage_warthog">Large Outdoor Platform</Translate>,
  },
  {
    title: translate({
      message: "TURTLEBOT 4",
      id: "homepage_turtlebot",
    }),
    image: {
      src: "/img/website_images/turtlebot_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/turtlebot4/user_manual_turtlebot4",
    },
    text: <Translate id="homepage_turtlebot">Classroom Indoor Differential Platform</Translate>,
  },
  {
    title: translate({
      message: "DINGO",
      id: "homepage_dingo",
    }),
    image: {
      src: "/img/website_images/dingo_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/dingo/user_manual_dingo",
    },
    text: <Translate id="homepage_dingo">Small Indoor Platform, Differential And Omnidirectional Configurations</Translate>,
  },
  {
    title: translate({
      message: "BOXER",
      id: "homepage_boxer",
    }),
    image: {
      src: "/img/website_images/boxer_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/boxer/user_manual_boxer",
    },
    text: <Translate id="homepage_boxer">Medium Indoor Differential Platform</Translate>,
  },
  {
    title: translate({
      message: "RIDGEBACK",
      id: "homepage_ridgeback",
    }),
    image: {
      src: "/img/website_images/ridgeback_thumbnail.png",
      width: 250,
      height: 150,
      hyperlink: "/docs/robots/ridgeback/user_manual_ridgeback",
    },
    text: <Translate id="homepage_ridgeback">Large Indoor Omnidirectional Platform</Translate>,
  },
];

export default FEATURES;
