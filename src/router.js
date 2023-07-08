import React from "react";
import Tab from "./pages/ButtonTabs/Tab";
import MusicPage from "./pages/MusicPage";
import CardListPage from "./pages/CardListPage";
import AvatarPage from "./pages/AvatarPage";

const LOCATIONS = {
  TAB: "/",
  MEDIA: "/media",
  SHOP: "/shop",
  AVATAR: "/avatar",
};
const router = [
  { path: LOCATIONS.TAB, element: <Tab /> },
  { path: LOCATIONS.MEDIA, element: <MusicPage /> },

  { path: LOCATIONS.SHOP, element: <CardListPage /> },
  { path: LOCATIONS.AVATAR, element: <AvatarPage /> },
];

export default router;
