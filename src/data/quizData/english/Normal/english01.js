const QUIZ_ENGLISH = {
  title: "SVOC",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "「たろうが りんごを たべる。」<br>この文の主語はどれ？",
        answers: ["たろうが", "りんごを", "たべる", "。"],
        correct: "たろうが",
        hint: "『だれが？』を考えてみよう。",
        explanation: "たろうが『りんごをたべる』人なので、主語だよ。",
        image: ""
      },
      {
        id: "02",
        question: "「チヨは ピアノを ひく。」<br>この文の動詞（述語）はどれ？",
        answers: ["。", "ピアノを", "ひく", "チヨは"],
        correct: "ひく",
        hint: "『なにをする？』にあたる言葉だよ。",
        explanation: "「はなこ」が主語で「ひく」が動詞だよ。",
        image: ""
      },
      {
        id: "03",
        level: "hard",
        question: "「ぼくは 背が 高い。」<br>この中で補語はどれ？",
        answers: ["ぼくは", "背が", "高い", "。"],
        correct: "高い",
        hint: "僕＝？の？にあたる言葉だよ。",
        explanation: "「ぼく」が主語で「高い」が補語だよ。",
        image: ""
      },
      {
        id: "04",
        question: "「たけるは ふくを きた。」<br>この中で目的語はどれ？",
        answers: ["。", "ふくを", "きた", "たけるは"],
        correct: "ふくを",
        hint: "『なにを？』にあたる言葉だよ。",
        explanation: "「たけるは」が主語で「きた」が述語。「〇〇を」にあたる「ふくを」が目的語だよ。",
        image: ""
      },
      {
        id: "05",
        question: "「I play soccer.」の主語はどれ？",
        answers: ["I", "play", "soccer", "."],
        correct: "I",
        hint: "I→私は<br>play→する<br>soccer→サッカー",
        explanation: "「I」が主語で「play」が動詞、「soccer」が目的語だね。",
        image: ""
      },
      {
        id: "06",
        question: "「She runs fast.」の動詞（述語）はどれ？",
        answers: ["She", "fast", "runs", "."],
        correct: "runs",
        hint: "She→彼女<br>run→走る<br>fast→速く",
        explanation: "「She」が主語で「runs」が動詞だね。",

        image: ""
      },
      {
        id: "07",
        question: "「Tom is a student.」の主語はどれ？",
        answers: ["is", "Tom", "a", "student"],
        correct: "Tom",
        hint: "Tom→トム<br>student→学生",
        explanation: "「Tom」が主語で「is」が動詞、「student」が補語だよ。",
        image: ""
      },
      {
        id: "08",
        question: "「I am a teacher.」の補語はどれ？",
        answers: ["I", "am", "a", "teacher"],
        correct: "teacher",
        hint: "I→私は<br>am→be動詞<br>a→不定冠詞",
        explanation: "「I」が主語で「am」が動詞、「teacher」が補語だよ。",
      },
      {
        id: "09",
        level: "hard",
        question: "「僕はタケルです」という文を英語にした時、<br>正しい英語の語順はどれ？",
        answers: ["I am Takeru.", "Takeru am I.", "Takeru I am.", "Am I Takeru."],
        correct: "I am Takeru.",
        hint: "主語→be動詞→名詞の順番が基本だよ。",
        explanation: "「I am Takeru.」が正しい語順になるよ。まずは主語から始まるんだね。",
        image: ""
      },
      {
        id: "10",
        level: "hard",
        question: "「チヨがスイーツを食べる」という文を英語にした時、<br>正しい英語の語順はどれ？",
        answers: ["Chiyo eats sweets.", "Chiyo sweets eats.", "Sweets Chiyo eats.", "Eats Chiyo sweets."],
        correct: "Chiyo eats sweets.",
        hint: "主語→動詞→名詞や形容詞などの順番が基本だよ。",
        explanation: "「Chiyo eats sweets.」が正しい語順になるよ。まずは主語から始まるんだね。",
        image: ""

      },
    ]
}


export default {
  english01: QUIZ_ENGLISH,
};
