import { createWebHistory, createRouter } from "vue-router";
import HomePage from './components/HomePage.vue'
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
// import Profile from "./components/Profile.vue"
// import Logout from "./components/Logout.vue"

const routes =  [
  {
    path: '/',
    alias: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component : Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: HomePage
    //component : () => import("./components/Profile.vue")
  },
  {
    path: '/user',
    name: 'user',
    component: () => import("./components/BoardUser.vue")
  },
  {
    path: '/logout',
    name: 'logout',
    component: Login
  },
  {
    path: "/user/list",
    // alias: "/user/list",
    name: "user-list",
    component: () => import("./components/UserList")
  },
  {
    path: "/user/:id",
    name: "user-details",
    component: () => import("./components/User")
  },
  {
    path: "/user/add",
    name: "add-user",
    component: () => import("./components/AddUser")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const privatePages = ['/user/list', '/user/add', '/user/'];
//   const authRequired = privatePages.includes(to.path);
//   const loggedIn = /*this.$store.state.auth.status.loggedIn*/localStorage.getItem('user')// && sessionStorage.getItem('token'));
//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/Login.vue');
//   } else {
//     next();
//   }
// });

export default router;