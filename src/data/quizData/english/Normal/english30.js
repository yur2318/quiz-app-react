const QUIZ_ENGLISH = {
  title: "過去形",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「It was cold last night.」",
        answers: ["昨夜は寒かった。", "昨夜は寒いでしょう","昨夜は寒くなかった。", "昨夜は寒いです。"],
        correct: "昨夜は寒かった。",
        hint: "寒いは「It is cold」だね。",
        explanation: "「It is cold」の「is」を「was」に変えると過去形になるよ。",
      },
      {
        id: "02",
        question: "「彼女は疲れていました。」を英語にした時、[ ]に入る語は？<br>　She [ ] tired.",
        answers: ["was", "were", "is", "be"],
        correct: "was",
        hint: "「is」の過去形を選ぼう。",
        explanation: "「is」の過去形は「was」だよ。",
      },
      {
        id: "03",
        question: "「彼らは学校にいました。」を英語にした時、[ ]に入る語は？<br>　They [ ] at school.",
        answers: ["were", "was", "are", "be"],
        correct: "were",
        hint: "",
        explanation: "「are」の過去形は「were」だよ。",
      },
      {
        id: "04",
        question: "「彼女は遅刻しました。」を英語にした時、[ ]に入る語は？<br>　She [ ] late.",
        answers: ["was", "were", "is", "be"],
        correct: "was",
        hint: "「is」の過去形を選ぼう。",
        explanation: "「is」の過去形は「was」だよ。", 
      },
      {
        id: "05",
        question: "「その映画は面白くなかったです。」を英語にした時、[ ]に入る語は？<br>　The movie [ ] interesting.",
        answers: ["was not", "were not", "not was", "didn't was"],
        correct: "was not",
        hint: "「not」を使って否定文にしよう。",
        explanation: "be動詞の後ろにnotを入れることで否定文になるよ。「was not」は「wasn't」、「were not」は「weren't」と短縮できるよ。",
      },
      {
        id: "06",
        question: "「彼らは昨日学校にいませんでした。」を英語にした時、[ ]に入る語は？<br>　They [ ] at school yesterday.",
        answers: ["wasn't", "weren't", "didn't", "not was"],
        correct: "weren't",
        hint: "「彼らは学校にいない」は「They aren't at school」だね。",
        explanation: "aren'tの過去形はweren'tだよ。「yesterday」は文の最後に置くよ。",
      },
      {
        id: "07",
        question: "「昨日は忙しかったですか？」を英語にした時、[ ]に入る語は？<br>　[ ] you busy yesterday?",
        answers: ["Were", "Was", "Are", "Did"],
        correct: "Were",
        hint: "「あなたは忙しい」は「You are busy」だね。",
        explanation: "be動詞を文頭に置くと疑問文になるよ。ここでは「are」の過去形「were」を使うよ。",
      },
      {
        id: "08",
        question: "「昨日は家にいましたか？」を英語にした時、[ ]に入る語は？<br>　[ ] you at home yesterday?",
        answers: ["Were", "Was", "Are", "Did"],
        correct: "Were",
        hint: "「あなたは家にいる」は「You are at home」だね。",
        explanation: "be動詞を文頭に置くと疑問文になるよ。ここでは「are」の過去形「were」を使うよ。",
      },
      {
        id: "09",
        question: "「Were you at the party last night?」の返事として正しいのはどれ？",
        answers: ["Yes, I was.", "Yes, I am.", "Yes, I were.", "Yes I did."],
        correct: "Yes, I was.",
        hint: "「Were you ~ ?」と聞かれているね。",
        explanation: "過去のbe動詞を使って「Yes, I was.」と返事するのがが正しいよ。Iに対しては「was」を使うからね。",
      },
      {
        id: "10",
        question: "「昨日はお腹が空きませんでした。」を英語にした時、[ ]に入る語は？<br>　I [ ] yesterday.",
        answers: ["wasn't hungry", "weren't hungry", "didn't was hungry", "not was hungry"],
        correct: "wasn't hungry",
        hint: "「お腹が空いている」は「I am hungry」だね。",
        explanation: "「am」の過去形は「was」だよ。「not」を使って否定文にしよう。",
      },

    ]
};

export default {
  english30: QUIZ_ENGLISH,
};
