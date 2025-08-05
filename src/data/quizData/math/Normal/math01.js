const QUIZ_CONTENT = {
  title: "整数の計算",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "7+5",
      answers: ["12","15","17","22"],
      correct: "12",
      hint:"",
      explanation: "7に3を足すと10になるよね。でも足したいのは5なので、まだ足せていない2を足すと12になるよ。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "02", 
      question: "16-9",
      answers: ["7","8","6","5"], 
      correct: "7",
      hint:"",
      explanation: "16から6引くと10になって、さらに3を引くと7が残るよ。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    {
      id: "03", 
      question: "8×3",
      answers: ["24","20","30","18"],
      correct: "24",
      hint:"",
      explanation: "8を3回足すと24になるよ。8+8+8=24だね。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "04", 
      question: "20÷4", 
      answers: ["5","4","6","3"],
      correct: "5",
      hint:"",
      explanation: "20を4で割ると5になるよ。4を5回足すと20になるからね。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    {
      id: "05", 
      question: "28+17", 
      answers: ["45","50","55","40"],
      correct: "45",
      hint:"",
      explanation: "28に10を足すと38になるよね。でも足したいのは17なので、さらに7を足すと45になるよ。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "06", 
      question: "69-23", 
      answers: ["46","47","48","49"],
      correct: "46",
      hint:"",
      explanation: "69から20引くと49になるよね。でも引きたいのは23なので、さらに3を引くと46が残るよ。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "07", 
      question: "10×10",
      answers: ["100","10","1000","50"], 
      correct: "100",
      hint:"",
      explanation: "×10の計算は0を１つ足すとできるよ。23×10=230、5×10=50だね。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "08", 
      question: "420÷7",
      answers: ["60","70","50","80"],
      correct: "60",
      hint:"", 
      explanation: "42÷7=6で、420÷7=60になるよ。難しければ基本の問題から解いてみよう！",
    },
    { 
      id: "09", 
      question: "32-24", 
      answers: ["8","7","6","5"],
      correct: "8",
      hint:"",
      explanation: "32から20引くと12になるよね。でも引きたいのは24なので、さらに4を引くと8が残るよ。難しければ基本の問題から解いてみよう！",
      image: ""
    },
    { 
      id: "10", 
      question: "24÷12", 
      answers: ["2","3","2余り5","1余り5"],
      correct: "2",
      hint:"",
      explanation: "12を2回足すと24になるから24÷12は2になるね。難しければ基本の問題から解いてみよう！",
      image: ""
    }
  ]
}

export default {
  math01: QUIZ_CONTENT,
};
