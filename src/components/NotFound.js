import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={`OOps! Wrong dimension.`} // This message will display if a user navigates to a non-existing page
      />
    </div>
  );
};

export default NotFound;