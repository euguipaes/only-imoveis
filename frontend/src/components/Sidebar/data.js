import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ArticleIcon from "@mui/icons-material/Article";
import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/home",
  },
  {
    title: "Imóveis",
    icon: <ApartmentIcon />,
    link: "/imoveis",
  },
  {
    title: "Clientes",
    icon: <PeopleIcon />,
    link: "/clientes",
  },
  {
    title: "Contratos",
    icon: <ArticleIcon />,
    link: "/contratos",
  },
  {
    title: "LogOut",
    icon: <LogoutIcon />,
    link: "/",
  },
];
