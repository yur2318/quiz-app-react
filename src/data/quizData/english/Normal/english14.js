const QUIZ_ENGLISH = {
  title: "総合問題",
  subject: "purple",
  data: [
        {
        id: "01",
        question: "「私は日本出身です。」を英語にした時、正しいのは？",
        answers: ["I'm from Japan.", "I from Japan."],
        correct: "I'm from Japan.",
        hint: "「from　〜」は「〜から」「〜出身」という意味だよ。",
        explanation: "「私は〇〇です」の形だからbe動詞を使って「I'm ~」の形になるよ。「from」は動詞ではないんだ。",
      },
      {
        id: "02",
        question: "「私はピアノを弾きます。」を英語にした時、正しいのは？",
        answers: ["I play the piano.", "I'm play the piano."],
        correct: "I play the piano.",
        hint: "",
        explanation: "「弾く」という動詞があるから、be動詞は使わず一般動詞の「play」を使うよ。",
      },
      {
        id: "03",
        question: "「あなたは彼の妹ですか？」を英語にした時、[ ]に入る語は？<br>　[ ] you his sister?",
        answers: ["Are", "Is", "Do", "Does"],
        correct: "Are",
        hint: "「あなたは〜ですか？」の形だね。",
        explanation: "「あなたは〜ですか？」はbe動詞を前に持ってきて「Are you ~?」の形になるよ。",
      },
      {
        id: "04",
        question: "「彼はテニスをしますか？」を英語にした時、[ ]に入る語は？<br>　[ ] he play tennis?",
        answers: ["Do", "Does", "Are", "Is"],
        correct: "Does",
        hint: "しますか？は英語でどんな形になるかな？",
        explanation: "「彼は〜しますか？」は「Does he play~?」の形になるよ。三人称単数の主語の時は、「Do」を「Does」に変えて、動詞は原形のまま使うよ！",
      },
      {
        id: "05",
        question: "「私は部屋を掃除します。」を英語にした時、正しいのは？",
        answers: ["I clean the room.", "I the room clean.", "I'm clean the room.", "Cleans I the room."],
        correct: "I clean the room.",
        hint: "主語→動詞→目的語の順番だよ。",
        explanation: "主語→動詞→目的語の順番で「I clean the room.」の形になるよ。"
      },      
      {
        id: "06",
        question: "「彼女は彼が好きです。」を英語にした時、正しいのは？",
        answers: ["She likes him.", "She likes he.", "Her likes he.", "She like his."],
        correct: "She likes him.",
        hint: "",
        explanation: "主語の「彼女は」は「She」、目的語の「彼を」は「him」になるよ。三人称単数の主語の時は動詞に「s」が付くことも覚えておこう。",
      },

      {
        id: "07",
        question: "「彼らの声が聞こえます。」を英語にした時、[ ]に入る語は？<br>　I hear [ ] voices.",
        answers: ["they", "them", "their", "theirs"],
        correct: "their",
        hint: "「彼らの」は所有格だね。",
        explanation: "「彼らの」は所有格で「their」になるよ。",
      },
      {
        id: "08",
        question: "「このドレスはあなたのですか？」を英語にした時、正しいのは？",
        answers: ["Is this dress yours?", "Does this dress yours?", "Is this dress your?", "This dress is yours?"],
        correct: "Is this dress yours?",
        hint: "",
        explanation: "「〇〇ですか」疑問文の時はbe動詞を前に持ってくるよ。「あなたの」は所有代名詞の「yours」を使うよ。",
        image: "",
      },
      {
        id: "09",
        question: "「あなたのお兄さんは背が高いですか？」を英語にした時、正しいのは？",
        answers: ["Is your brother tall?", "Does your brother tall?", "Do your brother tall?", "Are you brother tall?"],
        correct: "Is your brother tall?",
        hint: "「あなたの」は所有格だね。「〇〇ですか？」の形はbe動詞を前に持ってくるよ。",
        explanation: "「あなたの」は所有格の「your」を使うよ。「〇〇ですか？」の形はbe動詞を前に持ってくるから「Is your brother tall?」になるよ。",
      },
      {
        id: "10",
        question: "「Is that box big?」の返事として正しいのはどれ？",
        answers: ["Yes, it is.", "Yes, is that.", "Yes, it does.", "Yes, I am."],
        correct: "Yes, it is.",
        hint: "「それは大きいですか？」の返事だよ。",
        explanation: "ものを主語にした時の返事は「it」を使うよ。「Is ~ 」の返事は「Yes, it is.」か「No, it isn't.」になるよ。",
      }, 
     

    ]
    
}

export default {
  english14: QUIZ_ENGLISH,
};
