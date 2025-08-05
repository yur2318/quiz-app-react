const QUIZ_CONTENT = {
  title: "関数・比例",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "ｘの値が決まると、ｙの値が１つに決まる関係を何という？",
    answers: ["関数", "比例", "反比例", "一次関数"],
    correct: "関数",
    hint: "",
    explanation: "ｘの値が決まると、ｙの値が１つに決まる関係を関数というよ。"
  },
    {
    id: "02",
    question: "1個100円のリンゴをx個買ったときの代金がy円",
    answers: ["yはxの関数", "yはxの関数ではない"],
    correct: "yはxの関数",
    hint: "xの値が決まると、yの値が1つに決まるかな。",
    explanation: "1個100円のリンゴをx個買ったときの代金はyは100xになるよ。xの値が決まると、yの値が1つに決まるから、yはxの関数だね。"
  },
  {
    id: "03",
    question: "弟の年齢がx歳のとき、兄の年齢がy歳",
    answers: ["yはxの関数", "yはxの関数ではない"],
    correct: "yはxの関数ではない",
    hint: "xの値が決まると、yの値が1つに決まるかな。",
    explanation: "弟の年齢によって兄の年齢は決まらないよね、yはxの関数ではないよ。"
  },
  {
    id: "04",
    question: "縦xcm、横4cmの長方形の面積をycm²とする時、yをxの式で表せ。",
    answers: ["y = 4x", "y = x + 4", "y = x - 4", "y = 4 - x"],
    correct: "y = 4x",
    hint: "長方形の面積は縦×横で出せるよ。",
    explanation: "長方形の面積は縦×横で出せるよ。x × 4 = yだから、y = 4xになるよ。"
  },
  {
    id: "05",
    question: "関数の式の中でも、 「ｙ＝□ｘ」のような形で表せる式を何という？",
    answers: ["比例", "反比例", "一次関数", "二次関数"],
    correct: "比例",
    hint: "",
    explanation: "「ｙ＝□ｘ」の形で表せる式は比例だよ。この□の部分を比例定数というよ。"
 },
  {
    id: "06",
    question: "次のうち、yがxに比例する式は？",
    answers: ["y = 3x","xy = 6","y + x","x = 2"],
    correct: "y = 3x",
    hint: "y=□xの形になっているものを選んでね。",
    explanation: "yがxに比例する式はy = 3xだよ。y = □xの形になっているね。比例定数は3だよ。"
  },
    {
    id: "07",
    question: "yがxに比例し、x=3のときy=6である。このときの比例定数は？",
    answers: ["2", "3", "6", "<span class='fraction'><span class='top'>1</span>2</span>"],
    correct: "2",
    hint: "y=□xに置き換えてみよう。比例定数をaとすると、6 = 3aになるよ。",
    explanation: "y=□xに置き換えてみよう。比例定数をaとすると、6 = 3aになるよ。a = 2になるね。だから、比例定数は2だよ。"
  },
  {
    id: "08",
    question: "yがxに比例し、x=2のときy=6の時の式は？",
    answers: ["y = 3x", "y = 2x", "y = 6x", "y = x"],
    correct: "y = 3x",
    hint: "比例定数をaとすると、6 = 2aになるから「a=3」と出るね。",
    explanation: "x=2のときy=6だから、比例定数をaとすると、6 = 2aになるよ。a = 3になるね。だから、y = 3xが正解だよ。"
  },
  {
    id: "09",
    question: "yがxに比例し、x=9のときy=3である。このときの比例定数は？",
    answers: ["3", "6", "9", "<span class='fraction'><span class='top'>1</span>3</span>"],
    correct: "<span class='fraction'><span class='top'>1</span>3</span>",
    hint: "比例定数をaとすると、3 = 9aになるよ。",
    explanation: "y=□xに置き換えてみよう。比例定数をaとすると、3 = 9aになるよ。a = <span class='fraction'><span class='top'>1</span>3</span>になるね。"
  },
  {
    id: "10",
    question: "y=6xのとき、x=4のときのyの値は？",
    answers: ["24", "12", "18", "6"],
    correct: "24",
    hint: "y=6xにx=4を代入して計算してみよう。",
    explanation: "y=6xにx=4を代入すると、y=6×4=24になるよ。だから、答えは24だね。"
  },


]
}


export default {
  math26: QUIZ_CONTENT,
};
