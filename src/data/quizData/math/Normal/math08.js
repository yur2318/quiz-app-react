const QUIZ_CONTENT = {
  title: "正の数・負の数",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "(+3) × (+2)",
      answers: ["+6", "-6", "+5", "-5"],
      correct: "+6",
      hint: "3×2と同じだよ！",
      explanation: "正の数の掛け算だよ。いつも通り3×2=6と計算してOK！答えに指定がなければ6でも+6でも正解だよ。",
      image: ""
    },
    {
      id: "02",
      question: "(+4) × (-2)",
      answers: ["-8", "+8", "-6", "+6"],
      correct: "-8",
      hint: "正の数と負の数の掛け算の答えは負の数になるよ！",
      explanation: "4×(-2)は-8になるよ。<strong>正の数と負の数の掛け算は、答えが負の数になる</strong>ことを覚えておこう！",
      image: ""
    },
    {
      id: "03",
      question: "(-5) × (+3)",
      answers: ["-15", "+15", "-8", "+8"],
      correct: "-15",
      hint: "負の数と正の数の掛け算の答えは負の数になるよ！",
      explanation: "-5×3は-15になるよ。<strong>負の数と正の数の掛け算は、答えが負の数になる</strong>ことを覚えておこう！",
      image: ""
    },
    {
      id: "04",
      question: "(-6) × (-4)",
      answers: ["+24", "-24", "+10", "-10"],
      correct: "+24",
      hint: "負の数同士の掛け算の答えは正の数になるよ！",
      explanation: "-6×(-4)は+24になるよ。<strong>負の数同士の掛け算は、答えが正の数になる</strong>ことを覚えておこう！",
      image: ""
    },
    {
      id: "05",
      question: "(-8) × (-4)",
      answers: ["+32", "-32", "+12", "-12"],
      correct: "+32",
      hint: "負の数同士の掛け算の答えは正の数になるよ！",
      explanation: "-8×(-4)は+32になるよ。<strong>負の数同士の掛け算は、答えが正の数になる</strong>ことを覚えておこう！",
      image: ""
    },
    {
      id: "06",
      question: "(+7) × (-3)",
      answers: ["-21", "+21", "-10", "+10"], 
      correct: "-21",
      hint: "正の数と負の数の掛け算の答えは負の数になるよ！",
      explanation: "7×(-3)は-21になるよ。<strong>正の数と負の数の掛け算は、答えが負の数になる</strong>ことを覚えておこう！", 
    },
    { 
      id: "07", 
      question: "<span class='fraction'><span class='top'>2</span>3</span> × (-<span class='fraction'><span class='top'>3</span>4</span>)",
    answers: [
      "- <span class='fraction'><span class='top'>6</span>14</span>",
      "- <span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>1</span>3</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>"
    ],
      correct: "- <span class='fraction'><span class='top'>1</span>2</span>",
      hint: "",
      explanation: "正の数と負の数の掛け算だから答えは負の数になるよ。分子同士、分母同士を掛けるよ。- <span class='fraction'><span class='top'>6</span>12</span>。約分して- <span class='fraction'><span class='top'>1</span>2</span>になるよ。",
      image: ""
    },
    { 
      id: "08", 
      question: "(-<span class='fraction'><span class='top'>1</span>2</span>) × (-<span class='fraction'><span class='top'>3</span>4</span>)",
      answers: [
        "<span class='fraction'><span class='top'>3</span>8</span>",
        "- <span class='fraction'><span class='top'>1</span>8</span>",
        "<span class='fraction'><span class='top'>1</span>8</span>",
        "- <span class='fraction'><span class='top'>3</span>8</span>"
      ],
      correct: "<span class='fraction'><span class='top'>3</span>8</span>",
      hint: "負の数同士の掛け算の答えは正の数になるよ！",
      explanation: "負の数同士の掛け算だから答えは正の数になるよ。分子同士、分母同士を掛けるよ。<span class='fraction'><span class='top'>3</span>8</span>になるよ。",
      image: ""
    },
    {
      id: "09",
      question: "0 × (-5)",
      answers: ["0", "-5", "+5", "1"],
      correct: "0",
      hint: "0に何を掛けても…",
      explanation: "0に何を掛けても0になるよ。",
      image: ""
    },
    {
      id: "10",
      question: "0.6 × (-3)",
      answers: ["-1.8", "+1.8", "-18", "+0.18"],
      correct: "-1.8",
      hint: "小数の掛け算も同じルールだよ！",
      explanation: "0.6×(-3)は-1.8になるよ。<strong>正の数と負の数の掛け算は、答えが負の数になる</strong>ことを覚えておこう！",
      image: ""
    }
  ]
}

export default {
  math08: QUIZ_CONTENT,
};
