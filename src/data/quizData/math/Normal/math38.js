const QUIZ_CONTENT = {
  title: "一次関数",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "y=xのグラフを選べ",
    answers: ["A", "B", "C", "D"],
    correct: "A",
    hint: "y=axは比例のグラフだね。",
    explanation: "y=xのグラフは、原点を通る比例のグラフだから①が正解だよ！",
    image: "/questionImg/math40.png"
  },
  {
    id: "02",
    question: "y = x + 2 でxが0のとき、yの値は？",
    answers: ["0", "1", "2", "3"],
    correct: "2",
    hint: "xの値を代入してみよう。",
    explanation: "x = 0を代入すると、y = 2 になるよ。だから、y = x + 2のグラフは、(0, 2)を通る直線になるんだ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "03",
    question: "y = x + 2 でyが0のとき、xの値は？",
    answers: ["0", "-2", "2", "1"],
    correct: "-2",
    hint: "yの値を0にして、xを求めてみよう。",
    explanation: "y = 0を代入すると、0 = x + 2 → x = -2になるよ。だから、y = x + 2のグラフは、(-2, 0)を通る直線になるんだ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "04",
    question: "y = x + 2 のグラフを選べ",
    answers: ["A", "B", "C", "D"],
    correct: "B",
    hint: "y = x + 2は、(0, 2),(-2, 0)を通る直線だよ",
    explanation: "y = x + 2のグラフは、(0, 2),(-2, 0)を通る直線だよ。だから、Bが正解だよ！y=xが上に移動したようなグラフだね。",
    image: "/questionImg/math40.png"
  },
  {
    id: "05",
    question: "y = -3x + 3 でxが0のとき、yの値は？",
    answers: ["0", "1", "3", "-3"],
    correct: "3",
    hint: "xの値を代入してみよう。",
    explanation: "x = 0を代入すると、y = 3 になるよ。だから、y = -3x + 3のグラフは、(0, 3)を通る直線になるんだ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "06",
    question: "y = -3x + 3 でyが0のとき、xの値は？",
    answers: ["0", "1", "-1", "2"],
    correct: "1",
    hint: "yの値を0にして、xを求めてみよう。",
    explanation: "y = 0を代入すると、0 = -3x + 3 → x = 1になるよ。だから、y = -3x + 3のグラフは、(1, 0)を通る直線になるんだ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "07",
    question: "y = -3x + 3 のグラフを選べ",
    answers: ["E", "B", "C", "D"],
    correct: "C",
    hint: "y = -3x + 3は、(0, 3),(1, 0)を通る直線だよ",
    explanation: "y = -3x + 3のグラフは、(0, 3),(1, 0)を通る直線だよ。だから、Cが正解だよ！y=xが下に移動したようなグラフだね。",
    image: "/questionImg/math40.png"
  },
  {
    id: "08",
    question: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2 でxが3のとき、yの値は？",
    answers: ["0", "-2", "-4", "-6"],
    correct: "-4",
    hint: "xの値を代入してみよう。",
    explanation: "x = 3を代入すると、y = -<span class='fraction'><span class='top'>2</span>3</span> × 3 - 2 = -2 - 2 = -4になるよ。だから、y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2のグラフは、(3, -4)を通る直線になるんだ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "09",
    question: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2 のグラフを選べ",
    answers: ["E", "B", "C", "D"],
    correct: "D",
    hint: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2は、(0, -2)を通る直線だよ",
    explanation: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2のグラフは、(0, -2)を通る直線で、傾きが-<span class='fraction'><span class='top'>2</span>3</span>だよ。だから、Dが正解だよ！",
    image: "/questionImg/math40.png"
  },
  {
    id: "10",
    question: "y = -<span class='fraction'><span class='top'>1</span>3</span>x - 4 のグラフを選べ",
    answers: ["E", "B", "C", "D"],
    correct: "E",
    hint: "y = -<span class='fraction'><span class='top'>1</span>3</span>x - 4は、(0, -4)を通る直線だよ",
    explanation: "y = -<span class='fraction'><span class='top'>1</span>3</span>x - 4のグラフは、(0, -4)を通る直線で、傾きが-<span class='fraction'><span class='top'>1</span>3</span>だよ。だから、Eが正解だよ！",
    image: "/questionImg/math40.png"

  },


]
}



export default {
  math38
  : QUIZ_CONTENT,
};
