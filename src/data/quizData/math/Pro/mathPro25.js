const QUIZ_CONTENT_PRO = {
  title: "移項・比",
  subject: "blue",
  data: [
    
  {
    id: "01",
    question: "次の方程式を解きなさい。<br>3x - 4 = 2x + 5",
    answers: ["x = 9", "x = 11", "x = 1", "x = -1"],
    correct: "x = 9",
    hint: "移項すると3x - 2x = 5 + 4になるよ。",
    explanation: "移項すると、3x - 2x = 5 + 4になるよ。つまりx = 9になるんだ。"
  },
  {
    id: "02",
    question: "次の方程式を解きなさい。<br>2x + 3 = 5x - 4",
    answers: [
      "x = <span class='fraction'><span class='top'>7</span>3</span>",
      "x = 7",
      "x = 1",
      "x = -<span class='fraction'><span class='top'>7</span>3</span>"
    ],
    correct: "x = <span class='fraction'><span class='top'>7</span>3</span>",
    hint: "移項すると2x - 5x = -4 - 3になるよ。",
    explanation: "移項すると、2x - 5x = -4 - 3になるよ。つまり-3x = -7、両辺を-3で割ると、x = <span class='fraction'><span class='top'>7</span>3</span>になるんだ。"
  },
  {
    id: "03",
    question: "次の方程式を解きなさい。<br>4x + 2 = 3x + 5",
    answers: ["x = 3", "x = 1", "x = -3", "x = 7"],
    correct: "x = 3",
    hint: "移項すると4x - 3x = 5 - 2になるよ。",
    explanation: "移項すると、4x - 3x = 5 - 2になるよ。つまりx = 3になるんだ。"
  },
  {
    id: "04",
    question: "4:10 = 2:5 のとき、成り立つのは？",
    answers: [
      "4÷2 = 10÷5","4+10 = 2+5","4-10 = 2-5", "4×10 = 2×5"
    ],
    correct: "4÷2 = 10÷5",
    hint: "計算してみよう。",
    explanation: "2:5 = 4:10の時、4÷2 = 10÷5が成り立つね。"
  },
  {
    id: "05",
    question: "a:b = c:d のとき、成り立つのは？",
    answers: [
      "<span class='fraction'><span class='top'>a</span>c</span> = <span class='fraction'><span class='top'>b</span>d</span>",
      "a + b = c + d",
      "a - b = c - d",
      "a × b = c × d"
    ],
    correct: "<span class='fraction'><span class='top'>a</span>c</span> = <span class='fraction'><span class='top'>b</span>d</span>",
    hint: "c÷a = d÷bが成り立つよ。",
    explanation: "a:b = c:dの時、c÷a = d÷b、分数にすると<span class='fraction'><span class='top'>c</span>a</span> = <span class='fraction'><span class='top'>d</span>b</span>が成り立つよ。"
  },
  {
    id: "06",
    question: "<span class='fraction'><span class='top'>a</span>c</span> = <span class='fraction'><span class='top'>b</span>d</span>の分母を払うと？",
    answers: ["ad = bc","ac = bd","ab = cd","a + b = c + d"],
    correct: "ad = bc",
    hint: "両辺にcdをかけるよ。",
    explanation: "両辺にcdをかけると、<span class='fraction'><span class='top'>a</span>c</span> × cd = <span class='fraction'><span class='top'>b</span>d</span> × cdになるよ。つまりad = bcになるんだ。"
  },
  {
    id: "07",
    question: "a:b = c:d のとき、比の性質はどれ？",
    answers: ["a + b = c + d", "a - b = c - d", "ab = cd", "ad = bc"],
    correct: "ad = bc",
    hint: "これまでの問題を思い出してみよう。",
    explanation: "a:b = c:dの時、比の性質はad = bcだよ。つまり、外項aとdをかけたものは、内項bとcをかけたものと等しいんだ。"
  },
  {
    id: "08",
    question: "9:8 = 2:x の時、xの値は？",
    answers: [
      "x = <span class='fraction'><span class='top'>16</span>9</span>",
      "x = 16",
      "x = 18",
      "x = <span class='fraction'><span class='top'>9</span>16</span>"
    ],
    correct: "x = <span class='fraction'><span class='top'>16</span>9</span>",
    hint: "a:b = c:dの時、ad = bcを使うよ。",
    explanation: "比の性質を使うと、9x = 16になるよ。両辺を9で割ると、x = <span class='fraction'><span class='top'>16</span>9</span>になるんだ。"
  },
  {
    id: "09",
    question: "5:3 = 11:x の時、xの値は？",
    answers: [
      "x = <span class='fraction'><span class='top'>33</span>5</span>",
      "x = 15",
      "x = 18",
      "x = <span class='fraction'><span class='top'>5</span>33</span>"
    ],
    correct: "x = <span class='fraction'><span class='top'>33</span>5</span>",
    hint: "a:b = c:dの時、ad = bcを使うよ。",
    explanation: "比の性質を使うと、5x = 33になるよ。両辺を5で割ると、x = <span class='fraction'><span class='top'>33</span>5</span>になるんだ。"
  },
  {
    id: "10",
    level: "hard",
    question: "ある地図で、実際の距離6kmが3cmで表されている。この縮尺は？",
    answers: [
      "1:200,000",
      "1:100,000",
      "1:50,000",
      "1:20,000"
    ],
    correct: "1:200,000",
    hint: "6km = 600,000cmだから600,000 : 3 = x : 1 を解いてみよう。",
    explanation: "6km = 600,000cm、600,000 : 3 = x : 1 を解くと、x = 200,000になるよ。つまり縮尺は1:200,000だね。"
  }
  ]
  }
export default {
  mathPro25: QUIZ_CONTENT_PRO
};
