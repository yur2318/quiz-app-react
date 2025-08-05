// src/components/Quiz.jsx
import { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/module/Quiz.module.scss";
import { loadQuizData } from "../utils/loadQuizData";
import Header from "../components/Header";
import QuizResult from "../components/QuizResult";
import Loading from "../components/Loading";

// シャッフル関数（Fisher–Yates）
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default function Quiz() {
  const { subject, category, quizId } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [shuffledQuiz, setShuffledQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [effect, setEffect] = useState(null);
  const [enlarged, setEnlarged] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const returnState = {
  selectedGrade: location.state?.selectedGrade || null,
  basicOpen: location.state?.basicOpen || false,
  openChapters: location.state?.openChapters || {},
  scrollY: location.state?.scrollY || 0,
};



  // 🔸 画像のプリロード（ジャッジメントマーク用）
  useEffect(() => {
    const preloadImages = ["/images/correct.png", "/images/incorrect.png"];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

useEffect(() => {
  const fetchQuiz = async () => {
    const start = Date.now();
    const quizzes = await loadQuizData(subject, category, quizId);
    const end = Date.now();
    const elapsed = end - start;

    if (quizzes && quizzes[quizId]) {
      setQuizData(quizzes[quizId]);

      const shuffled = quizzes[quizId].data.map((q) => ({
        ...q,
        answers: shuffleArray(q.answers),
      }));
      setShuffledQuiz(shuffled);

      // 最低500ms待つ
      const delay = Math.max(0, 500 - elapsed);
      setTimeout(() => setIsLoading(false), delay);
    } else {
      console.error("クイズが見つかりません");
    }
  };

  fetchQuiz();
}, [subject, quizId]);

console.log(`${subject}/${category}/${quizId}`); // 例: "japanese/Normal/japanese01"

  useEffect(() => {
    if (finished) setEffect(null);
  }, [finished]);

  const handleAnswer = (a) => {
    setSelected(a);
    const isCorrect = a === shuffledQuiz[index].correct;
    setEffect(isCorrect ? "correct" : "incorrect");
    setAnsweredCount((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      const wrongData = {
        ...shuffledQuiz[index],
        yourAnswer: a,
      };
      setIncorrectAnswers((prev) => [...prev, wrongData]);
    }
  };

  const next = () => {
    if (index + 1 < shuffledQuiz.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowHint(false);
      setEffect(null);
    } else {
      setFinished(true);
    }
  };

  const replay = () => {
    setIsLoading(true);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowHint(false);
    setEffect(null);
    setIncorrectAnswers([]);
    setAnsweredCount(0);

    const reshuffled = quizData.data.map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));

    const imagePromises = reshuffled
      .filter((q) => q.image)
      .map((q) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = q.image;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

    Promise.all(imagePromises).then(() => {
      setShuffledQuiz(reshuffled);
      setIsLoading(false);
    });
  };

  if (!quizData || isLoading) return <Loading />;

  const q = shuffledQuiz[index];
  const subjectColor = quizData.subject;

  return (
    <main>
      <Header />
      <div className={`${styles.quizContainer} quiz-color-${subjectColor}`}>
        {finished ? (
          <QuizResult
            score={score}
            total={shuffledQuiz.length}
            onReplay={replay}
            subject={subject}
            incorrectAnswers={incorrectAnswers}
            returnState={returnState}
          />
        ) : (
          <div>
            <div className="quizHeader">
              <Link to={`/subjectMenu/${subject}`} className="headerBack" state={returnState}>
                ←
              </Link>
              <div className="headerTitle">{quizData.title}</div>
              <div className="headerStatus">
                <div className="headerStatusProgress">
                  <div
                    className="headerStatusProgressBar"
                    style={{ width: `${((index + 1) / shuffledQuiz.length) * 100}%` }}
                  ></div>
                  <div className="headerStatusNumber">
                    {index + 1}/{shuffledQuiz.length}
                  </div>
                </div>
                <div className="headerAccuracyRate">
                  正答率:{answeredCount === 0 ? 0 : Math.round((score / answeredCount) * 100)}%
                </div>
              </div>
            </div>

            <div className={`quizQuestion ${!q.image ? "no-image" : ""}`}>
              {effect && (
                <div className={`judgement-mark ${effect === "correct" ? "is-correct" : "is-incorrect"}`}>
                  <img
                    src={effect === "correct" ? "/images/correct.png" : "/images/incorrect.png"}
                    alt={effect === "correct" ? "正解" : "不正解"}
                    className="judgement-image"
                  />
                </div>
              )}
              {q.level === "hard" && (
                <img src="/images/star.png" alt="難問マーク" className="difficultyMark" />
              )}
              <div dangerouslySetInnerHTML={{ __html: q.question }} />
              {q.image && (
                <img
                  src={q.image}
                  alt="問題の画像"
                  className={`quiz-image ${enlarged ? "is-enlarged" : ""}`}
                  onClick={() => setEnlarged(!enlarged)}
                />
              )}
            </div>

            <ul className="answers">
              {q.answers.map((a, i) => (
                <li key={i}>
                <button
                  onClick={() => handleAnswer(a)}
                  className={`answerButton ${
                    selected ? (a === q.correct ? "correct" : a === selected ? "incorrect" : "") : ""
                  }`}
                  disabled={!!selected}
                  dangerouslySetInnerHTML={{ __html: a }}
                ></button>
                </li>
              ))}
            </ul>

            <div className="quizActions">
              <div className="actionButtons">
                {q.hint && (
                  <button className="hintButton" onClick={() => setShowHint(true)}>
                    ヒント
                  </button>
                )}
                {selected && (
                  <button className="nextButton" onClick={next}>
                    {index === shuffledQuiz.length - 1 ? "結果を見る" : "次の問題へ"}
                  </button>
                )}
              </div>

              {showHint && (
                <div className="explanationBlock">
                  <span className="explanationLabel">ヒント</span>
                  <p
                    className="explanationText"
                    dangerouslySetInnerHTML={{ __html: q.hint }}
                  ></p>
                </div>
              )}

              {selected && q.explanation && (
                <div className="explanationBlock">
                  <span className="explanationLabel">解　説</span>
                  <p className="explanationText" dangerouslySetInnerHTML={{ __html: q.explanation }}></p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
