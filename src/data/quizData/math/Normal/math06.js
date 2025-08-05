const QUIZ_CONTENT = {
  title: "正の数・負の数",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "正の数を選べ",
      answers: ["-3", "0", "+5", "-1"],
      correct: "+5",
      hint: "正の数は0より大きい数だよ！",
      explanation: "正の数は0より大きい数だよ。",
    },
    {
      id: "02",
      question: "正の数を選べ",
      answers: ["-2", "0", "4", "-5"],
      correct: "4",
      hint: "正の数は0より大きい数だよ！",
      explanation: "正の数は0より大きい数だよ。+4も4も同じ数だよ。",
    },
    {
      id: "03",
      question: "負の数を選べ",
      answers: ["-1", "2", "0", "3"],
      correct: "-1",
      hint: "負の数は0より小さい数だよ！",
      explanation: "負の数は0より小さい数だよ。",
    },
    {
      id: "04",
      question: "(+3) + (+2)",
      answers: ["+5", "-5", "+6", "+1"],
      correct: "+5",
      hint: "3+2と同じだよ！",
      explanation: "正の数の足し算だよ。いつも通り3+2=5と計算してOK！答えに指定がなければ5でも+5でも正解だよ。",
    },
    {
      id: "05",
      question: "(+4) + (-2)",
      answers: ["+2", "-2", "+4", "-4"],
      correct: "+2",
      hint: "4-2と同じだよ！",
      explanation: "正の数と負の数の足し算だよ。4から-2を足すと言うのは、2引くのと同じだよ。4-2=2だから答えは+2だよ。",
    },
    {
      id: "06",
      question: "(-5) + (+9)",
      answers: ["+4", "-4", "+5", "-5"],
      correct: "+4",
      hint: "9-5と同じだよ！",
      explanation: "負の数と正の数の足し算だよ。-5から9足すと言うのは、9から5引くのと同じだよ。9-5=4だから答えは+4だよ。",
    },
    { 
      id: "07", 
      question: "(+4) + (-8)",
      answers: ["-4", "+4", "-8", "+8"],
      correct: "-4",
      hint: "4-8はどうなる？",
      explanation: "4から8をひくと、負の数の-4になるよ。",
    },
    { 
      id: "08", 
      question: "-3-2",
      answers: ["-5", "+5", "-1", "+1"],
      correct: "-5",
      hint: "-3からさらに2引くよ！",
      explanation: "-3からさらに2を引くから-5になるよ。",
      image: ""
    },
    {
      id: "09",
      question: "(+6) - (+3)",
      answers: ["+3", "-3", "+9", "-9"],
      correct: "+3",
      hint: "6-3と同じだよ！",
      explanation: "正の数の引き算だよ。6-3=3だね。",
      image: ""
    },
    {
      id: "10",
      question: "(-5) - (+7)",
      answers: [ "-12", "+12", "-2", "+2"],
      correct: "-12",
      hint: "-5からさらに7引くよ！",
      explanation: "負の数から正の数を引くと、さらに負の数になるよ。-5からさらに7を引くと-12になるよ。",
      image: ""
    }
  ]
}

export default {
  math06: QUIZ_CONTENT,
};
