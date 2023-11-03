import React from "react";
import DocVersionBanner from "@theme-original/DocVersionBanner";
import { useLocation } from "@docusaurus/router";

export default function DocVersionBannerWrapper(props) {
  const { pathname } = useLocation();

  const doesPathnameContainKey = pathname.includes("ros1noetic/robots/solutions/husky_observer");
  if (doesPathnameContainKey) {
    return null;
  }

  return (
    <>
      <DocVersionBanner {...props} />
    </>
  );
}
