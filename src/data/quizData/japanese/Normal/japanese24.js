const QUIZ_CONTENT = {
  title: "動詞の活用①",
  subject: "pink",
  data: [
    {
      id: "01",
      question:"「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>今日は、ボールで遊（　）ない。",
      answers: ["ば", "び", "ぶ", "べ"],
      correct: "ば",
      hint: "",
      explanation: "「〜ない」「〜う」などに続く形を未然形というよ。「遊ぶ」は未然形に活用すると「遊ば」や「遊ぼ」となるんだ。",
      image: ""

    },
    {
      id: "02",
      question: "「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>ボールで遊（　）ます。",
      answers: ["ぶ", "ば", "び", "ぼ"],
      correct: "び",
      hint: "",
      explanation: "「〜ます」「〜だ」などに続く形を連用形というよ。「遊ぶ」は連用形に活用すると「遊び」や「遊ん」となるんだ。",
      image: ""
    },
    {
      id: "03",
      "question": "「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>ボールで遊（　）。",
      "answers": ["ぶ", "ば", "び", "ん"],
      "correct": "ぶ",
      "hint": "",
      "explanation": "文を言い切る基本の形を終止形というよ。",
    },
    {
      id: "04",
      question: "「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>ボールで遊（　）ことは、楽しい。",
      answers: ["ぶ", "ば", "び", "べ"],
      correct: "ぶ",
      hint: "",
      explanation: "「〜こと」「〜の」などに続く形を連体形というよ。「遊ぶ」は連体形に活用しても「遊ぶ」のままだね。",
      image: ""
    },
    {
      id: "05",
      question: "「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>もしボールで遊（　）ば、楽しいよ。",
      answers: ["ぶ", "べ", "び", "ぼ"],
      correct: "べ",
      hint: "",
      explanation: "「（もし）〜ば」「〜たら」などに続く形を仮定形というよ。「遊ぶ」は仮定形に活用すると「遊べ」となるんだ。",
      image: ""
    },
    {
      id: "06",
      question: "「遊ぶ」と言う動詞を適切に活用した時の（　）に入る語を選べ。<br>今日はボールで遊（　）。",
      answers: ["べ", "ば", "び", "ん"],
      correct: "べ",
      hint: "",
      explanation: "命令して文を言い切る形を命令形というよ。「遊ぶ」は命令形に活用すると「遊べ」となるんだ。",
      image: ""
      },
    {
      id: "07",
      question: "次の（　）の動詞の活用形を選べ。<br>今日は（歩か）ない。",
      answers: ["未然形", "連用形", "終止形", "連体形"],
      correct: "未然形",
      hint: "",
      explanation: "「〜ない」「〜う」などに続く形を<ruby>未然形<rt>みぜんけい</rt></ruby>というよ。",
      image: ""
    },
    {
      id: "08",
      question: "次の（　）の動詞の活用形を選べ。<br>今日は（歩き）ます。",
      answers: ["未然形", "連用形", "終止形", "連体形"],
      correct: "連用形",
      hint: "",
      explanation: "「〜ます」「〜だ」などに続く形を<ruby>連用形<rt>れんようけい</rt></ruby>というよ。",
      image: ""
    },
    {
      id: "09",
      question: "次の（　）の動詞の活用形を選べ。<br>今日は（歩く）。",
      answers: ["未然形", "連用形", "終止形", "連体形"],
      correct: "終止形", 
      hint: "",
      explanation: "文を言い切る基本の形を<ruby>終止形<rt>しゅうしけい</rt></ruby>というよ。",
      image: ""
    },
    {
      id: "10",
      question: "次の（　）の動詞の活用形を選べ。<br>（歩く）ことは、楽しい。",
      answers: ["未然形", "連用形", "終止形", "連体形"],
      correct: "連体形",
      hint: "",
      explanation: "「〜こと」「〜の」などに続く形を<ruby>連体形<rt>れんたいけい</rt></ruby>というよ。",
      image: ""
    },
    {
      id: "11",
      question: "次の（　）の動詞の活用形を選べ。<br>（歩け）ば、きっと楽しいよ。",
      answers: ["未然形", "連用形", "終止形", "仮定形"],
      correct: "仮定形",
      hint: "",
      explanation: "「（もし）〜ば」「〜たら」などに続く形を<ruby>仮定形<rt>かていけい</rt></ruby>というよ。",
      image: ""
    },
    {
      id: "12",
      question: "次の（　）の動詞の活用形を選べ。<br>今日は（歩け）。",
      answers: ["未然形", "連用形", "終止形", "命令形"],
      correct: "命令形",
      hint: "",
      explanation: "命令して文を言い切る形を<ruby>命令形<rt>めいれいけい</rt></ruby>というよ。",
      image: ""
    }
  ]
  
}

export default {
  japanese24: QUIZ_CONTENT,
};
