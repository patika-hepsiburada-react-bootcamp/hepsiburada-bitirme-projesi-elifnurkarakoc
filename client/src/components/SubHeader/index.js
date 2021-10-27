import { PageTitle, SelectBox } from "components";
import React from "react";
import styles from "./index.module.css";

const SubHeader = () => {
  return (
    <div className={styles.subheader}>
      <PageTitle />
      <SelectBox />
    </div>
  );
};

export default SubHeader;
