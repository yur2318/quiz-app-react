const QUIZ_CONTENT_PRO = {
  title: "多項式の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "(2a + 3b) × 4",
    answers: ["8a + 12b", "8a + 6b", "6a + 12b", "6a + 8b"],
    correct: "8a + 12b",
    hint: "(a + b) × cは、a × c + b × cだよ。",
    explanation: "(2a + 3b) × 4は、2a × 4 + 3b × 4になるよ。つまり8a + 12bになるんだ。"
  },
  {
    id: "02",
    question: "3(x + 4y) + 2(2x - y)",
    answers: ["7x + 10y", "7x + 8y", "7x + 6y", "7x + 4y"],
    correct: "7x + 10y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "3(x + 4y) + 2(2x - y)は、3x + 12y + 4x - 2yになるよ。つまり7x + 10yになるんだ。"
  },
  {
    id: "03",
    question: "3(x + 2y) - 2(x - y)",
    answers: ["x + 8y", "x + 4y", "x + 6y", "x + 2y"],
    correct: "x + 8y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "3(x + 2y) - 2(x - y)は、3x + 6y - 2x + 2yになるよ。つまりx + 8yになるんだ。"
  },
  {
    id: "04",
    question: "4(2x + 3y) + 2(3x - y)",
    answers: ["14x + 10y", "14x + 8y", "10x + 14y", "10x + 8y"],
    correct: "14x + 10y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "4(2x + 3y) + 2(3x - y)は、8x + 12y + 6x - 2yになるよ。つまり14x + 10yになるんだ。"
  },
  {
    id: "05",
    question: "5x - 3(2x + y)",
    answers: ["-x - 3y", "-x + 3y", "x - 3y", "x + 3y"],
    correct: "-x - 3y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "5x - 3(2x + y)は、5x - 6x - 3yになるよ。つまり-x - 3yになるんだ。"
  },
  {
    id: "06",
    question: "2(3x + 4y) - 3(2x - y)",
    answers: ["-x + 11y", "x + 11y", "-x - 11y", "x - 11y"],
    correct: "-x + 11y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "2(3x + 4y) - 3(2x - y)は、6x + 8y - 6x + 3yになるよ。つまり-x + 11yになるんだ。"
  },
  {
    id: "07",
    question: "3(2x + 5) - 4(3x - 2)",
    answers: ["-6x + 21", "-6x - 21", "6x + 21", "6x - 21"],
    correct: "-6x + 21",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "3(2x + 5) - 4(3x - 2)は、6x + 15 - 12x + 8になるよ。つまり-6x + 21になるんだ。"
  },
  {
    id: "08",
    question: "2(3x + 4) + 3(2x - 5)",
    answers: ["12x - 7", "12x + 7", "12x - 17", "12x + 17"],
    correct: "12x - 7",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "2(3x + 4) + 3(2x - 5)は、6x + 8 + 6x - 15になるよ。つまり12x - 7になるんだ。"
  },
  {
    id: "09",
    question: "4(2x + 3) - 5(3x - 1)",
    answers: ["18x - 7", "18x + 7", "18x - 13", "18x + 13"],
    correct: "18x - 7",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "4(2x + 3) - 5(3x - 1)は、8x + 12 - 15x + 5になるよ。つまり18x - 7になるんだ。"
  },
  {
    id: "10",
    question: "3(2x + 1) + 4(3x - 2)",
    answers: ["18x - 5", "18x + 5", "18x - 11", "18x + 11"],
    correct: "18x - 5",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "3(2x + 1) + 4(3x - 2)は、6x + 3 + 12x - 8になるよ。つまり18x - 5になるんだ。"
  }

]
}



export default {
  mathPro30: QUIZ_CONTENT_PRO
};
