const QUIZ_ENGLISH = {
  title: "助動詞",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「You must study hard.」",
        answers: ["あなたは一生懸命勉強しなければなりません。", "あなたは一生懸命勉強する。"],
        correct: "あなたは一生懸命勉強しなければなりません。",
        hint: "",
        explanation: "「must」は「〜しなければならない」という義務を示す助動詞だよ。助動詞は動詞の前に置いて、動詞の意味を変える働きをするよ。助動詞の後には<strong>動詞の原形が続くよ。</strong>",
      },
      {
        id: "02",
        question: "次の英文を日本語に訳しなさい。<br>「I have to do my homework.」",
        answers: ["私は宿題をしなければなりません。", "私は宿題をします。"],
        correct: "私は宿題をしなければなりません。",
        hint: "",
        explanation: "「have to」は「must」と似ていて「〜しなければならない」という義務を示す助動詞だよ。助動詞は動詞の前に置いて、動詞の意味を変える働きをするよ。「ハフトゥ」と発音するよ。助動詞の後には<strong>動詞の原形が続くよ。</strong>",
      },
      {
        id: "03",
        question: "「あなたは一生懸命勉強しなければなりません。」を英語にした時、正しいのは？",
        answers: ["You must study hard.", "You must studies hard.", "You study must hard.", "You studies must hard."],
        correct: "You must study hard.",
        hint: "主語→助動詞→動詞の原形　の順番だよ。",
        explanation: "「must」は助動詞で、主語の後に置くよ。助動詞の後には動詞の原形が続くよ。"
      },
      {
        id: "04",
        question: "「彼女は早起きしなければなりません。」を英語にした時、正しいのは？",
        answers: ["She have to get up early.", "She has to get up early."],
        correct: "She has to get up early.",
        hint: "主語が三人称単数の時は、hasを使うよ。",
        explanation: "「have to」は主語が三人称単数の時は「has」を使うよ。「ハストゥ」と発音するよ。"
      },
      {
        id: "05",
        question: "「私はこれを今やらなければなりませんか？」を英語にした時、[ ]に入る語は？<br>　[ ] I do this now?",
        answers: ["Must", "Have", "Do", "Can"],
        correct: "Must",
        hint: "疑問文の時は、助動詞を文頭に置こう。",
        explanation: "疑問文の時は、助動詞を文頭に置くよ。「Must I do this now?」は「私はこれを今やらなければなりませんか？」という意味になるよ。助動詞の後には動詞の原形が続くよ。",
      },
      {
        id: "06",
        level: "hard",
        question: "「彼女は日曜日に働かなければなりませんか？」を英語にした時、[ ]に入る語は？<br>　[ ] work on Sunday?",
        answers: ["Does she have to", "Does have to she", "Has to she", "Has she to"],
        correct: "Does she have to",
        hint: "have toの疑問詞ではDoを前に持ってくるよ。",
        explanation: "「have to」の疑問文では、主語の前に「Do」を置くよ。今回は主語が三人称単数だから「Does」になるよ。",
      },
      {
        id: "07",
        question: "次の英文を日本語に訳しなさい。<br>「You must not touch that.」",
        answers: ["あなたはそれに触れてはいけません。", "あなたはそれに触らなくてもいいです。"],
        correct: "あなたはそれに触れてはいけません。",
        hint: "",
        explanation: "「must not」は「〜してはいけない」という禁止を示すよ。「Don't touch that.」も同じ意味だね。",
      },
      {
        id: "08",
        question: "次の英文を日本語に訳しなさい。<br>「He doesn’t have to study now.」",
        answers: ["彼は今勉強しなくてもいいです。", "彼は今勉強してはいけません。"],
        correct: "彼は今勉強しなくてもいいです。",
        hint: "",
        explanation: "「don't have to」は「〜しなくても良い」という意味になるよ。"
      },
      {
        id: "09",
        question: "「生徒は遅刻してはいけません。」を英語にした時、正しいのは？",
        answers: ["Students must not be late.", "Students don't have to be late."],
        correct: "Students must not be late.",
        hint: "「must not」は「〜してはいけない」、「don't have to」は「〜しなくても良い」という意味だよ。",
        explanation: "「〜してはいけない」という禁止を表すから、「must not」を使うよ。"
      },
      {
        id: "10",
        level: "hard",
        question: "「Must we be quiet?」の返事として正しいのは？",
        answers: ["No, you must not.", "No, you don't have to."],
        correct: "No, you don't have to.",
        hint: "静かにしなければならないかどうかを聞かれているよ。",
        explanation: "「私たちは静かにしなければなりませんか？」という意味だよ。返事は「いいえ、しなくてもいいです。」となるから、「No, you don't have to.」が正しいよ。「must not」は「〜してはいけない」という意味だから、ここでは使わないよ。"
      }
    ]
};

export default {
  english36: QUIZ_ENGLISH,
};
