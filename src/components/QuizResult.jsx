import styles from "../styles/module/QuizResult.module.scss";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

const getRandomIcon = (type) => {
  const icons = {
    trophy: ["chiyo100.png", "take100.png", "mina100.png"],
    check: ["chiyo70.png", "take70.png", "take70.png"],
    retry: ["chiyo50.png", "take50.png", "mina50.png"],
  };
  const choices = icons[type];
  const index = Math.floor(Math.random() * choices.length);
  return `/images/${choices[index]}`;
};

const getRandomColor = () => {
  const colors = [
    "#ff7698", // pink
    "#fca84e", // orange
    "#66BB6A", // green
    "#4DABF7", // blue
    "#B197FC", // purple
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function QuizResult({ score, total, onReplay, subject, incorrectAnswers, returnState }) {
  const [showWrongList, setShowWrongList] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [confettiItems, setConfettiItems] = useState([]);

  const iconSrc = useMemo(() => {
    if (score === total) return getRandomIcon("trophy");
    if (score / total >= 0.7) return getRandomIcon("check");
    return getRandomIcon("retry");
  }, [score, total]);

  useEffect(() => {
    if (score === total) {
      const items = Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        color: getRandomColor(),
        delay: `${Math.random() * 2}s`,
      }));
      setConfettiItems(items);
    }
  }, [score, total]);

  return (
    <div className={`${styles.quizResultWrapper} ${styles[subject]}`}>
      <div className={styles.quizResult}>
        {score === total && (
          <div className={styles.confettiContainer}>
            {confettiItems.map((item) => (
              <div
                key={item.id}
                className={styles.confetti}
                style={{
                  left: item.left,
                  backgroundColor: item.color,
                  animationDelay: item.delay,
                }}
              />
            ))}
          </div>
        )}

        <div className={styles.header}>今回のスコア</div>
        <div className={styles.content}>
          <div className={styles.iconArea}>
            <img
              src={iconSrc}
              alt="結果アイコン"
              onLoad={() => setImageLoaded(true)}
              className={`${styles.resultIcon} ${imageLoaded ? styles.popIn : ""}`}
            />
          </div>
          <div className={styles.scoreArea}>
            <div className={styles.scoreBig}>{score} / {total}</div>
            <div>正答率: {Math.round((score / total) * 100)}%</div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button onClick={onReplay}>もう一度</button>
          <Link to="/">ホーム</Link>
          <Link to={`/subjectMenu/${subject}`} state={returnState}>教科に戻る</Link>
          {incorrectAnswers.length > 0 && (
            <button onClick={() => setShowWrongList(!showWrongList)}>
              間違えた問題を確認
            </button>
          )}
        </div>

        {showWrongList && (
          <div className={styles.wrongList}>
            <h3>間違えた問題</h3>
            <ul>
              {incorrectAnswers.map((q, i) => (
                <li key={i}>
                <p>問題:
                  <div className={styles.wrongItem} dangerouslySetInnerHTML={{ __html: q.question }} />
                </p>
                <p>
                  あなたの答え:
                  <strong dangerouslySetInnerHTML={{ __html: q.yourAnswer }} />
                </p>
                <p>
                  正解:
                  <strong dangerouslySetInnerHTML={{ __html: q.correct }} />
                </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
