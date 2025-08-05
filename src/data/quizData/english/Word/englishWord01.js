
const QUIZ_ENGLISH_WORD = {
  title: "SVOC",
  subject: "purple",
  data: [
    {
      id: "01",
      question: "文の中で「だれが」「何が」などにあたる言葉は？",
      answers: ["主語", "動詞（述語）", "目的語", "補語"],
      correct: "主語",
      hint: "「私は」「彼が」などの言葉だよ。",
      explanation: "主語（しゅご）は「だれが」「何が」にあたる言葉だよ。授業などで「S」とも言われるよ。英語の文にはほとんどの場合主語が必要だよ。",
      image: ""
    },
    {
      id: "02",
      question: "文の中で「〜する」にあたる言葉は？",
      answers: ["主語", "動詞（述語）", "目的語", "補語"],
      correct: "動詞（述語）",
      hint: "「走る」「勉強する」などの動きの言葉などが入るよ。",
      explanation: "動詞（どうし）は「〜する」にあたる言葉だよ。授業などで「V」とも言われるよ。英語の文にはほとんどの場合動詞が必要だよ。",
      image: ""
    },
    {
      id: "03",
      level: "hard",
      question: "文の中で「（主語）が××を（動詞）」の××にあたる言葉は？",
      answers: ["主語", "動詞（述語）", "目的語", "補語"],
      correct: "目的語",
      hint: "「私は本を読む」の「本」にあたる言葉だよ。",
      explanation: "目的語（もくてきご）は「○○が××を～する」の××にあたる言葉だよ。授業などで「O」とも言われるよ。",
    },
    {
      id: "04",
      level: "hard",
      question: "文の中で「（主語）は××だ」の××にあたる言葉は？",
      answers: ["主語", "動詞（述語）", "目的語", "補語"],
      correct: "補語",
      hint: "「彼は学生だ」の「学生」にあたる言葉だよ。",
      explanation: "補語（ほご）は「○○は××だ」の××にあたる言葉だよ。授業などで「C」とも言われるよ。",
      image: ""
    },
    {
      id: "05",
      question: "eat",
      answers: ["食べる", "飲む", "見る", "聞く"],
      correct: "食べる",
      hint: "",
      explanation: "「eat」は「食べる」という意味があるよ。例文→I eat an apple.（私はリンゴを食べます。）",
      image: ""
    },
    {
      id: "06",
      question: "run",
      answers: ["食べる", "飲む", "見る", "走る"],
      correct: "走る",
      hint: "",
      explanation: "「run」は「走る」という意味があるよ。例文→I run fast.（私は速く走ります。）",
      image: ""
    },
    {
      id: "07",
      question: "play",
      answers: ["食べる", "飲む", "遊ぶ", "聞く"],
      correct: "遊ぶ",
      hint: "",
      explanation: "「play」は「遊ぶ」や「スポーツをする」、「楽器を演奏する」という意味があるよ。例文→I play soccer.（私はサッカーをします。）",
      image: ""
    },  
  ]
}

export default {
  englishWord01: QUIZ_ENGLISH_WORD
};
