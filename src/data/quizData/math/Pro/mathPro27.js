const QUIZ_CONTENT_PRO = {
  title: "比例のグラフ",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "直線gの式の傾きは？",
    answers: [
      "y = -<span class='fraction'><span class='top'>1</span>2</span>x", 
      "y", 
      "x", 
      "-<span class='fraction'><span class='top'>1</span>2</span>"
    ],
    correct: "-<span class='fraction'><span class='top'>1</span>2</span>",
    hint: "傾きは直線の傾斜の度合いを表すもので、比例定数と同じだよ。",
    explanation: "傾きは比例定数と同じだから-<span class='fraction'><span class='top'>1</span>2</span>だよ。",
    image: "/questionImg/math02.png"
  },
  {
    id: "02",
    question: "直線Aの式は？",
    answers: ["y = 2x", "y = -x", "y = x + 1", "y = x"],
    correct: "y = x",
    hint: "x軸とy軸の両方が1ずつ増加するね。",
    explanation: "直線Aはx軸とy軸の両方が1ずつ増加するから、y = 1x、つまりy = xになるよ。",
    image: "/questionImg/math32.png"
  },
  {
    id: "03",
    question: "直線Bの式は？",
    answers: ["y = 2x", "y = -x", "y = x + 1", "y = x"],
    correct: "y = -x",
    hint: "x軸が1増えるとy軸は1減るね。",
    explanation: "直線Bはx軸が1増えるとy軸は1減るから、y = -1x、つまりy = -xになるよ。",
    image: "/questionImg/math32.png"
  },
  {
    id: "04",
    question: "直線Cの式は？",
    answers: ["y = 4x", "x = 4", "y = 4", "y = 2x"],
    correct: "y = 4",
    hint: "y軸の値が常に4だだね。",
    explanation: "直線Cはy軸の値が常に4だから、y = 4になるよ。xは出てこないんだね。",
    image: "/questionImg/math32.png"
  },
  {
    id: "05",
    question: "直線Dの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>1</span>2</span>x",
      "y = -<span class='fraction'><span class='top'>1</span>2</span>x",
      "y = <span class='fraction'><span class='top'>2</span>3</span>x",
      "y = 3x"
    ],
    correct: "y = <span class='fraction'><span class='top'>2</span>3</span>x",
    hint: "yが2のとき、xは3だね。y=□xに置き換えてみよう。",
    explanation: "y=axに置き換えてると、2 = 3a だからこの直線の式はy = <span class='fraction'><span class='top'>2</span>3</span>xになるよ。",
    image: "/questionImg/math32.png"
  },
  {
    id: "06",
    question: "直線Eの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>1</span>3</span>x",
      "y = 4x",
      "y = <span class='fraction'><span class='top'>5</span>2</span>x",
      "y = <span class='fraction'><span class='top'>2</span>5</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>5</span>2</span>x",
    hint: "yが5のとき、xは2だね。y=□xに置き換えてみよう。",
    explanation: "y=axに置き換えてると、5 = 2a だからこの直線の式はy = <span class='fraction'><span class='top'>5</span>2</span>xになるよ。",
    image: "/questionImg/math33.png"
  },
  {
    id: "07",
    question: "直線Fの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>2</span>3</span>x",
      "y = -<span class='fraction'><span class='top'>2</span>3</span>x",
      "y = -<span class='fraction'><span class='top'>3</span>2</span>x",
      "y = <span class='fraction'><span class='top'>3</span>2</span>x"
    ],
    correct: "y = -<span class='fraction'><span class='top'>2</span>3</span>x",
    hint: "yが-2のとき、xは3だね。y=□xに置き換えてみよう。",
    explanation: "y=axに置き換えてると、-2 = 3a だからこの直線の式はy = -<span class='fraction'><span class='top'>2</span>3</span>xになるよ。",
    image: "/questionImg/math33.png"
  },
  {
    id: "08",
    question: "直線Gの式は？",
    answers: [
      "y = 3x",
      "y = 3",
      "x = 3",
      "y = <span class='fraction'><span class='top'>1</span>3</span>x"
    ],
    correct: "x = 3",
    hint: "xの値が常に3だね。",
    explanation: "直線Gはxの値が常に3だから、x = 3になるよ。yは出てこないんだね。",
    image: "/questionImg/math33.png"
  },
  {
    id: "09",    
    question: "直線Hの傾きは？",
    answers: [
      "<span class='fraction'><span class='top'>1</span>5</span>",
      "5",
      "-<span class='fraction'><span class='top'>1</span>5</span>",
      "-5"
    ],
    correct: "<span class='fraction'><span class='top'>1</span>5</span>",
    hint: "傾きは直線の傾斜の度合いを表すもので、比例定数と同じだよ。",
    explanation: "傾きは比例定数と同じだから、直線Hの傾きは<span class='fraction'><span class='top'>1</span>5</span>になるよ。",
    image: "/questionImg/math33.png"
  },
  {
    id: "10",
    question: "直線Hの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>1</span>5</span>x",
      "y = 5x",
      "y = 5",
      "y = -<span class='fraction'><span class='top'>1</span>5</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>1</span>5</span>x",
    hint: "yが1のとき、xは5だね。y=□xに置き換えてみよう。",
    explanation: "y=axに置き換えてると、1 = 5a だからこの直線の式はy = <span class='fraction'><span class='top'>1</span>5</span>xになるよ。",
    image: "/questionImg/math33.png"
  },



]
}



export default {
  mathPro27: QUIZ_CONTENT_PRO
};
