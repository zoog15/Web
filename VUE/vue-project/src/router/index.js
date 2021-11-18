import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DataBinding from "../views/DataBinding.vue";
import PageTitle from "@/views/NestComponent.vue";
import ParentComponent from "@/views/ParentComponent5.vue";
import UseSlot from "@/views/SlotUseModalLayout.vue";
import ProvideInject from "@/views/ProvideInject.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/pagetitle",
    name: "PageTitle",
    component: PageTitle,
  },
  {
    path: "/parentcomponent",
    name: "ParentComponent",
    component: ParentComponent,
  },
  {
    path: "/useslot",
    name: "UseSlot",
    component: UseSlot,
  },
  {
    path: "/provideinject",
    name: "ProvideInject",
    component: ProvideInject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
