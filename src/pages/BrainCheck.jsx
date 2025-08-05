import React, { useState } from "react";
import styles from "../styles/module/BrainCheck.module.scss";
import Header from "../components/Header";
import WorkingMemoryGame from "../components/WorkingMemory"; // ワーキングメモリゲームのコンポーネント
import BlockPuzzleSelector from "../components/BlockPuzzleSelector";


const BrainCheck = () => {

  const [mode, setMode] = useState("menu"); // 'menu' | 'workingMemory'

  return (
    <>
      <Header />
      <div className={styles.container}>

        <div className={styles.frame}>
          {/* 四隅の角装飾 */}
          <div className={`${styles.corner} ${styles.topLeft}`}></div>
          <div className={`${styles.corner} ${styles.topRight}`}></div>
          <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
          <div className={`${styles.corner} ${styles.bottomRight}`}></div>
        </div>
        <div className={styles.contentWrapper}>
            {mode === "menu" && (
            <>
              <h2 className={styles.subtitle}>◇Brain Workout&nbsp;</h2>
              <h1 className={styles.title}>脳トレゲーム</h1>
              <p className={styles.menuTitle}>総合診断</p>
              <button className={styles.option}>▶START</button>
              {/* <button className={styles.listButton}>📖 タイプ一覧</button> */}
              <p className={styles.menuTitle}>各ゲームチャレンジ</p>

              <div className={styles.grid}>
                <button
                  className={styles.option}
                  onClick={() => setMode("blockPuzzleSelector")}
                >
                  ブロックパズル
                </button>
                <button
                  className={styles.option}
                  onClick={() => setMode("workingMemory")}
                  >
                  記憶チャレンジ
                </button>
              </div>
            </>
            )}
            {mode === "workingMemory" && (
              <WorkingMemoryGame onBack={() => setMode("menu")} />
            )}
            {mode === "blockPuzzleSelector" && (
              <BlockPuzzleSelector onBack={() => setMode("menu")} />
            )}

        </div>
      </div>
    </>
  );
};

export default BrainCheck;
