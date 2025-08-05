const QUIZ_CONTENT = {
  title: "分数の特徴",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "100÷2と同じ意味の式は？",
    answers: [
      "100×2",
      "100×<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span>",
    ],
    correct: "100×<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "割り算は分数の掛け算に直せるよ。100÷2は100×<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span>と同じ意味だよ。これは便利だから覚えておこう！",
    image: ""
  },
    {
    id: "02",
    question: "57÷3と同じ意味の式は？",
    answers: [
      "57×3",
      "57×<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span>",
    ],
    correct: "57×<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "割り算は分数の掛け算に直せるよ。57÷3は57×<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span>と同じ意味だよ。",
    image: ""
  },
    {
    id: "03",
    question: "58÷3",
    answers: [
      "18",
      "<span class='fraction'><span class='top'>58</span><span class='bottom'>3</span></span>",
      "19",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>58</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>58</span><span class='bottom'>3</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "58÷3は58×<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span>と同じだから答えは<span class='fraction'><span class='top'>58</span><span class='bottom'>3</span></span>だよ。",
    image: ""
  },
    {
    id: "04",
    question: "13÷4",
    answers: [
      "3",
      "<span class='fraction'><span class='top'>13</span><span class='bottom'>4</span></span>",
      "4",
      "<span class='fraction'><span class='top'>4</span><span class='bottom'>13</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>13</span><span class='bottom'>4</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "13÷4は13×<span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span>と同じだから答えは<span class='fraction'><span class='top'>13</span><span class='bottom'>4</span></span>だよ。",
    image: ""
  },
  {
    id: "05",
    question: "42 ÷ <span class='fraction'><span class='top'>5</span><span class='bottom'>6</span></span>と同じ意味の式は？",
    answers: [
      "42 × <span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span>",
      "42 × <span class='fraction'><span class='top'>5</span><span class='bottom'>6</span></span>",
    ],
    correct: "42 × <span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "割り算は分数の掛け算に直せるよ。42 ÷ <span class='fraction'><span class='top'>5</span><span class='bottom'>6</span></span> は 42 × <span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span> と同じ意味だよ。",
    image: ""
  },
  {
    id: "06",
    question: "4÷<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>と同じ意味の式は？",
    answers: [
      "4×<span class='fraction'><span class='top'>2</span><span class='bottom'>3</span></span>",
      "4×<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
    ],
    correct: "4×<span class='fraction'><span class='top'>2</span><span class='bottom'>3</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "割り算は分数の掛け算に直せるよ。4 ÷ <span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span> は 4 × <span class='fraction'><span class='top'>2</span><span class='bottom'>3</span></span> と同じ意味だよ。",
    image: ""
  },
   {
    id: "07",
    question: "4÷<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
    answers: [
      "2",
      "<span class='fraction'><span class='top'>8</span><span class='bottom'>3</span></span>",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>8</span></span>",
      "<span class='fraction'><span class='top'>4</span><span class='bottom'>3</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>8</span><span class='bottom'>3</span></span>",
    hint: "割り算は分数の掛け算に直せるよ！",
    explanation: "4 ÷ <span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span> は 4 × <span class='fraction'><span class='top'>2</span><span class='bottom'>3</span></span> = <span class='fraction'><span class='top'>8</span><span class='bottom'>3</span></span> になるよ。",
  },

  {
    id: "08",
    question: "<span class='fraction'><span class='top'>7</span><span class='bottom'>112</span></span>を割り算の式にすると？",
    answers: ["7÷112","112÷7"],
    correct: "7÷112",
    hint: "分数の割り算は分子を分母で割るよ！",
    explanation: "<span class='fraction'><span class='top'>7</span><span class='bottom'>112</span></span> は 7 ÷ 112 と同じ意味だよ。ちなみに答えは分数だと1/16、小数だと0.0625になるよ。",
  },

  {
    id: "09",
    question: "<span class='fraction'><span class='top'>1</span><span class='bottom'>8</span></span>を割り算の式にすると？",
    answers: ["1÷8","8÷1"],
    correct: "1÷8",
    hint: "分数の割り算は分子を分母で割るよ！",
    explanation: "<span class='fraction'><span class='top'>1</span><span class='bottom'>8</span></span> は 1 ÷ 8 と同じ意味だよ。だから<span class='fraction'><span class='top'>1</span><span class='bottom'>8</span></span>は少数で表すと0.125になるよ。",
  },
  {
  id: "10",
  question: "<span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span>を割り算の式にすると？",
  answers: ["6÷5","5÷6"],
  correct: "6÷5",
  hint: "分数の割り算は分子を分母で割るよ！",
  explanation: "<span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span> は 6 ÷ 5 と同じ意味だよ。だから<span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span>は少数で表すと1.2になるよ。",
}
]


}

export default {
  math12: QUIZ_CONTENT,
};
