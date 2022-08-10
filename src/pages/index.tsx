import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

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
            to="/docs/robots/index_robots"
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
        <HomepageImage />
      </main>
    </Layout>
  );
}
