export const QUIZ_CONTENT = {
  title: "天気",
  subject: "purple",
  category: "basic",
  data: [
    {
      id: "01",
      question: "sunny",
      answers: ["晴れ", "曇り", "雨", "雪"],
      correct: "晴れ",
      hint: "",
      explanation: "「sunny」は「晴れ」だよ。「sun」は「太陽」だね。",
      image: ""
    },
    {
      id: "02",
      question: "cloudy",
      answers: ["晴れ", "曇り", "雨", "雪"],
      correct: "曇り",
      hint: "",
      explanation: "「cloudy」は「曇り」だよ。「cloud」は「雲」だね。",
      image: ""
    },
    {
      id: "03",
      question: "rainy",
      answers: ["晴れ", "曇り", "雨", "雪"],
      correct: "雨",
      hint: "",
      explanation: "「rainy」は「雨」だよ。「rain」は「雨」だね。",
      image: ""
    },
    {
      id: "04",
      question: "snowy",
      answers: ["晴れ", "曇り", "雨", "雪"],
      correct: "雪",
      hint: "",
      explanation: "「snowy」は「雪」だよ。「snow」は「雪」だね。",
      image: ""
    },
    {
      id: "05",
      question: "windy",
      answers: ["風が強い", "風が弱い", "晴れ", "曇り"],
      correct: "風が強い",
      hint: "",
      explanation: "「windy」は「風が強い」だよ。「wind」は「風」だね。",
      image: ""
    },
    {
      id: "06",
      question: "weather",
      answers: ["天気", "気温", "湿度", "風速"],
      correct: "天気",
      hint: "",
      explanation: "「weather」は「天気」だよ。",
      image: ""
    },
    {
      id: "07",
      question: "今日の天気はどうですか？",
      answers: ["What's the weather like today?", "How are you today?", "What's the temperature today?", "How's it going today?"],
      correct: "What's the weather like today?",
      hint: "weather→天気　temperature→気温",
      explanation: "「今日の天気はどうですか？」は「What's the weather like today?」や「How's the weather today?」などの表現があるよ。",
      image: ""
    },
    {
      id: "08",
      question: "今日は晴れてるよ。",
      answers: ["It's sunny today.", "It's rainy today.", "It's cloudy today.", "It's snowy today."],
      correct: "It's sunny today.",
      hint: "sunny→晴れ　rainy→雨　cloudy→曇り　snowy→雪　today→今日",
      explanation: "「今日は〇〇（天気）。」は「It's 〇〇 today.」だよ。",
      image: ""
    }
  ]
}

export default {
  english04: QUIZ_CONTENT,
};