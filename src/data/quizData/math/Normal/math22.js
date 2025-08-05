const QUIZ_CONTENT = {
  title: "文字式",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "7 × 2を足し算で表すと？",
    answers: ["2 + 7", "7 + 7", "14 + 0", "7 - 7"],
    correct: "7 + 7",
    hint: "7が2個あるってことだよね。",
    explanation: "7 × 2は、7を2個あること、つまり7 + 7と同じだよ。"
  },
  {
    id: "02",
    question: "3 × aを足し算で表すと？",
    answers: ["a + a + a", "3 + a", "3 - a", "3 ÷ a"],
    correct: "a + a + a",
    hint: "aが3個あるってことだよね。",
    explanation: "3 × aは、aを3個あること、つまりa + a + aと同じだよ。"
  },
  {
    id: "03",
    question: "3 × a",
    answers: ["3a", "a3", "3 + a", "3 - a"],
    correct: "3a",
    hint: "a+a+aは3aだね。",
    explanation: "3 × aは、3aになるんだ。",
  },
  {
    id: "04",
    question: "2b × 3",
    answers: ["6b", "2b3", "5b", "3 + 2b"],
    correct: "6b",
    hint: "2bを3回足すとどうなるかな？",
    explanation: "2bを3回足すと、2b + 2b + 2b = 6bになるんだ。つまり2b × 3 = 6bだよ。"
  },
  {
    id: "05",
    question: "6a × <span class='fraction'><span class='top'>2</span>13</span>",
    answers: [
      "<span class='fraction'><span class='top'>12</span>13</span>a", 
      "<span class='fraction'><span class='top'>6</span>13</span>a", 
      "<span class='fraction'><span class='top'>8</span>13</span>a", 
      "<span class='fraction'><span class='top'>4</span>13</span>a"
    ],
    correct: "<span class='fraction'><span class='top'>12</span>13</span>a",
    hint: "分数をかけるときは、分子同士、分母同士を掛けるよ。",
    explanation: "6a × <span class='fraction'><span class='top'>2</span>13</span>は、分子同士を掛けて6a × 2 = 12a、分母は13だから、<span class='fraction'><span class='top'>12</span>13</span>aになるんだ。"
  },
  {
    id: "06",
    question: "6a ÷ 3",
    answers: ["2a","2"],
    correct: "2a",
    hint: "3に何かけたら6aになるかな？",
    explanation: "6a ÷ 3は、2aになるんだ。"
  },
  {
    id: "07",
    level: "hard",
    question: "2(4 + 3)",
    answers: ["14", "7", "11", "9"],
    correct: "14",
    hint: "2(4 + 3)は、かっこ中を先に計算してから2を掛けるよ。",
    explanation: "2(4 + 3)は、2×(4 + 3)の×が省略された形なんだ。つまり2 × 7 = 14になるよ。"
  },
  {
    id: "08",
    level: "hard",
    question: "3(x + 4)",
    answers: ["3x + 12", "3x + 4", "7x + 12", "12x + 3"],
    correct: "3x + 12",
    hint: "3 × x + 3 × 4と同じ意味だよ。",
    explanation: "3(x + 4)は、xと4の両方に3をかけるから、3x + 12になるんだ。これを分配法則っていうよ。"
  },
  {
    id: "09",
    question: "-4(3x + 6)",
    answers: ["-12x - 24", "-12x + 24", "12x - 24", "12x + 24"],
    correct: "-12x - 24",
    hint: "それぞれに-4をかけるよ。",
    explanation: "-4(3x + 6)は、3xに-4をかけて-12x、6に-4をかけて-24になるから、-12x - 24になるんだ。"
  },
  {
    id: "10",
    question: "(12x + 8) ÷ 4",
    answers: ["3x + 2", "3x + 4", "4x + 2", "4x + 4"],
    correct: "3x + 2",
    hint: "それぞれに4を割るよ。",
    explanation: "(12x + 8) ÷ 4は、12xを4で割って3x、8を4で割って2になるから、3x + 2になるんだ。"
  },
]

}

export default {
  math22: QUIZ_CONTENT,
};
