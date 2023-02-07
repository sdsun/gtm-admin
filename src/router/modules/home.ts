import { $t } from "@/plugins/i18n";
const Layout = () => import("@/layout/index.vue");
const Basic = () => import("@/layout/basic.vue");
const isQianKun = false;
export default {
  path: "/",
  name: "Home",
  component: isQianKun ? Basic : Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: $t("menus.hshome"),
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: $t("menus.hshome")
      }
    }
  ]
} as RouteConfigsTable;
