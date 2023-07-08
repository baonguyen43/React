import React from "react";
import styles from "./Accor.module.css";
import { title } from "process";
type Props = {};

const defaultTab = [
  {
    title: "SIMPLE PANELS",
    content: " ",
  },
  {
    title: "TOGGLE INFORMATION",
    content:
      "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
  },
  {
    title: "NICE TOUCH",
    content:
      " Ssed do eiusmod tempor incididunt ut labore et dolore magna aliquaquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.. ",
  },
];
export default function Accordions({}: Props) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedTabRight, setSelectedTabRight] = React.useState(true);
  const [like, setLike] = React.useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.columleft}>
        <div className={styles.top}>ONE AT A TIME</div>
        <div className={styles.bottom}>
          {defaultTab.map((item, index) => {
            const isActiveTab = index === selectedTab;
            return (
              <div className={styles.bot}>
                <button
                  onClick={() => {
                    setSelectedTab(index);
                  }}
                  className={styles.tabTitle}
                  style={{
                    color: isActiveTab ? "white" : "rgb(105,105,105)",
                    backgroundColor: isActiveTab
                      ? "rgb(71,180,117)"
                      : "rgb(245,245,245)",
                  }}
                >
                  {item.title}{" "}
                </button>
                <div className={styles.tabContent}>
                  {defaultTab.map((item, index) => {
                    if (index === selectedTab) {
                      return (
                        <div
                          style={{
                            height: isActiveTab ? "auto" : "0",
                          }}
                        >
                          {" "}
                          {item.content}{" "}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.columright}>
        <div className={styles.top}>MULTIPLE OPEN</div>
        <div className={styles.bottom}>
          <div className={styles.bottom}>
            <div className={styles.bot}>
              {selectedTabRight && (
                <button
                  onClick={() => {
                    setSelectedTabRight(false);
                  }}
                  className={styles.tabTitle}
                  style={{
                    color: "rgb(105,105,105)",
                    backgroundColor: "rgb(245,245,245)",
                  }}
                ></button>
              )}
              {!selectedTabRight && (
                <button
                  onClick={() => {
                    setSelectedTabRight(true);
                  }}
                  className={styles.tabTitle}
                  style={{
                    color: "white",
                    backgroundColor: "rgb(71,180,117)",
                  }}
                ></button>
              )}
              <div className={styles.tabContent}>
                {defaultTab.map((item, index) => {
                  if (index === selectedTab) {
                    return <div style={{}}></div>;
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
