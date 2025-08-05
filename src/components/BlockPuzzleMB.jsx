import React, { useState, useEffect, useRef, useMemo } from "react";
import mainStyles from "../styles/module/BrainCheck.module.scss";
import styles from "../styles/module/BlockPuzzle.module.scss";
import { blockPuzzleSmall1 } from "../data/gameData/blockPuzzle1";
import { blockPuzzleSmall2 } from "../data/gameData/blockPuzzle2";
import { blockPuzzleSmall3 } from "../data/gameData/blockPuzzle3";

// ゲーム定数の定義
const TIME_LIMIT = 60; // 制限時間（秒）
const MAX_STAGE = 10;  // 最大ステージ数
const cellSize = 36;   // セルのサイズ（ピクセル）

// ランダムモードの場合は以下を使用
// const generateStages = (sources) => {
//   return Array.from({ length: MAX_STAGE }, (_, i) => {
//     const source = sources[i % sources.length];
//     const randomIndex = Math.floor(Math.random() * source.length);
//     return source[randomIndex];
//   });
// };

// 特定のファイル（blockPuzzleSmall3）をすべて出題する確認モード
const generateStages = () => {
  return blockPuzzleSmall3; // 全問題を順番に出題
};

const BlockPuzzleMB = ({ onBack }) => {
  // データソースの配列を作成（メモ化で再計算を防ぐ）
  const sources = useMemo(() => [blockPuzzleSmall1, blockPuzzleSmall2, blockPuzzleSmall3], []);

  // 状態管理
  const [stages, setStages] = useState(() => generateStages(sources)); // 全ステージデータ
  const [currentIndex, setCurrentIndex] = useState(0);                 // 現在のステージインデックス
  const current = stages[currentIndex];                                // 現在のステージデータ
  const [board, setBoard] = useState([]);                             // 盤面の状態
  const [piece, setPiece] = useState(null);                          // 現在のピース
  const [dragging, setDragging] = useState(null);                    // ドラッグ中の情報
  const [draggingPos, setDraggingPos] = useState({ x: 0, y: 0 });    // ドラッグ位置
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);              // 残り時間
  const [timeUp, setTimeUp] = useState(false);                       // 時間切れフラグ
  const [score, setScore] = useState(0);                             // スコア
  const [cleared, setCleared] = useState(false);                     // クリアフラグ
  const timerRef = useRef(null);                                     // タイマーの参照
  const [justRestarted, setJustRestarted] = useState(false);


  // ステージが変わるたびに初期化処理を実行
  useEffect(() => {
    if (!current) return;
    
    // 盤面とピースを設定
    setBoard(current.board);
    setPiece({
      id: "piece0",
      shape: current.pieces,
      placed: false,
      x: null,
      y: null,
    });
    
    // タイマーを初期化
    setTimeLeft(TIME_LIMIT);
    setTimeUp(false);
    setCleared(false);

    // 既存のタイマーをクリアして新しく開始
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setTimeUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // クリーンアップ関数でタイマーを停止
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  // タッチ開始時の処理
  const handleTouchStart = (e, rowIndex, colIndex) => {
    e.preventDefault();
    const touch = e.touches[0];
    setDragging({
      offsetRow: rowIndex,   // タッチしたピース内の行位置
      offsetCol: colIndex,   // タッチしたピース内の列位置
    });
    setDraggingPos({ x: touch.clientX, y: touch.clientY });
    console.log("TouchStart", { rowIndex, colIndex, x: touch.clientX, y: touch.clientY });
  };

  // タッチ移動時の処理
  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setDraggingPos({ x: touch.clientX, y: touch.clientY });
  };

  // タッチ終了時の処理（ピース配置判定）
  const handleTouchEnd = () => {
    if (!dragging || !piece) return;

    // 盤面の位置を取得
    const boardRect = document
      .querySelector(`.${styles.board}`)
      .getBoundingClientRect();

    // ドロップ位置を計算（cellSize/2の補正を適用）
    const dropX =
      Math.floor((draggingPos.x - boardRect.left - cellSize / 2) / cellSize) -
      (dragging.offsetCol || 0) - 2;
    const dropY =
      Math.floor((draggingPos.y - boardRect.top - cellSize / 2) / cellSize) -
      (dragging.offsetRow || 0);

    console.log("TouchEnd", { dropX, dropY, dragging });

    // ピースが配置可能かチェック
    if (canPlace(piece.shape, dropX, dropY, board)) {
      // ピースを配置
      setPiece({
        ...piece,
        placed: true,
        x: dropX,
        y: dropY,
      });
      setDragging(null);

      // クリア条件をチェック
      // 1. 盤面の黒いセル（0）をすべて取得
      const blackCells = [];
      board.forEach((row, y) =>
        row.forEach((cell, x) => {
          if (cell === 0) blackCells.push(`${x},${y}`);
        })
      );

      // 2. ピースがカバーするセルを取得
      const covered = new Set();
      piece.shape.forEach((row, dy) =>
        row.forEach((val, dx) => {
          if (val === 1) covered.add(`${dropX + dx},${dropY + dy}`);
        })
      );

      // 3. 全ての黒いセルがカバーされているかチェック
      const allBlackCovered = blackCells.every((c) => covered.has(c));
      
      // 4. 白いセル（1）と重複していないかチェック
      let overlapWithWhite = false;
      piece.shape.forEach((row, dy) =>
        row.forEach((val, dx) => {
          if (val === 1) {
            const px = dropX + dx;
            const py = dropY + dy;
            if (
              py < 0 ||
              py >= board.length ||
              px < 0 ||
              px >= board[0].length ||
              board[py][px] !== 0
            ) {
              overlapWithWhite = true;
            }
          }
        })
      );

      console.log("blackCells:", blackCells);
      console.log("covered:", Array.from(covered));
      console.log("allBlackCovered:", allBlackCovered);
      console.log("overlapWithWhite:", overlapWithWhite);

      // クリア条件を満たしていればクリア
      if (allBlackCovered && !overlapWithWhite) {
        clearInterval(timerRef.current);
        setCleared(true);
        console.log("クリア！");
      }
    } else {
      // 配置失敗時はドラッグ状態をリセット
      setDragging(null);
      console.log("ピース配置失敗", { dropX, dropY });
    }
  };

  // ピースが指定位置に配置可能かチェックする関数
  const canPlace = (shape, x, y, board) => {
    for (let dy = 0; dy < shape.length; dy++) {
      for (let dx = 0; dx < shape[dy].length; dx++) {
        if (shape[dy][dx] === 1) {
          const px = x + dx;
          const py = y + dy;
          // 盤面外または白いセル（1）との重複をチェック
          if (
            py < 0 ||
            py >= board.length ||
            px < 0 ||
            px >= board[0].length ||
            board[py][px] !== 0
          ) {
            console.log("canPlace: false", { px, py, boardVal: board[py]?.[px] });
            return false;
          }
        }
      }
    }
    return true;
  };

  // ドラッグ中のピースを描画する関数
  const renderDraggingPiece = () => {
    if (!dragging || !piece) return null;
    
    // オフセット計算
    const offsetX = (dragging.offsetCol || 0) * cellSize;
    const offsetY = (dragging.offsetRow || 0) * cellSize;

    // ドラッグ中ピースのスタイル（画面上の絶対位置）
    const style = {
      position: "fixed",
      top: draggingPos.y - offsetY - cellSize / 2,
      left: draggingPos.x - offsetX - cellSize / 2,
      zIndex: 9999,
      pointerEvents: "none",
      display: "grid",
      gap: "4px",
      gridTemplateColumns: `repeat(${piece.shape[0].length}, ${cellSize}px)`,
    };

    return (
      <div style={style}>
        {piece.shape.flat().map((cell, i) => (
          <div
            key={i}
            className={cell ? styles.block : styles.empty}
            style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
          />
        ))}
      </div>
    );
  };

  // 盤面を描画する関数
  const renderBoard = () =>
    board.map((row, y) => (
      <div key={y} className={styles.boardRow}>
        {row.map((cell, x) => {
          // 配置済みピースがこの位置にあるかチェック
          let blockHere = false;
          if (piece && piece.placed && piece.x !== null && piece.y !== null) {
            blockHere = piece.shape.some((r, dy) =>
              r.some(
                (val, dx) =>
                  val === 1 && piece.x + dx === x && piece.y + dy === y
              )
            );
          }
          return (
            <div
              key={`${x}-${y}`}
              className={`${styles.cell} ${cell === 1 ? styles.filled : ""} ${
                blockHere ? styles.blocked : ""
              }`}
            ></div>
          );
        })}
      </div>
    ));

  return (
    <div
      className={styles.blockPuzzleGame}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ヘッダー部分 */}
      <h2 className={mainStyles.subtitle}>◇ Brain Workout</h2>
      <h2 className={mainStyles.title}>ピースをはめろ</h2>
      <button className={mainStyles.backButton} onClick={onBack}>←</button>

      {/* タイマー表示 */}
      <div className={styles.timer}>
        STAGE:{currentIndex + 1}　　　　　TIMER: <span>{timeLeft}</span>
      </div>

      {/* パズル領域 */}
      <div className={styles.puzzleArea}>
        <div className={styles.board}>{renderBoard()}</div>

        {/* ゲームオーバー画面 */}
        {timeUp && (
          <div className={styles.cleared}>
            <p>GAME OVER</p>
            <p>SCORE：{score} 問正解</p>
            <button className={mainStyles.option} onClick={() => setCurrentIndex(0)}>REPLAY</button>
            <button className={mainStyles.option} onClick={onBack}>ゲーム選択</button>
          </div>
        )}

        {/* クリア画面 */}
        {!timeUp && cleared && (
          <div>
            <h1 className={mainStyles.title}>GREAT</h1>
            {currentIndex + 1 < blockPuzzleSmall3.length ? (
              <button className={mainStyles.option} onClick={() => {
                setScore((prev) => prev + 1);
                setCurrentIndex((prev) => prev + 1);
              }}>
                NEXT ▶
              </button>
            ) : (
              <>
                <p>全問クリア！スコア：{score + 1}</p>
                <button className={mainStyles.option} onClick={() => setCurrentIndex(0)}>REPLAY</button>
                <button className={mainStyles.option} onClick={onBack}>ゲーム選択</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* ピース操作エリア */}
      <div className={styles.piecesArea}>
        {piece && !piece.placed && (
          <div className={styles.piece}>
            {/* ピースの描画 */}
            {piece.shape.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.pieceRow}>
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={cell ? styles.block : styles.empty}
                    style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                    onTouchStart={(e) =>
                      handleTouchStart(e, rowIndex, colIndex)
                    }
                  ></div>
                ))}
              </div>
            ))}
            {/* 回転ボタン */}
            <button
              className={mainStyles.option}
              style={{ marginTop: 8 }}
              onClick={() =>
                setPiece((prev) => ({
                  ...prev,
                  shape: rotateShape(prev.shape),
                }))
              }
            >
              回転
            </button>
          </div>
        )}
      </div>

      {/* ドラッグ中ピースの描画 */}
      {renderDraggingPiece()}
    </div>
  );
};

// ピースを90度時計回りに回転させる関数
const rotateShape = (shape) => {
  const height = shape.length;
  const width = shape[0].length;
  const rotated = Array.from({ length: width }, () => Array(height).fill(0));

  // 回転変換の計算
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      rotated[x][height - y - 1] = shape[y][x];
    }
  }

  return rotated;
};

export default BlockPuzzleMB;