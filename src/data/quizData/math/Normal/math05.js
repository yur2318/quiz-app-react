const QUIZ_CONTENT = {
  title: "分数の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> × <span class='fraction'><span class='top'>3</span><span class='bottom'>8</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>16</span></span>",
      "<span class='fraction'><span class='top'>13</span><span class='bottom'>6</span></span>",
      "<span class='fraction'><span class='top'>2</span><span class='bottom'>14</span></span>",
      "<span class='fraction'><span class='top'>6</span><span class='bottom'>8</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>3</span><span class='bottom'>16</span></span>",
    hint: "分母、分子をそれぞれかけるよ",
    explanation: "分母は2×8=16、分子は1×3=3だから、<span class='fraction'><span class='top'>3</span><span class='bottom'>16</span></span> になるよ。"
  },
  {
    id: "02",
    question: "<span class='fraction'><span class='top'>3</span><span class='bottom'>6</span></span> × <span class='fraction'><span class='top'>5</span><span class='bottom'>6</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>5</span><span class='bottom'>12</span></span>",
      "<span class='fraction'><span class='top'>9</span><span class='bottom'>2</span></span>",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>5</span><span class='bottom'>12</span></span>",
    hint: "分母、分子をそれぞれかけるよ",
    explanation: "分母は6×6=36、分子は3×5=15だから、<span class='fraction'><span class='top'>15</span><span class='bottom'>36</span></span> を約分して <span class='fraction'><span class='top'>5</span><span class='bottom'>12</span></span> になるよ。"
  },
 {
    id: "03",
    question: "<span class='fraction'><span class='top'>3</span><span class='bottom'>5</span></span> × <span class='fraction'><span class='top'>5</span><span class='bottom'>4</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>10</span></span>",
      "<span class='fraction'><span class='top'>8</span><span class='bottom'>7</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>1</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span>",
    hint: "計算のする前に約分できるよ！",
    explanation: "分母、分子それぞれ5で割って、<span class='fraction'><span class='top'>3</span><span class='bottom'>1</span></span> × <span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span> = <span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span> になるよ。"
  },
    {
    id: "04",
    question: "<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span> × <span class='fraction'><span class='top'>4</span><span class='bottom'>8</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>7</span><span class='bottom'>6</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>7</span></span>",
      "<span class='fraction'><span class='top'>9</span><span class='bottom'>10</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>1</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>1</span><span class='bottom'>7</span></span>",
    hint: "先に約分して計算したほうが簡単だよ！",
    explanation: "先に約分して計算したほうが計算しやすいね。その場合は、<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span> × <span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> = <span class='fraction'><span class='top'>1</span><span class='bottom'>7</span></span> になるよ。"
  },
  {
    id: "05",
    question: "<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> ÷ <span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>6</span></span>",
      "<span class='fraction'><span class='top'>2</span><span class='bottom'>3</span></span>",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
    hint: "÷ の時は逆数をかけるんだよ。÷<span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span> は ×<span class='fraction'><span class='top'>4</span><span class='bottom'>3</span></span> になるよ。",
    explanation: "<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> ÷ <span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span> は <span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> × <span class='fraction'><span class='top'>3</span><span class='bottom'>1</span></span> = <span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span> になるよ。"
  },
  {
    id: "06",
    question: "<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> ÷ <span class='fraction'><span class='top'>3</span><span class='bottom'>9</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
      "<span class='fraction'><span class='top'>8</span><span class='bottom'>7</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>1</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span>",
    hint: "先に約分してもいいかもね！",
    explanation: "先に約分すると<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span> × <span class='fraction'><span class='top'>3</span><span class='bottom'>1</span></span> = <span class='fraction'><span class='top'>3</span><span class='bottom'>2</span></span> になるよ。"
  },
   {
    id: "07",
    question: "<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span> ÷ <span class='fraction'><span class='top'>5</span><span class='bottom'>8</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>6</span><span class='bottom'>7</span></span>",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>8</span></span>",
      "<span class='fraction'><span class='top'>3</span><span class='bottom'>4</span></span>",
      "<span class='fraction'><span class='top'>8</span><span class='bottom'>15</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>8</span><span class='bottom'>15</span></span>",
    hint: "",
    explanation: "<span class='fraction'><span class='top'>1</span><span class='bottom'>3</span></span> × <span class='fraction'><span class='top'>8</span><span class='bottom'>5</span></span> = <span class='fraction'><span class='top'>8</span><span class='bottom'>15</span></span> になるよ。"
  },

  {
    id: "08",
    question: "<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span> ÷ <span class='fraction'><span class='top'>1</span><span class='bottom'>7</span></span>",
    answers: [
      "2",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>2</span></span>",
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>7</span></span>",
      "<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span>"
    ],
    correct: "2",
    hint: "",
    explanation: "<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span> × <span class='fraction'><span class='top'>7</span><span class='bottom'>1</span></span> = <span class='fraction'><span class='top'>14</span><span class='bottom'>7</span></span> 約分して 2 になるよ。"
  },

  {
    id: "09",
    question: "<span class='fraction'><span class='top'>4</span><span class='bottom'>3</span></span> ÷ <span class='fraction'><span class='top'>5</span><span class='bottom'>6</span></span>",
    answers: [
      "<span class='fraction'><span class='top'>1</span><span class='bottom'>4</span></span>",
      "<span class='fraction'><span class='top'>5</span><span class='bottom'>9</span></span>",
      "<span class='fraction'><span class='top'>4</span><span class='bottom'>5</span></span>",
      "<span class='fraction'><span class='top'>8</span><span class='bottom'>5</span></span>"
    ],
    correct: "<span class='fraction'><span class='top'>8</span><span class='bottom'>5</span></span>",
    hint: "",
    explanation: "<span class='fraction'><span class='top'>4</span><span class='bottom'>3</span></span> × <span class='fraction'><span class='top'>6</span><span class='bottom'>5</span></span> = <span class='fraction'><span class='top'>24</span><span class='bottom'>15</span></span> 約分して <span class='fraction'><span class='top'>8</span><span class='bottom'>5</span></span> になるよ。"
  },
  {
  id: "10",
  question: "6 ÷ 13",
  answers: [
    "<span class='fraction'><span class='top'>6</span><span class='bottom'>13</span></span>",
    "<span class='fraction'><span class='top'>13</span><span class='bottom'>6</span></span>",
    "<span class='fraction'><span class='top'>3</span><span class='bottom'>8</span></span>",
    "<span class='fraction'><span class='top'>2</span><span class='bottom'>7</span></span>"
  ],
  correct: "<span class='fraction'><span class='top'>6</span><span class='bottom'>13</span></span>",
  hint: "分数の掛け算に直して計算しよう！",
  explanation: "6 ÷ 13 は <span class='fraction'><span class='top'>6</span><span class='bottom'>1</span></span> × <span class='fraction'><span class='top'>1</span><span class='bottom'>13</span></span> = <span class='fraction'><span class='top'>6</span><span class='bottom'>13</span></span> になるよ。"
}
]


}

export default {
  math05: QUIZ_CONTENT,
};
