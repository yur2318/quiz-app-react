const QUIZ_CONTENT = {
  title: "正の数・負の数",
  subject: "blue",
  data: [
    {
      id: "01",
      question: "-49 ÷ 7",
      answers: ["-7", "+7", "-9", "+9"],
      correct: "-7",
      hint: "負の数を正の数で割ると、答えは負の数になるよ！",
      image: ""
    },
    {
      id: "02",
      question: "(-36) ÷ (-6)",
      answers: ["-6", "+6", "-8", "+8"], 
      correct: "+6",
      hint: "負の数を負の数で割ると、答えは正の数になるよ！",
      image: ""
    },
    {
      id: "03",
      question: "(-<span class='fraction'><span class='top'>1</span>3</span>) ÷ (-<span class='fraction'><span class='top'>1</span>4</span>)",
      answers: [
        "<span class='fraction'><span class='top'>4</span>3</span>",
        "- <span class='fraction'><span class='top'>4</span>3</span>",
        "<span class='fraction'><span class='top'>1</span>3</span>",
        "- <span class='fraction'><span class='top'>1</span>4</span>"
      ],
      correct: "<span class='fraction'><span class='top'>4</span>3</span>",
      hint: "負の数を負の数で割ると、答えは正の数になるよ！",
      explanation: "分数の割り算は、分母と分子を入れ替えて掛け算にするよ。-<span class='fraction'><span class='top'>1</span>3</span> ÷ -<span class='fraction'><span class='top'>1</span>4</span>は-<span class='fraction'><span class='top'>1</span>3</span> × -<span class='fraction'><span class='top'>4</span>1</span>になるよ。分子同士、分母同士を掛けて<span class='fraction'><span class='top'>4</span>3</span>になるよ。",
      image: ""
    },
    {
      id: "04",
      question: "(-<span class='fraction'><span class='top'>2</span>5</span>) ÷ (+<span class='fraction'><span class='top'>1</span>2</span>)",
      answers: [
        "- <span class='fraction'><span class='top'>4</span>5</span>",
        "- <span class='fraction'><span class='top'>1</span>10</span>",
        "<span class='fraction'><span class='top'>1</span>10</span>",
        "<span class='fraction'><span class='top'>4</span>5</span>"
      ],
      correct: "- <span class='fraction'><span class='top'>4</span>5</span>",
      hint: "負の数を正の数で割ると、答えは負の数になるよ！",
      explanation: "分数の割り算は、分母と分子を入れ替えて掛け算にするよ。-<span class='fraction'><span class='top'>2</span>5</span> ÷ +<span class='fraction'><span class='top'>1</span>2</span>は-<span class='fraction'><span class='top'>2</span>5</span> × +<span class='fraction'><span class='top'>2</span>1</span>になるよ。分子同士、分母同士を掛けて- <span class='fraction'><span class='top'>4</span>5</span>になるよ。",
      image: ""
    },
    {
      id: "05",
      question: "0 ÷ (-8)",
      answers: ["0", "-8", "+8", "1"],
      correct: "0",
      hint: "0を何で割っても…",
      explanation: "0を何で割っても0になるよ。",
      image: ""
    },
    {
      id: "06",
      question: "4 - 7",
      answers: ["-3", "+3", "-11", "+11"],
      correct: "-3",
      hint: "4から7を引くとどうなる？",
      explanation: "4から7を引くと、負の数の-3になるよ。",
    },
    { 
      id: "07", 
      question: "(-5) + (-3)",
      answers: ["-8", "+8", "-2", "+2"],
      correct: "-8",
      hint: "負の数同士の足し算は、絶対値を足すよ！",
      explanation: "負の数同士の足し算は、絶対値を足して、答えも負の数になるよ。-5と-3の絶対値は5と3だから、5+3=8。答えは-8だよ。",
      image: ""
    },
    { 
      id: "08", 
      question: "(+4) × (-2)",
      answers: ["-8", "+8", "-6", "+6"],
      correct: "-8",
      hint: "正の数と負の数の掛け算の答えは負の数になるよ！",
      explanation: "4×(-2)は-8になるよ。<strong>正の数と負の数の掛け算は、答えが負の数になる</strong>ことを覚えておこう！",
    },
    {
      id: "09",
      question: "(-3) ÷ (-5)",
      answers: [
        "- <span class='fraction'><span class='top'>3</span>5</span>",
        "<span class='fraction'><span class='top'>3</span>5</span>",
        "<span class='fraction'><span class='top'>5</span>3</span>",
        "- <span class='fraction'><span class='top'>5</span>3</span>"
      ],
      correct: "<span class='fraction'><span class='top'>3</span>5</span>",
      hint: "負の数を負の数で割ると、答えは正の数になるよ！",
      explanation: "分数の割り算は、分母と分子を入れ替えて掛け算にするよ。-3 ÷ -5は-3 × -<span class='fraction'><span class='top'>1</span>5</span>になるよ。分子同士、分母同士を掛けて<span class='fraction'><span class='top'>3</span>5</span>になるよ。",
    },
    {
      id: "10",
      question: "3.6 ÷ (-1.2)",
      answers: ["-3", "+3", "-0.3", "+0.3"],
      correct: "-3",
      hint: "正の数を負の数で割ると、答えは負の数になるよ！",
      explanation: "3.6 ÷ -1.2は-3になるよ。分数の計算もできたかな？",
    }
  ]
}

export default {
  math09: QUIZ_CONTENT,
};
