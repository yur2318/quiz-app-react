const QUIZ_CONTENT = {
  title: "計算の順番",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "3+4×2",
      answers: ["11","14","10","12"],
      correct: "11",
      hint: "計算の順番に注意してね！",
      explanation: "計算の順番は、まず掛け算を先に計算するよ。4×2=8、次に3+8=11になるね。",
      image: ""
    },
    { 
      id: "02", 
      question: "5×(2+3)",
      answers: ["25","30","35","20"],
      correct: "25",
      hint: "( )の中を先に計算してね！",
      explanation: "( )の中を先に計算するよ。2+3=5、次に5×5=25になるね。",
      image: ""
    },
    {
      id: "03", 
      question: "6+8÷2",
      answers: ["10","12","14","8"],
      correct: "10",
      hint: "割り算を先に計算してね！",
      explanation: "割り算を先に計算するよ。8÷2=4、次に6+4=10になるね。",
      image: ""
    },
    { 
      id: "04", 
      question: "2+(1+4×3)",
      answers: ["15","21","10","17"],
      correct: "15",
      hint: "( )の計算→掛け算の順で優先だよ！",
      explanation: "( )の中を先に計算するよ。（　）の中は1+4×3、まず掛け算を計算して4×3=12、次に1+12=13、最後に2+13=15になるね。",
      image: ""
    },
    {
      id: "05", 
      question: "2×3+2×3",
      answers: ["12","10","24","8"],
      correct: "12",
      hint: "掛け算を先に計算してね！",
      explanation: "掛け算を先に計算するよ。2×3=6、次に2×3=6、最後に6+6=12になるね。",
      image: ""
    },
    { 
      id: "06", 
      question: "3+12÷3",
      answers: ["5","7","10","4"],
      correct: "7",
      hint: "割り算を先に計算してね！",
      explanation: "割り算を先に計算するよ。12÷3=4、次に3+4=7になるね。",
      image: ""
    },
    { 
      id: "07", 
      question: "30÷5×2",
      answers: ["12","3","8","5"],
      correct: "12",
      hint: "割り算と掛け算は同じ優先順位だから、左から計算してね！",
      explanation: "割り算と掛け算は同じ優先順位だから、左から計算して30÷5=6、次に6×2=12になるね。",
      image: ""
    },
    {
      id: "08",
      question: "8+(6÷2)",
      answers: ["5", "10", "12", "11"],
      correct: "11",
      hint: "( )の中を先に計算してね！",
      explanation: "( )の中を先に計算するよ。6÷2=3、次に8+3=11になるね。",
      image: ""
    },
    {
      id: "09",
      question: "18÷(3+3)",
      answers: ["6", "3", "9", "4"],
      correct: "3",
      hint: "( )の中を先に計算してね！",
      explanation: "( )の中を先に計算するよ。3+3=6、次に18÷6=3になるね。",
      image: ""
    },
    {
      id: "10",
      question: "(2＋6)÷2＋4",
      answers: ["6", "8", "10", "5"],
      correct: "8",
      hint: "( )の中→割り算→足し算の順だよ！",
      explanation: "まず(2+6)=8、次に8÷2=4、最後に4+4=8になるよ。",
      image: ""
    }
  ]
}

export default {
  math02: QUIZ_CONTENT,
};
