import { createWebHistory, createRouter } from "vue-router";
import axios from "axios";

// const Home = () => import("../pages/Home.vue");
// const Booking = () => import("../pages/Booking");
// const About = () => import("../pages/About");
// const Contact = () => import("../pages/Contact");
// const Faq = () => import("../pages/Faq");
// const Profile = () => import("../pages/Profile");
// const Favorite = () => import("../pages/Favorite");
// const Dashboard = () => import("../pages/Dashboard");
// const Orders = () => import("../pages/Orders");
// const SingleCar = () => import("../pages/SingleCar");
// const EditCar = () => import("../pages/EditCar");
// const Books = () => import("../pages/Books");

import Home from "../pages/Home";
import Booking from "../pages/Booking";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import SingleCar from "../pages/SingleCar";
import EditCar from "../pages/EditCar";
import Books from "../pages/Books";

export const routes = [
  {
    name: "default",
    path: "/:catchAll(.*)",
    component: Home,
    props: (route) => ({
      ...route.params,
    }),
  },
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "booking",
    path: "/booking",
    component: Booking,
  },
  {
    name: "about",
    path: "/about-us",
    component: About,
  },
  {
    name: "contact",
    path: "/contact",
    component: Contact,
  },
  {
    name: "faq",
    path: "/faq",
    component: Faq,
  },

  {
    name: "profile",
    path: "/profile",
    component: Profile,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/authenticated")
        .then((res) => {
          if (res.data === "auth") {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "books",
    path: "/books",
    component: Books,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/authenticated")
        .then((res) => {
          if (res.data === "auth") {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "favorite",
    path: "/favorite",
    component: Favorite,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/authenticated")
        .then((res) => {
          if (res.data === "auth") {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "singleCar",
    path: "/car/:id",
    component: SingleCar,
    props: (route) => ({
      ...route.params,
    }),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/is-admin")
        .then((res) => {
          if (res.data) {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "orders",
    path: "/orders",
    component: Orders,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/is-admin")
        .then((res) => {
          if (res.data) {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "editCar",
    path: "/car/edit/:id",
    props: (route) => ({
      ...route.params,
    }),
    component: EditCar,
    beforeEnter: (to, form, next) => {
      axios
        .get("/api/is-admin")
        .then((res) => {
          if (res.data) {
            next();
          } else {
            return next({ name: "home" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  {
    name: "result",
    path: "/result/:result/:message",
    component: Home,
    props: (route) => ({
      ...route.params,
    }),
  },
  {
    name: "redirect",
    path: "*",
    path: "/",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkExactActiveClass: "exact-active",
  scrollBehavior(to, from, savedPosition) {
    document.querySelector("header").scrollIntoView({
      behavior: "smooth",
    });
  },
});

export default router;
