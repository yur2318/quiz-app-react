
const QUIZ_CONTENT_PRO = {
  title: "表面積・体積",
  subject: "blue",
  data: [
  {
    id: "04",
    question: "画像の立体の底面積は？",
    answers: ["12πcm²", "6πcm²", "9πcm²", "36πcm²"],
    correct: "9πcm²",
    hint: "円の面積を求める公式は、半径×半径×πだよ。",
    explanation: "底面の直径が6cmだから半径は3cmだよ。底面積は3cm × 3cm × π = 9πcm²だよ。",
    image: "/questionImg/math19.png"
  },
  {
    id: "05",
    question: "画像の立体の体積は？",
    answers: ["72πcm³", "24πcm³", "36πcm³", "288πcm³"],
    correct: "72πcm³",
    hint: "体積は底面積 × 高さで求めるよ。",
    explanation: "体積は、底面積 × 高さで求めるよ。底面積が9πcm²で、高さが8cmだから、9πcm² × 8cm = 72πcm³だよ。",
    image: "/questionImg/math19.png"
  },
]
}

export default {
  mathPro85: QUIZ_CONTENT_PRO
};
