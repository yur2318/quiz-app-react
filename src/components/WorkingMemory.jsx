import React, { useState, useEffect, useRef } from "react";
import mainStyles from "../styles/module/BrainCheck.module.scss";
import styles from "../styles/module/WorkingMemory.module.scss";

const WorkingMemoryGame = ({ onBack }) => {
  const [level, setLevel] = useState(1);
  const [sequence, setSequence] = useState([]);
  const [phase, setPhase] = useState("start");
  const [inputText, setInputText] = useState("");
  const [lastInput, setLastInput] = useState([]);
  const [showTime, setShowTime] = useState(3);
  const timerRef = useRef(null);

  const getTitle = (level) => {
    if (level <= 2) return "はじめの一歩";
    if (level <= 4) return "集中の芽生え";
    if (level <= 6) return "記憶チャレンジャー";
    if (level <= 8) return "覚醒中の記憶力！";
    if (level <= 10) return "メモリーヒーロー";
    return "記憶の伝説";
  };

  const generateSequence = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1);
  };

  // ★ここで桁数に応じてshowTimeをセット
  const startLevel = (newLevel) => {
    const numbers = generateSequence(newLevel + 2);
    setSequence(numbers);
    setInputText("");
    setLastInput([]);
    const seconds = Math.min(numbers.length, 6); // 最大6秒
    setShowTime(seconds);
    setPhase("show");
  };

  const handleStart = () => {
    setLevel(1);
    startLevel(1);
  };

  const handleSubmit = () => {
    if (phase !== "input") return;
    const inputArray = inputText.replace(/\s+/g, "").split("").map(Number);
    setLastInput(inputArray);

    const isCorrect =
      inputArray.length === sequence.length &&
      inputArray.every((n, i) => n === sequence[i]);

    if (isCorrect) {
      setPhase("correct");
    } else {
      setPhase("gameover");
    }
  };

  const handleNextLevel = () => {
    const nextLevel = level + 1;
    setLevel(nextLevel);
    startLevel(nextLevel);
  };

  const restart = () => {
    setLevel(1);
    startLevel(1);
  };

  // showTimeのカウントダウン
  useEffect(() => {
    if (phase === "show") {
      timerRef.current && clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setShowTime((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setPhase("input");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [phase]);

  return (
    <div>
      <h2 className={mainStyles.subtitle}>◇Brain Workout</h2>
      <h2 className={mainStyles.title}>瞬間記憶チャレンジ</h2>
      <div className={styles.memoryWrapper}>
        {phase !== "start" && phase !== "gameover" && (
          <p className={styles.subtitle}>
            LEVEL{level}（{sequence.length}ケタ）
          </p>
        )}

        {phase === "start" && (
          <div className={styles.center}>
            <h2 className={mainStyles.description}>
              画面に数秒だけ数字が表示されます。<br />
              できるだけ多くの数字を覚えて、表示が消えた後、<br />
              記憶を頼りに数字を入力してください。<br />
              数字は1ケタずつ増えていきます。どこまで覚えられるか挑戦しよう！
            </h2>
            <button className={mainStyles.option} onClick={handleStart}>
              START ▶
            </button>
          </div>
        )}


        {phase === "show" && (
          <div>
            <div className={styles.showTimer}>TIMER:{showTime}</div>
            <div className={styles.bigNumber}>{sequence.join(" ")}</div>
          </div>
        )}

        {phase === "input" && (
          <>
            <input
              type="text"
              value={inputText}
              onChange={(e) =>
                setInputText(e.target.value.replace(/[^0-9]/g, ""))
              }
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              maxLength={sequence.length}
              className={styles.inputField}
              placeholder="半角で入力"
              autoFocus
            />
            <button className={mainStyles.option} onClick={handleSubmit}>
              答える
            </button>
          </>
        )}

        {phase === "correct" && (
          <>
            <div className={styles.bigNumber}>GREAT</div>
            <button className={mainStyles.option} onClick={handleNextLevel}>
              NEXT
            </button>
          </>
        )}

        {phase === "gameover" && (
          <>
            <div className={styles.bigNumber}>GAME OVER</div>
            <div className={styles.resultRow}>
              <p>最終レベル　： LEVEL {level - 1} </p>
              <p>　　称号　　： {getTitle(level - 1)}</p>
              <p>あなたの答え： {lastInput.join(" ") || "未入力"}</p>
              <p>　　正解　　： {sequence.join(" ")}</p>
            </div>
            <div className={mainStyles.grid}>
              <button className={mainStyles.option} onClick={restart}>
                REPLAY
              </button>
              <button className={mainStyles.option} onClick={onBack}>
                ゲーム選択
              </button>
            </div>
          </>
        )}
      </div>
        <button className={mainStyles.backButton} onClick={onBack}>
          ←
        </button>
    </div>
  );
};

export default WorkingMemoryGame;