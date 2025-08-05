const QUIZ_ENGLISH = {
  title: "疑問詞",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「Whose bag is this?」",
        answers: ["これは誰のバッグですか？", "あなたのバッグは何ですか？", "これはどのバッグですか？", "誰がこのバッグですか？"],
        correct: "これは誰のバッグですか？",
        hint: "",
        explanation: "「Whose」は「誰の」という意味の疑問詞だよ。",
      },
      {
        id: "02",
        question: "「これは誰のボールですか？」を英語にした時、[ ]に入る語は？<br>　[ ] is this?",
        answers: ["Whose ball", "Whose is ball", "Whose does ball", "Whose do ball"],
        correct: "Whose ball",
        hint: "「Whose + 名詞」で「誰の〇〇」という意味になるよ。",
        explanation: "「Whose」は「誰の」という意味の疑問詞なので名詞を後ろに続けるよ。Whose→名詞→通常の疑問文の形になるよ。",
      },
      {
        id: "03",
        question: "「あれは誰の消しゴムですか？」を英語にした時、正しいのは？",
        answers: ["Whose eraser is that?", "Whose is that eraser?", "Whose does that eraser?", "Whose eraser do?"],
        correct: "Whose eraser is that?",
        hint: "「Whose + 名詞」で「誰の〇〇」という意味になるよ。",
        explanation: "Whose→名詞→通常の疑問文の形になるよ。",
      },
      {
        id: "04",
        question: "「Whose pencil is that?」の返事として正しいのはどれ？",
        answers: ["It's mine.", "It's a pencil.", "That is a pencil.", "Yes, it is."],
        correct: "It's mine.",
        hint: "「あの鉛筆は誰のですか？」と聞かれているね。",
        explanation: "「It's mine.」は「それは私のものです。」という意味で正しいよ。「It's a pencil.」は「それは鉛筆です。」、「That is a pencil.」は「あれは鉛筆です。」、「Yes, it is.」は「はい、それはそうです。」となって正しい答えではないよ。",
      },
      {
        id: "05",
        question: "次の英文を日本語に訳しなさい。<br>「When is your birthday?」",
        answers: ["あなたの誕生日はいつですか？", "あなたの誕生日は何ですか？", "あなたの誕生日はどこですか？", "あなたの誕生日は誰ですか？"],
        correct: "あなたの誕生日はいつですか？",
        hint: "",
        explanation: "「When」は「いつ」という意味の疑問詞だよ。"
      },
      {
        id: "06",
        question: "「次のテストはいつですか？」を英語にした時、[ ]に入る語は？<br>　[ ] the next test?",
        answers: ["When is", "When does", "When do", "When are"],
        correct: "When is",
        hint: "「〇〇はいつですか」の時は「When + be動詞 + 名詞」の形だよ。",
        explanation: "「When is the next test?」で「次のテストはいつですか？」という意味になるよ。",
      },
      {
        id: "07",
        question: "「あなたはいつ学校に行きますか？」を英語にした時、[ ]に入る語は？<br>　[ ] you go to school?",
        answers: ["When do", "When does", "When are", "When is"],
        correct: "When do",
        hint: "「〇〇するのはいつですか」の時は「When + 通常の疑問文」の形だよ。",
        explanation: "「When do you go to school?」で「あなたはいつ学校に行きますか？」という意味になるよ。",
      },
      {
        id: "08",
        question: "「私は月曜日にテニスをします。」を英語にした時、[ ]に入る語は？<br>　I play tennis [ ]",
        answers: ["on Monday.", "in Monday.", "at Monday.", "for Monday."],
        correct: "on Monday.",
        hint: "曜日を表す前置詞は「on」だよ。",
        explanation: "「I play tennis on Monday.」で「私は月曜日にテニスをします。」という意味になるよ。",
      },
      {
        id: "09",
        question: "「When is the party?」の返事として正しいのはどれ？",
        answers: ["It's on Saturday.", "It's on the table.", "It's a party.", "Yes, it is."],
        correct: "It's on Saturday.",
        hint: "「パーティーはいつですか？」と聞かれているね。",
        explanation: "「It's on Saturday.」は「それは土曜日です。」という意味で正しいよ。「It's on the table.」は「それはテーブルの上にあります。」、「It's a party.」は「それはパーティーです。」、「Yes, it is.」は「はい、それはそうです。」となって正しい答えではないよ。",
      },
      {
        id: "10",
        question: "「あなたはいつピアノを弾きますか？」を英語にした時、[ ]に入る語は？<br>　[ ] play the piano?",
        answers: ["When do you", "When does you", "When are you", "When is you"],
        correct: "When do you",
        hint: "「When + 通常の疑問文」の形だよ。",
        explanation: "「When do you play the piano?」で「あなたはいつピアノを弾きますか？」という意味になるよ。",
      },


    ]
    
}

export default {
  english18: QUIZ_ENGLISH,
};
