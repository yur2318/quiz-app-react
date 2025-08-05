import React, { useState } from "react";
import BlockPuzzlePC from "./BlockPuzzlePC";
import BlockPuzzleMB from "./BlockPuzzleMB";
import mainStyles from "../styles/module/BrainCheck.module.scss";
import styles from "../styles/module/BlockPuzzle.module.scss";

const BlockPuzzleSelector = ({ onBack }) => {
  const [mode, setMode] = useState(null);

  if (mode === "pc") return <BlockPuzzlePC onBack={onBack} />;
  if (mode === "mb") return <BlockPuzzleMB onBack={onBack} />;

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className={mainStyles.subtitle}>◇Brain Workout</h2>
      <h2 className={mainStyles.title}>BLOCK PUZZLE</h2>
      <button className={mainStyles.backButton} onClick={onBack}>
        ←
      </button>
         <div>
          <h2 className={mainStyles.description}>
            空いた部分にピースを全て埋めよう！<br />
            時間制限内に気をつけてクリアを目指そう！
          </h2>
          <p className={styles.subtitle}>どちらの操作方法でプレイしますか？</p>
        </div>
        <div className={mainStyles.grid}>
          <button className={mainStyles.option} onClick={() => setMode("pc")}>パソコン（ドラッグ）</button>
          <button className={mainStyles.option} onClick={() => setMode("mb")}>スマホ（タップ）</button>
        </div>
      </div>
  );
};

export default BlockPuzzleSelector;
