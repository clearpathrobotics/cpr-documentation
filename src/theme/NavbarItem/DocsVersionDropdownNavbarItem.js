import React from "react";
import DocsVersionDropdownNavbarItem from "@theme-original/NavbarItem/DocsVersionDropdownNavbarItem";
import { useLocation } from "@docusaurus/router";

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { docsPluginId, className, type } = props;
  const { pathname } = useLocation();

  /* (Custom) check if docsPluginId contains pathname
  Given that the docsPluginId is 'charge-controller' and the routeBasePath is 'charge-controller', we can check against the current URI (pathname).
  If the pathname contains the docsPluginId, we want to show the version dropdown. Otherwise, we don't want to show it.
  This gives us one, global, context-aware version dropdown that works with multi-instance setups.
  You want to declare a version dropdown for each plugin in your navbarItems config property for this to work well. */
  const doesPathnameContainDocsPluginId = pathname.includes(docsPluginId + "/");
  if (!doesPathnameContainDocsPluginId) {
    return null;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
