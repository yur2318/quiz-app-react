// scripts/generateQuizIndex.js
import fs from "fs";
import path from "path";

// クイズデータのルートディレクトリ
const quizRoot = path.resolve("src/data/quizData");

// 再帰的に .js ファイルを取得
const getQuizFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? getQuizFiles(fullPath) : fullPath;
  });
  return files.filter((f) => f.endsWith(".js"));
};

const quizFiles = getQuizFiles(quizRoot);

// 出力する内容を定義
const outputLines = [
  "// このファイルは自動生成されました",
  "export const allQuizData = {"
];

quizFiles.forEach((file) => {
  const relative = path.relative("src/data/quizData", file).replace(/\\/g, "/");
  const parts = relative.split("/");

  if (parts.length < 2) return; // 無効なパスはスキップ

  const filename = parts[parts.length - 1];
  const quizId = filename.replace(".js", "");

  const subject = parts[0];
  const category = parts.length === 3 ? parts[1] : null;

  const key = category
    ? `${subject}/${category}/${quizId}`
    : `${subject}/${quizId}`;

  outputLines.push(`  "${key}": () => import("./quizData/${relative}"),`);
});

outputLines.push("};");

fs.writeFileSync("src/data/quizIndex.js", outputLines.join("\n"));
console.log("✅ quizIndex.js を生成しました！");
