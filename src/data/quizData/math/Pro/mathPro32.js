const QUIZ_CONTENT_PRO = {
  title: "多項式の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "8x² × 2x",
    answers: ["16x³", "16x²", "10x²", "10x³"],
    correct: "16x³",
    hint: "数同士をかけて、文字同士もかけるよ。",
    explanation: "8x² × 2xは、数同士をかけて8 × 2 = 16、文字同士もかけてx² × x = x³になるよ。だから、答えは16x³だよ。"
  },
  {
    id: "02",
    question: "3x² ÷ 5x × 2x",
    answers: [
      "<span class='fraction'><span class='top'>6</span>5</span>x",
      "<span class='fraction'><span class='top'>6</span>5</span>x²",
      "<span class='fraction'><span class='top'>3</span>5</span>x",
      "<span class='fraction'><span class='top'>3</span>5</span>x²"
    ],
    correct: "<span class='fraction'><span class='top'>6</span>5</span>x²", 
    hint: "3x² ÷ 5xは、3x² × <span class='fraction'><span class='top'>1</span>5x</span>と考えよう。",
    explanation: "3x² × <span class='fraction'><span class='top'>1</span>5x</span>と考えると、<span class='fraction'><span class='top'>3</span>5</span>xになるよ。次に、<span class='fraction'><span class='top'>3</span>5</span>x × 2xをして、<span class='fraction'><span class='top'>6</span>5</span>x²になるんだ。"
  },
  {
    id: "03",
    question: "5x² ÷ 3x ÷ 2x",
    answers: [
      "<span class='fraction'><span class='top'>5</span>6</span>",
      "<span class='fraction'><span class='top'>5</span>6</span>x",
      "<span class='fraction'><span class='top'>1</span>6</span>x",
      "<span class='fraction'><span class='top'>1</span>6</span>x²"
    ],
    correct: "<span class='fraction'><span class='top'>5</span>6</span>",
    hint: "55x² × <span class='fraction'><span class='top'>1</span>3x</span> × <span class='fraction'><span class='top'>1</span>2x</span>と考えよう。",
    explanation: "5x² × <span class='fraction'><span class='top'>1</span>3x</span> × <span class='fraction'><span class='top'>1</span>2x</span>と考えると、<span class='fraction'><span class='top'>5</span>6</span>xになるよ。"
  },
  {
    id: "04",
    question: "4x² × 3x + 3x²",
    answers: ["12x³ + 3x²", "12x² + 3x", "15x²", "15x³"],
    correct: "12x³ + 3x²",
    hint: "4x² × 3xは、数同士をかけて、文字同士もかけるよ。",
    explanation: "4x² × 3xは、12x³になるよ。次に、3x²を足すから、12x³ + 3x²になるんだ。"
  },
  {
    id: "05",
    question: "5xy ÷ 4x²",
    answers: [
      "<span class='fraction'><span class='top'>5</span>4x</span>y",
      "<span class='fraction'><span class='top'>5</span>4</span>x",
      "<span class='fraction'><span class='top'>5</span>8</span>y",
      "<span class='fraction'><span class='top'>5</span>8</span>x"
    ],
    correct: "<span class='fraction'><span class='top'>5</span>4x</span>y",
    hint: "5xy ÷ 4x²は、5xy × <span class='fraction'><span class='top'>1</span>4x²</span>と考えよう。",
    explanation: "5xy × <span class='fraction'><span class='top'>1</span>4x²</span>と考えると、xで約分して<span class='fraction'><span class='top'>5</span>4x</span>yになるよ。"
  },
  ]
};



export default {
  mathPro32: QUIZ_CONTENT_PRO
};
