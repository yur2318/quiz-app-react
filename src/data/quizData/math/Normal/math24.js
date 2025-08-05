const QUIZ_CONTENT = {
  title: "一次方程式",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "A=Bのとき、成り立たないのは？",
    answers: ["A+3=B+3", "A-3=B-3", "3A=3B", "A+3=B"],
    correct: "A+3=B",
    hint: "両辺に同じ数を足したり引いたりしても等式は成り立つよ。",
    explanation: "両辺に同じ数を足したり引いたりしても等式は成り立つよ。"
  },
    {
    id: "02",
    question: "A=Bのとき、成り立たないのは？",
    answers: ["A+C=B+C", "A-C=B-C", "A÷C=B÷C", "A+B=B"],
    correct: "A+B=B",
    hint: "両辺に同じ数を足したり引いたりしても等式は成り立つよ。",
    explanation: "両辺に同じ数を足したり引いたりしても等式は成り立つよ。"
  },
  {
    id: "03",
    question: "x + 1 = 5 のとき、xの値は？",
    answers: ["4", "5", "6", "3"],
    correct: "4",
    hint: "1を両辺から引いてみよう。",
    explanation: "両辺から1を引くとx = 4になるよ。"
  },
  {
    id: "04",
    question: "x - 3 = 5 のとき、xの値は？",
    answers: ["8", "5", "2", "3"],
    correct: "8",
    hint: "3を両辺に足してみよう。",
    explanation: "両辺に3を足すとx = 8になるよ。"
  },
  {
    id: "05",
    question: "2x = 10 のとき、xの値は？",
    answers: ["5", "10", "2", "20"],
    correct: "5",
    hint: "両辺を2で割ってみよう。",
    explanation: "両辺を2で割るとx = 5になるよ。"
  },
  {
    id: "06",
    question: "<span class='fraction'><span class='top'>x</span>5</span>=2 のとき、xの値は？",
    answers: ["10", "5", "2", "4"],
    correct: "10",
    hint: "両辺を5でかけてみよう。",
    explanation: "両辺を5でかけるとx = 10になるよ。"
  },
  {
    id: "07",
    question: "-x = 2 のとき、xの値は？",
    answers: ["-2", "2", "0", "-1"],
    correct: "-2",
    hint: "両辺に-1をかけてみよう。",
    explanation: "両辺に-1をかけるとx = -2になるよ。"
  },
  {
    id: "08",
    question: "次の方程式を解きなさい。<br>3x - 2 = 10",
    answers: ["x = 4", "x = 2", "x = 6", "x = 8"],
    correct: "x = 4",
    hint: "2を両辺に足した後、両辺を3で割ろう。",
    explanation: "両辺に2を足すと3x = 12になるよ。次に両辺を3で割るとx = 4になるんだ。"
  },
  {
    id: "09",
    question: "次の方程式を解きなさい。<br>3x = 14",
    answers: [
      "x = <span class='fraction'><span class='top'>14</span>3</span>",
      "x = 4",
      "x = 3.5",
      "x = 7"
    ],
    correct: "x = <span class='fraction'><span class='top'>14</span>3</span>",
    hint: "両辺に<span class='fraction'><span class='top'>1</span>3</span>かけてみよう。",
    explanation: "両辺に<span class='fraction'><span class='top'>1</span>3</span>をかけるとx = <span class='fraction'><span class='top'>14</span>3</span>になるよ。"
  },
  {
    id: "10",
    level: "hard",
    question: "次の方程式を解きなさい。<br>-3 = 3 - 2x",
    answers: ["x = 3", "x = -3", "x = 6", "x = 8"],
    correct: "x = 3",
    hint: "両辺から3引いた後、-2で割ってみよう。",
    explanation: "両辺から3を引くと-6 = -2xになるよ。次に両辺を-2で割るとx = 3になるんだ。"
  },
]
}

export default {
  math24: QUIZ_CONTENT,
};
