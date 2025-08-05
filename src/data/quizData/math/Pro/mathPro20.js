const QUIZ_CONTENT_PRO = {
  title: "文字式",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "3x + 2 - x + 4 - 2x",
      answers: ["2 + 4", "6", "x + 6", "0x + 6"],
      correct: "6",
      hint: "xの項をまとめて、数字の項もまとめよう。",
      explanation: "3x - x - 2x = 0、2 + 4 = 6。だから答えは6になるよ。"
    },
    {
      id: "02",
      question: "-x + 3 - 2x + 1",
      answers: ["-x + 4", "-3x + 4", "-3x + 2", "-x - 2x + 4"],
      correct: "-3x + 4",
      hint: "文字と数字を分けて整理。",
      explanation: "-x - 2x = -3x、3 + 1 = 4。だから答えは-3x + 4になるよ。"
    },
    {
      id: "03",
      question: "2a + 3b - a + 5 - 2b",
      answers: ["a + b + 5", "3a + b + 5", "a + 2b + 5", "2a + b + 5"],
      correct: "a + b + 5",
      hint: "文字ごとにまとめよう。",
      explanation: "2a - a = a、3b - 2b = b、残りの定数は5。だから答えは a + b + 5になるよ。"
    },
    {
      id: "04",
      question: "x - x + 5",
      answers: ["0x + 5", "5", "x + 5", "0"],
      correct: "5",
      hint: "xの項が消えるよ。",
      explanation: "x - x = 0、だから残るのは5だけ。つまり答えは5になるよ。"
    },
    {
      id: "05",
      question: "-3x + 2 - x + 4",
      answers: ["-4x + 6", "-2x + 2", "-3x - x + 6", "-4x + 2"],
      correct: "-4x + 6",
      hint: "文字の項と数字の項を分けよう。",
      explanation: "-3x - x = -4x、2 + 4 = 6。だから答えは -4x + 6 になるよ。"
    },
    {
      id: "06",
      question: "5 + a - 2 + 3a",
      answers: ["4a + 3", "a + 3a + 3", "a + 3", "4a + 5 - 2"],
      correct: "4a + 3",
      hint: "文字と数字を整理しよう。",
      explanation: "a + 3a = 4a、5 - 2 = 3。だから答えは 4a + 3 になるよ。"
    },
    {
      id: "07",
      question: "2m + 4 - 3m + 1",
      answers: ["-m + 5", "m + 5", "-m + 4", "-m + 3"],
      correct: "-m + 5",
      hint: "文字項は2m - 3m、数字は4 + 1。",
      explanation: "2m - 3m = -m、4 + 1 = 5。だから答えは -m + 5 になるよ。"
    },
    {
      id: "08",
      question: "4y - y + 2 + y - 5",
      answers: ["4y - 3", "2y - 3", "2y - 3 + 2", "2y - 3 + 5"],
      correct: "4y - 3",
      hint: "yの項をまとめて、数字の項も整理しよう。",
      explanation: "4y - y + y = 4y、2 - 5 = -3。だから答えは 4y - 3 になるよ。"
    },
    {
      id: "09",
      question: "x + y - x + 3 - y",
      answers: ["0x + 0y + 3", "3", "x - x + y - y + 3", "0 + 3"],
      correct: "3",
      hint: "すべての文字項が消えるよ。",
      explanation: "x - x = 0、y - y = 0、つまり答えは3になるよ。"
    },
    {
      id: "10",
      question: "a + a + a + 2 - a",
      answers: ["2a + 2", "3a + 2", "a + 2", "4a + 2 - a"],
      correct: "2a + 2",
      hint: "aの個数を数えてみて。",
      explanation: "a + a + a - a = 2a、だから答えは 2a + 2 になるよ。"
    }
  ]
};

export default {
  mathPro20: QUIZ_CONTENT_PRO
};