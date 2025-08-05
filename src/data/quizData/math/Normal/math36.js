const QUIZ_CONTENT = {
  title: "連立方程式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "50円のチョコと100円のアイスを合わせて12個買い、代金が850円の時、購入したチョコとアイスの個数を求める。連立方程式を立てるために、何をx、yとする？",
    answers: ["チョコの個数とアイスの個数", "チョコの値段とアイスの値段"],
    correct: "チョコの個数とアイスの個数",
    hint: "求めたいものをx、yとしてみよう。",
    explanation: "今わかっていない、これから求めるものをx,yとすると、連立方程式が立てやすいよ。"
  },
  {
    id: "02",
    question: "50円のチョコと100円のアイスを合わせて12個買い、代金が850円の時、購入したチョコとアイスの個数を求める。チョコとアイスの個数について式を立てると？",
    answers: ["x + y = 12", "50x + 100y = 850", "x + y = 150", "50 + 100 = 150"],
    correct: "x + y = 12",
    hint: "チョコの個数をx、アイスの個数をyとすると、どんな式になるかな？",
    explanation: "チョコの個数をx、アイスの個数をyとすると、チョコとアイスの個数の合計は12個だから、x + y = 12になるよ。"
  },
  {
    id: "03",
    question: "50円のチョコと100円のアイスを合わせて12個買い、代金が850円の時、購入したチョコとアイスの個数を求める。代金について式を立てると？",
    answers: ["50x + 100y = 850", "x + y = 850", "50 + 100 = 150", "x + y = 850"],
    correct: "50x + 100y = 850",
    hint: "チョコの値段を50円、アイスの値段を100円とすると、代金を出すためにはどんな式になるかな？",
    explanation: "50円のチョコをx個、100円のアイスをy個買った時の代金は、50x + 100yになるよ。これが850円だから、50x + 100y = 850になるんだ。",
  },
  {
    id: "04",
    question: "1200mの道のりを始め分速70mで歩き、途中で分速100mの自転車に乗り、合計で15分かかった時、歩いた道のりを求める。歩いた道のりをx、残りの道のりをyとすると、道のりについての式は？",
    answers: ["x + y = 1200", "70x + 100y = 15", "x + y = 15", "70 + 100 = 1200"],
    correct: "x + y = 1200",
    hint: "歩いた道のりをx、残りの道のりをyとすると、全体の道のりはどうなるかな？",
    explanation: "歩いた道のりをx、残りの道のりをyとすると、全体の道のりは1200mだから、x + y = 1200になるよ。",
  },
  {
    id: "05",
    question: "1200mの道のりを始め分速70mで歩き、途中で分速100mの自転車に乗り、合計で15分かかった時、歩いた道のりを求める。歩いた道のりをxとした時、歩いた時間は？",
    answers: [
      "<span class='fraction'><span class='top'>x</span>70</span>",
      "70x",
      "<span class='fraction'><span class='top'>70</span>x</span>",
      "15x"
    ],
    correct: "<span class='fraction'><span class='top'>x</span>70</span>",
    hint: "歩いた道のりをxとすると、分速70mで歩いた時間はどう表せるかな？",
    explanation: "歩いた道のりをxとすると、分速70mで歩いた時間は、道のり÷速さで表せるから、<span class='fraction'><span class='top'>x</span>70</span>になるよ。"
  },
  {
    id: "06",
    question: "1200mの道のりを始め分速70mで歩き、途中で分速100mの自転車に乗り、合計で15分かかった時、歩いた道のりを求める。歩いた道のりをx、残りの道のりをyとすると、時間についての式は？",
    answers: [
      "<span class='fraction'><span class='top'>x</span>70</span> + <span class='fraction'><span class='top'>y</span>100</span> = 15",
      "70x + 100y = 15",
      "<span class='fraction'><span class='top'>70</span>x</span> + <span class='fraction'><span class='top'>100</span>y</span> = 15",
      "x + y = 15"
    ], 
    correct: "<span class='fraction'><span class='top'>x</span>70</span> + <span class='fraction'><span class='top'>y</span>100</span> = 15",
    hint: "歩いた道のりをx、残りの道のりをyとすると、時間はどう表せるかな？",
    explanation: "歩いた道のりをx、残りの道のりをyとすると、分速70mで歩いた時間は<span class='fraction'><span class='top'>x</span>70</span>、分速100mで自転車に乗った時間は<span class='fraction'><span class='top'>y</span>100</span>になるよ。合計で15分かかったから、<span class='fraction'><span class='top'>x</span>70</span> + <span class='fraction'><span class='top'>y</span>100</span> = 15になるんだ。 "
  },
  {
    id: "07",
    question: "パスタとサラダは定価の合計が1200円だが、パスタが2割引き、サラダ1割引きされ、価格が985円となった。カレーの定価とサラダの定価を求める。パスタの定価をx、サラダの定価をyとすると、定価についての式は？",
    answers: ["x + y = 1200", "0.8x + 0.9y = 985", "x + y = 985", "0.2x + 0.1y = 1200"],
    correct: "x + y = 1200",
    hint: "パスタの定価をx、サラダの定価をyとすると、定価の合計はどうなるかな？",
    explanation: "パスタの定価をx、サラダの定価をyとすると、定価の合計は1200円だから、x + y = 1200になるよ。"
  },
  {
    id: "08",
    question: "パスタの定価をxとすると、2割引きされたパスタの価格どのように表せる？",
    answers: ["0.8x", "0.2x", "0.2 + x", "0.8 + x"],
    correct: "0.8x",
    hint: "パスタの定価をxとすると、2割引きはどう計算するかな？",
    explanation: "パスタの定価をxとすると、2割引きは定価の80%になるから、0.8xで表せるよ。他にも<span class='fraction'><span class='top'>8</span>10</span>xやx - 0.2xなども同じ意味になるけど、0.8xが一番シンプルだね。"
  },
  {
    id: "09",
    question: "パスタとサラダは定価の合計が1200円だが、パスタが2割引き、サラダ1割引きされ、価格が985円となった。カレーの定価とサラダの定価を求める。割引後の価格についての式は？",
    answers: ["0.8x + 0.9y = 985", "0.2x + 0.1y = 985", "x + y = 985", "0.8x + 0.1y = 1200"],
    correct: "0.8x + 0.9y = 985",
    hint: "パスタの定価をx、サラダの定価をyとすると、割引後の価格はどうなるかな？",
    explanation: "パスタの定価をx、サラダの定価をyとすると、パスタは2割引きで0.8x、サラダは1割引きで0.9yになるよ。だから、割引後の価格は0.8x + 0.9y = 985になるんだ。"
  },
  {
    id: "10",
    question: "x + 2y = 4x +7y = 1 の時、どのように連立方程式を作る？",
    answers: [
      "x + 2y = 1,　4x + 7y = 1",
      "x + 2y - 4x + 7y = 0"
    ],
    correct: "x + 2y = 1,　4x + 7y = 1",
    hint: "A=B=Cのとき、A=B, A=Cと言えるよね。",
    explanation: "2つの式を立てると連立方程式が作れて、解くことができるよ。A=B=Cのとき、A=B, A=Cと言えるから、x + 2y = 1, 4x + 7y = 1という2つの式ができるよ。"
  }
  

]
}



export default {
  math36
  : QUIZ_CONTENT,
};
