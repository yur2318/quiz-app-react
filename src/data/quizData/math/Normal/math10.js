const QUIZ_CONTENT = {
  title: "累乗",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "8²",
    answers: ["64", "16", "8", "4"],
    correct: "64",
    hint: "8×8",
    explanation: "8²は「8の2乗」といって8を2回掛けることだよ。これを累乗というよ。"
  },
  {
    id: "02",
    question: "2<sup class='sup'>4</sup>",
    answers: ["16", "8", "4", "2"],
    correct: "16",
    hint: "2×2×2×2",
    explanation: "2<sup class='sup'>4</sup>は2を4回掛けることだよ。2×2×2×2=16だよ。"
  },
  {
    id: "03",
    question: "(-3)<sup class='sup'>3</sup>",
    answers: ["-27", "27", "-9", "9"],
    correct: "-27",
    hint: "(-3)×(-3)×(-3)",
    explanation: "(-3)<sup class='sup'>3</sup>は(-3)を3回掛けることだよ。(-3)×(-3)×(-3)=-27だよ。"
  },
  {
    id: "04",
    question: "(-4)<sup class='sup'>3</sup>",
    answers: ["-64", "64", "-16", "16"],
    correct: "-64",
    hint: "(-4)×(-4)×(-4)",
    explanation: "(-4)<sup class='sup'>3</sup>は(-4)を3回掛けることだよ。(-4)×(-4)×(-4)=-64だよ。"
  },
  {
    id: "05",
    question: "-5²",
    answers: ["25", "-25", "10", "-10"],
    correct: "-25",
    hint: "-(5×5)",
    explanation: "-5²は-(5×5)=-25だよ。かっこがあるかないかで符号が変わるから注意しよう！"
  },
  {
    id: "06",
    question: "3²×<span class='fraction'><span class='top'>1</span>3</span>",
    answers: ["1", "3", "9", "27"],
    correct: "3",
    hint: "3×3×<span class='fraction'><span class='top'>1</span>3</span>",
    explanation: "3×3=9だから、9×<span class='fraction'><span class='top'>1</span>3</span>=3になるよ。"
  },
  {
    id: "07",
    question: "(-9)² ÷ 3²",
    answers: ["-9", "-3", "3", "9"],
    correct: "9",
    hint: "先に累乗の計算をしよう！",
    explanation: "(-9)²は81、3²</span>は9だから、81 ÷ 9 = 9になるよ。"
  },
  {
    id: "08",
    question: "<span class='fraction'><span class='top'>1</span>2</span><sup class='sup'>3</sup>",
    answers: [
      "<span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>1</span>4</span>",
      "<span class='fraction'><span class='top'>1</span>8</span>",
      "<span class='fraction'><span class='top'>1</span>16</span>"
    ],
    correct: "<span class='fraction'><span class='top'>1</span>8</span>",
    hint: "<span class='fraction'><span class='top'>1</span>2</span>を3回掛けるよ！",
    explanation: "<span class='fraction'><span class='top'>1</span>2</span><sup class='sup'>3</sup>は<span class='fraction'><span class='top'>1</span>2</span>を3回掛けることだよ。結果は<span class='fraction'><span class='top'>1</span>8</span>になるよ。"
  },
  {
    id: "09",
    question: "-10²",
    answers: ["100", "-100", "20", "-20"],
    correct: "-100",
    hint: "-(10×10)",
    explanation: "-10²は-(10×10)=-100だよ。累乗の計算では、符号に注意しよう！"
  },
  {
    id: "10",
    question: "<span class='fraction'><span class='top'>3</span>10</span><sup class='sup'>3</sup>",
    answers: [
      "<span class='fraction'><span class='top'>8</span>1000</span>",
      "<span class='fraction'><span class='top'>2</span>100</span>",
      "<span class='fraction'><span class='top'>4</span>10000</span>",
      "<span class='fraction'><span class='top'>1</span>1000</span>"
    ],
    correct: "<span class='fraction'><span class='top'>8</span>1000</span>",
    hint: "<span class='fraction'><span class='top'>2</span>10</span>を3回掛けるよ！",
    explanation: "<span class='fraction'><span class='top'>2</span>10</span><sup class='sup'>3</sup>は<span class='fraction'><span class='top'>2</span>10</span>を3回掛けることだよ。結果は<span class='fraction'><span class='top'>8</span>1000</span>になるよ。"
  }
]

}

export default {
  math10: QUIZ_CONTENT,
};
