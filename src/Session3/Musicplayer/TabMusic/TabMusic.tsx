import React from "react";
import "../Styles/TabMusic.css";
import LoveButton from "./LoveButton";

const defaultTab = [
  {
    title: "Sống xa anh chẳng dễ dàng",
    audioUrl: "assets/Song-Xa-Anh-Chang-De-Dang-Bao-Anh.mp3",
  },
  {
    title: "Yêu một người vô tâm",
    audioUrl: "assets/Yeu-Mot-Nguoi-Vo-Tam-Bao-Anh.mp3",
  },
];

function TabMusic() {
  const [selectSongs, setSelectSongs] = React.useState(0);
  function playSong() {
    const audio = new Audio(defaultTab[selectSongs].audioUrl);
    audio.play();
  }
  return (
    <div>
      <div className="header">
        <div className="column-left">
          <div>
            <h1> Most Popular </h1>

            <span> 90 songs </span>
          </div>
          <div className="listsongs">
            <div className="tabContainer">
              <>
                <span> 01 </span>
                <img src="" alt="" />
                <h3> Tên bài nhạc </h3>
                <LoveButton />
              </>
            </div>
          </div>
        </div>
        <div className="column-right">
          <h1> Now Playing </h1>
          <span> 15 Items on list </span>
          <div>
            <div className="tabContent">
              {defaultTab.map((item, index) => {
                if (index === selectSongs) {
                  return <div> {item.audioUrl}</div>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabMusic;
