const QUIZ_CONTENT_PRO = {
  title: "文字式",
  subject: "blue",
  data: [
   {
      id: "01",
      question: "3(a + 2) + 2a",
      answers: ["5a + 6", "3a + 6", "3a + 2a + 6", "a + 6"],
      correct: "5a + 6",
      hint: "分配法則を使ってみよう。",
      explanation: "3(a + 2) = 3a + 6、そこに2aを足すと、3a + 2a + 6 = 5a + 6になるよ。"
    },
    {
      id: "02",
      question: "2(x - 3) - x",
      answers: ["x - 6", "2x - 3 - x", "-x + 6", "x + 6"],
      correct: "x - 6",
      hint: "2を分配して、-xと合わせよう。",
      explanation: "2(x - 3) = 2x - 6、そこから-xを引くと、2x - x - 6 = x - 6になるよ。"
    },
    {
      id: "03",
      question: "-2(a - 4) + 3a",
      answers: ["a + 8", "5a - 8", "a - 8", "-2a - 4 + 3a"],
      correct: "a + 8",
      hint: "マイナスをかけると符号が変わるよ。",
      explanation: "-2(a - 4) = -2a + 8、そこに3aを足すと、-2a + 3a + 8 = a + 8になるよ。"
    },
    {
      id: "04",
      question: "x + 2x - 5 + 3 - x",
      answers: ["2x - 2", "4x - 2", "3x - 2", "2x - 5 + 3"],
      correct: "2x - 2",
      hint: "文字と数字に分けて整理して。",
      explanation: "x + 2x - x = 2x、-5 + 3 = -2。だから答えは2x - 2になるよ。"
    },
    {
      id: "05",
      question: "3x - (2x - 4)",
      answers: ["x + 4", "5x + 4", "x - 4", "3x - 2x + 4"],
      correct: "x + 4",
      hint: "かっこの前にマイナスがあると、かっこの中の符号が変わるよ。",
      explanation: "-(2x - 4) = -2x + 4。だから3x - 2x + 4 = x + 4になるよ。"
    },
    {
      id: "06",
      question: "2a - (3a - 2) + a",
      answers: ["0a + 2", "2", "-a + 2", "3a + 2"],
      correct: "2",
      hint: "",
      explanation: "-(3a - 2) = -3a + 2。2a - 3a + 2 + a = 0a + 2。つまり2になるよ。"
    },
    {
      id: "07",
      question: "2x + 3y - (x - 2y)",
      answers: ["x + 5y", "3x + y", "x + y", "x + y + 2y"],
      correct: "x + 5y",
      hint: "文字が2種類あるけど、同じ文字ごとにまとめればいいよ。",
      explanation: "-(x - 2y) = -x + 2y。だから2x - x = x、3y + 2y = 5y。つまり答えはx + 5yになるよ。"
    },
    {
      id: "08",
      question: "5 - 3x + 2(x - 1)",
      answers: ["-x + 3", "-3x + 2x - 2 + 5", "-x + 1", "2x - 3x + 3"],
      correct: "-x + 3",
      hint: "分配法則＋符号に注意。",
      explanation: "2(x - 1) = 2x - 2。5 - 3x + 2x - 2 = -x + 3になるよ。"
    },
    {
      id: "09",
      question: "4a + 2(3a - 1) - 5",
      answers: ["10a - 7", "10a - 5", "6a - 3", "4a + 6a - 2 - 5"],
      correct: "10a - 7",
      hint: "まずかっこを外してから、同類項をまとめよう。",
      explanation: "2(3a - 1) = 6a - 2。4a + 6a - 2 - 5 = 10a - 7になるよ。"
    },
    {
      id: "10",
      question: "2a + 3(a - b)",
      answers: ["5a - 3b", "2a + 3a - 3b", "5a + 3b", "2a + 3b"],
      correct: "5a - 3b",
      hint: "かけ算と引き算が混ざってるよ。",
      explanation: "3(a - b) = 3a - 3b。2a + 3a - 3b = 5a - 3bになるよ。"
    }
  ]
};

export default {
  mathPro21: QUIZ_CONTENT_PRO
};
