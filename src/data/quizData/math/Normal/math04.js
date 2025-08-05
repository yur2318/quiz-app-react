const QUIZ_CONTENT = {
  title: "分数の計算",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "<span class='fraction'><span class='top'>1</span>5</span> + <span class='fraction'><span class='top'>2</span>5</span>",
    answers: [
      "<span class='fraction'><span class='top'>3</span>5</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>1</span>3</span>",
      "<span class='fraction'><span class='top'>4</span>5</span>"
    ],
    correct: "<span class='fraction'><span class='top'>3</span>5</span>",
    hint: "分母が同じなら、分子を足すよ！",
    explanation: "分母が同じなので、分子を足すよ。1+2=3 だから<span class='fraction'><span class='top'>3</span>5</span>になるよ。"
  },
  {
    id: "02",
    question: "<span class='fraction'><span class='top'>1</span>3</span>の分母を6にするとどうなる？",
    answers: [
      "<span class='fraction'><span class='top'>2</span>6</span>",
      "<span class='fraction'><span class='top'>3</span>6</span>",
      "<span class='fraction'><span class='top'>4</span>6</span>",
      "<span class='fraction'><span class='top'>1</span>6</span>"
    ],
    correct: "<span class='fraction'><span class='top'>2</span>6</span>",
    hint: "分母を変えるときは、分子も同じ比率で変えるよ！",
    explanation: "分母の3に2かけると6になるから、分子も同じ2をかけるよ。1×2=2 だから<span class='fraction'><span class='top'>2</span>6</span>になるよ。"
  },
  {
    id: "03",
    question: "<span class='fraction'><span class='top'>2</span>3</span> + <span class='fraction'><span class='top'>1</span>6</span>",
    answers: [
      "<span class='fraction'><span class='top'>5</span>6</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>1</span>3</span>",
      "<span class='fraction'><span class='top'>2</span>6</span>"
    ],
    correct: "<span class='fraction'><span class='top'>5</span>6</span>",
    hint: "分母を6にそろえてから計算するよ！",
    explanation: "分母を6にそろえるよ。<span class='fraction'><span class='top'>2</span>3</span>は<span class='fraction'><span class='top'>4</span>6</span>になるから、<span class='fraction'><span class='top'>4</span>6</span>+<span class='fraction'><span class='top'>1</span>6</span>=<span class='fraction'><span class='top'>5</span>6</span>になるよ。"
  },
  {
    id: "04",
    question: "<span class='fraction'><span class='top'>1</span>7</span> + <span class='fraction'><span class='top'>1</span>3</span>",
    answers: [
      "<span class='fraction'><span class='top'>10</span>21</span>",
      "<span class='fraction'><span class='top'>2</span>21</span>",
      "<span class='fraction'><span class='top'>3</span>7</span>",
      "<span class='fraction'><span class='top'>1</span>21</span>"
    ],
    correct: "<span class='fraction'><span class='top'>10</span>21</span>",
    hint: "分母を21にそろえてから計算するよ！",
    explanation: "分母を21にそろえるよ。<span class='fraction'><span class='top'>1</span>7</span>は<span class='fraction'><span class='top'>3</span>21</span>、<span class='fraction'><span class='top'>1</span>3</span>は<span class='fraction'><span class='top'>7</span>21</span>になるから、<span class='fraction'><span class='top'>10</span>21</span>になるよ。"
  },
  {
    id: "05",
    question: "<span class='fraction'><span class='top'>4</span>5</span> − <span class='fraction'><span class='top'>2</span>5</span>",
    answers: [
      "<span class='fraction'><span class='top'>2</span>5</span>",
      "<span class='fraction'><span class='top'>1</span>5</span>",
      "<span class='fraction'><span class='top'>3</span>5</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>"
    ],
    correct: "<span class='fraction'><span class='top'>2</span>5</span>",
    hint: "分母が同じなら、分子を引くだけ！",
    explanation: "分母が同じなので、分子だけ引けばOK。4−2=2 だから <span class='fraction'><span class='top'>2</span>5</span>になるよ。"
  },
  {
    id: "06",
    question: "<span class='fraction'><span class='top'>5</span>6</span> − <span class='fraction'><span class='top'>1</span>6</span>",
    answers: [
      "<span class='fraction'><span class='top'>2</span>3</span>",
      "<span class='fraction'><span class='top'>2</span>6</span>",
      "<span class='fraction'><span class='top'>5</span>1</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>"
    ],
    correct: "<span class='fraction'><span class='top'>2</span>3</span>",
    hint: "分母がそろっているときは簡単！",
    explanation: "5−1=4 だから、<span class='fraction'><span class='top'>5</span>6</span> − <span class='fraction'><span class='top'>1</span>6</span> = <span class='fraction'><span class='top'>4</span>6</span>通分して<span class='fraction'><span class='top'>2</span>3</span>になるよ。"
  },
  {
    id: "07",
    question: "<span class='fraction'><span class='top'>3</span>4</span> − <span class='fraction'><span class='top'>1</span>2</span>",
    answers: [
      "<span class='fraction'><span class='top'>1</span>4</span>",
      "<span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>2</span>4</span>",
      "<span class='fraction'><span class='top'>1</span>8</span>"
    ],
    correct: "<span class='fraction'><span class='top'>1</span>4</span>",
    hint: "分母を4にそろえてから引こう！",
    explanation: "<span class='fraction'><span class='top'>1</span>2</span>は<span class='fraction'><span class='top'>2</span>4</span>に直せるから、<span class='fraction'><span class='top'>3</span>4</span> − <span class='fraction'><span class='top'>2</span>4</span> = <span class='fraction'><span class='top'>1</span>4</span>になるよ。"
  },
  {
    id: "08",
    question: "<span class='fraction'><span class='top'>5</span>6</span> − <span class='fraction'><span class='top'>1</span>3</span>",
    answers: [
      "<span class='fraction'><span class='top'>1</span>2</span>",
      "<span class='fraction'><span class='top'>4</span>6</span>",
      "<span class='fraction'><span class='top'>2</span>3</span>",
      "<span class='fraction'><span class='top'>3</span>6</span>"
    ],
    correct: "<span class='fraction'><span class='top'>1</span>2</span>",
    hint: "通分して分母をそろえてね！",
    explanation: "<span class='fraction'><span class='top'>1</span>3</span>は<span class='fraction'><span class='top'>2</span>6</span>に直せるから、<span class='fraction'><span class='top'>5</span>6</span> − <span class='fraction'><span class='top'>2</span>6</span> = <span class='fraction'><span class='top'>3</span>6</span>通分して<span class='fraction'><span class='top'>1</span>2</span>になるよ。"
  },
  {
    id: "09",
    question: "<span class='fraction'><span class='top'>3</span>8</span> + <span class='fraction'><span class='top'>1</span>4</span>",
    answers: [
      "<span class='fraction'><span class='top'>5</span>8</span>",
      "<span class='fraction'><span class='top'>4</span>1</span>",
      "<span class='fraction'><span class='top'>4</span>8</span>",
      "<span class='fraction'><span class='top'>6</span>8</span>"
    ],
    correct: "<span class='fraction'><span class='top'>5</span>8</span>",
    hint: "分母を8にそろえてから足すよ！",
    explanation: "<span class='fraction'><span class='top'>1</span>4</span>は<span class='fraction'><span class='top'>2</span>8</span>に直せるから、<span class='fraction'><span class='top'>3</span>8</span> + <span class='fraction'><span class='top'>2</span>8</span> = <span class='fraction'><span class='top'>5</span>8</span>になるよ。"
  },
  {
    id: "10",
    level: "hard",
    question: "<span class='fraction'><span class='top'>7</span>9</span> − <span class='fraction'><span class='top'>1</span>2</span>",
    answers: [
      "<span class='fraction'><span class='top'>5</span>18</span>",
      "<span class='fraction'><span class='top'>13</span>18</span>",
      "<span class='fraction'><span class='top'>1</span>6</span>",
      "<span class='fraction'><span class='top'>4</span>9</span>"
    ],
    correct: "<span class='fraction'><span class='top'>5</span>18</span>",
    hint: "分母を18にそろえてから引くよ！",
    explanation: "分母を18にして、<span class='fraction'><span class='top'>7</span>9</span>は<span class='fraction'><span class='top'>14</span>18</span>、<span class='fraction'><span class='top'>1</span>2</span>は<span class='fraction'><span class='top'>9</span>18</span>に直せるから、<span class='fraction'><span class='top'>14</span>18</span> − <span class='fraction'><span class='top'>9</span>18</span> = <span class='fraction'><span class='top'>5</span>18</span>になるよ。"
  }
]

}

export default {
  math04: QUIZ_CONTENT,
};
