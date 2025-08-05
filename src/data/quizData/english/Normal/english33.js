const QUIZ_ENGLISH = {
  title: "will",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「I will call you tomorrow.」",
        answers: ["私は明日、あなたに電話します。", "私は明日、あなたに電話しました。"],
        correct: "私は明日、あなたに電話します。",
        hint: "",
        explanation: "未来の表現は「be going to + 動詞の原形」だけではなく「will」も使うよ。be going toは「決まっていた予定」を表すのに対し、willは「今決めた未来」を表すことが多いよ。",
      },
      {
        id: "02",
        question: "「彼はもう来るでしょう。」を英語にした時、[ ]に入る語は？<br>　He [ ] soon.",
        answers: ["will come", "will comes", "is will come", "will coming"],
        correct: "will come",
        hint: "「will + 動詞の原形」を使うよ。",
        explanation: "未来の予定を表す時は「will + 動詞の原形」を使うよ。「He」は三人称単数だけど、現在形ではないから「comes」ではなく「come」を使うよ。",
      },
      {
        id: "03",
        question: "「私たちは庭で昼食を食べるつもりです。」を英語にした時、[ ]に入る語は？<br>　We [ ] lunch in the garden.",
        answers: ["will eat", "will eats", "will eating", "are will eat"],
        correct: "will eat",
        hint: "「will + 動詞の原形」を使うよ。",
        explanation: "未来の予定を表す時は「will + 動詞の原形」を使うよ。",
      },
      {
        id: "04",
        question: "「明日映画を見ます。」を英語にした時、[ ]に入る語は？<br>　I [ ] a movie tomorrow.",
        answers: ["will watch", "will watches", "watching", "watch"],
        correct: "will watch",
        hint: "「will + 動詞の原形」を使うよ。",
        explanation: "「するつもり」という言葉がなくても明日という未来の時間を表す言葉があるから、willを使うよ。",
      },
      {
        id: "05",
        question: "「明日は学校に行きません。」を英語にした時、[ ]に入る語は？<br>　I [ ] go to school tomorrow.",
        answers: ["will not", "not will"],
        correct: "will not",
        hint: "",
        explanation: "否定文では「will not」を使うよ。短縮して「won't」とも言うよ。",
      },
      {
        id: "06",
        question: "「私とケイトはテストを受けないつもりです。」を英語にした時、[ ]に入る語は？<br>　I and Kate [ ] the test.",
        answers: ["won't take", "not will take", "not will takeing", "will not takeed"],
        correct: "won't take",
        hint: "「will not」を使って否定文にしよう。",
        explanation: "否定文では「will not」を使うよ。「I and Kate」は複数形だから「will not」を使うよ。「take」の原形を使うことに注意しよう。",
      },
      {
        id: "07",
        question: "「手伝ってくれますか？」を英語にした時、[ ]に入る語は？<br>　[ ] help me?",
        answers: ["Will you", "You will", "Do you will", "Are you will"],
        correct: "Will you",
        hint: "「Will」を文頭に置いて疑問文にしよう。",
        explanation: "疑問文では「Will + 主語 + 動詞の原形」の形で聞くよ。「Will you + 動詞の原形」で「あなたは〇〇しますか？」と聞くことができるよ。",
      },
      {
        id: "08",
        level: "hard",
        question: "「明日は晴れるでしょう。」を英語にした時、[ ]に入る語は？<br>　[ ] sunny tomorrow.",
        answers: ["It will be", "It will is"],
        correct: "It will be",
        hint: "「will + 動詞の原形」を使おう「晴れです」は「It is sunny」だよ。",
        explanation: "動詞の原形だから「is」ではなくbe動詞の原形「be」を使うよ。「It will be ~」で「〇〇になるでしょう」という意味になるよ。",
      },
      {
        id: "09",
        question: "「窓を開けますか？(開けてくれますか？)」を英語にした時、[ ]に入る語は？<br>　[ ] the window?",
        answers: ["Will you open", "You will open", "Do you open", "Are you open"],
        correct: "Will you open",
        hint: "「Will」を文頭に置いて疑問文にしよう。",
        explanation: "疑問文では「Will + 主語 + 動詞の原形」の形で聞くよ。「Will you + 動詞の原形」で「あなたは〇〇しますか？」と聞くことができるよ。",
      },
      {
        id: "10",
        question: "「Will you call me tonight?」の返事として正しいのはどれ？",
        answers: ["Yes, I will.", "Yes, I am.", "Yes, I was.", "Yes, I do."],
        correct: "Yes, I will.",
        hint: "「Will you ~ ?」と聞かれているね。",
        explanation: "未来の予定を聞かれているから、willを使って返事するのが正しいよ。「Yes, I will.」や「No, I won't.」と答えるのが正しいよ。",
      },

    ]
};

export default {
  english33: QUIZ_ENGLISH,
};
