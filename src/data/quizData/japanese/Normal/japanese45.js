const QUIZ_CONTENT = {
  title: "漢文①",
  subject: "pink",
  data: [
    {
      id: "01",
      question: "古代中国で発達した文語体で書かれた文章を何というか。",
      answers: ["漢文", "詩", "古文", "現代文"],
      correct: "漢文",
      hint: "",
      explanation: "古代中国で発達した文語体で書かれた文章を「漢文」というよ。名前の通り漢字ばっかり！",
      image: "/questionImg/japanese06.png"
    },
    {
      id: "02",
      question: "日本語の文章にする前の元の漢文を何というか。",
      answers: ["白文", "訓読文", "書き下し文", "現代語訳"],
      correct: "白文",
      hint: "",
      explanation: "日本語の文章にする前の元の漢文を「白文」というよ。この状態では読めないね！",
      image: "/questionImg/japanese06.png"
    },
    {
      id: "03",
      question: "白文に送仮名がな、句読点、返点を補おぎなったものを何というか。",
      answers: ["訓読文", "白文", "書き下し文", "現代語訳"],
      correct: "訓読文",
      hint: "",
      explanation: "白文に送り仮名、句読点、返り点を補ったものを「訓読文」というよ。漢文を日本語の文章として読むことを訓読というんだ。",
      image: "/questionImg/japanese06.png"
    },
    {
      id: "04",
      question: "漢文を日本語として意味がわかるように漢字かな交じりで書き改めたものを何というか。",
      answers: ["訓読文", "白文", "書き下し文", "現代語訳"],
      correct: "書き下し文",
      hint: "",
      explanation: "漢文を日本語として意味がわかるように漢字かな交じりで書き改めたものを「書き下し文」というよ。古文みたいになったね。",
      image: "/questionImg/japanese06.png"
    },
    {
      id: "05",
      question: "訓読文で漢字の右下にカタカナで書かれてる文字は何か。",
      answers: ["送り仮名", "返り点", "句読点", "ふりがな"],
      correct: "送り仮名",
      hint: "",
      explanation: "訓読文で漢字の右下に<strong>カタカナで書かれてる文字は送り仮名</strong>だよ。右側にある<strong>ひらがなは漢字のふりがな</strong>で、難しい字の読み方を教えてくれるよ。",
      image: "/questionImg/japanese06.png"
    },
    {
      id: "06",
      question: "漢字の左下につけられた記号で、読む順序を示すものを何というか。",
      answers: ["送り仮名", "返り点", "句読点", "ふりがな"],
      correct: "返り点",
      hint: "一・二・上・下・レなどがあるね。",
      explanation: "漢字の左下につけられた記号で、読む順序を示すものを「返り点」というよ。",
      image: "/questionImg/japanese06.png"

    },
    {
      id: "07",
      question: "①の読む順として正しいものはどれか。",
      answers: ["誉之日", "之誉日", "誉日之", "日之誉"],
      correct: "之誉日",
      hint: "レ点は下の漢字を先に読んでから、上の漢字を読むよ。",
      explanation: "レ点は下の漢字を先に読んでから、上の漢字を読むから「之誉日」の順になるよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "08",
      question: "②の読む順として正しいものはどれか。",
      answers: ["以子之矛", "子之矛以", "之矛以子", "矛以子之"],
      correct: "子之矛以",
      hint: "一・二点がついた漢字は、二点がついている漢字をとばして、一点の漢字の後に読むよ。",
      explanation: "一・二点がついた漢字は、二点がついている漢字をとばして、一点の漢字の後に読むから「子之矛以」の順になるよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "09",
      question: "③の読む順として正しいものはどれか。",
      answers: ["学時習之", "時習之学", "学時之習", "習之学時"],
      correct: "学時之習",
      hint: "レ点は下の漢字を先に読んでから、上の漢字を読むよ。",
      explanation: "レ点は下の漢字を先に読んでから、上の漢字を読むから「学時之習」の順になるよ。「而」は読み飛ばす置き字だよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "10",
      level: "hard",
      question: "次の書き下し文を参考にして、④のレ点が入るべき位置を選べ。<br>独り心を傷ましむ",
      answers: ["独と傷の間", "傷と心の間", "心の下", "独の上"],
      correct: "傷と心の間",
      hint: "レ点は下の漢字を先に読んでから、上の漢字を読むものだったね。",
      explanation: "「傷と心の間」にレ点を入れると「独り心を傷ましむ」と書き下すことができるね。",
      image: "/questionImg/japanese07.png"
    }
  ]
  
}

export default {
  japanese45: QUIZ_CONTENT,
};
