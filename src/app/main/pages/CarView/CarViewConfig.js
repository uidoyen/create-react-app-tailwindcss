import { ComponentLoadable } from "@framework";

export const CarViewConfig = {
  routes: [
    {
      path: "/pages/carview",
      component: ComponentLoadable({
        loader: () => import("./CarView")
      })
    }
  ]
};
