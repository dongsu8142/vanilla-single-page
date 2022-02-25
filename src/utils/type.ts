export type Route = {
  path: string;
  view: any;
};

export type Match = {
  route: Route;
  result: RegExpMatchArray | null;
};
