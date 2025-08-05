const QUIZ_CONTENT = {
  title: "文字式",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "-( 3 + 2 )",
    answers: ["-5", "-1"],
    correct: "-5",
    hint: "かっこ中を先に計算しよう。",
    explanation: "-( 3 + 2 )は、かっこ中を計算してからマイナスをつけるよ。つまり-(5) = -5になるんだ。"
  },
  {
    id: "02",
    question: "-( 3 - 2 )",
    answers: ["-1", "-5"],
    correct: "-1",
    hint: "かっこ中を先に計算しよう。",
    explanation: "-( 3 - 2 )は、かっこ中を計算してからマイナスをつけるよ。つまり-(1) = -1になるんだ。"
  },
  {
    id: "03",
    question: "-( a + 1 )",
    answers: ["-a - 1", "-a + 1", "a + 1", "a - 1"],
    correct: "-a - 1",
    hint: "-( a + b )のかっこを外すと -a - bになるよ。",
    explanation: "-( a + 1 )のかっこを外すと -a - 1になるんだ。"
  },
  {
    id: "04",
    question: "-( a - 8  )",
    answers: ["-a + 8", "-a - 8", "a - 8", "a + 8"],
    correct: "-a + 8",
    hint: "-( a + b )のかっこを外すと -a - bになるよ。",
    explanation: "-( a - 8 )のかっこを外すと -a + 8になるんだ。"
  },
  {
    id: "05",
    question: "2-(-3)",
    answers: ["5", "-1", "1", "3"],
    correct: "5",
    hint: "2から-3を引くとどうなるかな？",
    explanation: "2から-3引くのは3を足すことと同じだよ。つまり2 + 3 = 5になるんだ。"
  },
  {
    id: "06",
    question: "-(2 - 4)",
    answers: ["2", "-2", "6", "-6"],
    correct: "2",
    hint: "かっこ中を先に計算しよう。",
    explanation: "-(2 - 4)は、かっこ中を計算してからマイナスをつけるよ。つまり-( -2 ) = 2になるんだ。"
  },
  {
    id: "07",
    question: "-( a - 4 )",
    answers: ["-a + 4", "-a - 4", "a - 4", "a + 4"],
    correct: "-a + 4",
    hint: "-( a - b )のかっこを外すと -a + bになるよ。",
    explanation: "-( a - 4 )のかっこを外すと -a + 4になるんだ。"
  },
  {
    id: "08",
    question: "-( a - 5 )",
    answers: ["-a + 5", "-a - 5", "a - 5", "a + 5"],
    correct: "-a + 5",
    hint: "-( a - b )のかっこを外すと -a + bになるよ。",
    explanation: "-( a - 5 )のかっこを外すと -a + 5になるんだ。"
  },
  {
    id: "09",
    question: "3x + (2 - 5x)",
    answers: ["-2x + 2", "8x - 2", "-2x - 2", "2x + 2"],
    correct: "-2x + 2",
    hint: "かっこ外して同類項をまとめよう。",
    explanation: "かっこを外すと3x + 2 - 5xになるよ。同類項をまとめると-2x + 2になるんだ。"
  },
  {
    id: "10",
    question: "4y - (3y + 2)",
    answers: ["-y - 2", "y - 2", "-y + 2", "y + 2"],
    correct: "y - 2",
    hint: "かっこ外して同類項をまとめよう。",
    explanation: "かっこを外すと4y - 3y - 2になるよ。同類項をまとめるとy - 2になるんだ。"
  }
]

}

export default {
  math21: QUIZ_CONTENT,
};
