const QUIZ_CONTENT = {
  title: "一次関数",
  subject: "blue",
  data: [
      {
    id: "01",
    question: "y = ax + bの<ruby>傾<rt>かたむ</rt></ruby>きは？",
    answers: ["a", "b", "x", "y"],
    correct: "a",
    hint: "",
    explanation: "y = ax + bの式において、aを傾きと言うよ。グラフにした時の直線の傾きを表していて、変化の割合と同じものを指しているね。",
  },
  {
    id: "02",
    question: "y = ax + bの<ruby>切片<rt>せっぺん</rt></ruby>は？",
    answers: ["a", "b", "x", "y"],
    correct: "b",
    hint: "",
    explanation: "y = ax + bの式において、bを切片と言うよ。グラフでx座標が0の時のy座標を表しているんだ。",
  },
  {
    id: "03",
    question: "Cのグラフの式は？",
    answers: ["y = -3x + 3", "y = -3x - 3", "y = -3x", "y = 3x + 3"],
    correct: "y = -3x + 3",
    hint: "Cのグラフは、(0, 3),(1, 0)を通る直線だよ。",
    explanation: "Cのグラフは、(0, 3),(1, 0)を通る直線だからy = -3x + 3が正解だよ！",
    image: "/questionImg/math40.png"
  },
  {
    id: "04",
    question: "Cのグラフの式はxが1進むとyはどう変化する？",
    answers: ["3進む", "-3進む", "1進む", "-1進む"],
    correct: "-3進む",
    hint: "Cのグラフは、xの値が増えるとにyの値は減っているね。",
    explanation: "Cのグラフは、xが1進むとyは-3進むよ。傾きが-3のグラフだよ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "05",
    question: "Cのグラフの式の傾きは？",
    answers: ["-3", "-1", "1", "3"],
    correct: "-3",
    hint: "Cのグラフは、x軸方向に1進むとy軸方向に-3進むよ。",
    explanation: "Cのグラフは、x軸方向に1進むとy軸方向に-3進むから、傾きは-3だよ。",
    image: "/questionImg/math40.png"
  },
   {
    id: "06",
    question: "傾きが-<span class='fraction'><span class='top'>2</span>3</span>で、切片が-2の直線の式は？",
    answers: ["y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2", "y = -<span class='fraction'><span class='top'>2</span>3</span>x + 2", "y = <span class='fraction'><span class='top'>2</span>3</span>x - 2", "y = <span class='fraction'><span class='top'>2</span>3</span>x + 2"],
    correct: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2",
    hint: "傾きは-<span class='fraction'><span class='top'>2</span>3</span>、切片は-2だよ。",
    explanation: "傾きが-<span class='fraction'><span class='top'>2</span>3</span>で、切片が-2の直線の式は、y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2だよ。傾きと切片を正しく使っているね。",
    image: "/questionImg/math40.png"
  },
  {
    id: "07",
    question: "傾きが-<span class='fraction'><span class='top'>2</span>3</span>で、切片が-2の直線の式は？",
    answers: ["A", "B", "C", "D"],
    correct: "D",
    hint: "y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2のグラフを選んでね。",
    explanation: "傾きが-<span class='fraction'><span class='top'>2</span>3</span>で、切片が-2の直線の式は、y = -<span class='fraction'><span class='top'>2</span>3</span>x - 2だよ。Dのグラフが正解だね。",
    image: "/questionImg/math40.png"
  },
  {
    id: "08",
    question: "Eのグラフの傾きは？",
    answers: ["-3", "-<span class='fraction'><span class='top'>1</span>3</span>", "-<span class='fraction'><span class='top'>2</span>3</span>", "-2"],
    correct: "-<span class='fraction'><span class='top'>1</span>3</span>",
    hint: "Dのグラフはx軸方向に3進むとy軸方向に1下がるよ。xが1進むとyは-<span class='fraction'><span class='top'>1</span>3</span>進むんだ。",
    explanation: "Dのグラフは、x軸方向に3進むとy軸方向に1下がるから、傾きは-<span class='fraction'><span class='top'>1</span>3</span>だよ。",
    image: "/questionImg/math40.png"
  },
  {
    id: "09",
    question: "y=2x + 1 のxの変域が0≦x≦2のとき、yの変域は？",
    answers: ["1≦y≦5", "1≦y≦3", "2≦y≦4", "0≦y≦2"],
    correct: "1≦y≦5",
    hint: "xの変域を代入してyの値を求めてみよう。",
    explanation: "xの変域が0≦x≦2のとき、yの値はy==1からy=2×2+1=5まで変化するよ。だから、yの変域は1≦y≦5だね。",
    image: "/questionImg/math41.png"

  },
  {
    id: "10",
    question: "y=<span class='fraction'><span class='top'>1</span>2</span>x - 2 のxの変域が-2≦x≦2のとき、yの変域は？",
    answers: ["-3≦y≦-1", "-2≦y≦0", "-1≦y≦1", "0≦y≦2"],
    correct: "-3≦y≦-1",
    hint: "xの変域を代入してyの値を求めてみよう。",
    explanation: "xの変域が-2≦x≦2のとき、yの値はy=<span class='fraction'><span class='top'>1</span>2</span>×(-2) - 2 = -3からy=<span class='fraction'><span class='top'>1</span>2</span>(2) - 2 = -1まで変化するよ。だから、yの変域は-3≦y≦-1だね。",
    image: "/questionImg/math41.png"
  },

]
}



export default {
  math39  : QUIZ_CONTENT,
};
