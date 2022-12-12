import React from "react";

import Repository from "../../../../components/Repository/index.jsx";

import styles from "./index.module.scss";

const HomeLayout = ({ repositories }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>GitHub</h1>

      <div>
        {repositories.items?.map((item) => (
          <Repository key={item.id} repository={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeLayout;
