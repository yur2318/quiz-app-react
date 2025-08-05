const QUIZ_CONTENT_PRO = {
  title: "一次方程式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "5x = 10 のとき、xの値は？",
    answers: ["2", "5", "10", "0"],
    correct: "2",
    hint: "両辺を5で割ってみよう。",
    explanation: "両辺を5で割るとx = 2になるよ。"
  },
  {
    id: "02",
    question: "<span class='fraction'><span class='top'>x</span>3</span>=2 のとき、xの値は？",
    answers: ["6", "3", "2", "4"],
    correct: "6",
    hint: "両辺を3でかけてみよう。",
    explanation: "両辺を3でかけるとx = 6になるよ。"
  },
  {
    id: "03",
    question: "3 = -x のとき、xの値は？",
    answers: ["-3", "3", "0", "-1"],
    correct: "-3",
    hint: "両辺に-1をかけてみよう。",
    explanation: "両辺に-1をかけるとx = -3になるよ。方程式ではxを左辺にするから-3 = xとは書かないよ。"
  },
  {
    id: "04",
    question: "次の方程式を解きなさい。<br>3x - 5 = 10",
    answers: ["x = 5", "x = 15", "x = 10", "x = 5"],
    correct: "x = 5",
    hint: "両辺に5を足してみよう。",
    explanation: "両辺に5を足すと3x = 15になるよ。次に両辺を3で割るとx = 5になるんだ。"
  },
  {
    id: "05",
    question: "次の方程式を解きなさい。<br>5x = 14",
    answers: [
      "x = <span class='fraction'><span class='top'>14</span>3</span>",
      "x = <span class='fraction'><span class='top'>14</span>5</span>",
      "x = <span class='fraction'><span class='top'>14</span>2</span>",
      "x = <span class='fraction'><span class='top'>14</span>4</span>"

    ],
    correct: "x = <span class='fraction'><span class='top'>14</span>5</span>",
    hint: "両辺を5で割ってみよう。",
    explanation: "両辺を5で割るとx = <span class='fraction'><span class='top'>14</span>5</span>になるよ。"
  },
  {
    id: "06",
    question: "次の方程式を解きなさい。<br>-6 = 3 - 2x",
    answers: [
      "x = -<span class='fraction'><span class='top'>9</span>2</span>",
      "x = <span class='fraction'><span class='top'>9</span>3</span>",
      "x = <span class='fraction'><span class='top'>9</span>2</span>",
      "x = -<span class='fraction'><span class='top'>9</span>3</span>"
    ],
    correct: "x = <span class='fraction'><span class='top'>9</span>2</span>",
    hint: "両辺から3を引いてみよう。",
    explanation: "両辺から3を引くと-9 = -2xになるよ。次に両辺を-2で割るとx = <span class='fraction'><span class='top'>9</span>2</span>になるんだ。"
  },
  {
    id: "07",
    question: "次の方程式を解きなさい。<br>2x + 3 = 11",
    answers: ["x = 4", "x = 5", "x = 6", "x = 7"],
    correct: "x = 4",
    hint: "両辺から3を引いてみよう。",
    explanation: "両辺から3を引くと2x = 8になるよ。次に両辺を2で割るとx = 4になるんだ。"
  },
  {
    id: "08",
    question: "次の方程式を解きなさい。<br>4 - x = 1",
    answers: ["x = 3", "x = -3", "x = 5", "x = -5"],
    correct: "x = 3",
    hint: "両辺に-1をかけてみよう。",
    explanation: "両辺に-1をかけると-x = -3になるよ。次に両辺に-1をかけるとx = 3になるんだ。"
  },
  {
    id: "09",
    question: "次の方程式を解きなさい。<br>2x - 4 = 6",
    answers: ["x = 5", "x = 6", "x = 7", "x = 8"],
    correct: "x = 5",
    hint: "両辺に4を足してみよう。",
    explanation: "両辺に4を足すと2x = 10になるよ。次に両辺を2で割るとx = 5になるんだ。"
  },
  {
    id: "10",
    question: "次の方程式を解きなさい。<br>3(x + 2) = 15",
    answers: ["x = 3", "x = 1", "x = 5", "x = -1"],
    correct: "x = 3",
    hint: "まず()を外してみよう。3x + 6 = 15になるよ。",
    explanation: "()を外すと3x + 6 = 15になるよ。次に両辺から6を引くと3x = 9になるんだ。最後に両辺を3で割るとx = 3になるよ。"
  }
]
}

export default {
  mathPro24: QUIZ_CONTENT_PRO
};
