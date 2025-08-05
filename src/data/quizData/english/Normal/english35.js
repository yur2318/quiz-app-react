const QUIZ_ENGLISH = {
  title: "接続詞",
  subject: "purple",
  data: [
      {
        id: "01",
        question: "次の英文を日本語に訳しなさい。<br>「I stayed home because I was sick.」",
        answers: ["私は病気だったので、家にいました。", "私は病気だったけれど、家にいました。"],
        correct: "私は病気だったので、家にいました。",
        hint: "",
        explanation: "「because」は「なぜなら」という理由を示す接続詞だよ。becauseの後に理由が続くよ。原則として、becauseは文と文をつなげる働きをするよ。",
      },
      {
        id: "02",
        question: "次の英文を日本語に訳しなさい。<br>「I was eating dinner when he called me.」",
        answers: ["彼が電話をかけてきた時、私は夕食を食べていました。", "彼が電話をかけてきたので、私は夕食を食べました。"],
        correct: "彼が電話をかけてきた時、私は夕食を食べていました。",
        hint: "",
        explanation: "「when」は時間を示す接続詞だよ。原則として、whenは文と文をつなげる働きをするよ。",
      },
      {
        id: "03",
        question: "次の英文を日本語に訳しなさい。<br>「If you study, you will pass the test.」",
        answers: ["もし勉強すれば、テストに合格するでしょう。", "あなたは勉強したが、テストに合格しなかった。"],
        correct: "もし勉強すれば、テストに合格するでしょう。",
        hint: "",
        explanation: "「if」は「もし～ならば」という条件を示す接続詞だよ。原則として、ifも文と文をつなげる働きをするよ。",
      },
      {
        id: "04",
        question: "次の英文を日本語に訳しなさい。<br>「I think that it is interesting.」",
        answers: ["私はそれが面白いと思います。", "私はそれが面白いと思っていました。"],
        correct: "私はそれが面白いと思います。",
        hint: "",
        explanation: "「that」は「〜ということ」と文をひとつのかたまりにする言葉だよ。「それが面白いということ」を『think（思う）』のうしろにつなげているんだ。",
      },
      {
        id: "05",
        question: "「英語は楽しいので、好きです。」を英語にした時、[ ]に入る語は？<br>　I like English [ ] it's fun.",
        answers: ["because", "but", "when", "if"],
        correct: "because",
        hint: "理由を示す接続詞を選ぼう。",
        explanation: "「because」は理由を示す接続詞だよ。「英語は楽しい」という理由から「好きです」という結果が生まれているんだ。",
      },
      {
        id: "06",
        question: "「家に着いたら電話します。」を英語にした時、[ ]に入る語は？<br>　I will call you [ ] I get home.",
        answers: ["because", "but", "when", "if"],
        correct: "when",
        hint: "時間を示す接続詞を選ぼう。",
        explanation: "「when」は時間を示す接続詞だよ。「家に着いた時」という時間に「電話します」ということを表しているんだ。",
      },
      {
        id: "07",
        question: "「もし疲れていたら、休んでね」を英語にした時、[ ]に入る語は？<br>　[ ] you are tired, take a rest.",
        answers: ["or", "and", "but", "so"],
        correct: "if",
        hint: "条件を示す接続詞を選ぼう。",
        explanation: "「if」は条件を示す接続詞だよ。「もし疲れていたら」という条件に対して「休んでね」ということを表しているんだ。",
      },
      {
        id: "08",
        question: "「彼が先生だということを知っている」を英語にした時、[ ]に入る語は？<br>　I know [ ] he is the teacher.",
        answers: ["that", "if", "when", "because"],
        correct: "that",
        hint: "文をひとつのかたまりにする接続詞を選ぼう。",
        explanation: "「that」は「〜ということ」と文をひとつのかたまりにする言葉だよ。「彼が先生だということ」を『know（知っている）』のうしろにつなげているんだ。",
      },
      {
        id: "09",
        level: "hard",
        question: "「忙しいから、行けない。」を英語にした時、正しいのは？",
        answers: ["Because I'm busy, I can’t go.", "I'm busy, because I can’t go."],
        correct: "Because I'm busy, I can’t go.",
        hint: "becauseの後に理由が続くことを考えよう。",
        explanation: "becauseの後に理由が続くよ。「I can't go because I'm busy.」や「I'm busy, so I can't go.」も同じ意味になるよ。",
      },
      {
        id: "10",
        question: "「もし疲れていたら、私は手伝います。」を英語にした時、正しいのは？",
        answers: ["If you are tired, I will help you.", "If I will help you, you are tired."],
        correct: "If you are tired, I will help you.",
        hint: "ifの後に条件が続くことを考えよう。",
        explanation: "ifの後に条件が続くよ。「I will help you if you are tired.」も同じ意味になるよ。",
      }
    ]
};

export default {
  english35: QUIZ_ENGLISH,
};
