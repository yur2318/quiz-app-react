const QUIZ_CONTENT = {
  title: "現代文",
  subject: "pink",
  data: [
    {
      id: "01",
      question: "点線①の「染」を読み仮名を選べ",
      answers: ["そ", "き", "なが", "いろ"],
      correct: "そ",
      hint: "",
      explanation: "【染める（そめる）】→色をつけること。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "02",
      question: "点線②の「貸」を読み仮名を選べ",
      answers: ["か", "よ", "わた", "たい"],
      correct: "か",
      hint: "",
      explanation: "【貸す（かす）】→他の人に物を使わせること。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "03",
      question: "点線③の「ノド」を漢字で書くと？",
      answers: ["喉", "候", "孔", "睺"],
      correct: "喉",
      hint: "",
      explanation: "【喉（のど）】→声を出す器官のこと。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "04",
      question: "下線部①の「ノート」は誰のものですか。",
      answers: ["千代のノート", "湊のノート", "二人のノート", "先生のノート"],
      correct: "千代のノート",
      hint: "千代の発言を見てみよう。",
      explanation: "千代がノートを机の上に置いていて「貸す」と言っているから、千代のノートだよ。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "05",
      question: "「感謝の気持ちを言いたいのに、言葉がノドにつかえて出てこない。」とあるが、その理由は何か。",
      answers: ["ア．ノートを貸してもらったことに気づいてないから", "感謝の気持ちがなかったから", "優子が急に帰ってしまったから", "言いたい気持ちはあったが、うまく言葉にできなかったから"],
      correct: "言いたい気持ちはあったが、うまく言葉にできなかったから",
      hint: "",
      explanation: "言葉がノドにつかえて出てこない。「ノドにつかえて」というのは、言いたい気持ちはあったが、うまく言葉にできなかったということだよ。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "06",
      question: "下線部②の言葉は誰から誰に向けられたものか。",
      answers: ["湊から千代", "千代から湊", "湊からノート", "千代からノート"],
      correct: "湊から千代",
      hint: "前後の文を見てみよう。",
      explanation: "前の文で「湊は小さく呟いた。」とあるから、湊が言った言葉だよ。湊は千代にお礼を言おうとしていたよね。",
      image: "/questionImg/japanese03.png"
    },
    {
      id: "07",
      question: "この物語の結末からわかることとして最も適切なものを選べ。",
      answers: ["湊は感謝を伝えるタイミングを逃してしまった", "千代はお礼を言えない湊に怒った", "湊は千代に苦手意識を持っている", "湊は千代に感謝の気持ちを伝えた"],
      correct: "湊は感謝を伝えるタイミングを逃してしまった",
      hint: "難しい時は、おかしいと思う選択肢を一つずつ消していこう。",
      explanation: "「しかし、その声が彼女に届くことはなかった。」とあるから、湊は感謝を伝えるタイミングを逃してしまったということだよ。千代はノートを貸してくれたのに、湊はお礼を言えなかったんだね。",
      image: "/questionImg/japanese03.png"
    }
    
  ]
}

export default {
  japanese41: QUIZ_CONTENT,
};
