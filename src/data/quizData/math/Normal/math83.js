const QUIZ_CONTENT = {
  title: "面と線",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "面ABCDと並行な面は？",
    answers: ["面EFGH", "面ABEF"],
    correct: "面EFGH",
    hint: "無限に広がっても空間内で面ABCDと交わらない面を選ぼう。",
    explanation: "平面ABCDと並行な面は、面EFGHだよ。",
    image: "/questionImg/math12.png"

  },
  {
    id: "02",
    question: "面ABCDと垂直な面は？",
    answers: ["面EFGH", "面ABFE"],
    correct: "面ABFE",
    hint: "平面ABCDと直角に交わる面を選ぼう。",
    explanation: "平面ABCDと垂直な面は、面ABFEだよ。平面ABCDの方向に対して垂直な面だね。",
    image: "/questionImg/math12.png"
  },
  {
    id: "03",
    question: "辺ABと並行な面は？",
    answers: ["面AEHD", "面EFGH", "面BCFG", "辺DC"],
    correct: "面EFGH",
    hint: "辺ABと同じ方向に伸びる面を選ぼう。",
    explanation: "平面EFGHは、辺ABと同じ方向に伸びているよ。",
    image: "/questionImg/math12.png"
  },
  {
    id: "04",
    question: "辺ABと垂直な面は？",
    answers: ["面AEHD", "面ABFE", "面ABCD", "辺BF"],
    correct: "面AEHD",
    hint: "辺ABと直角に交わる面を選ぼう。",
    explanation: "平面AEHDは、辺ABと直角に交わるよ。辺ABの方向に対して垂直な面だね。",
    image: "/questionImg/math12.png"
  },
  {
    id: "05",
    question: "直線ABと交わる直線は？",
    answers: ["直線CD", "直線EF", "直線GH", "直線AE"],
    correct: "直線AE",
    hint: "直線ABと交わる直線を選ぼう。",
    explanation: "直線AEは、直線ABと交わるよ。一見交わっていないようにも思うけれど、直線は無限に伸びるからね。",
    image: "/questionImg/math12.png"
  },
  {
    id: "06",
    question: "直線ABと平行な直線は？",
    answers: ["直線HG", "直線EH", "直線GF", "直線AE"],
    correct: "直線HG",
    hint: "直線ABと同じ方向に伸びる直線を選ぼう。",
    explanation: "直線HGは、直線ABと同じ方向に伸びているよ。無限に伸びても直線ABとは交わらないね。",
    image: "/questionImg/math12.png"
  },
  {
    id: "07",
    question: "平行でもなく、垂直でもない線と線の関係を何という？",
    answers: ["平行", "垂直", "ねじれの位置", "合同"],
    correct: "ねじれの位置",
    hint: "",
    explanation: "これは、空間内で交わらずに平行でもない線と線の関係を「ねじれの位置」というよ。",
    image: ""
  },
  {
    id: "08",
    question: "辺ABとねじれの位置にある辺は？",
    answers: ["辺BC", "辺EF", "辺GH", "辺DH"],
    correct: "辺DH",
    hint: "辺ADと平行でも垂直でもない辺を選ぼう。",
    explanation: "辺ABとねじれの位置にある辺は、辺DHだよ。",
    image: "/questionImg/math12.png"
  },


]
}



export default {
  math83: QUIZ_CONTENT,
};
