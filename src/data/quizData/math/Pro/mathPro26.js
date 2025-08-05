const QUIZ_CONTENT_PRO = {
  title: "関数・比例",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "yがxに比例し、x=5のときy=10である。このときの比例定数は？",
    answers: ["2", "5", "10", "<span class='fraction'><span class='top'>1</span>2</span>"],
    correct: "2",
    hint: "比例定数をaとすると、10 = 5aになるよ。",
    explanation: "y=□xに置き換えてみよう。比例定数をaとすると、10 = 5aになるよ。a = 2になるね。だから、比例定数は2だよ。"
  },
  {
    id: "02",
    question: "yがxに比例し、x=2のときy=5の時の式は？",
    answers: [
      "y = <span class='fraction'><span class='top'>5</span>2</span>x",
      "y = <span class='fraction'><span class='top'>2</span>5</span>x",
      "y = -<span class='fraction'><span class='top'>5</span>2</span>x",
      "y = -<span class='fraction'><span class='top'>2</span>5</span>x"
    ],
    correct: "y = <span class='fraction'><span class='top'>5</span>2</span>x",
    hint: "y=□xに置き換えてみよう。比例定数をaとすると、5 = 2aになるよ。",
    explanation: "y=□xに置き換えてみよう。比例定数をaとすると、5 = 2aになるよ。a = <span class='fraction'><span class='top'>5</span>2</span>になるね。だから、式はy = <span class='fraction'><span class='top'>5</span>2</span>xだよ。"
  },
  {
    id: "03",
    question: "yがxに比例し、x=12のときy=3である。このときの比例定数は？",
    answers: [
      "<span class='fraction'><span class='top'>1</span>4</span>",
      "<span class='fraction'><span class='top'>1</span>3</span>",
      "6", 
      "9", 
    ],
    correct: "<span class='fraction'><span class='top'>1</span>4</span>",
    hint: "比例定数をaとすると、3 = 12aになるよ。",
    explanation: "y=□xに置き換えてみよう。比例定数をaとすると、3 = 12aになるよ。a = <span class='fraction'><span class='top'>1</span>4</span>になるね。だから、比例定数は<span class='fraction'><span class='top'>1</span>4</span>だよ。"
  },
  {
    id: "04",
    question: "y=6xのとき、x=4のときのyの値は？",
    answers: ["24", "12", "18", "6"],
    correct: "24",
    hint: "y=6xにx=4を代入して計算してみよう。",
    explanation: "y=6xにx=4を代入すると、y=6×4=24になるよ。だから、答えは24だね。"
  },
  {
    id: "05",
    question: "y=3xのとき、x=7のときのyの値は？",
    answers: ["21", "14", "10", "7"],
    correct: "21",
    hint: "y=3xにx=7を代入して計算してみよう。",
    explanation: "y=3xにx=7を代入すると、y=3×7=21になるよ。だから、答えは21だね。"
  },
  {
    id: "06",
    question: "y=<span class='fraction'><span class='top'>1</span>2</span>xのとき、x=8のときのyの値は？",
    answers: [
      "4",
      "2",
      "8",
      "16", 
    ],
    correct: "4",
    hint: "y=<span class='top'>1</span>2</span>xにx=8を代入して計算してみよう。",
    explanation: "y=<span class='top'>1</span>2</span>xにx=8を代入すると、y=<span class='top'>1</span>2</span>×8=<span class='fraction'><span class='top'>8</span>2</span>=4になるよ。だから、答えは4だね。"
  },
  {
    id: "07",
    question: "y=<span class='fraction'><span class='top'>1</span>2</span>xのとき、x=5のときのyの値は？",
    answers: [
      "<span class='fraction'><span class='top'>5</span>2</span>",
      "<span class='fraction'><span class='top'>5</span>4</span>",
      "5",
      "10", 
    ],
    correct: "<span class='fraction'><span class='top'>5</span>2</span>",
    hint: "y=<span class='top'>1</span>2</span>xにx=5を代入して計算してみよう。",
    explanation: "y=<span class='top'>1</span>2</span>xにx=5を代入すると、y=<span class='top'>1</span>2</span>×5=<span class='fraction'><span class='top'>5</span>2</span>になるよ。だから、答えは<span class='fraction'><span class='top'>5</span>2</span>だね。"
    },
    {
    id: "08",
    question: "y=2xのとき、y=10のときのxの値は？",
    answers: ["5", "10", "20", "<span class='fraction'><span class='top'>10</span>2</span>"],
    correct: "5",
    hint: "y=2xにy=10を代入して、xを求めてみよう。",
    explanation: "y=2xにy=10を代入すると、10=2xになるよ。両辺を2で割ると、x=5になるね。だから、答えは5だよ。"
  },
  {
    id: "09",
    question: "プールに毎分20Lずつ水を入れたときの、x分後の水の量をyLとした時、yをxの式で表せ。",
    answers: [
      "y = 20x",
      "y = 20 + x",
      "y = 20 - x",
      "y = x - 20"
    ],
    correct: "y = 20x",
    hint: "水の量は時間に比例するよ。",
    explanation: "水の量は時間に比例するよ。毎分20Lずつ入れるから、x分後の水の量はy=20xになるね。"
  },
  {
    id: "10",
    level: "hard",
    question: "縦xcm、横ycm の長方形の周の長さが14cmである時、yをxの式で表せ。",
    answers: [
      "y = -x + 14",
      "y = x - 14",
      "y = -x + 7",
      "y = 2x - 14"
    ],
    correct: "y = -x + 7",
    hint: "周の長さを式にすると2(x+y)=14だね。",
    explanation: "周の長さは2×(縦+横)で求められるよ。2(x+y)=14になるね。両辺を2で割ると、x+y=7になるよ。ここからyを求めると、y=7-xになるね。"
  }

]
}



export default {
  mathPro26: QUIZ_CONTENT_PRO
};
