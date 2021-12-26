import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mc/react-login",
  app: () => System.import("@mc/react-login"),
  activeWhen: ["/login"],
});

registerApplication({
  name: "@mc/react-homepage",
  app: () => System.import("@mc/react-homepage"),
  activeWhen: (location) => location.pathname === "/",
});

start({
  urlRerouteOnly: true,
});
