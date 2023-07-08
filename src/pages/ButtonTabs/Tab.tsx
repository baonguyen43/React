import React from "react";
import styles from "./Tab.module.css";
type Props = {};

const defaultTab = [
  {
    title: "HISTORY",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
  },
  {
    title: "APPROACH",
    content:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
  },
  {
    title: "CULTURE",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis ",
  },
  {
    title: "METHOD",
    content:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non  ",
  },
];

export default function Tab({}: Props) {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className={styles.tabAll}>
      <div className={styles.tabContainer}>
        {defaultTab.map((item, index) => {
          const isActiveTab = index === selectedTab;
          return (
            <button
              onClick={() => {
                setSelectedTab(index);
              }}
              className={styles.tabTitle}
              style={{
                color: isActiveTab ? "white" : "#666666 ",
                backgroundColor: isActiveTab ? "#47b475" : "whitesmoke",
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      <div className={styles.tabContent}>
        {defaultTab.map((item, index) => {
          if (index === selectedTab) {
            return <div> {item.content}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
}
