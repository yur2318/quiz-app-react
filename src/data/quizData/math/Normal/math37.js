const QUIZ_CONTENT = {
  title: "一次関数",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "y=ax + b の形で表せるものをなんというか？",
    answers: ["yがxの一次関数", "yがxの二次関数", "yがxの三次関数", "yがxの定数関数"],
    correct: "yがxの一次関数",
    hint: "yがxに比例する関係を考えてみよう。",
    explanation: "y=ax + b の形で表せるものは、yがxの一次関数だよ。一次関数は直線のグラフを描くんだ。"
  },
  {
    id: "02",
    question: "次の式はyがxの一次関数か<br>y = 3x + 2",
    answers: ["一次関数である", "一次関数ではない"],
    correct: "一次関数である",
    hint: "yがxの一次関数の形はどうなっているかな？",
    explanation: "y = 3x + 2はy=ax + bの形をしているから、yがxの一次関数であるよ。ここではa=3, b=2だね。",
  },
  {
    id: "03",
    question: "次の式はyがxの一次関数か<br>y = x² + 3",
    answers: ["一次関数ではない", "一次関数である"],
    correct: "一次関数ではない",
    hint: "yがxの一次関数の形はどうなっているかな？",
    explanation: "y = x² + 3はy=ax + bの形ではないから、yがxの一次関数ではないよ。xが二乗されている二次式で、これは二次関数なんだ。",
  },
  {
    id: "04",
    question: "次の式はyがxの一次関数か<br>y = <span class='fraction'><span class='top'>6</span>x</span> + 5",
    answers: ["一次関数である", "一次関数ではない"],
    correct: "一次関数ではない",
    hint: "yがxの一次関数の形はどうなっているかな？",
    explanation: "y = <span class='fraction'><span class='top'>6</span>x</span> + 5はy=ax + bの形をしていないから、yがxの一次関数ではないよ。分母にxがあるのは別物なんだ。",
  },
  {
    id: "05",
    question: "次の式はyがxの一次関数か<br>y = -x",
    answers: ["一次関数である", "一次関数ではない"],
    correct: "一次関数である",
    hint: "yがxの一次関数の形はどうなっているかな？",
    explanation: "y = -xはy=ax + bの形をしているから、yがxの一次関数であるよ。ここではa=-1, b=0だね。",
  },
  {
    id: "06",
    question: "次の関係を式にした時、yがxの一次関数になるか。<br>縦xcm、横6cmの長方形の面積はycm²である。",
    answers: ["一次関数である", "一次関数ではない"],
    correct: "一次関数である",
    hint: "式にするとx × 6 = yになるよ。",
    explanation: "式にするとx × 6 = yになるよ。これはy=6xとなるから一次関数と言えるよ。"
  },
  {
    id: "07",
    question: "次の関係を式にした時、yがxの一次関数になるか。<br>縦xcm、横ycmの長方形の面積は24cm²である。",
    answers: ["一次関数ではない", "一次関数である"],
    correct: "一次関数ではない",
    hint: "式にするとx × y = 24になるよ。",
    explanation: "式にするとx × y = 24になるよ。これはy=<span class='fraction'><span class='top'>24</span>x</span>となるから、yがxの一次関数ではないよ。"
  },
  {
    id: "08",
    question: "「ｘの値の変化に対して、ｙの値がどれくらいの割合で変化したか」を表す値をなんというか？",
    answers: ["変化の割合", "切片", "比例定数", "変化率"],
    correct: "変化の割合",
    hint: "",
    explanation: "「ｘの値の変化に対して、ｙの値がどれくらいの割合で変化したか」を表す値は「変化の割合」と言うよ。"
  },
  {
    id: "09",
    question: "変化の割合を求める式は？",
    answers: [
      "<span class='fraction'><span class='top'>yの増加量</span>xの増加量</span>",
      "<span class='fraction'><span class='top'>xの増加量</span>yの増加量</span>", 
      "xy", 
      "x + y"
    ],
    correct: "<span class='fraction'><span class='top'>yの増加量</span>xの増加量</span>",
    hint: "変化の割合は、ｘの値の変化に対して、ｙの値がどれくらいの割合で変化したかを表すよ。",
    explanation: "変化の割合は、<span class='fraction'><span class='top'>yの増加量</span>xの増加量</span>で求めることができるよ。yの増加量をxの増加量で割るんだね。"
  },
  {
    id: "10",
    question: "一次関数y = 2x + 1で、xの値が1から4まで増加したとき、yの値はどれくらい増加するか？",
    answers: ["6", "7", "8", "9"],
    correct: "6",
    hint: "ｘの値が１のとき、ｙの値は３、ｘの値が４のとき、ｙの値は９になるよ。",
    explanation: "ｘの値が１のとき、ｙの値は３、ｘの値が４のとき、ｙの値は９になるよ。だから、ｙの値は９−３＝６増加するんだ。"
  },
  {
    id: "11",
    question: "一次関数y = 3x + 1で、xの値が3増加した時、yの値は6増加した。この時の変化の割合は？",
    answers: ["2", "3", "4", "5"],
    correct: "2",
    hint: "変化の割合は、yの増加量をxの増加量で割ったものだよ。",
    explanation: "変化の割合は、yの増加量をxの増加量で割ったものだよ。ここでは、yの増加量は6、xの増加量は3だから、変化の割合は6 ÷ 3 = 2になるんだ。"
  },
  {
    id: "12",
    level: "hard",
    question: "一次関数y=ax + bにおいて、変化の割合は？",
    answers: ["a", "b", "ax", "y"],
    correct: "a",
    hint: "",
    explanation: "一次関数y=ax + bの式では、変化の割合は常にaだよ。便利だから、覚えておこう！"
  },
  

]
}



export default {
  math37
  : QUIZ_CONTENT,
};
