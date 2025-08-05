const QUIZ_CONTENT = {
  title: "度数分布表①",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "データの大まかな分布を知るために、データをある幅ごとに区切った表のことを何という？",
    answers: ["階級", "ヒストグラム", "度数分布表", "平均"],
    correct: "度数分布表",
    hint: "",
    explanation: "データの大まかな分布を知るために、データをある幅ごとに区切った表のことを「<ruby>度数分布表<rt>どすうぶんぷひょう</rt></ruby>」というよ。",
    image: "/questionImg/math26.png"
  },
    {
    id: "02",
    question: "度数分布表で、分けられた区間を何という？",
    answers: ["階級", "ヒストグラム", "度数", "平均"],
    correct: "階級",
    hint: "何点以上何点未満の区間を表しているところのことだよ。",
    explanation: "度数分布表で分けられた区間のことを「<ruby>階級<rt>かいきゅう</rt></ruby>」というよ。",
    image: "/questionImg/math26.png"
  },
    {
    id: "03",
    question: "度数分布表で、階級に属する個数を何という？",
    answers: ["階級", "ヒストグラム", "度数", "平均"],
    correct: "度数",
    hint: "人数などが何人いるかの数が入るところだよ。",
    explanation: "度数分布表で階級に属する個数のことを「<ruby>度数<rt>どすう</rt></ruby>」というよ。例えば、0点以上20点未満の階級に1人いる場合、その度数は1だよ。",
    image: "/questionImg/math26.png"
  },
    {
    id: "04",
    question: "画像の度数分布表で、40点以上60点未満の人数は？",
    answers: ["1人", "6人", "8人", "3人"],
    correct: "6人",
    hint: "40点以上60点未満の階級の度数を見てみよう。",
    explanation: "40点以上60点未満の階級（範囲）を見ると6という数字があるよね。これは40点以上60点未満の人数を表しているんだ。だから答えは6人だよ。",
    image: "/questionImg/math26.png"
  },
  {
    id: "05",
    question: "画像の度数分布表で、20点以上40点未満の人数は？",
    answers: ["2人", "3人", "4人", "5人"],
    correct: "2人",
    hint: "合計の人数は表の右下にあるよ。",
    explanation: "合計人数は20人、20から他の階級の度数（人数）を引いていくと、20点以上40点未満の人数がわかるよ。20人 - 1人 - 6人 - 8人 - 3人 = 2人だね。だから答えは2人だよ。",
    image: "/questionImg/math26.png"
  },
    {
    id: "06",
    question: "画像の度数分布表の階級の幅は？",
    answers: ["10点", "20点", "30点", "40点"],
    correct: "20点",
    hint: "階級の幅は、「範囲の大きさ」のことだよ。",
    explanation: "階級の幅は、各階級の範囲の大きさを表しているよ。階級の幅は一定なんだ。0点以上20点未満の範囲は20点だよね。",
    image: "/questionImg/math26.png"
  },
    {
    id: "07",
    question: "全体の中の ある特定の階級の割合 を何というか。",
    answers: ["階級", "範囲", "度数", "相対度数"],
    correct: "相対度数",
    hint: "",
    explanation: "全体の中のある階級の割合を「<ruby>相対度数<rt>そうたいどすう</rt></ruby>」というよ。これは、特定の階級の度数を全体の度数で割った値だよ。",
    image: ""
  },
    {
    id: "08",
    question: "相対度数の求め方は？",
    answers: [
      "<span class='fraction'><span class='top'>その階級の度数</span>全体の度数</span>",
      "<span class='fraction'><span class='top'>全体の度数</span>その階級の度数</span>",
      "その階級の度数×その階級の幅",
      "その階級の度数×全体の度数"
    ],
    correct: "<span class='fraction'><span class='top'>その階級の度数</span>全体の度数</span>",
    hint: "相対度数は、特定の階級の度数を全体の度数で割るよ。",
    explanation: "相対度数は、特定の階級の度数を全体の度数で割るよ。つまり、<span class='fraction'><span class='top'>その階級の度数</span>全体の度数</span>が正しい求め方だよ。",
    image: ""

  },
      {
    id: "09",
    question: "40点以上60点未満の階級の相対度数の計算方法は？",
    answers: [
      "20 ÷ 6",
      "6 ÷ 20",
      "20 × 6",
      "6 ÷ 100"
    ],
    correct: "6 ÷ 20",
    hint: "相対度数は、特定の階級の度数を全体の度数で割るよ。",
    explanation: "<span class='fraction'><span class='top'>その階級の度数</span>全体の度数</span>は、その階級の度数÷全体の度数と同じ計算だよ。だから相対度数は6 ÷ 20で求められるよ。",
    image: "/questionImg/math26.png"
  },
  {
    id: "10",
    question: "40点以上60点未満の階級の相対度数は？",
    answers: ["3.333...", "0.3", "33.333...", "0.4"],
    correct: "0.3",
    hint: "相対度数は、特定の階級の度数を全体の度数で割るから、6÷20を計算してみよう。",
    explanation: "<span class='fraction'><span class='top'>その階級の度数</span>全体の度数</span>で求められるから、相対度数は6 ÷ 20 = 0.3だよ。",
    image: "/questionImg/math26.png"
  },
  

  
]
}
// const QUIZ_CONTENT_PRO = {
//   title: "表面積・体積",
//   subject: "blue",
//   data: [
  

// ]
// }

export default {
  math150: QUIZ_CONTENT,
  // mathPro150: QUIZ_CONTENT_PRO
};
