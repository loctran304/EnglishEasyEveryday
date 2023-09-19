const questionsLimit=10;


const quiz =
  [
    {
      question: "I _____ my homework tomorrow evening.",
      answer: "will be doing",
     choices: ["do", "am doing", "will do", "will be doing"]
    },
    {
      question: "They _____ a movie at the theater.", answer: "will be watching",
     choices: ["are watching", "watches", "will be watching", "watch"]
    },
    {
      question: "She _____ to music in the evening.", answer: "will be listening",
     choices: ["is listening", "listens", "will listen", "will be listening"]
    },
    {
      question: "We _____ a party for her birthday.", answer: "will be throwing",
     choices: ["will throw", "will be throwing", "throws", "throw"]
    },
    {
      question: "He _____ a book at the library.", answer: "will read",
     choices: ["will read", "reads", "is reading", "will be reading"]
    },
    {
      question: "They _____ a picnic at the park.", answer: "will be having",
     choices: [-"will have", -"will be having", -"has", -"have"]
    },
    {
      question: "I _____ to the gym after work.", answer: "am going",
     choices: ["will be going", "am going", "go", "goes"]
    },
    {
      question: "She _____ with her friends tomorrow.", answer: "will be meeting",
     choices: ["is meeting", "will be meeting", "will meet", "meets"]
    },
    {
      question: "We _____ a delicious dinner tonight.", answer: "will be having",
     choices: ["will have", "have", "will be having", "has"]
    },
    {
      question: "He _____ a football match on TV.", answer: "will be watching",
     choices: ["is watching", "watch", "will be watching", "watches"]
    },
    {
      question: "They _____ a trip to the beach.", answer: "will plan",
     choices: ["will be planning", "plan", "will plan", "plans"]
    },
    {
      question: "I _____ to a concert this weekend.", answer: "will go",
     choices: ["will be going", "goes", "will go", "go"]
    },
    {
      question: "She _____ a new song on the radio.", answer: "will be listening",
     choices: ["is listening", "will be listening", "will listen", "listens"]
    },
    {
      question: "We _____ at the restaurant.", answer: "will have",
     choices: ["have", "will be having", "has", "will have"]
    },
    {
      question: "They _____ the game tomorrow.", answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {
      question: "He _____ his car at the mechanic.", answer: "will watch",
     choices: ["watches", "watch", "will be watching", "will watch"]
    },
    {
      question: "I _____ to the radio tonight.", answer: "will be listening",
     choices: ["listens", "will listen", "is listening", "will be listening"]
    },
    {
      question: "She _____ a cake for the party.", answer: "will be baking",
     choices: ["watches", "will watch", "watch", "will be baking"]
    },
    {
      question: "We _____ in the park tomorrow.", answer: "will be having",
     choices: ["have", "will be having", "has", "will have"]
    },
    {
      question: "They _____ a new house next year.", answer: "will be having",
     choices: ["will have", "have", "has", "will be having"]
    },
    {
      question: "I _____ the game on TV tonight.", answer: "am watching",
     choices: ["will be watching", "watch", "am watching", "watches"]
    },
    {
      question: "She _____ a movie at the cinema.", answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {
      question: "We _____ a party this weekend.", answer: "are having",
     choices: ["will be having", "are having", "has", "have"]
    },
    {
      question: "They _____ the concert next month.", answer: "will watch",
     choices: ["watches", "watch", "will be watching", "will watch"]
    },
    {
      question: "He _____ his car at the mechanic.", answer: "will watch",
     choices: ["watches", "watch", "will be watching", "will watch"]
    },
    {
      question: "I _____ to the radio tonight.", answer: "will be listening",
     choices: ["is listening", "listens", "will listen", "will be listening"]
    },
    {
      question: "She _____ a cake for the party.", answer: "will be baking",
     choices: ["will watch", "watches", "watch", "will be baking"]
    },
    {
      question: "We _____ in the park tomorrow.", answer: "will be having",
     choices: ["has", "will have", "will be having", "have"]
    },
    {
      question: "They _____ a new house next year.", answer: "will be having",
     choices: ["has", "will have", "have", "will be having"]
    },
    {
      question: "I _____ the game on TV tonight.", answer: "watch",
     choices: ["am watching", "watches", "will be watching", "watch"]
    },
    {
      question: "She _____ a movie at the cinema.", answer: "will watch",
     choices: ["watch", "watches", "will be watching", "will watch"]
    },
    {
      question: "We _____ a party this weekend.", answer: "will be having",
     choices: ["are having", "have", "has", "will be having"]
    },
    {
      question: "They _____ the concert next month.", answer: "will watch",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {
      question: "He _____ his car at the mechanic.", answer: "will watch",
     choices: ["watch", "will watch", "will be watching", "watches"]
    },
    {
      question: "I _____ to the radio tonight.", answer: "will be listening",
     choices: ["listens", "will listen", "is listening", "will be listening"]
    },
    {
      question: "She _____ a cake for the party.", answer: "will be baking",
     choices: ["watches", "watch", "will watch", "will be baking"]
    },
    {
      question: "We _____ in the park tomorrow.", answer: "will be having",
     choices: ["has", "have", "will have", "will be having"]
    },
    {
      question: "They _____ a new house next year.", answer: "will be having",
     choices: ["has", "will have", "have", "will be having"]
    },
    {
      question: "I _____ the game on TV tonight.", answer: "will be watching",
     choices: ["am watching", "watch", "watches", "will be watching"]
    },
    {
      question: "She _____ a movie at the cinema.", answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {
      question: "We _____ a party this weekend.", answer: "will be having",
     choices: ["has", "have", "will be having", "are having"]
    },
    {
      question: "They _____ the concert next month.", answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {
      question: "He _____ his car at the mechanic.", answer: "will watch",
     choices: ["watches", "watch", "will be watching", "will watch"]
    },
    {
      question: "I _____ to the radio tonight.", answer: "will be listening",
     choices: ["is listening", "listens", "will listen", "will be listening"]
    },
    {
      question: "She _____ a cake for the party.", answer: "will watch",
     choices: ["watches", "watch", "will be baking", "will watch"]
    },
    {
      question: "We _____ in the park tomorrow.", answer: "will be having",
     choices: ["have", "will be having", "has", "will have"]
    },
    {
      question: "They _____ a new house next year.", answer: "will be having",
     choices: ["have", "has", "will have", "will be having"]
    },
    {
      question: "I _____ the game on TV tonight.", answer: "will be watching",
     choices: ["watches", "watch", "will watch", "will be watching"]
    },
    {
      question: "She _____ a movie at the cinema.", answer: "will be watching",
     choices: ["watch", "watches", "will watch", "will be watching"]
    },
    {
      question: "We _____ a party this weekend.", answer: "will be having",
     choices: ["have", "will have", "has", "will be having"]
    }
  ]

