const questionsLimit=10;


const quiz =
  [
    {

      question: "He _____ to music in the evening.",

      answer: "listens",
     choices: ["listened", "listens", "is listening", "will listen"]
    },
    {

      question: "She _____ to the radio every morning.",

      answer: "listens",
     choices: ["listened", "listens", "is listening", "will listen"]
    },
    {

      question: "They _____ to the concert last night.",

      answer: "listened",
     choices: ["listened", "listens", "is listening", "will listen"]
    },
    {

      question: "He _____ to the teacher carefully.",

      answer: "listened",
     choices: ["listened", "listens", "is listening", "will listen"]
    },
    {

      question: "She _____ English for three years.",

      answer: "learns",
     choices: ["learned", "learns", "is learning", "will learn"]
    },
    {

      question: "They _____ dinner at 7 PM yesterday.",

      answer: "eat",
     choices: ["ate", "eat", "are eating", "will eat"]
    },
    {

      question: "We _____ to the beach every summer.",

      answer: "go",
     choices: ["go", "went", "are going", "will go"]
    },
    {

      question: "She _____ her homework yesterday.",

      answer: "finishes",
     choices: ["finished", "finishes", "is finishing", "will finish"]
    },
    {

      question: "They _____ their friends tomorrow.",

      answer: "will meet",
     choices: ["meet", "met", "will meet", "are meeting"]
    },
    {

      question: "I _____ my car now.",

      answer: "am washing",
     choices: ["am washing", "washed", "wash", "am washing"]
    },
    {

      question: "He _____ for the bus every morning.",

      answer: "will wait",
     choices: ["waited", "waits", "is waiting", "will wait"]
    },
    {

      question: "We _____ to London last summer.",

      answer: "will go",
     choices: ["went", "go", "are going", "will go"]
    },
    {

      question: "They _____ a new car next year.",

      answer: "will buy",
     choices: ["buy", "bought", "are buying", "will buy"]
    },
    {

      question: "She _____ a book yesterday.",

      answer: "will read",
     choices: ["read", "reads", "is reading", "will read"]
    },
    {

      question: "He _____ his car at the mechanic.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "I _____ to the radio tonight.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "She _____ a cake for the party.",

      answer: "will be baking",
     choices: ["watches", "watch", "will watch", "will be baking"]
    },
    {

      question: "We _____ in the park tomorrow.",

      answer: "will have",
     choices: ["have", "has", "will have", "will be having"]
    },
    {

      question: "They _____ a new house next year.",

      answer: "will have",
     choices: ["have", "has", "will have", "will be having"]
    },
    {

      question: "I _____ the game on TV tonight.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "She _____ a movie at the cinema.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "We _____ a party this weekend.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ the concert next month.",

      answer: "will be watching",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {

      question: "He _____ his car at the mechanic.",

      answer: "watches",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {

      question: "I _____ to the radio tonight.",

      answer: "will be listening",
     choices: ["listens", "will listen", "is listening", "will be listening"]
    },
    {

      question: "She _____ a cake for the party.",

      answer: "will be baking",
     choices: ["watches", "watch", "will watch", "will be baking"]
    },
    {

      question: "We _____ in the park tomorrow.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ a new house next year.",

      answer: "will be having",
     choices: ["have", "has", "will have", "will be having"]
    },
    {

      question: "I _____ the game on TV tonight.",

      answer: "will be having",
     choices: ["watches", "watch", "will watch", "will be having"]
    },
    {

      question: "She _____ a movie at the cinema.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "We _____ a party this weekend.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ the concert next month.",

      answer: "will be watching",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {

      question: "He _____ his car at the mechanic.",

      answer: "watches",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {

      question: "I _____ to the radio tonight.",

      answer: "will be listening",
     choices: ["listens", "will listen", "will be listening", "is listening"]
    },
    {

      question: "She _____ a cake for the party.",

      answer: "will be baking",
     choices: ["watches", "watch", "will be baking", "will watch"]
    },
    {

      question: "We _____ in the park tomorrow.",

      answer: "will have",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ a new house next year.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "I _____ the game on TV tonight.",

      answer: "will be watching",
     choices: ["watches", "watch", "will be watching", "will watch"]
    },
    {

      question: "She _____ a movie at the cinema.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "We _____ a party this weekend.",

      answer: "will be having",
     choices: ["has", "have", "will be having", "are having"]
    },
    {

      question: "They _____ the concert next month.",

      answer: "will be watching",
     choices: ["watch", "watches", "will be watching", "will watch"]
    },
    {

      question: "He _____ his car at the mechanic.",

      answer: "will be watching",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {

      question: "I _____ to the radio tonight.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "She _____ a cake for the party.",

      answer: "will be baking",
     choices: ["watches", "watch", "will watch", "will be baking"]
    },
    {

      question: "We _____ in the park tomorrow.",

      answer: "will have",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ a new house next year.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "I _____ the game on TV tonight.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "She _____ a movie at the cinema.",

      answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {

      question: "We _____ a party this weekend.",

      answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {

      question: "They _____ the concert next month.",

      answer: "will be watching",
     choices: ["watch", "watches", "will be watching", "will watch"]
    }
  ]

