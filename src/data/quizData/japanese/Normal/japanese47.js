const QUIZ_CONTENT = {
  title: "詩",
  subject: "pink",
  data: [
    {
      id: "01",
      question: "昔の言葉で書かれている詩を何というか。",
      answers: ["文語詩", "口語詩", "現代詩", "古典詩"],
      correct: "文語詩",
      hint: "",
      explanation: "昔の言葉で書かれている詩を「<ruby>文語詩<rt>ぶんごし</rt></ruby>」というよ。",
      image: ""
    },
    {
      id: "02",
      question: "現代の言葉で書かれている詩を何というか。",
      answers: ["文語詩", "口語詩", "現代詩", "古典詩"],
      correct: "口語詩",
      hint: "",
      explanation: "現代の言葉で書かれている詩を「<ruby>口語詩<rt>こうごし</rt></ruby>」というよ。日常会話のような言葉で書かれているね。",
      image: ""
    },
    {
      id: "03",
      question: "音数や語数に決まりのある詩を何というか。",
      answers: ["定型詩", "自由詩", "韻文詩", "散文詩"],
      correct: "定型詩",
      hint: "",
      explanation: "音数や語数に決まりのある詩を「<ruby>定型詩<rt>ていけいし</rt></ruby>」というよ。五・七・五の俳句も定型詩だね。",
      image: ""
    },
    {
      id: "04",
      question: "音数や語数に決まりのない詩を何というか。",
      answers: ["定型詩", "自由詩", "韻文詩", "散文詩"],
      correct: "自由詩",
      hint: "",
      explanation: "音数や語数に決まりのない詩を「自由詩」というよ。",
      image: ""
    },
    {
      id: "05",
      question: "行分けなどがなされず、普通の文章のように書かれた詩を何というか。",
      answers: ["定型詩", "自由詩", "韻文詩", "散文詩"],
      correct: "散文詩",
      hint: "",
      explanation: "行分けなどがなされず、普通の文章のように書かれた詩を「<ruby>散文詩<rt>さんぶんし</rt></ruby>」というよ。",
      image: ""
    },
    {
      id: "06",
      question: "次の画像の詩の種類は？",
      answers: ["文語自由詩", "口語自由詩", "文語定型詩", "口語散文詩"],
      correct: "口語自由詩",
      hint: "",
      explanation: "この詩は現代の言葉で書かれていて、音数や語数に決まりがないから「口語自由詩」だよ。",
      image: "/questionImg/japanese08.png"
    },
    {
      id: "07",
      question: "第一連の部分で対になっている言葉はどれか。",
      answers: ["私と小鳥", "私と空", "私と走る", "私と地面"],
      correct: "私と小鳥",
      hint: "「私は空を飛べなくて、小鳥は速く走れない」という対比があるね。",
      explanation: "詩の意味上の段落を「連」というよ。文章で言う段落だね。第一連では「私は空を飛べなくて、小鳥は速く走れない」という対比があるから、ついになっているのは「私」と「小鳥」だよ。",
      image: "/questionImg/japanese08.png"
    },
    {
      id: "08",
      question: "第二連で使われている表現技法はどれか。",
      answers: ["比喩", "省略", "倒置法", "体言止め"],
      correct: "比喩",
      hint: "「あの鳴る鈴は私のように、たくさんな唄は知らないよ。」とあるね。",
      explanation: "物事を他のものに例えて表現する比喩が使われているね。",
      image: "/questionImg/japanese08.png"
    },
    {
      id: "09",
      question: "対句になっているのはどれか。",
      answers: ["第一連と第二連", "第二連と第三連", "第一連と第三連", "対句はない"],
      correct: "第一連と第二連",
      hint: "",
      explanation: "第一連と第二連が対句になっているね。",
      image: "/questionImg/japanese08.png"
    },
    {
      id: "10",
      question: "この詩で最も伝えたいことがまとめられているのはどれか。",
      answers: ["第一連", "第二連", "第三連", "どれでもない"],
      correct: "第三連",
      hint: "",
      explanation: "第一連と第二連で例を示して、第三連で言いたいことをまとめているね。",
      image: "/questionImg/japanese08.png"
    },
  ]
  
}

export default {
  japanese47: QUIZ_CONTENT,
};
