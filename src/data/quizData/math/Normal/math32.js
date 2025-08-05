const QUIZ_CONTENT = {
  title: "多項式の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "a ÷ a",
    answers: ["1", "a", "0", "a²"],
    correct: "1",
    hint: "aの中にaはいつくあるかな？a × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>とも考えられるよ。",
    explanation: "a ÷ aは、1だよ。a × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えることもできるよ。"
  },
  {
    id: "02",
    question: "4a ÷ a",
    answers: ["4", "a", "4a", "1"],
    correct: "4",
    hint: "4a × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>とも考えられるよ。",
    explanation: "4a ÷ aは、4a × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えると、aで約分して、答えは4になるんだ。"
  },
  {
    id: "03",
    question: "5a² ÷ a",
    answers: ["5a", "5a²", "5", "a"],
    correct: "5a",
    hint: "5a² × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えられるよ。",
    explanation: "5a² ÷ aは、5a² × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えると、aで約分して、答えは5aになるんだ。"
  },
  {
    id: "04",
    question: "3a²b ÷ a",
    answers: ["3a²b", "3ab", "3a²", "3b"],
    correct: "3ab",
    hint: "3a²b × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えられるよ。",
    explanation: "3a²b ÷ aは、3a²b × <span class='fraction'><span class='top'>1</span><span class='bottom'>a</span></span>と考えると、aで約分して、答えは3abになるんだ。"
  },
  {
    id: "05",
    question: "2 ÷ x",
    answers: [
      "2x",
      "<span class='fraction'><span class='top'>x</span>2</span>",
      "<span class='fraction'><span class='top'>2</span>x</span>",
      "<span class='fraction'><span class='top'>2</span>x²</span>"
    ],
    correct: "<span class='fraction'><span class='top'>2</span>x</span>",
    hint: "2 ÷ xは、2 × <span class='fraction'><span class='top'>1</span>x</span>と考えられるよ。",
    explanation: "2 ÷ xは、2 × <span class='fraction'><span class='top'>1</span>x</span>と考えられるよ。分数の形にすると、<span class='fraction'><span class='top'>2</span>x</span>になるんだ。"
   },
  {
    id: "06",
    question: "3x × 4x",
    answers: ["12x²", "7x", "12x", "12x³"],
    correct: "12x²",
    hint: "数同士をかけて、文字同士もかけるよ。",
    explanation: "3x × 4xは、数同士をかけて3 × 4 = 12、文字同士もかけてx × x = x²になるよ。だから、答えは12x²だよ。"
  },
  {
    id: "07",
    question: "5x + 2x",
    answers: [ "7x", "3x", "10x", "5x²"],
    correct: "7x",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "5x + 2xは、同じ文字の項をまとめると7xになるよ。つまり、答えは7xだよ。"
  },
    {
    id: "08",
    question: "3x × 2x + 4x",
    answers: ["6x² + 4x", "6x + 4x", "6x² + 4", "10x"],
    correct: "6x² + 4x",
    hint: "まずは掛け算を計算してから、足し算をしよう。",
    explanation: "3x × 2xは6x²になるよ。次に、6x² + 4xと足し算をすると、答えは6x² + 4xだよ。"
  },
  {
    id: "09",
    question: "2x × 3x ÷ x",
    answers: ["6x", "6x²", "2x²", "3x²"],
    correct: "6x",
    hint: "2x × 3xはまず掛け算をして、次に× <span class='fraction'><span class='top'>1</span>x</span>しよう。",
    explanation: "2x × 3xは6x²になるよ。次に、6x² ÷ x は、6x² × <span class='fraction'><span class='top'>1</span>x</span>と考えると、6xになるんだ。"
  },
  {
    id: "10",
    question: "4x × 2x ÷(-7x)",
    answers: [
      "-<span class='fraction'><span class='top'>8</span>7</span>x",
      "-<span class='fraction'><span class='top'>7</span>8</span>x²",
      "<span class='fraction'><span class='top'>8</span>7</span>x",
      "<span class='fraction'><span class='top'>7</span>8</span>x²"
    ],
    correct: "-<span class='fraction'><span class='top'>8</span>7</span>x",
    hint: "4x × 2xはまず掛け算をして、次に× -<span class='fraction'><span class='top'>1</span>7x</span>しよう。",
    explanation: "4x × 2xは8x²になるよ。次に、8x² ÷ (-7x) は、8x² × -<span class='fraction'><span class='top'>1</span>7x</span>と考えると、-<span class='fraction'><span class='top'>8</span>7</span>xになるんだ。"
  },

]
}



export default {
  math32
  : QUIZ_CONTENT,
};
