const QUIZ_ENGLISH = {
  title: "be動詞",
  subject: "purple",
  data: [
    {
      id: "01",
      question: "「私は学生です。」を英語にした時、[ ]に入る語は？<br>　I [　　] a student.",
      answers: ["am", "is", "are", "be"],
      correct: "am",
      hint:"Iが主語の時のbe動詞は何になるかな？",
      explanation: "私は〇〇です」は英語で「I am 〇〇.」と言うよ！",
      image: ""
    },
    { 
      id: "02", 
      question: "次の英文を日本語に訳しなさい。<br>「We are students.」", 
      answers: ["私は生徒です。", "私達は生徒です。", "私達は生徒ですか？", "あなた達は生徒ですか？"],
      correct: "私達は生徒です。",
      hint:"Weが主語の時のbe動詞は何になるかな？",
      explanation: "「We are 〇〇.」で「私達は〇〇です。」という意味になるよ！",
      image: ""
    },
    {
      id: "03", 
      question: "「私は14歳です。」を英語にした時、[ ]に入る語は？<br>[　　] 14 years old.",
      answers: ["I'm", "I", "Im", "Is"],
      correct: "I'm",
      hint:"「I am」は「I'm」と省略することができるよ！〇歳は「〇 years old」で表現できるよ！",
      explanation: "「I am」は「I'm」と省略することができるよ！",
      image: ""
    },
    { 
      id: "04", 
      question: "「あなたたちは私の友達です。」を英語にした時、[ ]に入る語は？<br>　You [　　] my friend.",
      answers: ["are", "is", "am", "be"],
      correct: "are",
      hint:"Youが主語の時のbe動詞は何になるかな？",
      explanation: "「あなたは〇〇です」は英語で「You are 〇〇.」と言うよ！。",
      image: ""
    },
    {
      id: "05", 
      question: "「彼は私の友達です。」を英語にした時、[ ]に入る語は？<br>　He [　　] my friend.",
      answers: ["is", "are", "am", "be"],
      correct: "is",
      hint:"Heが主語の時のbe動詞は何になるかな？",
      explanation: "「彼は〇〇です」は英語で「He is 〇〇.」と言うよ！",
      image: ""
    },
    { 
      id: "06", 
      question: "「彼女は先生です。」を英語にした時、[ ]に入る語は？<br>　She [　　] a teacher.",
      answers: ["is", "are", "am", "be"],
      correct: "is",
      hint:"Sheが主語の時のbe動詞は何になるかな？",
      explanation: "「彼女は〇〇です」は英語で「She is 〇〇.」と言うよ！",
      image: ""
    },
    { 
      id: "07", 
      level: "hard",
      question: "「ミナトは背が高いです」を英語にした時、[ ]に入る語は？<br>　Minato [　　] tall.",
      answers: ["is", "are", "am", "be"],
      correct: "is",
      hint:"be動詞は「I」の時は「am」, 「You,We,They」の時は「are」, 「He,She」の時は「is」になったね。今回はどうだろう？",
      explanation: "IとYou以外の単数のものが主語の時のbe動詞は「is」になるんだ。慣れていこうね！",
      image: ""
    },
    { 
      id: "08", 
      question: "次の文章を英語にした時、正しいのは？<br>「私はタケルです。」",
      answers: ["I am Takeru.", "Am I Takeru.", "I Takeru am.", "Takeru I am."],
      correct: "I am Takeru.",
      hint:"「私は〇〇です」は英語で「I am 〇〇.」と言うよ！",
      explanation: "主語→be動詞→補語の順番だよ！慣れていこうね！",
      image: ""
    },
    { 
      id: "09", 
      level: "hard",
      question: "次の文章を英語にした時、正しいのは？<br>「私は花子では<strong>ありません</strong>。」",
      answers: ["I am not Hanako.", "I not am Hanako.", "I am Hanako not.", "Not I am Hanako."],
      correct: "I am not Hanako.",
      hint:"「私は〇〇ではありません」は英語で「I am not 〇〇.」と言うよ！",
      explanation: "否定するときはbe動詞の後に「not」をつけるよ！",
     image: ""
    },
    { 
      id: "10", 
      level: "hard",
      question: "次の文章を英語にした時、正しいのは？<br>「彼らは医者では<strong>ありません</strong>。」",
      answers: ["They not are doctors.", "They are not doctors.", "They are doctors not.", "Not they are doctors."],
      correct: "They are not doctors.",
      hint:"「彼らは〇〇ではありません」は英語で「They are not 〇〇.」と言うよ！",
      explanation: "否定するときはbe動詞の後に「not」をつけるよ！「are not」は「aren't」と省略することもできるよ！",
    },

  ]

}
export default {
  english02: QUIZ_ENGLISH,
};
