const QUIZ_CONTENT_PRO = {
  title: "文字式",
  subject: "blue",
  data: [
  {
    id: "01",
    question: "3x + 2(x - 1)",
    answers: ["5x - 2", "5x + 2", "3x + 2x - 1", "3x + 2x - 2"],
    correct: "5x - 2",
    hint: "かっこを外して同類項をまとめよう。",
    explanation: "3x + 2(x - 1)は、かっこを外すと3x + 2x - 2になるんだ。つまり5x - 2になるよ。"
  },
  {
    id: "02",
    question: "4a - 2(3a + 1)",
    answers: ["-2a - 2", "-2a + 2", "2a - 2", "2a + 2"],
    correct: "-2a - 2",
    hint: "かっこを外してから同類項をまとめよう。",
    explanation: "4a - 2(3a + 1)は、かっこを外すと4a - 6a - 2になるんだ。つまり-2a - 2になるよ。"
  },
  {
    id: "03",
    question: "5(b + 2) - 3b",
    answers: ["2b + 10", "2b - 10", "8b + 10", "8b - 10"],
    correct: "2b + 10",
    hint: "分配法則を使ってから同類項をまとめよう。",
    explanation: "5(b + 2)は5b + 10になるよ。そこから3bを引くと、5b - 3b + 10 = 2b + 10になるんだ。"
  },
  {
    id: "04",
    question: "6x - (4x - 3)",
    answers: ["2x + 3", "2x - 3", "6x - 4x + 3", "6x - 4x - 3"],
    correct: "2x + 3",
    hint: "かっこの前にマイナスがあるよ。",
    explanation: "-(4x - 3)は-4x + 3になるんだ。だから6x - 4x + 3 = 2x + 3になるよ。"
  },
  {
    id: "05",
    question: "2(a + 3) + 4 - 3a",
    answers: ["-a + 10", "-a + 8", "a + 10", "a + 8"],
    correct: "-a + 10",
    hint: "分配法則を使ってから同類項をまとめよう。",
    explanation: "2(a + 3)は2a + 6になるよ。そこに4を足してから3aを引くと、2a + 6 + 4 - 3a = -a + 10になるんだ。"
  },
  {
    id: "06",
    question: "5x - (2x + 1) + x",
    answers: ["4x - 1", "4x + 1", "3x - 1", "3x + 1"],
    correct: "4x - 1",
    hint: "かっこの前にマイナスがあるよ。",
    explanation: "-(2x + 1)は-2x - 1になるんだ。だから5x - 2x - 1 + x = 4x - 1になるよ。"
  },
  {
    id: "07",
    question: "3(x + 2) - 4(x - 1)",
    answers: ["-x + 10", "-x + 8", "x + 10", "x + 8"],
    correct: "-x + 10",
    hint: "分配法則を使ってから同類項をまとめよう。",
    explanation: "3(x + 2)は3x + 6、4(x - 1)は4x - 4になるよ。だから3x + 6 - (4x - 4) = -x + 10になるんだ。"
  },
  {
    id: "08",
    question: "2(3y - 4) + 5y",
    answers: ["11y - 8", "11y + 8", "6y - 8", "6y + 8"],
    correct: "11y - 8",
    hint: "分配法則を使ってから同類項をまとめよう。",
    explanation: "2(3y - 4)は6y - 8になるよ。そこに5yを足すと、6y - 8 + 5y = 11y - 8になるんだ。"
  },
  {
    id: "09",
    question: "4a + 2(3a - 1) - 5",
    answers: ["10a - 7", "10a - 5", "6a - 3", "4a + 6a - 2 - 5"],
    correct: "10a - 7",
    hint: "まずかっこを外してから、同類項をまとめよう。",
    explanation: "2(3a - 1)は6a - 2。4a + 6a - 2 - 5 = 10a - 7になるよ。"
  },
  {
    id: "10",
    question: "2a + 3(a - b)",
    answers: ["5a - 3b", "2a + 3a - 3b", "5a + 3b", "2a + 3b"],
    correct: "5a - 3b",
    hint: "分配法則を使ってから同類項をまとめよう。",
    explanation: "3(a - b)は3a - 3bになるよ。だから2a + 3a - 3b = 5a - 3bになるんだ。"
  }
]
};

export default {
  mathPro23: QUIZ_CONTENT_PRO
};
