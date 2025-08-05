const QUIZ_CONTENT = {
  title: "図形の種類",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "2点A・Bを通って、どこまでも続いている線を何という？",
    answers: ["直線AB", "線分AB", "半直線AB", "曲線AB"],
    correct: "直線AB",
    hint: "",
    explanation: "<ruby>直線<rt>ちょくせん</rt></ruby>は、2点を通って、どこまでも続いている線だよ。",
    image: ""
  },
  {
    id: "02",
    question: "2点A・Bを結んでいる線を何という？",
    answers: ["直線AB", "線分AB", "半直線AB", "曲線AB"],
    correct: "線分AB",
    hint: "",
    explanation: "<ruby>線分<rt>せんぶん</rt></ruby>は、2点を結んでいる線だよ。",
    image: ""},
    {
    id: "03",
    question: "点AからBの方向に無限に伸びる線を何という？",
    answers: ["直線AB", "線分AB", "半直線AB", "曲線AB"],
    correct: "半直線AB",
    hint: "",
    explanation: "半直線は、片方にだけ無限に伸びるよ。",
    image: ""
  },
  {
    id: "04",
    question: "直線ABと直線CDが平行である時、どのように表わす？",
    answers: ["AB//CD", "AB||CD", "AB⊥CD", "AB=CD"],
    correct: "AB//CD",
    hint: "",
    explanation: "直線ABと直線CDが平行である時は、AB//CDと表現するよ。//は平行を表す記号だよ。",
    image: ""
  },
    {
    id: "05",
    question: "直線ABと直線CDが垂直である時、どのように表わす？",
    answers: ["AB//CD", "AB||CD", "AB⊥CD", "AB=CD"],
    correct: "AB⊥CD",
    hint: "",
    explanation: "直線ABと直線CDが垂直である時は、AB⊥CDと表現するよ。⊥は垂直を表す記号だよ。",
    image: ""
  },
  {
    id: "06",
    question: "平面上で、図形を同じ向きで一定の方向に動かすことを何という？",
    answers:["平行移動", "対称移動", "回転移動", "点対称移動"],
    correct: "平行移動",
    hint: "",
    explanation: "平面上で、図形を一定の方向に、同じ向きで動かすことを<ruby>平行移動<rt>へいこういどう</rt></ruby>というよ。",
    image: ""
  },
  {
    id: "07",
    question: "平面上で、図形を１つの直線を折り目として折り返して、動かすことを何という？",
    answers: ["平行移動", "対称移動", "回転移動", "点対称移動"], 
    correct: "対称移動",
    hint: "",
    explanation: "平面上で、図形を１つの直線を折り目として折り返して、動かすことを<ruby>対称移動<rt>たいしょういどう</rt></ruby>というよ。",
    image: ""
  },
   {
    id: "08",
    question: "平面上で、点を中心として図形を回転させ動かすことを何という？",
    answers: ["平行移動", "対称移動", "回転移動", "点対称移動"],
    correct: "回転移動",
    hint: "",
    explanation: "平面上で、点を中心として図形を回転させ動かすことを回転移動というよ。",
    image: ""
  },
  {
    id: "09",
    question: "回転移動の中で、特に180°の移動を何という？",
    answers: ["平行移動", "対称移動", "回転移動", "点対称移動"],
    correct: "点対称移動",
    hint: "",
    explanation: "回転移動の中で、特に180° の移動を点対称移動というよ。点対称移動は、図形の各点が中心点を通る直線上にあることが特徴だよ。",
    image: ""
  },
  {
    id: "10",
    question: "画像は何移動？",
    answers: ["平行移動", "対称移動", "回転移動", "点対称移動"],
    correct: "対称移動",
    hint: "折り目を中心に図形が折り返されているよ。",
    explanation: "画像は対称移動だよ。折り目を中心に図形が折り返されていることがわかるね。",
    image: "/questionImg/math05.png"
  },


]
}



export default {
  math80
  : QUIZ_CONTENT,
};
