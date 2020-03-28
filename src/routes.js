import React from "react";
import {Redirect} from "react-router-dom";

import UserLayout from "./components/user_layout";
import Login from "./components/user/login/Login";
import Signup from "./components/user/signup/Signup";
import Profile from "./components/user/profile/Profile";
import HomeLayout from "./components/home_layout";
import Home from "./components/home/Home";
import Category from "./components/category/Category";
import Post from "./components/post/Post";

export default [
  {
    path: "/login",
    exact: true,
    layout: UserLayout,
    isAuthenticated: false,
    component: Login
  },
  {
    path: "/signup",
    exact: true,
    layout: UserLayout,
    isAuthenticated: false,
    component: Signup
  },
  {
    path: "/users/:username",
    exact: true,
    layout: UserLayout,
    isAuthenticated: false,
    component: Profile
  },
  {
    path: "/",
    exact: true,
    layout: HomeLayout,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    exact: true,
    layout: HomeLayout,
    isAuthenticated: true,
    component: Home
  },
  {
    path: "/home/category/:category_id",
    exact: true,
    layout: HomeLayout,
    component: Category
  },
  {
    path: "/home/post/:post_id",
    exact: true,
    layout: HomeLayout,
    component: Post
  }
];
