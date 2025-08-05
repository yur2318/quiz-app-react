const QUIZ_CONTENT_PRO = {
  title: "比例のグラフ",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "yがxに反比例し、x=3のときy=-2である。このときの比例定数は？",
    answers: ["-6", "6", "-2", "2"],
    correct: "-6",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、-2 = <span class='fraction'><span class='top'>a</span>3</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、-2 = <span class='fraction'><span class='top'>a</span>3</span>になるよ。a = -6になるね。だから、比例定数は-6だよ。"
  },
  {
    id: "02",
    question: "yがxに反比例し、x=-4のときy=1である。このときの比例定数は？",
    answers: ["4", "-4", "1", "-1"],
    correct: "-4",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、1 = <span class='fraction'><span class='top'>a</span>-4</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、1 = <span class='fraction'><span class='top'>a</span>-4</span>になるよ。a = -4になるね。だから、比例定数は-4だよ。"
  },
  {
    id: "03",
    question: "yがxに反比例し、x=-5のときy=2である。このときの比例定数は？",
    answers:["-2", "2", "-10", "10"],
    correct: "-10",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、2 = <span class='fraction'><span class='top'>a</span>-5</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、2 = <span class='fraction'><span class='top'>a</span>-5</span>になるよ。a = -10になるね。だから、比例定数は-10だよ。"
  },
  {
    id: "05",
    question: "yがxに反比例し、x=2のときy=3の時の式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>3</span>x</span>",
      "y = <span class='fraction'><span class='top'>6</span>x</span>",
      "y = <span class='fraction'><span class='top'>3</span>2</span>x",
      "y = <span class='fraction'><span class='top'>5</span>2</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>6</span>x</span>",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、3 = <span class='fraction'><span class='top'>a</span>2</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、3 = <span class='fraction'><span class='top'>a</span>2</span>になるよ。a = 6になるね。だから、y = <span class='fraction'><span class='top'>6</span>x</span>だよ。",
  },
  {
    id: "06",
    question: "直線hの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>4</span>x</span>", 
      "y = -<span class='fraction'><span class='top'>4</span>x</span>", 
      "y = <span class='fraction'><span class='top'>16</span>x</span>",
      "y = -<span class='fraction'><span class='top'>16</span>x</span>"
    ],
    correct: "y = -<span class='fraction'><span class='top'>4</span>x</span>",
    hint: "xが1の時yが-4、yが1の時xが-4になる反比例のグラフだよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。xが1の時yが-4比例定数をaとすると、-4 = <span class='fraction'><span class='top'>a</span>1</span>になるよ。a = -4だから、y = -<span class='fraction'><span class='top'>4</span>x</span>だよ。",
    image: "/questionImg/math04.png"
  },
   {
    id: "07",
    question: "底辺がxcm、高さがycmの直角三角形の面積が18cm²のとき、yをxの式で表すと？",
    answers: [
      "y = <span class='fraction'><span class='top'>36</span>x</span>",
      "y = 18x",
      "y = <span class='fraction'><span class='top'>18</span>x</span>",
      "xy = 36"
    ],
    correct: "y = <span class='fraction'><span class='top'>36</span>x</span>",
    hint: "直角三角形の面積は、底辺×高さ÷2だよ。面積が18cm²だから、xy÷2 = 18になるね。",
    explanation: "直角三角形の面積は、底辺×高さ÷2だよ。面積が18cm²だから、xy÷2 = 18になるね。両辺に2をかけると、xy = 36になるよ。yをxの式で表すと、y = <span class='fraction'><span class='top'>36</span>x</span>になるね。",
  },

]
}



export default {
  mathPro28: QUIZ_CONTENT_PRO
};
