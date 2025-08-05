const QUIZ_CONTENT = {
  title: "多項式と次数",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "8x のように一つの項からなる式を何という？",
    answers: ["単項式", "多項式", "定数", "変数"],
    correct: "単項式",
    hint: "",
    explanation: "項の数が1つの式を<ruby>単項式<rt>たんこうしき</rt></ruby>というよ"
   },
  {
    id: "02",
    question: "9x + 3のように複数の項からなる式を何という？",
    answers: ["単項式", "多項式", "定数", "変数"],
    correct: "多項式",
    hint: "",
    explanation: "項の数が2つ以上の式を<ruby>多項式<rt>たこうしき</rt></ruby>というよ。9x,3はという2つの項があるね。"
  },
  {
    id: "03",
    question: "6x²の項の次数は？",
    answers: ["2", "1", "3", "0"],
    correct: "2",
    hint: "<ruby>次数<rt>じすう</rt></ruby>は、かけられている文字の個数だよ。6x²は6 × x × xだね。",
    explanation: "かけられている文字の個数を次数というよ。6x²はxが2つかけられているから、次数は2だよ。"
  },
    {
    id: "04",
    question: "3x²yの次数は？",
    answers: ["2", "3", "1", "0"],
    correct: "3",
    hint: "項の次数は、かけられている文字の個数だよ。3x²yは3 × x × x × yだね。",
    explanation: "かけられている文字の個数を次数というよ。3x²yはxが2つ、yが1つかけられているから、合計で3つの文字がかけられているね。だから、次数は3だよ。"
  },
  {
    id: "05",
    question: "3x²y + 4xy + 5の次数は？",
    answers: ["2", "3", "1", "0"],
    correct: "3",
    hint: "項の中で一番大きい次数を考えよう。",
    explanation: "3x²yの次数は3、4xyの次数は2、5の次数は0だよ。文字の数は足さずに、項の中で一番大きい次数を考えるから、答えは3だよ。"
  },
  {
    id: "06",
    question: "x² + 2x + 1の次数は？",
    answers: ["2", "1", "3", "0"],
    correct: "2",
    hint: "項の中で一番大きい次数を考えよう。",
    explanation: "x²の次数は2、2xの次数は1、1の次数は0だよ。文字の数は足さずに、項の中で一番大きい次数を考えるから、答えは2だよ。"
  },
  {
    id: "07",
    question: "p<sup class='sup'>2</sup>q<sup class='sup'>3</sup>の次数は？",
    answers: ["2", "3", "5", "6"],
    correct: "5",
    hint: "項の次数は、かけられている文字の個数だよ。 p²q<sup class='sup'>3</sup>はp × p × q × q × qだね。",
    explanation: "p²q<sup class='sup'>3</sup>はpが2つ、qが3つかけられているから、合計で5つの文字がかけられているね。だから、次数は5だよ。"
  },
   {
    id: "08",
    question: "3y + 2z",
    answers: ["5y", "5z", "3y + 2z", "5yz"],
    correct: "3y + 2z",
    hint: "異なる文字の項はまとめられないよ。",
    explanation: "3y + 2zは異なる文字の項なのでまとめられないよ。そのまま3y + 2zになるんだ。"
  },
  {
    id: "09",
    question: "5x + 2y - 3x",
    answers: ["2x + 2y", "2x - 2y", "3x + 2y", "5y - 3x"],
    correct: "2x + 2y",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "5x - 3xは2xになるから、2x + 2yが正解だよ。"
  },
  {
    id: "10",
    question: "3a + 2b - a",
    answers: ["2a + 2b", "3a - a + 2b", "a + 2b", "5b"],
    correct: "2a + 2b",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "3a - aは2aになるから、2a + 2bが正解だよ。"
  },


]
}



export default {
  math29
  : QUIZ_CONTENT,
};
