import React from "react";

import styles from "./index.module.scss";

const Repository = ({ repository }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>{repository.name}</div>
        <div>{repository.stargazers_count}</div>
      </div>
      <div>{repository.updated_at}</div>
      <a href={repository.html_url} target="_blank">
        Ссылка на репозиторий
      </a>
    </div>
  );
};

export default Repository;
