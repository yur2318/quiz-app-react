
const QUIZ_CONTENT_PRO = {
  title: "漢文①",
  subject: "pink",
  data: [
   {
      id: "01",
      question: "①の書き下し文として正しいものはどれか。",
      answers: ["之を誉めて曰はく", "誉めて之を日はく", "之を誉めて曰わく", "之誉曰"],
      correct: "之を誉めて曰はく",
      hint: "漢字以外の部分はひらがなにして書くよ。歴史的仮名遣いの部分はそのままにしておくよ。",
      explanation: "漢字以外の部分はひらがなにして書くよ。歴史的仮名遣いの部分はそのままにしておくよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "02",
      question: "⑤の読む順として正しいものはどれか。",
      answers: ["弗能応也", "能応弗也", "応弗能也", "応能弗也"],
      correct: "応能弗也",
      hint: "レ点のついた字が連続している場合は読まずに飛ばしてから返って読むよ。",
      explanation: "レ点のついた字が連続している場合は読まずに「応」まで飛ばしてから一つずつ返って読むよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "03",
      level: "hard",
      question: "⑥の読む順として正しいものはどれか。",
      answers: ["ABCDE", "CDBEA", "EADBC", "AEBDC"],
      correct: "CDBEA",
      hint: "まず一二点の付いた言葉を読んで、次に上下点の付いた言葉を読むよ。",
      explanation: "「下」も「二」も飛ばして初めに読むのは「C」その後「D」一がついてるから次に二の「B」、下に戻って「E」上がついてるから下の「A」に行くよ。",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "04",
      level: "hard",
      question: "⑦の読む順として正しいものはどれか。",
      answers: ["有鬻盾与矛者", "盾矛与鬻者有", "盾与矛鬻者有", "者有盾与矛鬻"],
      correct: "盾矛与鬻者有",
      hint: "一二点の付いた言葉を読んで、次に上下点の付いた言葉を読むよ。",
      explanation: "「盾矛与鬻者有」の順になるよ。これができたらバッチリだね！",
      image: "/questionImg/japanese07.png"
    },
    {
      id: "05",
      question: "「於・于・乎・而・矣・焉」のように、訓読のときに読まず、書き下し文にも書かない字を何というか。",
      answers: ["置き字", "送り仮名", "返り点", "句読点"],
      correct: "置き字",
      hint: "",
      explanation: "「於・于・乎・而・矣・焉」は訓読のときに読まず、書き下し文にも書かない「置き字」だよ。",
      image: ""
      
    }
  ]
}
export default {
  japanesePro45: QUIZ_CONTENT_PRO,
};
