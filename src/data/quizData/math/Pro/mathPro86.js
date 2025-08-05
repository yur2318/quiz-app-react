
const QUIZ_CONTENT_PRO = {
  title: "表面積・体積",
  subject: "blue",
  data: [
  {
    id: "09",
    question: "画像の扇型の孤の求め方は？",
    answers: [
      "4 × 2 × π × <span class='fraction'><span class='top'>60</span>360</span>",
      "4 × π × <span class='fraction'><span class='top'>60</span>360</span>",
      "4 × 2 × π ÷ 60",
      "4 × π × 60"
    ],
    correct: "4 × 2 × π × <span class='fraction'><span class='top'>60</span>360</span>",
    hint: "孤の長さは、円周の長さに中心角の比をかけるよ。",
    explanation: "孤の長さは、円周の長さに中心角の比をかけて求めるよ。<strong>半径が4cmだから、直径は×2する必要があるね。</strong>中心角が60度だから、4 × 2 × π × <span class='fraction'><span class='top'>60</span>360</span>が計算式だね。この長さは<span class='fraction'><span class='top'>4</span>3</span>πcmになるよ。",
    image: "/questionImg/math24.png"
  },
  {
    id: "10",
    question: "画像の扇型の面積の求め方は？",
    answers: [
      "4 × 4 × π × <span class='fraction'><span class='top'>60</span>360</span>",
      "4 × 2 × π × <span class='fraction'><span class='top'>60</span>360</span>",
      "4 × 4 × π ÷ 60",
      "4 × π × 60"
    ],
    correct: "4 × 4 × π × <span class='fraction'><span class='top'>60</span>360</span>",
    hint: "扇形の面積は、円の面積に中心角の比をかけるよ。",
    explanation: "扇形の面積は、円の面積に中心角の比をかけて求めるよ。半径が4cmだから、円の面積は4 × 4 × π = 16πcm²だね。中心角が60度だから、16πcm² × <span class='fraction'><span class='top'>60</span>360</span>が計算式だね。この面積は<span class='fraction'><span class='top'>8</span>3</span>πcm²になるよ。",
    image: "/questionImg/math24.png"
  },
]
}

export default {
  mathPro86: QUIZ_CONTENT_PRO
};
