import { ComponentLoadable } from "@framework";

export const CarListConfig = {
  routes: [
    {
      path: "/pages/carlist",
      component: ComponentLoadable({
        loader: () => import("./CarList")
      })
    }
  ]
};
