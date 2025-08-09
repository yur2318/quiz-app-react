import React, { useState, useEffect, useRef, useMemo } from "react";
import mainStyles from "../styles/module/BrainCheck.module.scss";
import styles from "../styles/module/BlockPuzzle.module.scss";
import { blockPuzzle1 } from "../data/gameData/blockPuzzle1";
import { blockPuzzle2 } from "../data/gameData/blockPuzzle2";
import { blockPuzzle3 } from "../data/gameData/blockPuzzle3";
import { blockPuzzle4 } from "../data/gameData/blockPuzzle4";
import { blockPuzzle5 } from "../data/gameData/blockPuzzle5";
import { blockPuzzle6 } from "../data/gameData/blockPuzzle6";
import { blockPuzzle7 } from "../data/gameData/blockPuzzle7";
import { blockPuzzle8 } from "../data/gameData/blockPuzzle8";
import { blockPuzzle9 } from "../data/gameData/blockPuzzle9";
import { blockPuzzle10 } from "../data/gameData/blockPuzzle10";


// ゲームの基本設定
const TIME_LIMIT = 60;
const MAX_STAGE = 10;

// ファイルをステージごとに出題するモード
const generateStages = (sources) => {
  return Array.from({ length: MAX_STAGE }, (_, i) => {
    const source = sources[i % sources.length];
    const randomIndex = Math.floor(Math.random() * source.length);
    return source[randomIndex];
  });
};


//特定のファイルを出題する確認モード
// const generateStages = () => {
//   return blockPuzzle7;
// };


