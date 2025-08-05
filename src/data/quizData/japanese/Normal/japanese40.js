const QUIZ_CONTENT = {
  title: "現代文",
  subject: "pink",
  data: [
    {
      id: "01",
      question: "点線①の「頃」を読み仮名を選べ",
      answers: ["ころ", "けい", "とき", "ごろ"],
      correct: "ころ",
      hint: "",
      explanation: "【頃（ころ）】→時を、その前後を指す語。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "02",
      question: "点線②の「視点」を読み仮名を選べ",
      answers: ["してん", "しょうてん", "しきてん", "しめん"],
      correct: "してん",
      hint: "",
      explanation: "【視点（してん）】→物事を考える時の立場や考え方。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "03",
      question: "点線③の「喧嘩」を読み仮名を選べ",
      answers: ["けんか", "あらそい", "けんそう", "せんか"],
      correct: "けんか",
      hint: "",
      explanation: "【喧嘩（けんか）】→言い争いをすること。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "04",
      question: "点線④の「キオク」を漢字で書くと？",
      answers: ["記憶", "紀憶", "記億", "紀億"],
      correct: "記憶",
      hint: "",
      explanation: "【記憶（きおく）】→覚えている物事のこと。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "05",
      question: "線①の理由が書かれている部分を三十字で抜き出した時の初めの五文字を選べ。",
      answers: ["何度も頭の", "少しづつ形を", "子どもの頃", "大人になっ"],
      correct: "何度も頭の",
      hint: "「、」「。」も一字としてカウントするよ。",
      explanation: "理由は「何度も頭の中でくり返されるうちに、少しずつ形を変えていくから」だよ。線①の直後の「それは」の後に理由が書かれているよ。「〜から」というのも理由を説明した最後につく言葉としてよく出てくるから注目。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "06",
      question: "⬜︎に当てはまる言葉を選べ。",
      answers: ["たとえば", "しかし", "つまり", "さらに"],
      correct: "たとえば",
      hint: "⬜︎の後は例をあげているね。",
      explanation: "⬜︎の後に例が挙げられているから「たとえば」が正解になるよ。",
      image: "/questionImg/japanese02.png"
    },
    {
      id: "07",
      question: "この文章の筆者が伝えたいこととして最も適切なものを選べ。",
      answers: ["子どもの頃の記憶を思い出すことが重要", "思い出は、時間とともに感じ方が変わることがある", "友人とのけんかは、避けた方がよい", "大人なると子どもの頃の記憶は薄れる"],
      correct: "思い出は、時間とともに感じ方が変わることがある",
      hint: "ピンと来ない時は、おかしいと思う選択肢を選ばないようにしよう。",
      explanation: "思い出すことが大切だとは書いていない。喧嘩を避けることが必要とは書いていない。子どもの頃の記憶は「心に残っている」と書いてあるが、曖昧になるとは書いていない。全体として「思い出は、時間とともに感じ方が変わることがある」ことを書いていたね。",
      image: "/questionImg/japanese02.png"
    }
    
  ]
}

export default {
  japanese40: QUIZ_CONTENT,
};
