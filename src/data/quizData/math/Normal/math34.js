const QUIZ_CONTENT = {
  title: "連立方程式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "次の方程式を解きなさい<br>x + 3 = 7",
    answers: ["x = 4", "x = 3", "x = 7", "x = 10"],
    correct: "x = 4",
    hint: "x = の形にするために、左辺の+3を移項しよう。",
    explanation: "x + 3 = 7の方程式を解くには、左辺の+3を移項して、x = 7 - 3となるよ。だから、x = 4が正解だよ。",
  },
  {
    id: "02",
    question: "画像のように、二つ以上の方程式が連なっているものを何という？",
    answers: ["連立方程式", "単独方程式", "複合方程式", "分離方程式"],
    correct: "連立方程式",
    hint: "連立方程式は、複数の方程式が同時に成り立つような解を求めるものだよ。",
    explanation: "連立方程式は、二つ以上の方程式が連なっていて、それらを同時に解くことを目的とするものだよ。",
    image: "/questionImg/math34.png"
  },
  {
    id: "03",
    question: "次の方程式のxの値が2のとき、yの値は？<br>2x + y = 6",
    answers: ["y = 2", "y = 4", "y = 6", "y = 0"],
    correct: "y = 2",
    hint: "2x + y = 6のxに2を代入して、2 × 2 + y = 6とするよ。",
    explanation: "xに2を代入して、2×2 + y = 6 → 4 + y = 6 → y = 6 - 4 = 2になるよ。<strong>連立方程式では2つの文字のうち、1つの文字の値がわかれば、もう1つの文字の値を代入して求めることができるんだ。</strong>" 
  },
  {
    id: "04",
    question: "画像のような連立方程式で、上の式と下の式を足すとどのようになる？",
    answers: ["3x = 6", "x + y = 6", "2y = 5", "-x = 2"],
    correct: "3x = 6",
    hint: "x + 2x, y + (-y), 4 + 2 をそれぞれ計算してみよう。",
    explanation: "上の式と下の式を足すと、x + 2x = 3x, y + (-y) = 0, 4 + 2 = 6 になるよ。だから、3x = 6が正解だよ。",
    image: "/questionImg/math35.png"
  },
  {
    id: "05",
    question: "3x = 6を解くと、xの値は？",
    answers: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correct: "x = 2",
    hint: "3で割ってみよう。",
    explanation: "3x = 6を解くと、x = 6 ÷ 3 = 2になるよ。だから、xの値は2だよ。",
    image: "/questionImg/math35.png"
  },
  {
    id: "06",
    question: "画像の連立方程式の、yの値は？",
    answers: ["y = 1", "y = 2", "y = 3", "y = 4"],
    correct: "y = 2",
    hint: "x + y = 4のxに2を代入して、2 + y = 4とするよ。",
    explanation: "xの値が2とわかったから、下の式に代入してyを求めるよ。x + y = 4 → 2 + y = 4 → y = 4 - 2 = 2になるよ。だから、yの値は2だよ。",
    image: "/questionImg/math36.png"

  },
  {
    id: "07",
    question: "画像の連立方程式は上の式から下の式をどうすれば良いか？",
    answers: ["下の式を足す", "下の式を引く"],
    correct: "下の式を引く",
    hint: "二つの式を計算することで、x、yのどちらかを消したいね。",
    explanation: "この式では上の式から下の式を引くことで、yを消すことができるよ。",
    image: "/questionImg/math37.png"
  },
  {
    id: "08",
    question: "画像の連立方程式で、上の式から下の式を引くとどのようになる？",
    answers: ["2x = 6", "3x + 4y = 8", "4y = 10", "4x = 10"],
    correct: "2x = 6",
    hint: "上の式から下の式を引いて、それぞれ計算してみよう。",
    explanation: "上の式から下の式を引くと、3x - x = 2x, 2y - 2y = 0, 8 - 2 = 6になるよ。だから、2x = 6が正解だよ。",
    image: "/questionImg/math38.png"
  },
  {
    id: "09",
    question: "2x = 6を解くと、xの値は？",
    answers: ["x = 2", "x = 3", "x = 4", "x = 5"],
    correct: "x = 3",
    hint: "2で割ってみよう。",
    explanation: "2x = 6を解くと、x = 6 ÷ 2 = 3になるよ。だから、xの値は3だよ。",
    image: "/questionImg/math38.png"
  },
  {
    id: "10",
    question: "画像の連立方程式で、yの値は？",
    answers: [
      "y = <span class='fraction'><span class='top'>1</span>2</span>",
      "y = 1",
      "y = 2",
      "y = 3"
    ],
    correct: "y = <span class='fraction'><span class='top'>1</span>2</span>",
    hint: "代入するのは2つの式のどちらでもいいけど、下の式に代入すると 3 + 2y = 2 になるよ。",
    explanation: "xの値3を下の式に代入してyを求めると x + 2y = 2 → 3 + 2y = 2 → 2y = 2 - 3 → 2y = -1 → y = -<span class='fraction'><span class='top'>1</span>2</span>になるよ。",
    image: "/questionImg/math39.png"
  }
  

]
}



export default {
  math34
  : QUIZ_CONTENT,
};
