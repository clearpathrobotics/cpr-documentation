import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import HomepageMarkdown from "/src/pages/homepage.mdx";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <Layout
        title={`Home`}
        description="Description will go into a meta tag in <head />"
      />
      <HomepageMarkdown />
    </div>
  );
}
