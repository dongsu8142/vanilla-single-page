import "./style.css";
import { Match, Route } from "./utils/type";
import Index from "./views/index";
import About from "./views/about";
import NotFound from "./views/404";

const app = document.querySelector<HTMLDivElement>("#app")!;

const pathToRegex = (path: string) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match: Match) => {
  const values = match.result!.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url: string) => {
  history.pushState(null, "", url);
  router();
};

const router = async () => {
  const routes: Route[] = [
    { path: "404", view: NotFound },
    { path: "/", view: Index },
    { path: "/about/:id", view: About },
  ];

  const potentialMatches: Match[] = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  app.innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const target = e.target as any;
    if (target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(target.href);
    }
  });
  router();
});
