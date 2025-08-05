const QUIZ_CONTENT_PRO = {
  title: "文字式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "底辺6cm、高さxcmの三角形の面積は？",
    answers: ["2x cm²", "6x cm²", "3x cm²", "12x cm²"],
    correct: "3x cm²",
    hint: "三角形の面積の公式は底辺×高さ÷2だよ。",
    explanation: "底辺6cm、高さxcmの三角形の面積は、(6 × x) ÷ 2 = 3x cm²になるよ。"
  },
  {
    id: "02",
    question: "100円のチョコをx個、20円のアメをy個買ったときの合計金額は？",
    answers: ["100x + 20y 円", "120xy 円", "80x + 20y 円", "100xy 円"],
    correct: "100x + 20y 円",
    hint: "100円のチョコはx個買った時の金額は100 × xで、20円のアメはy個買った時の金額は20 × yだよ。",
    explanation: "100円のチョコをx個、20円のアメをy個買ったときの合計金額は、100x + 20y 円になるよ。"
  },
  {
    id: "03",
    question: "a mの長さのロープを4等分した時の一本の長さは？",
    answers: [
      "<span class='fraction'><span class='top'>a</span>4</span> m",
      "4a m",
      "<span class='fraction'><span class='top'>4</span>a</span> m",
      "4 + a m"
    ],
    correct: "<span class='fraction'><span class='top'>a</span>4</span> m",
    hint: "ロープを4等分するから、全体の長さを4で割るよ。",
    explanation: "a mの長さのロープを4等分した時の一本の長さは、a ÷ 4 = <span class='fraction'><span class='top'>a</span>4</span> mになるよ。"
  },
  {
    id: "04",
    question: "縦がx cm、横がy cmの長方形の周りの長さは？",
    answers: ["2x + 2y cm", "xy cm", "x + y cm", "2xy cm"],
    correct: "2x + 2y cm",
    hint: "長方形の周りの長さは、縦２本、横２本の長さを足せばいいね。",
    explanation: "縦がx cm、横がy cmの長方形の周りの長さは、2 × x + 2 × y = 2x + 2y cmになるよ。"
  },
  {
    id: "05",
    question: "700mの道のりを分速x mで歩くとき、何分かかる？",
    answers: [
      "<span class='fraction'><span class='top'>700</span>x</span> 分",
      "700x 分",
      "700 + x 分",
      "700 - x 分"
    ],
    correct: "<span class='fraction'><span class='top'>700</span>x</span> 分",
    hint: "時間を出すには距離を速さで割るよ。",
    explanation: "700mの道のりを分速x mで歩くとき、かかる時間は700 ÷ x = <span class='fraction'><span class='top'>700</span>x</span> 分になるよ。"
  },
  {
    id: "06",
    question: "時速40kmで走る車がx時間走ったときの距離は？",
    answers: ["40x km", "x km", "40 + x km", "40 - x km"],
    correct: "40x km",
    hint: "距離は速さ×時間で求めるよ。",
    explanation: "時速40kmで走る車がx時間走ったときの距離は、40 × x = 40x kmになるよ。"
  },
  {
    id: "07",
    question: "1500mの距離をx分かかって歩き切った時の速さは？",
    answers: [
      "<span class='fraction'><span class='top'>1500</span>x</span> m/分",
      "1500x m/分",
      "1500 + x m/分",
      "<span class='fraction'><span class='top'>x</span>1500</span> m/分"
    ],
    correct: "<span class='fraction'><span class='top'>1500</span>x</span> m/分",
    hint: "速さは距離を時間で割るよ。分速は「m/分」で表すよ。",
    explanation: "1500mの距離をx分かかって歩き切った時の速さは、1500 ÷ x = <span class='fraction'><span class='top'>1500</span>x</span> 分になるよ。"
  },
]

}

export default {
  mathPro19: QUIZ_CONTENT_PRO
};
