import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import clsx from 'clsx';
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
import Features, {type FeatureItem} from '@site/src/data/features';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          src="/img/website_images/logo_yellow_fullsize.png"
          width={500}
        ></img>
        <p className={styles.titleText}>Documentation and Tutorials for Robotics Development</p>
      </div>
    </header>
  );
}

function HomepageSubheader() {
  return (
    <div className={styles.secondaryBanner}>
      <div className="container">
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/robots"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

function HomepageImage() {
  return (
    <center>
      <img
        src="/img/website_images/homepage.png"
        width="600"
      />
    </center>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <a href={feature.image.hyperlink}>
        <img
          className={styles.featureImage}
          alt={feature.title}
          width={Math.floor(feature.image.width)}
          height={Math.floor(feature.image.height)}
          src={withBaseUrl(feature.image.src)}
          loading="lazy"
        />
      </a>
      <h3 className={clsx(styles.featureHeading)}>{feature.title}</h3>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Clearpath Robotics Documentation`}
      description="Clearpath Robotics documentation and tutorials for robotis, sensors, and autonomy software"
    >
      <main>
        <HomepageHeader />
        <HomepageSubheader />
        <FeaturesContainer />
      </main>
    </Layout>
  );
}
