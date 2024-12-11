import { NextRouter } from "next/router";

export const navigateTo = (router: NextRouter, path: string): void => {
  if (!router) {
    throw new Error("Router is not available");
  }
  router.push(path);
};
