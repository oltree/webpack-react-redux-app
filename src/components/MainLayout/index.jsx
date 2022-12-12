import React from "react";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MainLayout;