const BlockPuzzlePC = ({ onBack }) => {
  // データソース設定
  const sources = useMemo(() => [blockPuzzle1, blockPuzzle2, blockPuzzle3, blockPuzzle4, blockPuzzle5, blockPuzzle6, blockPuzzle7, blockPuzzle8, blockPuzzle9, blockPuzzle10], []);

  // ゲーム状態管理
  const [stages, setStages] = useState(() => generateStages(sources));
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = stages[currentIndex];
  const [board, setBoard] = useState([]);
  const [pieces, setPieces] = useState([]);
  const [dragOffset, setDragOffset] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [timeUp, setTimeUp] = useState(false);
  const [score, setScore] = useState(0);
  const [cleared, setCleared] = useState(false);
  const timerRef = useRef(null);
  const [justRestarted, setJustRestarted] = useState(false);
  const [dragging, setDragging] = useState(null);

  // ゲームリスタート処理
  const restart = () => {
    setStages(generateStages(sources));
    setScore(0);
    setCurrentIndex(0);
    setTimeLeft(TIME_LIMIT);
    setTimeUp(false);
    setCleared(false);
    setJustRestarted(true);
    setDragging(null);
  };


  // ピースリセット処理
  const resetPieces = () => {
    setPieces((prev) =>
      prev.map((p) => ({
        ...p,
        placed: false,
        x: null,
        y: null,
      }))
    );
    setCleared(false);
    setDragging(null);
  };

  // ステージ切り替え時の初期化処理
  useEffect(() => {
    if (!current) return;
    setBoard(current.board);
    const formattedPieces = current.pieces.map((shape, index) => ({
      id: `piece${index}`,
      shape,
      placed: false,
      x: null,
      y: null,
      rotation: 0,
    }));
    setPieces(formattedPieces);
    setDragOffset(null);
    setTimeLeft(TIME_LIMIT);
    setTimeUp(false);
    setCleared(false);
    setDragging(null);

    // タイマー設定
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

    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  // クリア判定監視
  useEffect(() => {
    if (justRestarted) {
      setJustRestarted(false); // 一度だけスキップ
      return;
    }

    const hasAnyPlaced = pieces.some((p) => p.placed);
    if (!cleared && hasAnyPlaced && isCleared()) {
      clearInterval(timerRef.current);
      setCleared(true);
    }
  }, [pieces, cleared, justRestarted]);


  // ピース回転処理
  const rotateShape = (shape) => {
    const rows = shape.length;
    const cols = shape[0].length;
    return Array.from({ length: cols }, (_, x) =>
      Array.from({ length: rows }, (_, y) => shape[rows - 1 - y][x])
    );
  };

  // ピース回転ハンドラー
  const handleRotate = (id) => {
    setPieces((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              shape: rotateShape(p.shape),
              rotation: (p.rotation + 90) % 360,
            }
          : p
      )
    );
  };

  // ドラッグ開始位置記録
  const handleCellMouseDown = (pieceId, rowIndex, colIndex) => {
    setDragOffset({ row: rowIndex, col: colIndex, pieceId });
  };

  // ドラッグ開始処理
  const handleDragStart = (e, pieceId) => {
    const offset = dragOffset?.pieceId === pieceId ? dragOffset : { row: 0, col: 0 };
    e.dataTransfer.setData("offset", JSON.stringify(offset));
    e.dataTransfer.setData("text/plain", pieceId);

    setDragging({ pieceId });

    // ドラッグプレビュー作成
    const cellSize = 52;
    const dragPreview = document.createElement("div");
    dragPreview.style.position = "absolute";
    dragPreview.style.top = "0";
    dragPreview.style.left = "0";
    dragPreview.style.pointerEvents = "none";
    dragPreview.style.zIndex = "10000";
    dragPreview.style.display = "grid";
    dragPreview.style.gap = "4px";

    const piece = pieces.find((p) => p.id === pieceId);
    if (!piece) return;

    dragPreview.style.gridTemplateColumns = `repeat(${piece.shape[0].length}, ${cellSize}px)`;

    const sampleBlock = document.querySelector(`.${styles.block}`);
    if (!sampleBlock) return;

    piece.shape.forEach((row) => {
      row.forEach((cell) => {
        const block = cell ? sampleBlock.cloneNode(true) : document.createElement("div");
        block.style.position = "static";
        block.style.width = `${cellSize}px`;
        block.style.height = `${cellSize}px`;
        dragPreview.appendChild(block);
      });
    });

    document.body.appendChild(dragPreview);

    const offsetX = offset.col * (cellSize + 4);
    const offsetY = offset.row * (cellSize + 4);
    e.dataTransfer.setDragImage(dragPreview, offsetX + cellSize / 2, offsetY + cellSize / 2);

    setTimeout(() => {
      document.body.removeChild(dragPreview);
    }, 0);
  };

  const handleDragEnd = () => {
  setDragging(null);
  };

  // ピース配置可能性判定
  const canPlace = (piece, dropX, dropY) => {
    const { shape } = piece;

    for (let dy = 0; dy < shape.length; dy++) {
      for (let dx = 0; dx < shape[dy].length; dx++) {
        if (shape[dy][dx] === 1) {
          const x = dropX + dx;
          const y = dropY + dy;

          // 範囲外チェック
          if (y < 0 || y >= board.length || x < 0 || x >= board[0].length) return false;

          // 元の盤面にブロックがある（白マスや壁など）
          if (board[y][x] !== 0) return false;

          // すでに置かれている他のピースと重なるか
          const isOverlapping = pieces.some((p) => {
            if (!p.placed || p.id === piece.id) return false; // 自分自身 or 未配置は無視
            return p.shape.some((row, py) =>
              row.some((val, px) =>
                val === 1 && p.x + px === x && p.y + py === y
              )
            );
          });

          if (isOverlapping) return false; // 他ピースと重なっていたらNG
        }
      }
    }

    return true;
  };


  // ドロップ処理
  const handleDrop = (e, x, y) => {
    const id = e.dataTransfer.getData("text/plain");
    const offset = JSON.parse(e.dataTransfer.getData("offset") || '{"row":0,"col":0}');
    const piece = pieces.find((p) => p.id === id);
    if (!piece) {
      setDragging(null); // 念のため
      return;
    }

    const px = x - offset.col;
    const py = y - offset.row;

    const simulatedPiece = { ...piece, x: px, y: py };

      if (!canPlace(simulatedPiece, px, py)) {
        setDragging(null); // 置けなかった場合も元表示を戻す
        return;
      }

    setPieces((prev) =>
      prev.map((p) => (p.id === id ? { ...p, placed: true, x: px, y: py } : p))
    );
    setDragOffset(null);
    setDragging(null);
  };

  // パズルクリア判定
  const isCleared = () => {
    const blackCells = [];
    board.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (cell === 0) blackCells.push(`${x},${y}`);
      })
    );

    const coveredCells = new Set();
    pieces.forEach((p) => {
      if (!p.placed) return;
      p.shape.forEach((row, dy) =>
        row.forEach((val, dx) => {
          if (val === 1) coveredCells.add(`${p.x + dx},${p.y + dy}`);
        })
      );
    });

    return blackCells.every((cell) => coveredCells.has(cell));
  };

  // 次のステージへ進む処理
  const handleNext = () => {
    if (currentIndex + 1 < stages.length) {
      setScore((prev) => prev + 1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // レンダリング部分
  return (
    <div className={styles.blockPuzzleGame}>
      {/* ヘッダー部分 */}
      <h2 className={mainStyles.subtitle}>◇Brain Workout</h2>
      <h2 className={mainStyles.title}>BLOCK PUZZLE</h2>
      <button className={mainStyles.backButton} onClick={onBack}>←</button>

      {/* タイマー表示 */}
      <div className={styles.timerRow}>
        <div className={styles.timerText}>
          STAGE : {currentIndex + 1}　　　　　　　TIMER : <span>{timeLeft}</span>
        </div>
        {!cleared && !timeUp && (
        <button className={styles.resetButton} onClick={resetPieces}>
          リセット
        </button>
        )}
      </div>


      <div className={styles.puzzleArea}>
        {/* ゲームボード描画 */}
        <div className={styles.board}>
          {board.map((row, y) => (
            <div key={y} className={styles.boardRow}>
              {row.map((cell, x) => {
                const blockHere = pieces.some((p) =>
                  p.placed &&
                  p.shape.some((r, dy) =>
                    r.some((val, dx) => val === 1 && p.x + dx === x && p.y + dy === y)
                  )
                );
                return (
                  <div
                    key={`${x}-${y}`}
                    className={`${styles.cell} ${cell === 1 ? styles.filled : ""} ${
                      blockHere ? styles.blocked : ""
                    }`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, x, y)}
                  />
                );
              })}
            </div>
          ))}
            {!timeUp && cleared && (
              <h1 className={styles.greatEffect}>GREAT</h1>
            )}
        </div>

        {/* ゲームオーバー画面 */}
        {timeUp && (
          <div className={styles.cleared}>
            <p>GAME OVER</p>
            <p>SCORE：{score} 問正解</p>
            <button className={mainStyles.option} onClick={restart}>REPLAY</button>
            <button className={mainStyles.option} onClick={onBack}>ゲーム選択</button>
          </div>
        )}

        {/* クリア画面 */}
        {!timeUp && cleared && (
          <div>
            {currentIndex + 1 < stages.length ? (
              <button className={mainStyles.option} onClick={handleNext}>NEXT ▶</button>
            ) : (
              <>
                <img
                  src="/images/allClear.png"
                  alt="ALL CLEAR"
                  className={styles.allClear}
                />
                <button className={mainStyles.option} onClick={restart}>REPLAY</button>
                <button className={mainStyles.option} onClick={onBack}>ゲーム選択</button>
              </>
            )}
          </div>
        )}
      </div>

      {/* ピース表示エリア */}
      {!timeUp && (
        <div className={styles.piecesArea}>
          {pieces.map(
            (piece) =>
              !piece.placed && (
                <div
                  key={piece.id}
                  className={styles.piece}
                  onClick={() => handleRotate(piece.id)}
                  // ▼ 追加：ドラッグ中なら透明化（下に残らないように）
                  style={dragging?.pieceId === piece.id ? { opacity: 0, } : undefined}
                >
                  {piece.shape.map((row, rowIndex) => (
                    <div key={rowIndex} className={styles.pieceRow}>
                      {row.map((cell, colIndex) =>
                        cell ? (
                          <div
                            key={colIndex}
                            className={styles.block}
                            draggable
                            onMouseDown={() => handleCellMouseDown(piece.id, rowIndex, colIndex)}
                            onDragStart={(e) => handleDragStart(e, piece.id)}
                            // ▼ 追加：ドラッグ終了で透明を解除（キャンセル含む）
                            onDragEnd={handleDragEnd}
                          />
                        ) : (
                          <div key={colIndex} className={styles.empty}></div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default BlockPuzzlePC;
