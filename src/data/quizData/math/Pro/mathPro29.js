const QUIZ_CONTENT_PRO = {
  title: "比例のグラフ",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "x² + 2x + 1の次数は？",
    answers: ["2", "1", "3", "0"],
    correct: "2",
    hint: "項の中で一番大きい次数を考えよう。",
    explanation: "x²の次数は2、2xの次数は1、1の次数は0だよ。文字の数は足さずに、項の中で一番大きい次数を考えるから、答えは2だよ。"
  },
  {
    id: "02",
    question: "p<sup class='sup'>2</sup>q<sup class='sup'>3</sup>の次数は？",
    answers: ["2", "3", "5", "6"],
    correct: "5",
    hint: "項の次数は、かけられている文字の個数だよ。 p²q<sup class='sup'>3</sup>はp × p × q × q × qだね。",
    explanation: "p²q<sup class='sup'>3</sup>はpが2つ、qが3つかけられているから、合計で5つの文字がかけられているね。だから、次数は5だよ。"
  },
  {
    id: "03",
    question: "3x<sup class='sup'>3</sup>y + 4xy + 5の次数は？",
    answers: ["3", "4", "5", "6"],
    correct: "4",
    hint: "項の中で一番大きい次数を考えよう。",
    explanation: "3x<sup class='sup'>3</sup>yの次数は4、4xyの次数は2、5の次数は0だよ。文字の数は足さずに、項の中で一番大きい次数を考えるから、答えは4だよ。"
  },
   {
    id: "04",
    question: "3y + 2x + 1の次数は？",
    answers: ["1", "2", "3", "0"],
    correct: "1",
    hint: "項の中で一番大きい次数を考えよう。",
    explanation: "3yの次数は1、2xの次数は1、1の次数は0だよ。文字の数は足さずに、項の中で一番大きい次数を考えるから、答えは1だよ。"  
  },
  {
    id: "05",
    question: "2x + 3y - x + 4y",
    answers: ["x + 7y", "x + 3y", "2x + 7y", "2x + 3y"],
    correct: "x + 7y",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "2x - xはx、3y + 4yは7yになるから、答えはx + 7yだよ。"
  },
  {
    id: "06",
    question: "5a - 2b + a - b",
    answers: ["6a - 3b", "6a - b", "4a - b", "4a - 3b"],
    correct: "6a - 3b",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "5a + aは6a、-2b - bは-3bになるから、答えは6a - 3bだよ。"
  },
  {
    id: "07",
    question: "4x + 5y - 2x + 3y",
    answers: ["2x + 8y", "2x + 2y", "6x + 8y", "6x + 2y"],
    correct: "2x + 8y",
    hint: "同じ文字の項をまとめてみよう。",
    explanation: "4x - 2xは2x、5y + 3yは8yになるから、答えは2x + 8yだよ。"
  }
]
}



export default {
  mathPro29: QUIZ_CONTENT_PRO
};
