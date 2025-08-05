const QUIZ_ENGLISH = {
  title: "疑問詞",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「Which is your bag?」",
        answers: ["どれがあなたのバッグですか？", "あなたのバッグは何ですか？"],
        correct: "どれがあなたのバッグですか？",
        hint: "",
        explanation: "「Which」は「どれ」という意味の疑問詞だよ。",
      },
      {
        id: "02",
        question: "「どれがあなたの電話ですか？」を英語にした時、[ ]に入る語は？<br>　[ ] your phone?",
        answers: ["Which is", "Which does", "Which do", "Which"],
        correct: "Which is",
        hint: "",
        explanation: "「Which is ~ ?」で「どれが〇〇ですか？」という意味になるよ。",
      },
      {
        id: "03",
        question: "「どれが彼のノートですか？」を英語にした時、正しいのは？",
        answers: ["Which is his notebook?", "Is which his notebook?", "Which does his notebook?", "Which is he notebook?"],
        correct: "Which is his notebook?",
        hint: "「Which + be動詞 + 名詞」の形だよ。",
        explanation: "「彼の」だから「he」ではなく「his」を使うよ。「Which is ~ ?」で「どれが〇〇ですか？」という意味になるよ。",
      },
      {
        id: "04",
        question: "次の英文を日本語に訳しなさい。<br>「Which is your favorite, summer or winter?」",
        answers: ["夏と冬、どちらが好きですか？", "あなたの好きな季節は何ですか？", "夏と冬、とは何ですか？", "夏と冬があなたは好きですか？"],
        correct: "夏と冬、どちらが好きですか？",
        hint: "「Which is ~,A or B?」で「AとB、どちらが〇〇ですか？」という意味だよ。",
        explanation: "「Which is ~,A or B?」で「AとB、どちらが〇〇ですか？」という二択の質問になるよ。",
      },
      {
        id: "05",
        question: "「Which is your favorite, cats or dogs?」の返事として間違っているのはどれ？",
        answers: ["I like dogs.", "My favorite is cats.", "Dogs are (my favorite).", "Yes, it is."],
        correct: "Yes, it is.",
        hint: "「猫と犬、どちらが好きですか？」と聞かれているね。",
        explanation: "「I like dogs.」は「私は犬が好きです」、「My favorite is cats.」は「私の好きなものは猫です」、「Dogs are my favorite.」は「犬が私の好きなものです」という意味だよ。「Yes, it is.」は「はい、それはそうです。」という意味で、質問に対する答えとしては不適切だね。",
      },
      {
        id: "06",
        question: "次の英文を日本語に訳しなさい。<br>「Where is the bus stop?」",
        answers: ["バス停はどこですか？", "バス停はどれですか？", "バス停は何ですか？", "どのバス停ですか？"],
        correct: "バス停はどこですか？",
        hint: "",
        explanation: "「Where」は「どこ」という意味の疑問詞だよ。「Where is ~ ?」で「〇〇はどこですか？」という意味になるんだ。",
      },
      {
        id: "07",
          question: "「あなたはどこですか？」を英語にした時、[ ]に入る語は？<br>　[ ] you?",
        answers: ["Where are", "Where is", "Where do", "Where does"],
        correct: "Where are",
        hint: "「Where + be動詞 + 名詞」の形だよ。",
        explanation: "「Where are you?」で「あなたはどこですか？」という意味になるんだ。",
      },
      {
        id: "08",
        question: "「あなたの家はどこですか？」を英語にした時、[ ]に入る語は？<br>　[ ] your house?",
        answers: ["Where is", "What is", "Who is", "When is"],
        correct: "Where is",
        hint: "「Where」は「どこ」という意味の疑問詞だよ。",
        explanation: "「Where is your house?」は「あなたの家はどこですか？」という意味になるよ。"
      },
      {
        id: "09",
        question: "「彼らはどこでテニスをしますか？」を英語にした時、[ ]に入る語は？<br>　[ ] they play tennis?",
        answers: ["Where do", "Where are", "Where is", "Where does"],
        correct: "Where do",
        hint: "「どこで〇〇をしますか？」は「Where + do(does) + 主語 + 動詞」の形だよ。",
        explanation: "「Where + do(does) + 主語 + 動詞」の形で「どこで〇〇をしますか？」という意味になるよ。"
      },
      {
        id: "10",
        question: "「Where are my keys?」の返事として正しいのはどれ？",
        answers: ["They are on the table.", "It is yours", "Yes, they are.", "My keys are."], 
        correct: "They are on the table.",
        hint: "「私の鍵はどこですか？」と聞かれているから、場所を答えてみよう。",
        explanation: "「They are on the table.」は「それらはテーブルの上にあります。」という意味で正しいよ。「It is yours」は「それはあなたのものです。」、「Yes, they are.」は「はい、それらはそうです。」、「My keys are.」は「私の鍵です。」となって正しい答えではないよ。"
      },

    ]
    
}

export default {
  english17: QUIZ_ENGLISH,
};
