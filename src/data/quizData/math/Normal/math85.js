const QUIZ_CONTENT = {
  title: "表面積・体積",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "体積の単位として正しいのは？",
    answers: ["cm", "cm²", "cm³", "mm"],
    correct: "cm³",
    hint: "体積を求めるときは長さを3回かけるよ。",
    explanation: "体積は、立方センチメートル（cm³）などが使われるよ。体積を求めるときは、3cm×3cm×3cmのように長さを3回かけるからcm³になるんだ。面積の単位はcm²だよ。",
    image: ""
  },
    {
    id: "02",
    question: "画像の立体の<strong>一つの面</strong>の面積は？",
    answers: ["3cm²", "6cm²", "9cm²", "27cm²"],
    correct: "9cm²",
    hint: "長方形などの面積を求める公式は縦×横だよ。",
    explanation: "一辺の長さが3cmの正方形の面積は、3cm × 3cm = 9cm²だよ。",
    image: "/questionImg/math17.png"
  },
  {
    id: "03",
    question: "画像の立体の表面積は？",
    answers: ["27cm²", "36cm²", "54cm²", "72cm²"],
    correct: "54cm²",
    hint: "一つの面の面積は9cm²だったね。立体の表面積は、すべての面の面積を足し合わせるよ。",
    explanation: "立体の表面積は、すべての面の面積を足し合わせるよ。1つの面の面積が9cm²だから、6 × 9cm² = 54cm²だよ。",
    image: "/questionImg/math17.png"
  },
  {
    id: "04",
    question: "「三角柱」「円柱」などの柱の体積の求め方は？",
    answers: [
      "底面積 × 高さ",
      "底面積 × 高さ × <span class='fraction'><span class='top'>1</span>3</span>",
      "底面積 × 高さ × <span class='fraction'><span class='top'>1</span>2</span>",
      "底面積 × 高さ × π"],
    correct: "底面積 × 高さ",
    hint: "",
    explanation: "柱の体積は、底面積 × 高さで求めるよ。",
    image: ""
  },
  {
    id: "05",
    question: "画像の立体の体積は？",
    answers: ["9cm³", "54cm³", "18cm³", "27cm³"],
    correct: "27cm³",
    hint: "体積は底面積 × 高さで求めるよ。",
    explanation: "体積は、底面積 × 高さで求めるよ。底面積が9cm²で、高さも3cmだから、9cm² × 3cm = 27cm³だよ。",
    image: "/questionImg/math17.png"
  },
  {
    id: "06",
    question: "画像の立体の<strong>底面積</strong>は？",
    answers: ["2πcm²", "4πcm²", "6πcm²", "14cm²"],
    correct: "4πcm²",
    hint: "円の面積を求める公式は、半径×半径×πだよ。",
    explanation: "底面は円で、半径が2cmだから、底面積は2cm × 2cm × π = 4πcm²だよ。",
    image: "/questionImg/math18.png"
  },
  {
    id: "07",
    question: "画像の立体の体積は？",
    answers: ["4πcm³", "14πcm³", "28πcm³", "<span class='fraction'><span class='top'>28</span>3</span>πcm³"],
    correct: "28πcm³",
    hint: "体積は底面積 × 高さで求めるよ。底面積は4πcm²だよ。",
    explanation: "体積は、底面積 × 高さで求めるよ。底面積が4πcm²で、高さが7cmだから、4πcm² × 7cm = 28πcm³だよ。",
    image: "/questionImg/math18.png"
  },
  {
    id: "08",
    question: "「円すい」「三角すい」などのすいの体積の求め方は？",
    answers: [
      "底面積 × 高さ",
      "底面積 × 高さ × <span class='fraction'><span class='top'>1</span>3</span>",
      "底面積 × 高さ × <span class='fraction'><span class='top'>1</span>2</span>", 
      "底面積 × 高さ × π"],
    correct: "底面積 × 高さ × <span class='fraction'><span class='top'>1</span>3</span>",
    hint: "",
    explanation: "すいの体積は、底面積 × 高さを3で割るよ。公式は、底面積 × 高さ × <span class='fraction'><span class='top'>1</span>3</span>だよ。",
    image: ""
  },
  {
    id: "09",
    question: "画像の立体の底面積は？",
    answers: ["30cm²", "15πcm²", "15cm²", "36cm²"],
    correct: "30cm²",
    hint: "底面は四角形だよ。面積を求める公式は縦×横だよ。",
    explanation: "底面は四角形で、縦が5cm、横が6cmだから、底面積は5cm × 6cm = 30cm²だよ。",
    image: "/questionImg/math20.png"
  },
  {
    id: "10",
    level: "hard",
    question: "画像の立体の体積は？",
    answers: ["210cm³", "70cm³", "105cm³", "105πcm³"],
    correct: "70cm³",
    hint: "体積は底面積 × 高さ × <span class='fraction'><span class='top'>1</span>3</span>で求めるよ。底面積は30cm²だよ。",
    explanation: "体積は、底面積 × 高さを3で割るよ。底面積が30cm²で、高さが7cmだから、30cm² × 7cm × <span class='fraction'><span class='top'>1</span>3</span> = 70cm³だよ。",
    image: "/questionImg/math20.png"
  },
  {
    id: "11",
    question: "半径をrとした時に、球の表面積は？",
    answers: [
      "4πr²",
      "<span class='fraction'><span class='top'>4</span>3</span>πr³",
      "<span class='fraction'><span class='top'>4</span>3</span>πr²",
      "4πr³"
    ],
    correct: "4πr²",
    hint: "",
    explanation: "球の表面積は、4πr²で求めるよ。覚えよう！半径×半径×4×πだね。",
    image: ""
  },
  {
    id: "12",
    question: "半径をrとした時に、球の体積は？",
    answers: [
      "4πr²",
      "<span class='fraction'><span class='top'>4</span>3</span>πr³",
      "<span class='fraction'><span class='top'>4</span>3</span>πr²",
      "4πr³"
    ],
    correct: "<span class='fraction'><span class='top'>4</span>3</span>πr³",
    hint: "",
    explanation: "球の体積は、<span class='fraction'><span class='top'>4</span>3</span>πr³で求めるよ。覚えよう。半径×半径×半径×<span class='fraction'><span class='top'>4</span>3</span>×πだね。",
    image: ""
  },
  {
    id: "13",
    level: "hard",
    question: "画像の立体の表面積は？",
    answers: ["16πcm²", "8πcm²", "24πcm²", "12πcm²"],
    correct: "16πcm²",
    hint: "球の表面積は、4πr²で求めるよ。",
    explanation: "球の表面積は、4πr²で求めるよ。半径が2cmだから、4 × 2cm × 2cm × π = 16πcm²だよ。",
    image: "/questionImg/math21.png"
  },
  {
    id: "14",
    level: "hard",
    question: "画像の立体の体積は？",
    answers: ["8πcm³", "16πcm³", "32πcm³", "<span class='fraction'><span class='top'>32</span>3</span>πcm³"],
    correct: "<span class='fraction'><span class='top'>32</span>3</span>πcm³",
    hint: "球の体積は、<span class='fraction'><span class='top'>4</span>3</span>πr³で求めるよ。",
    explanation: "球の体積は、<span class='fraction'><span class='top'>4</span>3</span>πr³で求めるよ。半径が2cmだから、<span class='fraction'><span class='top'>4</span>3</span> × 2cm × 2cm × 2cm × π = <span class='fraction'><span class='top'>32</span>3</span>πcm³だよ。",
    image: "/questionImg/math21.png"
  },
  
]
}


export default {
  math85: QUIZ_CONTENT,
};
