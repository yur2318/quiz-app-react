const QUIZ_CONTENT = {
  title: "反比例",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "100kmの道のりを時速xkmで走るとy時間かかる時、yをxの式で表せ。",
    answers: [
      "y = <span class='fraction'><span class='top'>100</span>x</span>",
      "y = <span class='fraction'><span class='top'>x</span>100</span>",
      "y = 100x", 
      "y = 100+x"
    ],
    correct: "y = <span class='fraction'><span class='top'>100</span>x</span>",
    hint: "道のり ÷ 速さ = 時間だよ。",
    explanation: "道のりは100km、速さはxkm/hだから、時間は100 ÷ x = <span class='fraction'><span class='top'>100</span>x</span>時間になるよ。"
  },
  {
    id: "02",
    question: "関数の式の中でも、 「ｙ＝<span class='fraction'><span class='top'>□</span>x</span>」のような形で表せる式を何という？",
    answers: ["比例", "反比例", "一次関数", "二次関数"],
    correct: "反比例",
    hint: "",
    explanation: "　「ｙ＝<span class='fraction'><span class='top'>□</span>x</span>」の形で表せる式は反比例だよ。この□の部分を比例定数というよ。"
 },
  {
    id: "03",
    question: "次のうち、yがxに反比例する式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>6</span>x</span>",
      "y = 6x",
      "y + x",
      "x = 2"
    ],
    correct: "y = <span class='fraction'><span class='top'>6</span>x</span>",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>の形になっているものを選んでね。",
    explanation: "yがxに反比例する式はxy = 6だよ。y = <span class='fraction'><span class='top'>6</span>x</span>の形になっているね。比例定数は6だよ。"
  },
    {
    id: "04",
    question: "yがxに反比例し、x=3のときy=6である。このときの比例定数は？",
    answers: ["12", "3", "6", "18"],
    correct: "18",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、6 = <span class='fraction'><span class='top'>a</span>3</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、6 = <span class='fraction'><span class='top'>a</span>3</span>になるよ。a = 18になるね。だから、比例定数は18だよ。"
  },
  {
    id: "05",
    question: "yがxに反比例し、x=2のときy=4の時の式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>8</span>x</span>", 
      "y = <span class='fraction'><span class='top'>2</span>x</span>", 
      "y = <span class='fraction'><span class='top'>4</span>x</span>", 
      "y = <span class='fraction'><span class='top'>2</span>4</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>8</span>x</span>",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、4 = <span class='fraction'><span class='top'>a</span>2</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、4 = <span class='fraction'><span class='top'>a</span>2</span>になるよ。a = 8になるね。だから、式はy = <span class='fraction'><span class='top'>8</span>x</span>だよ。"
  },
  {
    id: "06",
    question: "yがxに反比例し、x=-6のときy=6である。このときの比例定数は？",
    answers:["-36", "6", "-6", "36"],
    correct: "-36",
    hint: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、6 = <span class='fraction'><span class='top'>a</span>-6</span>になるよ。",
    explanation: "y=<span class='fraction'><span class='top'>□</span>x</span>に置き換えてみよう。比例定数をaとすると、6 = <span class='fraction'><span class='top'>a</span>-6</span>になるよ。a = -36になるね。だから、比例定数は-36だよ。"
  },
  {
    id: "07",
    question: "直線iの式は？",
    answers: [
      "y = 4x", 
      "y = <span class='fraction'><span class='top'>4</span>x</span>", 
      "y = -<span class='fraction'><span class='top'>4</span>x</span>", 
      "y = 4"
    ],
    correct: "y = 4x",
    hint: "比例のグラフだね。",
    explanation: "xが1の時yが4、xが2の時yが2、が両方成り立つのはy = 4xだよ。これは比例のグラフだね。",
    image: "/questionImg/math04.png"
  },
   {
    id: "08",
    question: "曲線gは？",
    answers: ["比例のグラフ", "反比例のグラフ"],
    correct: "反比例のグラフ",
    hint: "原点を中心とした対称な２つの曲線は反比例のグラフだよ。",
    explanation: "反比例のグラフは、原点を中心とした対称な２つの曲線になるよ。",
    image: "/questionImg/math04.png"
  },
  {
    id: "09",
    question: "曲線gの式で、xが1の時のyの値は？",
    answers: [
      "2", 
      "1", 
      "-2", 
      "-1"
    ],
    correct: "2",
    hint: "",
    explanation: "xが1の時yが2、xが2の時yが1になっているね。",
    image: "/questionImg/math04.png"
  },
  {
    id: "10",
    question: "曲線gの式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>2</span>x</span>",
      "y = -<span class='fraction'><span class='top'>2</span>x</span>",
      "y = <span class='fraction'><span class='top'>4</span>x</span>",
      "y = -<span class='fraction'><span class='top'>1</span>4</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>2</span>x</span>",
    hint: "xが1の時yが2、xが2の時yが1になることから考えてみよう。",
    explanation: "xが1の時yが2、xが2の時yが1、が両方成り立つのはy=<span class='fraction'><span class='top'>2</span>x</span>だよ。",
    image: "/questionImg/math04.png"
  }


]
}



export default {
  math28
  : QUIZ_CONTENT,
};
