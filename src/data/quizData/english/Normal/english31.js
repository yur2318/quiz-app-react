const QUIZ_ENGLISH = {
  title: "過去進行形",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「I was studying English then.」",
        answers: ["私はその時、英語を勉強していました。", "私はその時、英語を勉強します。"],
        correct: "私はその時、英語を勉強していました。",
        hint: "",
        explanation: "「〇〇していました」という過去の進行形では「be動詞の過去形 + 動詞のing形」を使うよ。「then」は「その時」という意味で、文の最後に置くよ。",
      },
      {
        id: "02",
        question: "「彼はその時、テレビを見ていました。」を英語にした時、[ ]に入る語は？<br>　He [ ] TV then.",
        answers: ["was watching", "were watching", "is watching", "watched"],
        correct: "was watching",
        hint: "「watch」のing形は「watching」だよ。",
        explanation: "過去進行形の文では「be動詞の過去形 + 動詞のing形」を使うよ。",
        
      },
      {
        id: "03",
        question: "「私たちは昼ごはんを食べていました。」を英語にした時、[ ]に入る語は？<br>　We [ ] lunch.",
        answers: ["were eating", "was eating", "are eating", "ate"],
        correct: "were eating",
        hint: "「eat」のing形は「eating」だよ。",
        explanation: "過去進行形の文では「be動詞の過去形 + 動詞のing形」を使うよ。「We」は複数形だから「are」の過去形「were」を使うよ。",
      },
      {
        id: "04",
        question: "「チヨとタケルはその時勉強をしていませんでした。」を英語にした時、[ ]に入る語は？<br>　Chiyo and Takeru [ ] then.",
        answers: ["were not studying", "was not studying", "were noting study", "did not study"],
        correct: "were not studying",
        hint: "否定の過去進行形では「be動詞の過去形 + not + 動詞のing形」を使うよ。",
        explanation: "否定の過去進行形では「be動詞の過去形 + not + 動詞のing形」を使うよ。「Chiyo and Takeru」は複数形だから「were」を使うよ。",
      },
      {
        id: "05",
        question: "「彼女はその時、音楽を聴いていませんでした。」を英語にした時、[ ]に入る語は？<br>　She [ ] music then.",
        answers: ["wasn't listening to", "weren't listening to", "was listening not to", "not was listening to"],
        correct: "wasn't listening to",
        hint: "否定の過去進行形では「be動詞の過去形 + not + 動詞のing形」を使うよ。",
        explanation: "否定の過去進行形では「be動詞の過去形 + not + 動詞のing形」を使うよ。「She」は単数形だから「was」を使うよ。「listen to」は「音楽を聴く」という意味だよ。",
      },
      {
        id: "06",
        question: "「彼はその時、サッカーをしていましたか？」を英語にした時、[ ]に入る語は？<br>　[ ] soccer then?",
        answers: ["Was he playing", "Was he play", "Was playing he", "Did he playing"],
        correct: "Was he playing",
        hint: "過去進行形の疑問文では「be動詞の過去形 + 主語 + 動詞のing形」の順番で聞くよ。",
        explanation: "過去進行形の疑問文では「be動詞の過去形 + 主語 + 動詞のing形」の順番で聞くよ。",
      },
      {
        id: "07",
        question: "「あなたは何をしていましたか？」を英語にした時、正しいのはどれ？",
        answers: ["What were you doing?", "What were you do?", "What you ware doing?", "What did you doing?"],
        correct: "What were you doing?",
        hint: "過去進行形の疑問文では「be動詞の過去形 + 主語 + 動詞のing形」の順番で聞くよ。これの先頭に疑問詞「What」をつけるよ。",
        explanation: "「What→通常の疑問文」の形にするよ。過去進行形の疑問文では「be動詞の過去形 + 主語 + 動詞のing形」の順番だから、「What were you doing?」が正しいよ。",
      },
      {
        id: "08",
        question: "「Were you studying English yesterday?」の返事として正しいのはどれ？",
        answers: ["No, I wasn't.", "No, I am not.", "No, I were not.", "No, I didn't."],
        correct: "No, I wasn't.",
        hint: "「Were you ~ ?」と聞かれているね。",
        explanation: "過去のbe動詞を使って返事するのが正しいよ。Iに対しては「was」を使うよ！",
      },
      {
        id: "09",
        question: "「彼女が来たとき、私は夕食を食べていました。」を英語にした時、[ ]に入る語は？<br>　I was eating [ ] she came.",
        answers: ["when", "while", "after", "before"],
        correct: "when",
        hint: "疑問詞で「いつ」を表した単語と同じものが答えだよ！",
        explanation: "「when」は「の時」という意味でも使えるよ。whenの前後にそれぞれ主語と動詞がある文があるね。",
      },
      {
        id: "10",
        question: "「走っていたときに、猫を見かけた。」を英語にした時、[ ]に入る語は？<br>　I saw a cat [ ]",
        answers: ["when I was running", "when I run", "when I ran", "while I am running"],
        correct: "when I was running",
        hint: "「走っていた」だから過去進行形で表そう。",
        explanation: "「走っていた時」は過去進行形で「When I was running」となるよ。",
      },

    ]
};

export default {
  english31: QUIZ_ENGLISH,
};
