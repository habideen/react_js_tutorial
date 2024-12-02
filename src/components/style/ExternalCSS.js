import React from "react";
import "./ExternalCSS.css";
import styles from "./ScopeExternalCSS.module.css";
import styles2 from "./ScopeExternalCSS2.module.css";

function ExternalCSS() {
  return (
    <>
      <div className="container">
        <h1>External CSS Demonstration</h1>
      </div>
      <div className={styles.container}>
        <h1>Scope CSS Demonstration</h1>
      </div>
      <div className={styles2.container}>
        <h1>Scope3 CSS Demonstration</h1>
      </div>
    </>
  );
}

export default ExternalCSS;
