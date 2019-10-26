import { ComponentLoadable } from "@framework";
export const HomeConfig = {
  routes: [
    {
      path: "/",
      exact: true,
      component: ComponentLoadable({
        loader: () => import("./Home")
      })
    }
  ]
};
