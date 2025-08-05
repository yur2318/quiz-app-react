export const QUIZ_CONTENT = {
  title: "かけ算",
  subject: "blue",
  category: "basic",
  data: [
    {
    id: "01",
    question: "5×0",
    answers: ["0", "1", "5", "存在しない"],
    correct: "0",
    hint: "5が0個だとすると？",
    explanation: "5×0は0だよ！0をかけると全て0になるよ！",
    image: ""
  },
  {
    id: "02",
    question: "52×12と12×52は？",
    answers: ["等しい", "異なる"],
    correct: "等しい",
    hint: "",
    explanation: "かけ算は順番を変えても同じ答えになるよ！ちなみに52×12=624だよ！",
    image: ""
  },
  {
    id: "03",
    question: "画像の☆に当てはまる数は？",
    answers: ["7", "2", "1", "6"],
    correct: "7",
    hint: "ひっ算では①のかけ算から始めるよ！",
    explanation: "ひっ算では①のかけ算から始めるから、7×1=7だよ！",
    image: "/questionImg/math27.png"
  },
  {
    id: "04",
    question: "画像の☆に当てはまる数は？",
    answers: ["2", "1", "7", "6"],
    correct: "2",
    hint: "①の次は②のかけ算だよ！",
    explanation: "ひっ算では①の次は②のかけ算から始めるから、7×3=21。100の位は2が入って、10の位には1が入るよ！",
    image: "/questionImg/math28.png"
  },
    {
    id: "05",
    question: "画像の☆に当てはまる数は？",
    answers: ["1", "7", "2", "入らない"],
    correct: "入らない",
    hint: "",
    explanation: "ひっ算の二段目は10の位から始まるから、1の位に数字は書かないようにしよう！",
    image: "/questionImg/math29.png"
  },
  {
    id: "06",
    question: "画像の☆に当てはまる数は？",
    answers: ["8", "2", "3", "1"],
    correct: "3",
    hint: "①〜④のかけ算が終わったら、最後に足し算をするよ！",
    explanation: "ひっ算ではかけ算が終わったら、最後に足し算をするよ！1+2=3だから、3が入るよ！31×27=837だということがわかったね！",
    image: "/questionImg/math30.png"
  },
  {
    id: "07",
    question: "画像の☆に当てはまる数は？",
    answers: ["1", "2", "3", "4"],
    correct: "2",
    hint: "②のかけ算の計算をするけど①の計算7×2=14の1を忘れないで！",
    explanation: "ひっ算では、②のかけ算の計算をすると7×3=21、①の計算7×2=14の1を足すと、2が入るよ！",
    image: "/questionImg/math31.png"
  },
  {
    id: "08",
    question: "32×10",
    answers: ["320", "368", "3200", "350"],
    correct: "320",
    hint: "10をかけると、0が一つ増えるよ！",
    explanation: "32×10は320だよ！10をかけると、0が一つ増えると覚えておこう！",
    image: ""
  },
  {
    id: "09",
    question: "65×100",
    answers: ["650", "6500", "6000", "7000"],
    correct: "6500",
    hint: "100をかけると、0が二つ増えるよ！",
    explanation: "65×100は6500だよ！100をかけると、0が二つ増えるんだね！",
    image: ""
  },
  {
    id: "10",
    question: "78×1000",
    answers: ["7800", "78000", "780000", "8000"],
    correct: "78000",
    hint: "1000をかけると、0が三つ増えるよ！",
    explanation: "78×1000は78000だよ！慣れてきたかな？",
    image: ""
  }
]
}

export default {
  math05: QUIZ_CONTENT,
};
