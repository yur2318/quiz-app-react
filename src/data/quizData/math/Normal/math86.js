const QUIZ_CONTENT = {
  title: "おうぎ型",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "円周の長さの公式は？",
    answers: ["直径 × π", "半径 × π", "直径 × 直径 × π", "半径 × 半径 × π"],
    correct: "直径 × π",
    hint: "",
    explanation: "円周の長さは、直径 × πで求めるよ。",
    image: ""
  },
  {
    id: "02",
    question: "円の面積の公式は？",
    answers: ["半径 × 半径 × π", "直径 × 直径 × π", "直径 × π", "半径 × π"],
    correct: "半径 × 半径 × π",
    hint: "",
    explanation: "円の面積は、半径 × 半径 × πで求めるよ。",
    image: ""
  },
    {
    id: "03",
    question: "画像の円周の長さは？",
    answers: ["6πcm", "12πcm", "3πcm", "9πcm"],
    correct: "6πcm",
    hint: "直径は6cmだよ。円周の長さを求める公式は直径 × πだよ。",
    explanation: "円周の長さは、直径 × πで求めるよ。直径が6cmだから、6cm × π = 6πcmだよ。",
    image: "/questionImg/math22.png"
  },
  {
    id: "04",
    question: "おうぎ形のアーチ部分を何という？",
    answers: ["弧", "円周", "おうぎ型", "半径"],
    correct: "弧",
    hint: "",
    explanation: "おうぎ形のアーチ部分は「<ruby>弧<rt>こ</rt></ruby>」と呼ばれるよ。",
    image: ""
  },
  {
    id: "05",
    question: "画像の孤の長さは？",
    answers: ["3πcm", "6πcm", "9πcm", "12πcm"],
    correct: "3πcm",
    hint: "円周の長さは6πcmだよ。孤の長さは円周の長さの半分だよ。",
    explanation: "孤の長さは、円周の長さの半分だよ。円周の長さが6πcmだから、孤の長さは6πcm ÷ 2 = 3πcmになるね。",
    image: "/questionImg/math23.png"
  },
  {
    id: "06",
    question: "画像の孤の長さどのような式で求める？",
    answers: [
      "6 × π × 180",
      "6 × π × <span class='fraction'><span class='top'>180</span>360</span>",
    ],
    correct: "6 × π × <span class='fraction'><span class='top'>180</span>360</span>",
    hint: "円周の長さに、角度の比をかけるよ。",
    explanation: "孤の長さは、円周の長さに角度の比をかけて求めるよ。円は一周360、孤の中心角が180度だから、6πcm × <span class='fraction'><span class='top'>180</span>360</span> = 3πcmだよ。<span class='fraction'><span class='top'>180</span>360</span>は約分すると<span class='fraction'><span class='top'>1</span>2</span>になるね。だから円周÷2でも同じ結果になるんだ。",
    image: "/questionImg/math23.png"
  },
  {
    id: "07",
    question: "孤の長さの求め方は？",
    answers: [
      "円周 × <span class='fraction'><span class='top'>中心角</span>360</span>",
      "円周 × 中心角",
      "円周 ÷ 中心角",
      "円周 × <span class='fraction'><span class='top'>中心角</span>180</span>"
    ],
    correct: "円周 × <span class='fraction'><span class='top'>中心角</span>360</span>",
    hint: "円周の長さに、中心角の比をかけるよ。",
    explanation: "孤の長さは、円周の長さに中心角の比をかけて求めるよ。公式は、孤の長さ = 円周 × <span class='fraction'><span class='top'>中心角</span>360</span>だよ。",
    image: ""
  },
  {
    id: "08",
    question: "画像の円の面積は？",
    answers: ["6πcm²", "36πcm²", "9πcm²", "18πcm²"],
    correct: "9πcm²",
    hint: "円の面積を求める公式は、半径×半径×πだよ。",
    explanation: "円の面積は、半径 × 半径 × πで求めるよ。<strong>直径が6cmだから半径が3cm</strong>になるよね。だから3cm × 3cm × π = 9πcm²だよ。",
    image: "/questionImg/math22.png"

  },
  {
    id: "09",
    question: "画像の扇形の面積は？",
    answers: ["6πcm²", "9πcm²", "<span class='fraction'><span class='top'>9</span>2</span>πcm²", "3πcm²"],
    correct: "<span class='fraction'><span class='top'>9</span>2</span>πcm²",
    hint: "円の面積は9πcm²だよ。この扇形の面積は円の面積の半分だよ。",
    explanation: "扇形の面積は、円の面積に中心角の比をかけて求めるよ。円の面積が9πcm²で、その半分だから9π ÷ 2 = <span class='fraction'><span class='top'>9</span>2</span>πcm²だよ。",
    image: "/questionImg/math23.png",
  },
  {
    id: "10",
    question: "扇形の面積の求め方は？",
    answers: [
      "円の面積 × <span class='fraction'><span class='top'>中心角</span>360</span>",
      "円の面積 × 中心角",
      "円の面積 ÷ 中心角",
      "円の面積 × <span class='fraction'><span class='top'>中心角</span>180</span>"
    ],
    correct: "円の面積 × <span class='fraction'><span class='top'>中心角</span>360</span>",
    hint: "扇形の面積は、円の面積に中心角の比をかけるよ。",
    explanation: "扇形の面積は、円の面積に中心角の比をかけて求めるよ。公式は、扇形の面積 = 円の面積 × <span class='fraction'><span class='top'>中心角</span>360</span>だよ。",
    image: ""
  },
  

  
]
}

export default {
  math86: QUIZ_CONTENT,
};
