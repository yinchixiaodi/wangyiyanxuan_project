import Home from "@/pages/Home";
import CateList from "@/pages/CateList";
import WorthBuy from "@/pages/WorthBuy";
import Cart from "@/pages/Cart";
import Personal from "@/pages/Personal";
import Search from "@/components/Search/Search";
import Login from "@/pages/Login";
export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/catelist",
    component: CateList,
  },
  {
    path: "/worthbuy",
    component: WorthBuy,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/personal",
    component: Personal,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/login",
    component: Login,
    children: [],
  },
];
