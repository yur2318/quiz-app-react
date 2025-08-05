const QUIZ_CONTENT = {
  title: "文字式",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "2a + 3a ",
    answers: ["5a", "6a", "2a + 3a", "5 + a"],
    correct: "5a",
    hint: "同じ文字の項をまとめよう。",
    explanation: "2a + 3aは同じ文字の項をまとめて5aになるよ。同じ文字の項は足し算できるんだ。"
  },
  {
    id: "02",
    question: "4x - 6x",
    answers: ["-2x", "10x", "2x", "4 - 6"],
    correct: "-2x",
    hint: "同じ文字の項をまとめよう。",
    explanation: "4x - 6xは同じ文字の項をまとめて-2xになるよ。"
  },
  {
    id: "03",
    question: "3y + 2y",
    answers: ["5y", "6y", "3 + 2y", "5 + y"],
    correct: "5y",
    hint: "同じ文字の項をまとめよう。",
    explanation: "3y + 2yは同じ文字の項をまとめて5yになるよ。"
  },
  {
    id: "04",
    question: "4a - 3a" ,
    answers: ["a", "7a", "2a", "4 - 3"],
    correct: "a",
    hint: "1aが選択肢にないね。",
    explanation: "1aとaは同じ意味だよ。"
  },
  {
    id: "05",
    question: "7 - 2a + 3a",
    answers: ["7 + a", "5a + 7", "5a - 7", "2a + 7"],
    correct: "7 + a",
    hint: "定数項と文字の項を分けて考えよう。",
    explanation: "7 - 2a + 3aは7と文字の項を分けて考えると、7 + aになるよ。"
  },
  {
    id: "06",
    question: "5x + 2 - 3x",
    answers: ["2x + 2", "3x + 2", "5 - 3x", "2x + 5"],
    correct: "2x + 2",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "5x - 3xは2xになるから、2x + 2が正解だよ。"
  },
  {
    id: "07",
    question: "2m + 4 - 3m",
    answers: ["-m + 4", "2m - 3m + 4", "m + 4", "9m"],
    correct: "-m + 4",
    hint: "定数項と文字の項を分けて考えよう。",
    explanation: "2m - 3mは-mになるから、-m + 4が正解だよ。4 - mもOK"
  },
  {
    id: "08",
    question: "8y - 7y + 5",
    answers: ["y + 5", "2y + 5", "5", "5 - y"],
    correct: "y + 5",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "8y - 7yは1y、つまりyになるから、y + 5が正解だよ。"
  },
  {
    id: "09",
    question: "3a + 2 - a",
    answers: ["2a + 2", "3a - a + 2", "a + 2", "5"],
    correct: "2a + 2",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "3a - aは2aになるから、2a + 2が正解だよ。"
  },
  {
    id: "10",
    question: "5x + 3 - 2x",
    answers: ["3x + 3", "2x + 3", "5 - 2x", "3 - 2x"],
    correct: "3x + 3",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "5x - 2xは3xになるから、3x + 3が正解だよ。"
  },
]

}

export default {
  math20: QUIZ_CONTENT,
};
