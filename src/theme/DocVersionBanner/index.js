<<<<<<< HEAD
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
=======
import React from 'react';
import DocVersionBanner from '@theme-original/DocVersionBanner';
import { useLocation } from "@docusaurus/router";

export default function DocVersionBannerWrapper(props) {
  const { pathname } = useLocation();

  const doesPathnameContainKey = (
    pathname.includes("ros1noetic/robots/solutions/husky_observer") ||
    pathname.includes("ros1noetic/robots/indoor_robots/dingo") ||
    pathname.includes("ros1noetic/robots/indoor_robots/boxer") ||
    pathname.includes("ros1noetic/robots/indoor_robots/ridgeback") ||
    pathname.includes("ros1noetic/robots/outdoor_robots/warthog")
  );

  if (doesPathnameContainKey) {
    return null;
  }

  return (
    <>
      <DocVersionBanner {...props} />
    </>
  );
}
>>>>>>> development
