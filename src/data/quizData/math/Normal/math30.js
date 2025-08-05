const QUIZ_CONTENT = {
  title: "多項式の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "-( a + b )",
    answers: ["-a - b", "-a + b", "a + b", "a - b"],
    correct: "-a - b",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "-( a + b )のかっこを外すと、-1×a - 1×bになるよ。つまり-a - bになるんだ。"
   },
  {
    id: "02",
    question: "-4(3x + y)",
    answers: ["-12x - 4y", "-12x + 4y", "12x - 4y", "12x + 4y"],
    correct: "-12x - 4y",
    hint: "a(b + c)はa×b + a×cだったね。",
    explanation: "-4(3x + y)は、-4×3x + (-4)×yになるよ。つまり-12x - 4yになるんだ。"
  },
    {
    id: "03",
    question: "(12x + 8y) ÷ 4",
    answers: ["3x + 2y", "3x + 4y", "4x + 2y", "4x + 4y"],
    correct: "3x + 2y",
    hint: "(a + b) ÷ cは、a ÷ c + b ÷ cだよ。",
    explanation: "(12x + 8y) ÷ 4は、(12x ÷ 4) + (8y ÷ 4)になるよ。つまり3x + 2yになるんだ。"
  },
  {
    id: "04",
    question: "2a + 3b - 4a + b",
    answers: ["-2a + 4b", "-2a - 4b", "2a + 4b", "2a - 4b"],
    correct: "-2a + 4b",
    hint: "同じ文字の項をまとめるよ。",
    explanation: "2a + 3b - 4a + bは、同じ文字の項をまとめると-2a + 4bになるんだ。" 
  },
  {
    id: "05",
    question: "-3(a - 2b)",
    answers: ["-3a + 6b", "-3a - 6b", "3a - 6b", "3a + 6b"],
    correct: "-3a + 6b",
    hint: "a(b - c)はa×b - a×cだよ。",
    explanation: "-3(a - 2b)は、-3×a + (-3)×(-2b)になるよ。つまり-3a + 6bになるんだ。"
  },
  {
    id: "06",
    question: "a × b",
    answers: ["ab", "a + b", "a - b", "a ÷ b"],
    correct: "ab",
    hint: "",
    explanation: "a × bは、abになるんだ。くっつくんだね。"
  },
  {
    id: "07",
    question: "2x × 7y",
    answers: ["14xy", "14x + 7y", "14x - 7y", "14xy²"],
    correct: "14xy",
    hint: "数同士をかけて、文字同士もかけるよ。",
    explanation: "2x × 7yは、数同士をかけて2 × 7 = 14、文字同士もかけてx × y = xyになるよ。だから、答えは14xyだよ。"
  },
   {
    id: "08",
    question: "a × a",
    answers: ["a²", "a + a", "2a", "a + 2"],
    correct: "a²",
    hint: "a × aは、aを2つかけるんだよ。",
    explanation: "a × aは、aを2つかけるから、a²になるんだ。"
  },
  {
    id: "09",
    question: "3x × 2x",
    answers: ["6x²", "6x", "5x", "5x²"],
    correct: "6x²",
    hint: "数同士をかけて、文字同士もかけるよ。",
    explanation: "3x × 2xは、数同士をかけて3 × 2 = 6、文字同士もかけてx × x = x²になるよ。だから、答えは6x²だよ。"
  },
  {
    id: "10",
    level: "hard",
    question: "3x × y × xz",
    answers: ["3x²yz", "3xyz²", "3x²yz", "3xyzx"],
    correct: "3x²yz",
    hint: "x × x = x²になるんだよ。",
    explanation: "3x × y × xzは、3x²yzになるんだ。x × x = x²になるんだよ。"
  },



]
}



export default {
  math30
  : QUIZ_CONTENT,
};
