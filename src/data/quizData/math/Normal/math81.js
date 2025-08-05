const QUIZ_CONTENT = {
  title: "作図",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "円の半径AB、ACの長さは？",
    answers: ["等しい", "ABの方が長い", "ACの方が長い", "判断できない"],
    correct: "等しい",
    hint: "",
    explanation: "円の半径は、円の中心から円周までの距離で、同じ円ではどこでも同じ長さだよ。",
    image: "/questionImg/math06.png"
  },
  {
    id: "02",
    question: "コンパスの特徴は？",
    answers: ["中心から距離が等しい線をかける", "直線を引ける", "角度を測れる", "円の面積を求められる"],
    correct: "中心から距離が等しい線をかける",
    hint: "円の半径はどこでも同じ長さだったね。",
    explanation: "コンパスは、中心からの距離が等しい線をかけるよ。作図ではこの特徴を使うんだ。",
    image: ""
  },
  {
    id: "03",
    question: "正三角形ABCを作図するとき、コンパスの針を刺すのはどこか。",
    answers: ["点Aと点B", "点B", "点A", "線分AB上の点H"],
    correct: "点Aと点B",
    hint: "正三角形は、3つの辺の長さがすべて等しいよ。",
    explanation: "正三角形ABCを作図するときは、コンパスの針を点Aと点Bに刺して円を描くよ。そうすれば、全ての辺の長さが等しい正三角形ができるよ。",
    image: "/questionImg/math07.png"
  },
    {
    id: "04",
    question: "線分を垂直に二等分する直線を何という？",
    answers: ["垂直二等分線", "接線", "二等分線", "角の二等分線"],
    correct: "垂直二等分線",
    hint: "直線を垂直に二等分するよ。",
    explanation: "<ruby>垂直二等分線<rt>すいちょくにとうぶんせん</rt></ruby>は、線分の中点（真ん中）を通り、垂直な線のことを言うよ。",
    image: "/questionImg/math08.png"
  },
  {
    id: "05",
    question: "線分ABの垂直二等分線を引くとき、コンパスの針を刺すのはどこか。",
    answers: ["点Aと点B", "任意の点Kと点L", "線分上の点Iと点J", "点M"],
    correct: "点Aと点B",
    hint: "線分の真ん中を作図でかきたいね。",
    explanation: "コンパスの針を点Aと点Bに刺して円を描くと、線分の端からの距離が等しい2点が取れるね。この2点を結ぶ直線が垂直二等分線になるよ。",
    image: "/questionImg/math08.png"
  },
  {
    id: "06",
    question: "角を同じ大きさの２つの角に分ける線を何という？",
    answers: ["垂直二等分線", "接線", "角の二等分線", "並行二等分線"],
    correct: "角の二等分線",
    hint: "角を同じ大きさに分けるよ。",
    explanation: "角の二等分線は、ある角を同じ大きさの２つの角に分ける線だよ。角の頂点を通り、角を二等分するように引くよ。",
    image: "/questionImg/math09.png"
  },
  {
    id: "07",
    question: "角Aの二等分線を引くとき、初めにコンパスの針を刺すのはどこか。",
    answers: ["点Gと点F", "点Dと点E", "点Bと点C", "点A"],
    correct: "点A",
    hint: "点Aから等しい2点を取るにはどうすればいいかな？",
    explanation: "角Aの二等分線を引くときは、点Aに針を刺して点Aからの距離が等しい点Bと点Cをとり、そこにコンパスを刺した時の交点が角の二等分線の点になるよ。",
    image: "/questionImg/math09.png"
  },
  {
    id: "08",
    question: "角Aの二等分線を引くとき、点Aの次にコンパスの針を刺すのはどこか。",
    answers: ["点Gと点F", "点Dと点E", "点Bと点C", "点A"],
    correct: "点Dと点E",
    hint: "点Aから等しい2点を選ぶよ。",
    explanation: "角Aの二等分線を引くときは、点Aに針を刺して点Aからの距離が等しい点Dと点Eをとり、そこにコンパスを刺した時の交点が角の二等分線の点になるよ。",
    image: "/questionImg/math09.png"
  },
  {
    id: "09",
    question: "直線lのように、直線が円と１点だけで重なるとき、この直線を何という？",
    answers: ["接線", "弦", "直径", "半径"],
    correct: "接線",
    hint: "円に接する直線だよ。",
    explanation: "接線は、円に接する直線のことだよ。円の外側にあり、円と１点で重なるよ。",
    image: "/questionImg/math06.png"
  },
  {
    id: "10",
    question: "接線の特徴は？",
    answers: ["円の中心を通る", "円の半径と垂直", "円と接しない", "円の直径と平行"],
    correct: "円の半径と垂直",
    hint: "接線は円の半径と特別な関係があるよ。",
    explanation: "接線は、円の半径と垂直な関係にあるよ。作図の時は、接点を通る半径の垂線を引いたらいいんだ！",
    image: "/questionImg/math06.png"
  },
  

]
}



export default {
  math81
  : QUIZ_CONTENT,
};
