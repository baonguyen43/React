import React, { useEffect, useState } from "react";

// import "./App.css";
import BlockUi from "./Session2/BlockUi7";
import Gallery from "./Examples/Gallery/Gallery";
import Accordions from "./components/ButtonAccordions/Accordions";
import TabMusic from "./Session3/Musicplayer/TabMusic/TabMusic";
import MusicPlayer from "./Session3/Musicplayer";
import LoginForm from "./Session3/Form";
import RegiterForm from "./Session3/Register";
import { Route, Routes, Link } from "react-router-dom";
import Tab from "./pages/ButtonTabs/Tab";
import MusicPage from "./pages/MusicPage";
import CardListPage from "./pages/CardListPage";
import AvatarPage from "./pages/AvatarPage";
import LoginAxois from "./Netwoking/LoginAxois";
import LoginAxois31 from "./Netwoking/LoginAxois 31";
import CounterApp from "./pages/counterApp";
// function Header() {
//   return (
//     <div className="container">
//       <div>
//         <Link to="/">Tab</Link>
//       </div>
//       <div>
//         <Link to="/media">Media</Link>
//       </div>
//       <div>
//         <Link to="/shop">Shop</Link>
//       </div>
//       <div>
//         <Link to="/avatar">Avatar</Link>
//       </div>
//     </div>
//   );
// }
function App() {
  return (
    <>
      {/* <Header />
      <Routes>
        <Route path="/" element={<Tab />} />
        <Route path="media" element={<MusicPage />} />
        <Route path="shop" element={<CardListPage />} />
        <Route path="avatar" element={<AvatarPage />} />
      </Routes> */}
      <CounterApp />
    </>
  );
}

export default App;
