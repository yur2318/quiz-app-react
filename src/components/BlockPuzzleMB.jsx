import React, { useState, useEffect, useRef, useMemo } from "react";
import mainStyles from "../styles/module/BrainCheck.module.scss";
import styles from "../styles/module/BlockPuzzle.module.scss";
import { blockPuzzleSmall1 } from "../data/gameData/blockPuzzle1";
import { blockPuzzleSmall2 } from "../data/gameData/blockPuzzle2";
import { blockPuzzleSmall3 } from "../data/gameData/blockPuzzle3";

// ゲーム定数の定義
const TIME_LIMIT = 60; // 制限時間（秒）
// const MAX_STAGE = 10;  // 最大ステージ数
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
  return blockPuzzleSmall2; // 全問題を順番に出題
};

const BlockPuzzleMB = ({ onBack }) => {
  // データソースの配列を作成（メモ化で再計算を防ぐ）
  const sources = useMemo(() => [blockPuzzleSmall1, blockPuzzleSmall2, blockPuzzleSmall3], []);
  // 状態管理
  const [stages, setStages] = useState(() => generateStages(sources)); // 全ステージデータ
  const [currentIndex, setCurrentIndex] = useState(0);                 // 現在のステージインデックス
  const current = stages[currentIndex];                                // 現在のステージデータ
  const [board, setBoard] = useState([]);                             // 盤面の状態
  const [pieces, setPieces] = useState([]);                          // 現在のピース
  const [dragging, setDragging] = useState(null);                    // ドラッグ中の情報
  const [draggingPos, setDraggingPos] = useState({ x: 0, y: 0 });    // ドラッグ位置
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);              // 残り時間
  const [timeUp, setTimeUp] = useState(false);                       // 時間切れフラグ
  const [score, setScore] = useState(0);                             // スコア
  const [cleared, setCleared] = useState(false);                     // クリアフラグ
  const timerRef = useRef(null);                                     // タイマーの参照
  const [justRestarted, setJustRestarted] = useState(false);

  // ピースを右に90度回転する関数
const rotateShape = (shape) => {
  const rows = shape.length;
  const cols = shape[0].length;
  const rotated = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      rotated[x][rows - 1 - y] = shape[y][x];
    }
  }
  return rotated;
};

