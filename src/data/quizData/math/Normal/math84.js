const QUIZ_CONTENT = {
  title: "回転図など",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "直線lを一回転させてできる立体は？",
    answers: ["円柱", "円すい", "三角柱", "三角すい"],
    correct: "円柱",
    hint: "直線lを中心に回転させてできる立体を考えてみよう。",
    explanation: "回転するから、円の底面と円の上面ができるね。",
    image: "/questionImg/math13.png"
  },
  {
    id: "02",
    question: "直線mを一回転させてできる立体は？",
    answers: ["円柱", "円すい", "三角柱", "三角すい"],
    correct: "円すい",
    hint: "直線mを中心に回転させてできる立体を考えてみよう。",
    explanation: "回転させると円の底面と頂点ができるね。回転図では底面が三角形や四角形になることはないね。",
    image: "/questionImg/math13.png"
  },
  {
    id: "03",
    question: "Aは何の図形の<ruby>投影図<rt>とうえいず</rt></ruby>？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "円柱",
    hint: "上が横から見た図で、下が上から見た図だよ。",
    explanation: "横から見た時に長方形になっていて、上から見た時に円になっているから円柱だよ。",
    image: "/questionImg/math14.png"
  },
  {
    id: "04",
    question: "Bは何の図形の投影図？",
    answers: ["三角柱", "三角すい",  "円柱", "円すい"],
    correct: "三角すい",
    hint: "横から見た時は三角形で、上から見ても三角形だね。",
    explanation: "横から見た時に三角形になっていて、上から見た時も三角形になっているから三角すいだよ。",
    image: "/questionImg/math14.png"
  },
  {
    id: "05",
    question: "Cは何の図形の投影図？",
    answers: ["三角柱", "三角すい", "四角すい", "四角柱"],
    correct: "四角すい",
    hint: "横から見た時は三角形で、上から見た時は四角形だよ。",
    explanation: "横から見た時に三角形になっていて、上から見た時に四角形になっているから四角すいだよ。",
    image: "/questionImg/math15.png"
  },
  {
    id: "06",
    question: "Dは何の図形の投影図？",
    answers: ["円", "球", "円すい", "円柱"],
    correct: "球",
    hint: "どこから見ても円になっているよ。",
    explanation: "どの方向から見ても円になっているから、これは球だよ。",
    image: "/questionImg/math15.png"
  },
  {
    id: "07",
    question: "Aは何の図形の展開図？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "円すい",
    hint: "頭の中で組み立ててみよう。",
    explanation: "Aの展開図は、円すいの展開図だよ。底面が円で、側面が扇形になっているね。",
    image: "/questionImg/math16.png"
  },
  {
    id: "08",
    question: "Bは何の図形の展開図？",
    answers: ["三角柱", "三角すい", "四角すい", "四角柱"],
    correct: "四角すい",
    hint: "頭の中で組み立ててみよう。",
    explanation: "Bの展開図は、四角すいの展開図だよ。底面が四角形で、側面が三角形になっているね。",
    image: "/questionImg/math16.png"
  },
  
]
}



export default {
  math84: QUIZ_CONTENT,
};
