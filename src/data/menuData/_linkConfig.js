// src/data/linkConfig.js

export const LINK_CONFIG = {


  japanese: [
    { type: "基礎", prefix: "japanese", category:"Normal"},
    { type: "発展", prefix: "japanesePro", category: "Pro"},
  ],
  math: [
    { type: "基礎", prefix: "math", category:"Normal"},
    { type: "発展", prefix: "mathPro", category: "Pro"},
  ],
  science: [
    { type: "漢字", prefix: "scienceKanji" },
    { type: "基礎", prefix: "science", category:"Normal"},
  ],
  social: [
    { type: "漢字", prefix: "socialKanji", category:"Kanji"}, 
    { type: "基礎", prefix: "social", category:"Normal"},
    { type: "発展", prefix: "socialPro", category: "Pro"},
  ],
  english: [
    { type: "単語", prefix: "englishWord", category:"Word"},
    { type: "基礎", prefix: "english", category:"Normal"},
  ],
  // 他の教科も追加可能
};
