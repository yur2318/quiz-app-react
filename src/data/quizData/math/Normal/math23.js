const QUIZ_CONTENT = {
  title: "文字式まとめ",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "3a + 2a",
    answers: ["5a", "6a", "3 + 2a", "3 - 2a"],
    correct: "5a",
    hint: "同じ文字の項を足すよ。",
    explanation: "3a + 2aは、同じ文字の項を足して5aになるんだ。"
  },
  {
    id: "02",
    question: "-5a - 2a",
    answers: ["-7a", "-3a", "5 - 2a", "5 + 2a"],
    correct: "-7a",
    hint: "同じ文字の項を引くよ。",
    explanation: "-5a - 2aは、同じ文字の項を引いて-7aになるんだ。"
  },
  {
    id: "03",
    question: "3 × a + 2 × a",
    answers: ["5a", "6a", "3 + 2a", "3 - 2a"],
    correct: "5a",
    hint: "かけ算から計算しよう",
    explanation: "3a + 2aは、同じ文字の項だから足して5aになるんだ。"
  },
  {
    id: "04",
    question: "4b -(2b + 2)",
    answers: ["2b - 2", "2b + 8", "8b - 8", "2b - 8"],
    correct: "2b - 2",
    hint: "かっこを外すときは、マイナスをつけるよ。",
    explanation: "4b - (2b + 2)は、かっこを外すと4b - 2b - 2になるんだ。つまり2b - 2になるよ。" 
  },
  {
    id: "05",
    question: "4(<span class='fraction'><span class='top'>3</span>4</span>b - 2)",
    answers: [
      "3b - 8", 
      "<span class='fraction'><span class='top'>3</span>1</span>b + 8", 
      "3b - 2", 
      "4b - 2"
    ],
    correct: "3b - 8",
    hint: "a(b - c)はa×b - a×cだよ。",
    explanation: "4×<span class='fraction'><span class='top'>3</span>4</span>b - 4×2になるよ。つまり3b - 8になるんだ。"
  },
  {
    id: "06",
    question: "2a + 3 - 4a + 6",
    answers: ["-2a + 9", "-2a + 3", "2a + 9", "2a + 3"],
    correct: "-2a + 9",
    hint: "定数項と文字の項を分けて考えよう。",
    explanation: "2a + 3 - 4a + 6は、定数項と文字の項を分けて考えると、-2a + 9になるよ。"
  },
  {
    id: "07",
    question: "-3(a - 5)",
    answers: ["-3a + 15", "-3a - 15", "3a - 15", "3a + 15"],
    correct: "-3a + 15",
    hint: "a(b - c)はa×b - a×cだよ。",
    explanation: "-3(a - 5)は、-3×a + (-3)×(-5)になるよ。つまり-3a + 15になるんだ。"
  },
  {
    id: "08",
    question: "5x ÷ <span class='fraction'><span class='top'>2</span>3</span>",
    answers: [
      "<span class='fraction'><span class='top'>15</span>2</span>x", 
      "<span class='fraction'><span class='top'>5</span>2</span>x", 
      "<span class='fraction'><span class='top'>10</span>3</span>x", 
      "<span class='fraction'><span class='top'>5</span>3</span>x"
    ],
    correct: "<span class='fraction'><span class='top'>15</span>2</span>x",
    hint: "",
    explanation: "分数の割り算だから、5x × <span class='fraction'><span class='top'>3</span>2</span>になるんだ。つまり<span class='fraction'><span class='top'>15</span>2</span>xになるよ。"
  },
  {
    id: "09",
    question: "9y ÷ 3y",
    answers: ["3", "3y",],
    correct: "3",
    hint: "",
    explanation: "9y ÷ 3yは3になるんだ。"
  },
  {
    id: "10",
    question: "2(3x + 4) - 5",
    answers: ["6x + 3", "6x - 3", "6x + 8", "6x - 8"],
    correct: "6x + 3", 
    hint: "a(b + c)はa×b + a×cだよ。",
    explanation: "2(3x + 4) - 5は、かっこを外すと6x + 8 - 5になるんだ。つまり6x + 3になるよ。"
  },
]
}

export default {
  math23: QUIZ_CONTENT,
};
