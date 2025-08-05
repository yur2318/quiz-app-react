const QUIZ_CONTENT = {
  title: "正の数・負の数",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "(+3) - (-2)",
      answers: ["+5", "-5", "+1", "-1"],
      correct: "+5",
      hint: "3+2と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって3+2となって答えは+5だよ。",
      image: ""
    },
    {
      id: "02",
      question: "(+4) - (-3)",
      answers: ["+7", "-7", "+1", "-1"],
      correct: "+7",
      hint: "4+3と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって4+3となって答えは+7だよ。",
      image: ""
    },
    {
      id: "03",
      question: "(-7) - (-2)",
      answers: ["-5", "+5", "-9", "+9"],
      correct: "-5",
      hint: "-7+2と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって-7+2となって答えは-5だよ。", 
      image: ""
    },
    {
      id: "04",
      question: "(-5) - (-4)",
      answers: ["-1", "+1", "-9", "+9"],
      correct: "-1",
      hint: "-5+4と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって-5+4となって答えは-1だよ。",
      image: ""
    },
    {
      id: "05",
      question: "(+8) + (-3)",
      answers: ["+5", "-5", "+11", "-11"],
      correct: "+5",
      hint: "8-3と同じだよ！",
      explanation: "正の数と負の数の足し算だよ。8から-3を足すのは、3を引くのと同じだよ。8-3=5だから答えは+5だよ。",
      image: ""
    },
    {
      id: "06",
      question: "(-3) + (+6)",
      answers: ["+3", "-3", "+9", "-9"],
      correct: "+3",
      hint: "6-3と同じだよ！",
      explanation: "負の数と正の数の足し算だよ。-3から6を足すのは、6から3を引くのと同じだよ。6-3=3だから答えは+3だよ。",
      image: ""
    },
    { 
      id: "07", 
      question: "2 - (-5)",
      answers: ["+7", "-7", "+3", "-3"],
      correct: "+7",
      hint: "2+5と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって2+5となって答えは+7だよ。",
      image: ""
    },
    { 
      id: "08", 
      question: "0 - (-4)",
      answers: ["+4", "-4", "+0", "-0"],
      correct: "+4",
      hint: "0+4と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって0+4となって答えは+4だよ。",
      image: ""
    },
    {
      id: "09",
      question: "-2 - 3",
      answers: ["-5", "+5", "-1", "+1"],
      correct: "-5",
      hint: "-2からさらに3引くよ！",
      explanation: "-2からさらに3を引くと-5になるよ。",
      image: ""
    },
    {
      id: "10",
      question: "(+5) - (-1)",
      answers: ["+6", "-6", "+4", "-4"],
      correct: "+6",
      hint: "5+1と同じだよ！",
      explanation: "「負の数を引く」は「正の数を足す」のと同じになるよ。よって5+1となって答えは+6だよ。",
      image: ""
    }
  ]
}

export default {
  math07: QUIZ_CONTENT,
};
