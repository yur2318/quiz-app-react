// src/utils/loadQuizData.js
import { allQuizData } from "../data/quizIndex";

export const loadQuizData = async (subject, category, quizId) => {
  const key = `${subject}/${category}/${quizId}`;
  // console.log("キー:", `${subject}/${category}/${quizId}`);
  // console.log("全キー:", Object.keys(allQuizData));


  const importer = allQuizData[key];
  if (!importer) return null;

  try {
    const module = await importer();
    return module.default || module;
  } catch (e) {
    console.error("クイズデータの読み込みに失敗しました", e);
    return null;
  }
};