// ピース配置をリセットする関数
const resetPieces = () => {
  setPieces(prev =>
    prev.map(p => ({
      ...p,
      placed: false,
      x: null,
      y: null,
    }))
  );
  setCleared(false);
  setTimeUp(false);
  setTimeLeft(TIME_LIMIT);
};


  // ステージが変わるたびに初期化処理を実行
  useEffect(() => {
    if (!current) return;
    // 盤面とピースを設定
      setBoard(current.board);
      setPieces(
    current.pieces.map((shape, i) => ({
      id: `piece${i}`,
      shape,
      placed: false,
      x: null,
      y: null,
    }))
  );

    
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
  const handleTouchStart = (e, rowIndex, colIndex, pieceId) => {
    // e.preventDefault();
    const touch = e.touches[0];
    setDragging({
      pieceId,         // ピースID
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
// ...existing code...

    const handleTouchEnd = () => {
    if (!dragging) return;

    const piece = pieces.find((p) => p.id === dragging.pieceId);
    if (!piece) return;

    const boardRect = document.querySelector(`.${styles.board}`).getBoundingClientRect();
    const gap = 4;
    const actualCellSize = cellSize + gap;
    // 全ての計算を整数にする
    const rawX = (draggingPos.x - boardRect.left) / actualCellSize - (dragging.offsetCol || 0);
    const rawY = (draggingPos.y - boardRect.top) / actualCellSize - (dragging.offsetRow || 0);
    const dropX = Math.floor(rawX - 1.7); // シンプルにMath.floor()だけ
    const dropY = Math.floor(rawY + 0.3); // 小数点での微調整

    console.log("Fixed calculation:", { rawX, rawY, dropX, dropY });

// ...existing code...

    // ピースが配置可能かチェック
    if (canPlace(piece.shape, dropX, dropY, board, pieces)) {
      // ピースを配置
      const updatedPieces = pieces.map((p) =>
        p.id === piece.id
          ? { ...p, placed: true, x: dropX, y: dropY }
          : p
      );
      setPieces(updatedPieces);
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
    updatedPieces.forEach(p => {
      if (!p.placed) return;
      p.shape.forEach((row, dy) =>
        row.forEach((val, dx) => {
          if (val === 1) covered.add(`${p.x + dx},${p.y + dy}`);
        })
      );
    });

    // 黒マスをすべてカバーしてるか
    const allBlackCovered = blackCells.every(c => covered.has(c));
      
      // 4. 白いセル（1）と重複していないかチェック
    let overlapWithWhite = false;
    updatedPieces.forEach(p => {
      if (!p.placed) return;
      p.shape.forEach((row, dy) =>
        row.forEach((val, dx) => {
          if (val === 1) {
            const x = p.x + dx;
            const y = p.y + dy;
            if (
              y < 0 || y >= board.length ||
              x < 0 || x >= board[0].length ||
              board[y][x] !== 0
            ) {
              overlapWithWhite = true;
            }
          }
        })
      );
    });

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
    if (!dragging) return null;

    const piece = pieces.find(p => p.id === dragging.pieceId);
    if (!piece) return null;
    
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
          // 複数のピースで、その位置に配置済みのピースがあるか確認
          let blockHere = pieces.some(p =>
            p.placed &&
            p.shape.some((r, dy) =>
              r.some(
                (val, dx) =>
                  val === 1 &&
                  p.x + dx === x &&
                  p.y + dy === y
              )
            )
          );

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

  //レンタリング
return (
  <div
    className={styles.blockPuzzleGame}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    {/* ヘッダー部分 */}
    <h2 className={mainStyles.subtitle}>◇Brain Workout</h2>
    <h2 className={mainStyles.title}>BLOCK PUZZLE</h2>
    <button className={mainStyles.backButton} onClick={onBack}>←</button>

    {/* タイマー表示 */}
    <div className={styles.timerRow}>
      <div className={styles.timerText}>
        STAGE:{currentIndex + 1}　　　　　TIMER: <span>{timeLeft}</span>
      </div>
      <button className={styles.resetButton} onClick={resetPieces}>
        リセット
      </button>
    </div>

    {/* パズル領域 */}
    <div className={styles.puzzleArea}>
      {/* ボード */}
      <div className={styles.board}>
        {renderBoard()}
        {!timeUp && cleared && (
          <h1 className={styles.greatEffect}>GREAT</h1>
        )}
      </div>

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
          {currentIndex + 1 < stages.length ? (
            <button 
              className={mainStyles.option} 
              onClick={() => {
              setScore((prev) => prev + 1);
              setCleared(false);
              setCurrentIndex((prev) => prev + 1);
            }}>
              NEXT ▶
            </button>
          ) : (
            <>
              <img
                src="/images/allclear.png"
                alt="ALL CLEAR"
                className={styles.allClear}
              />
              <button className={mainStyles.option} onClick={() => setCurrentIndex(0)}>REPLAY</button>
              <button className={mainStyles.option} onClick={onBack}>ゲーム選択</button>
            </>
          )}
        </div>
      )}
    </div>

    {/* ピース操作エリア */}
    {!timeUp && (
      <div className={styles.piecesArea}>
        {pieces.filter(p => !p.placed).map((piece) => (
          <div key={piece.id} className={styles.piece}>
            {piece.shape.map((row, rowIndex) => (
              <div key={rowIndex} className={styles.pieceRow}>
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={cell ? styles.block : styles.empty}
                    style={{ width: `${cellSize}px`, height: `${cellSize}px` }}
                    onTouchStart={(e) => handleTouchStart(e, rowIndex, colIndex, piece.id)}
                  />
                ))}
              </div>
            ))}
            {/* 回転ボタン */}
            <button
              className={styles.resetButton}
              style={{ marginTop: 8 }}
              onClick={() =>
                setPieces(prev =>
                  prev.map(p =>
                    p.id === piece.id
                      ? { ...p, shape: rotateShape(p.shape) }
                      : p
                  )
                )
              }
            >
              回転
            </button>
          </div>
        ))}
      </div>
    )}

    {/* ドラッグ中のピース */}
    {renderDraggingPiece()}
  </div>
);
}


export default BlockPuzzleMB;