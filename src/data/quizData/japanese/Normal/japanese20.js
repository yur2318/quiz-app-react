const QUIZ_CONTENT = {
  title: "文章・文の構成",
  subject: "pink",
  data: [
    {
      id: "01",
      question:"①のように文字で書き表したひとまとまりの内容を何というか。",
      answers: ["文", "文章", "段落", "句"],
      correct: "文章",
      hint: "",
      explanation: "文字で書き表したひとまとまりの内容のことを「<ruby>文章<rt>ぶんしょう</rt></ruby>」というよ。",
      image: "/questionImg/japanese01.png"
    },
    {
      id: "02",
      question: "②のように文章を意味のまとまりごとに区切ったものを何というか。",
      answers: ["文", "文章", "段落", "句"],
      correct: "段落",
      hint: "",
      explanation: "文章を意味のまとまりごとに区切ったものを「<ruby>段落<rt>だんらく</rt></ruby>」というよ。",
      image: "/questionImg/japanese01.png"
    },
    {
      id: "03",
      question: "文章の中でさらに「。」「！」「？」などで区切られる、一続きの言葉を何というか。",
      answers: ["文", "文章", "段落", "句"],
      correct: "文",
      hint: "",
      explanation: "「。」「！」「？」などで区切られる、意味のまとまりを「文」というよ。",
      image: ""
    },
    {
      id: "04",
      question: "次の文章はいくつの段落から成り立っているか。",
      answers: ["1", "5", "13", "4"],
      correct: "4",
      hint: "",
      explanation: "段落は意味のまとまりごとに区切られているよ。段落の初めは改行されているね。",
      image: "/questionImg/japanese01.png"

    },
    {
      id: "05",
      question: "次の文章の一段落目はいくつの文から成り立っているか。",
      answers: ["1", "5", "13", "4"],
      correct: "4",
      hint: "",
      explanation: "文は「。」「！」「？」などで区切られているよ。一段落目は4つの文でできてるね。",
      image: "/questionImg/japanese01.png"
    },
    {
      id: "06",
      question: "「僕は／彼女と／勉強した。」のように、文を意味が不自然でない程度に区切った最小の単位をなんというか。",
      answers: ["文", "段落", "文節", "単語"],
      correct: "文節",
      hint: "",
      explanation: "文を意味が不自然でない程度に区切った最小の単位を「<ruby>文節<rt>ぶんせつ</rt></ruby>」というよ。",
      image: ""
    },
    {
      id: "07",
      question: "「僕／は／彼女／と／勉強／した。」のように、意味や働きを持つ言葉の最小の単位をなんというか。",
      answers: ["文", "段落", "文節", "単語"],
      correct: "単語",
      hint: "",
      explanation: "意味や働きを持つ言葉の最小単位を「単語」というよ。",
      image: ""
    },
    {
      id: "08",
      question: "次の文は何で区切られているか。<br>「今日は／友達と／楽しく／遊んだ。」",
      answers: ["文", "段落", "文節", "単語"],
      correct: "文節",
      hint: "",
      explanation: "単語だったら「今日／は／…」と区切られるはずだね。文節は意味が不自然でない程度に区切られているよ。",      
      image: ""
    },
    {
      id: "09",
      question: "次の文は何で区切られているか。<br>「昨日／は／雨／が／降っ／た。」",
      answers: ["文", "段落", "文節", "単語"],
      correct: "単語",
      hint: "",
      explanation: "文節だったら「昨日は／雨が／…」と区切られるはずだね。単語は意味や働きを持つ言葉の最小単位だよ。",
      image: ""
    },
    {
      id: "10",
      level: "hard",
      question: "次の文を単語で区切るとどうなるか。<br>「図書館に行く。」",
      answers: ["図書館／に／行く", "図書館／に行く", "図書館に／行く", "図書／館／に／行く"], 
      correct: "図書館／に／行く",
      hint: "",
      explanation: "「図書館」は名詞で、それ以上は分けられないよ。「に」と「行く」はそれぞれ別の単語だね。",
      image: ""
    }
  ]
  
}




export default {
  japanese20: QUIZ_CONTENT,
};
