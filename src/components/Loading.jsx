// src/components/Loading.jsx
import React from "react";
import styles from "../styles/module/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.dotLoader}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
      <p className={styles.loadingText}>Now Loading...</p>
    </div>
  );
}
