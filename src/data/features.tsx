import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

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
      message: 'JACKAL',
      id: 'homepage_jackal',
    }),
    image: {
      src: '/img/website_images/homepage_jackal.jpg',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        small outdoor platform
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'HUSKY',
      id: 'homepage_husky',
    }),
    image: {
      src: '/img/website_images/homepage_husky.jpg',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        medium outdoor platform
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'WARTHOG',
      id: 'homepage_warthog',
    }),
    image: {
      src: '/img/website_images/homepage_warthog.jpg',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        large outdoor platform
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'DINGO',
      id: 'homepage_dingo',
    }),
    image: {
      src: '/img/website_images/homepage_dingo.png',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        small indoor platform
        differential and omnidirectional configurations
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'BOXER',
      id: 'homepage_boxer',
    }),
    image: {
      src: '/img/website_images/homepage_boxer.png',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        medium indoor differential platform
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'RIDGEBACK',
      id: 'homepage_ridgeback',
    }),
    image: {
      src: '/img/website_images/homepage_ridgeback.jpg',
      width: 700,
      height: 300,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        large indoor omnidirectional platform
      </Translate>
    ),
  },
];

export default FEATURES;