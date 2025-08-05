const QUIZ_ENGLISH = {
  title: "一般動詞",
  subject: "purple",
  data: [
        {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「I play tennis.」",
        answers: ["私はテニスをします。", "私はテニスが好きです。", "私はテニスをしますか？", "私はテニスです。"],
        correct: "私はテニスをします。",
        hint: "「I play 〇〇.」は「私は〇〇をします。」という意味だよ！",
        explanation: "「I play 〇〇.」は「私は〇〇をします。」という意味だよ。be動詞(am,is,areなど)ではない、playという一般動詞が使われているよ！",
        image: ""
      },
      {
        id: "02",
        question: "「私はテニスをします。」を英語にした時、[ ]に入る語は？<br>　I [ ] tennis.",
        answers: ["play", "am"],
        correct: "play",
        hint: "「私は〇〇をします」は英語で「I play 〇〇.」と言うよ！",
        explanation: "「私は〇〇をします」は英語で「I play 〇〇.」と言うよ！「I am」は「私は〇〇です」という意味だよ！",
        image: ""
      },
      {
        id: "03",
        question: "「私は音楽が好きです。」を英語にした時、[ ]に入る語は？<br>　I [ ] music.",
        answers: ["like", "am"],
        correct: "like",
        hint: "「私は〇〇が好きです」は英語で「I like 〇〇.」と言うよ！",
        explanation: "「私は〇〇が好きです」は英語で「I like 〇〇.」と言うよ！「I am」は「私は〇〇です」という意味だよ！",
        image: ""
      },
      {
        id: "04",
        question: "「あなたは音楽が好きです。」を英語にした時、[ ]に入る語は？<br>　You [ ] music.",
        answers: ["like", "are", "play", "is"],
        correct: "like",
        hint: "「あなたは〇〇が好きです」は英語で「You like 〇〇.」と言うよ！",
        explanation: "「あなたは〇〇が好きです」は英語で「You like 〇〇.」と言うよ！慣れていこう。",
        image: ""
      },
      {
        id: "05",
        question: "次の英文を日本語に訳しなさい。<br>「I have a car.」",
        answers: ["私は車を持っています。", "私は車が好きです。", "私は車を運転します。", "私は車です。"],
        correct: "私は車を持っています。",
        hint: "「I have 〇〇.」は「私は〇〇を持っています。」という意味だよ！",
        explanation: "「I have 〇〇.」は「私は〇〇を持っています。」という意味だよ",
        image: ""
      },

      {
        id: "06",
        question: "次の英文を日本語に訳しなさい。<br>「I do not like tomato.」",
        answers: ["私はトマトが好きではありません。", "私はトマトが好きです。"],
        correct: "私はトマトが好きではありません。",
        hint: "「I do not like 〇〇.」は「私は〇〇が好きではありません。」という意味だよ！",
        explanation: "「I do not like 〇〇.」は「私は〇〇が好きではありません。」という意味だよ！「do not」は「しない」という意味の否定形だよ！",
      },
      {
        id: "07",
        question: "「私は車を持って<strong>いません</strong>。」を英語にした時、[ ]に入る語は？<br>　I [ ] have a car.",
        answers: ["do not", "not", "am not", "not do"],
        correct: "do not",
        hint: "「私は〇〇を持っていません」は英語で「I do not have 〇〇.」と言うよ！",
        explanation: "「私は〇〇を持っていません」は英語で「I do not have 〇〇.」と言うよ！「do not」は「しない」という意味の否定形だよ！",
        image: ""
      },
      {
        id: "08",
        question: "「do not」は、どのように省略される？",
        answers: ["don't", "dn't", "do't", "d'ot"],
        correct: "don't",
        hint: "「do not」は「don't」と短縮されるよ！",
        explanation: "「do not」は「don't」と短縮されるよ！英語ではよく使われる表現だから覚えておこう！",
        image: ""
      },
      {
        id: "09",
        question: "「あなたは犬が好きではありません。」を英語にした時、[ ]に入る語は？<br>　You [ ] like dogs.",
        answers: ["don't", "are not", "not", "do't"],
        correct: "don't",
        hint: "「あなたは〇〇が好きではありません」は英語で「You don't like 〇〇.」と言うよ！",
        explanation: "「あなたは〇〇が好きではありません」は英語で「You don't like 〇〇.」と言うよ！",
        image: ""
      },
      {
        id: "10",
        question: "「私はピアノを弾きません。」を英語にした時、[ ]に入る語は？<br>　I [ ] the piano.",
        answers: ["don't play", "not play", "am not playing", "do play not"],
        correct: "don't play",
        hint: "「私は〇〇を弾きません」は英語で「I don't play 〇〇.」と言うよ！",
        explanation: "「私は〇〇を弾きません」は英語で「I don't play  the 〇〇.」と言うよ！楽器を弾く時は楽器の前に「the」をつけることが多いよ！",
        image: ""
      }
    ]
    
}

export default {
  english05: QUIZ_ENGLISH,
};
