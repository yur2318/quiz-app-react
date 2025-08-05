const QUIZ_CONTENT_PRO = {
  title: "文字式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "6 × a",
    answers: ["6a", "a6", "6 + a", "6 - a"],
    correct: "6a",
    hint: "aを6回足すとどうなるかな？",
    explanation: "6 × aは、aを6回足すこと、つまり6aになるんだ。"
  },
  {
    id: "02",
    question: "5b × 5",
    answers: ["25b", "5b5", "10b", "5 + 5b"],
    correct: "25b",
    hint: "5bを5回足すとどうなるかな？",
    explanation: "5bを5回足すと、5b + 5b + 5b + 5b + 5b = 25bになるんだ。つまり5b × 5 = 25bだよ。"
  },
  {
    id: "03",
    question: "x × x",
    answers: ["x²", "2x", "x + x", "xx"],
    correct: "x²",
    hint: "xを2回かけると？",
    explanation: "x × xは、x²（xの2乗）と表すんだよ。"
  },
  {
    id: "04",
    question: "3x(2 + x)",
    answers: ["6x + 3x²", "5x + x", "3x + 2x", "6x + x"],
    correct: "6x + 3x²",
    hint: "分配法則を使ってみよう。",
    explanation: "3x × 2 = 6x、3x × x = 3x²。合わせて 6x + 3x² だよ。"
  },
  {
    id: "05",
    question: "4(x - 2) + 3x",
    answers: ["7x - 8", "4x - 8", "x - 8", "7x + 8"],
    correct: "7x - 8",
    hint: "分配法則を使ってみよう。",
    explanation: "4(x - 2) = 4x - 8、そこに3xを足すと、4x + 3x - 8 = 7x - 8になるよ。"
  },
  {
    id: "06",
    question: "5a + 2(3a + 1)",
    answers: ["11a + 2", "5a + 6a + 2", "5a + 6", "11a + 1"],
    correct: "11a + 2",
    hint: "分配法則を使ってみよう。",
    explanation: "2(3a + 1) = 6a + 2、だから5a + (6a + 2) = 11a + 2になるよ。"
  },
  {
    id: "07",
   question: "2a × 0",
    answers: ["0", "2a", "a", "2"],
    correct: "0",
    hint: "0をかけるとどうなる？",
    explanation: "どんな数でも0をかけると結果は0になるよ。"
  },
  {
    id: "08",
    question: "x² ÷ x",
    answers: ["x", "x²", "1", "2x"],
    correct: "x",
    hint: "指数を引き算してみて。",
    explanation: "x² ÷ x は、x = xになるよ。"
  },
  {
    id: "09",
    question: "(2x + 6) × <span class='fraction'><span class='top'>1</span>2</span>",
    answers: [
      "x + 3",
      "<span class='fraction'><span class='top'>2x + 6</span>2</span>",
      "<span class='fraction'><span class='top'>2x + 6</span>1</span>",
      "x + 6",
    ],
    correct: "x + 3",
    hint: "",
    explanation: "(2x + 6) × <span class='fraction'><span class='top'>1</span>2</span>は、2xを2で割ってx、6を2で割って3になるから、x + 3になるんだ。"
  },
  {
    id: "10",
    question: "<span class='fraction'><span class='top'>3x + 9</span>3</span>",
    answers: [
      "x + 3",
      "<span class='fraction'><span class='top'>3x + 9</span>1</span>",
      "<span class='fraction'><span class='top'>3x + 9</span>3</span>",
      "x + 9",
    ],
    correct: "x + 3",
    hint: "",
    explanation: "<span class='fraction'><span class='top'>3x + 9</span>3</span>は、3xを3で割ってx、9を3で割って3になるから、x + 3になるんだ。"
  },
  ]
};

export default {
  mathPro22: QUIZ_CONTENT_PRO
};
