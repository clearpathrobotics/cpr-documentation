import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

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
