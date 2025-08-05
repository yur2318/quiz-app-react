const QUIZ_CONTENT = {
  title: "比例のグラフ",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "Aのx<ruby>座標<rt>ざひょう</rt></ruby>は？",
    answers: ["1", "2", "3", "4"],
    correct: "3",
    hint: "x座標は横の位置を表すよ。横に並んでいる目盛りを見てみよう。",
    explanation: "横の位置を表すx座標は、横に並んでいる目盛りを見て数えることができるよ。",
    image: "/questionImg/math01.png"
    },
  {
    id: "02",
    question: "Aのy座標は？",
    answers: ["1", "2", "3", "4"],
    correct: "2",
    hint: "y座標は縦の位置を表すよ。縦に並んでいる目盛りを見てみよう。",
    explanation: "縦の位置を表すy座標は、縦に並んでいる目盛りを見て数えることができるよ。",
    image: "/questionImg/math01.png"
  },
  {
    id: "03",
    question: "Aの座標は？",
    answers: ["(1, 2)", "(2, 3)", "(3, 2)", "(4, 1)"],
    correct: "(3, 2)",
    hint: "座標は(x座標, y座標)の形で表すよ。Aのx座標とy座標を確認してみよう。",
    explanation: "座標は(x座標, y座標)の形で表すよ。Aのx座標は3、y座標は2だから、座標は(3, 2)になるよ。",
    image: "/questionImg/math01.png"
  },
    {
    id: "04",
    question: "Bの座標は？",
    answers: ["(2, 3)", "(2, -3)", "(-2, 3)", "(-3, 2)"],
    correct: "(2, -3)",
    hint: "Bのx座標とy座標を確認してみよう。y座標はマイナスの値だよ。",
    explanation: "Bのx座標は2、y座標は-3だから、座標は(2, -3)になるよ。y座標がマイナスの値になっていることに注意してね。",
    image: "/questionImg/math01.png"
    },
  {
    id: "05",
    question: "Cの座標は？",
    answers: ["(-4, 1)", "(-3, 2)", "(1, -4)", "(-1, 4)"],
    correct: "(-4, 1)",
    hint: "Cのx座標とy座標を確認してみよう。x座標はマイナスの値だよ。",
    explanation: "Cのx座標は-4、y座標は1だから、座標は(-4, 1)になるよ。x座標がマイナスの値になっていることに注意してね。",
    image: "/questionImg/math01.png"
  },
  {
    id: "06",
    question: "Dの座標は？",
    answers: ["(-4, 5)", "(-5, -4)", "(-4, -5)", "(5, -4)"],
    correct: "(-4, -5)",
    hint: "Dのx座標とy座標を確認してみよう。両方ともマイナスの値だよ。",
    explanation: "Dのx座標は-4、y座標は-5だから、座標は(-4, -5)になるよ。両方ともマイナスの値になっていることに注意してね。",
    image: "/questionImg/math01.png"
  },
    {
    id: "07",
    question: "直線fのx座標が1の時のy座標は？",
    answers: ["-2", "0", "2", "4"],
    correct: "2",
    hint: "直線fのグラフを見て、x座標が1の点を探してみよう。",
    explanation: "直線fのグラフを見て、x座標が1の点を探すと、y座標は2になるよ。だから、答えは2だね。",
    image: "/questionImg/math02.png"
  },
  {
    id: "08",
    question: "直線fの式は？",
    answers: ["y = 2x", "y = -2x", "y = x + 1", "y = -x + 1"],
    correct: "y = 2x",
    hint: "xが1の時yが2、xが2の時yが4、になることから考えてみよう。",
    explanation: "xが1の時yが2、xが2の時yが4、直線fの式はy = 2xになるよ。これは、xに2をかけた値がyになるという関係を表しているんだ。",
    image: "/questionImg/math02.png"
  },
  {
    id: "09",
    question: "直線gの式は？",
    answers: ["y = -2x", "y = 2x", "y = x - 1", "y = -<span class='fraction'><span class='top'>1</span>2</span>x"],
    correct: "y = -<span class='fraction'><span class='top'>1</span>2</span>x",
    hint: "xが2の時yが-1、xが4の時yが-2になることから考えてみよう。",
    explanation: "xが2の時yが-1、xが4の時yが-2、直線gの式はy = -<span class='fraction'><span class='top'>1</span>2</span>xになるよ。",
    image: "/questionImg/math02.png"
  },
  {
    id: "10",
    question: "y=4xのグラフを選べ？",
    answers: ["i","f","g","h"],
    correct: "h",
    hint: "y=4xは、xに4をかけた値がyになるという関係を表しているよ。",
    explanation: "xが1の時yが4になるグラフを選ぼう！",
    image: "/questionImg/math03.png"
  },


]
}


export default {
  math27: QUIZ_CONTENT,
};
