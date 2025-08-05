const QUIZ_CONTENT = {
  title: "図形の種類",
  subject: "blue",
  data: [
    {
    id: "01",
    question: "①の立体の名前は？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "円柱",
    hint: "底面が円の立体だよ。",
    explanation: "底面が円で、上面も同じ円の立体だよ。これを<ruby>円柱<rt>えんちゅう</rt></ruby>というよ。",
    image: "/questionImg/math10.png"
  },
    {
    id: "02",
    question: "②の立体の名前は？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "円すい",
    hint: "底面が円で、上面は点だよ。",
    explanation: "底面が円で、頂点がとがっているよ。これを<ruby>円錐<rt>えんすい</rt></ruby>というよ。とがっている立体は 錐（すい） というんだ。",
    image: "/questionImg/math10.png"
  },
  {
    id: "03",
    question: "③の立体の名前は？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "三角柱",
    hint: "底面が三角形の立体だよ。",
    explanation: "底面が三角形で、上面も同じ三角形の立体だよ。これを三角柱というよ。",
    image: "/questionImg/math10.png"
  },
  {
    id: "04",
    question: "④の立体の名前は？",
    answers: ["三角柱", "三角すい", "円柱", "円すい"],
    correct: "三角すい",
    hint: "底面が三角形で、上面は点だよ。",
    explanation: "底面が三角形で、頂点がとがっているよ。これを<ruby>三角錐<rt>さんかくすい</rt></ruby>というよ。",
    image: "/questionImg/math10.png"
  },
  {
    id: "05",
    question: "すべての面が合同な正多角形で構成され、すべての頂点で接する面の数が同じ立体図形を何という？",
    answers: ["正多面体", "すい", "立方体", "柱"],
    correct: "正多面体",
    hint: "すべての面が同じ形だよ。",
    explanation: "正多面体は、すべての面が合同な正多角形で構成され、すべての頂点で接する面の数が同じ立体図形だよ。正多面体の中でも六つの正方形に囲まれた立体は立方体と呼ばれるよ。",
    image: "/questionImg/math11.png"
  },
  {
    id: "06",
    question: "①の正多面体の名前は？",
    answers: ["正四面体", "正三面体", "正八面体", "正六面体"],
    correct: "正四面体",
    hint: "いくつの面があるかな？",
    explanation: "正四面体は、4つの面がすべて合同な正三角形で構成されているよ。<strong>面の形ではなく、面の数で名前が決まるんだね。</strong>",
    image: "/questionImg/math11.png"
  },
  {
    id: "07",
    question: "②の正多面体の名前は？",
    answers: ["正四面体", "正十二面体", "正八面体", "正六面体"],
    correct: "正六面体",
    hint: "いくつの面があるかな？",
    explanation: "正六面体は、6つの面がすべて合同な正方形で構成されているよ。サイコロの形だね。",
    image: "/questionImg/math11.png"
  },
  {
    id: "08",
    question: "③の正多面体の名前は？",
    answers: ["正四面体", "正三角柱", "正八面体", "正六面体"],
    correct: "正八面体",
    hint: "いくつの面があるかな？",
    explanation: "正八面体は、8つの面がすべて合同な正三角形で構成されているよ。正多面体は全部で5種類あって、④は正十二面体、⑤は正二十面体だよ。",
    image: "/questionImg/math11.png"
  },
  {
    id: "09",
    question: "正四面体の頂点の数は？",
    answers: ["4", "6", "8", "12"],
    correct: "4",
    hint: "画像を見て数えてみよう。",
    explanation: "正四面体は、4つの面がすべて合同な正三角形で構成されているよ。頂点の数は4つだね。",
    image: "/questionImg/math11.png"
  },
  {
    id: "10",
    question: "正六面体の頂点の数は？",
    answers: ["4", "6", "8", "12"],
    correct: "8",
    hint: "画像を見て数えてみよう。",
    explanation: "面の数と頂点の数がいつでも一緒なわけではないんだね。",
    image: "/questionImg/math11.png"
  },

]
}



export default {
  math82: QUIZ_CONTENT,
};
