import React from "react";
import styles from "./index.module.css";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <p className={styles.title}>SidebarTitle</p>
      <p className={styles.text}>LabelText</p>
      <p className={styles.text}>LabelText</p>
      <p className={styles.text}>LabelText</p>
      <p className={styles.text}>LabelText</p>
    </div>
  );
};

export default Sidebar;
