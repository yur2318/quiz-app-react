const QUIZ_CONTENT_PRO = {
  title: "変域",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "100Lの水が入る水槽に毎分4Lの水を入れる。x分後の水の量をyLとした時、yをxの式で表すと？",
    answers: [
      "y = 4x", 
      "y = <span class='fraction'><span class='top'>4</span>x</span>",
      "y = 4 + x",
      "y = 100x" 
    ],
    correct: "y = 4x",
    hint: "水槽に入る水の量は毎分4Lだよ。",
    explanation: "水槽に毎分4Lの水を入れるから、x分後の水の量はy = 4xと表せるよ。"
   },
  {
    id: "02",
    question: "100Lの水が入る水槽に毎分4Lの水を入れる。x分後の水の量をyLとした時、yの変域を不等号で表すと？",
    answers: [
      "0 ≦ y ≦ 100", 
      "0 < y < 100",
      "0 < y < 400",
      "0 < y ≦ 4" 
    ],
    correct: "0 ≦ y ≦ 100",
    hint: "100Lの水槽に入る水の量がyだね。",
    explanation: "水槽に入る水の量は0Lから100Lまでだから、yの変域は0 ≦ y ≦ 100と表せるよ。"
  },
  {
    id: "03",
    question: "100Lの水が入る水槽に毎分4Lの水を入れる。x分後の水の量をyLとした時、xの変域を不等号で表すと？",
    answers: [
      "0 ≦ x ≦ 100",
      "4 < x < 100",
      "0 < x ≦ 4",
      "0 ≦ x ≦ 25"
    ],
    correct: "0 ≦ x ≦ 25",
    hint: "y = 4xだから、yが100Lになるときのxを考えよう。",
    explanation: "水槽の容量は100Lだから、毎分4Lの水を入れると、x分後の水の量はy = 4xとなるよ。yが100Lになるとき、xは25になるから、xの変域は0 ≦ x ≦ 25と表せるんだ。"
  },
  
]
}



export default {
  mathPro31: QUIZ_CONTENT_PRO
};
