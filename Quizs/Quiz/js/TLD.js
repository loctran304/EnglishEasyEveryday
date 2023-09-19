
const questionsLimit=10;

const quiz =
  [
    {
      question: "He _____ to music in the evening.", answer: "listens",
     choices: ["listening", "listens", "listened", "listen"]
    },
    {
      question: "She ____ to the party tomorrow.", answer: "will go",
     choices: ["going", "goes", "go", "will go"]
    },
    {
      question: "They _______ a new house next year.", answer: "will buy",
     choices: ["will buy", "buy", "buying", "buys"]
    },
    {

      question: "I think she _______ the competition.", answer: "will win",
     choices: ["wins", "winning", "win", "will win"]
    },
    {


      question: "We _______ a great time at the party.", answer: "will have",
     choices: ["will have", "have", "having", "has"]
    },
    {

      question: "He _______ a doctor in the future.", answer: "be",
     choices: ["is", "will be", "being", "be"]
    },
    {

      question: "They _______ to a different country next month.", answer: "are moving",
     choices: ["are moving", "move", "moving", "will move"]
    },
    {

      question: "I _______ my homework after dinner.", answer: "will do",
     choices: ["will do", "do", "doing", "does"]
    },
    {

      question: "She _______ her birthday next week.", answer: "will celebrate",
     choices: ["will celebrate", "celebrate", "celebrates", "celebrating"]
    },
    {

      question: "He _______ a book about his travels.", answer: "write",
     choices: ["will write", "writes", "write", "writing"]
    },
    {

      question: "We _______ the test next Monday.", answer: "takes",
     choices: ["will take", "takes", "take", "taking"]
    },
    {

      question: "They _______ the concert next weekend.", answer: "attending",
     choices: ["will attend", "attends", "attend", "attending"]
    },
    {

      question: "I _______ my friend in the afternoon.", answer: "visiting",
     choices: ["will visit", "visits", "visit", "visiting"]
    },
    {

      question: "She _______ to a new school next semester.", answer: "transfers",
     choices: ["will transfer", "transfers", "transfer", "transferring"]
    },
    {

      question: "We _______ to the mountains for the holidays.", answer: "will go",
     choices: ["will go", "go", "going", "goes"]
    },
    {

      question: "He _______ his new bike tomorrow.", answer: "receive",
     choices: ["will receive", "receives", "receive", "receiving"]
    },
    {

      question: "They _______ their anniversary at a fancy restaurant.", answer: "celebrating",
     choices: ["will celebrate", "celebrates", "celebrate", "celebrating"]
    },
    {

      question: "I _______ to London next year.", answer: "travels",
     choices: ["will travel", "travels", "travel", "traveling"]
    },
    {

      question: "She _______ a famous actress in the future.", answer: "become",
     choices: ["will become", "becomes", "become", "becoming"]
    },
    {

      question: "We _______ the party on Saturday.", answer: "host",
     choices: ["will host", "hosts", "host", "hosting"]
    },
    {

      question: "They _______ in the marathon next month.", answer: "participate",
     choices: ["will participate", "participates", "participate", "participating"]
    },

    {

      question: "He _______ his family next weekend.", answer: "will visit",
     choices: ["will visit", "visits", "visit", "visiting"]
    },
    {

      question: "She _______ her new dress to the party.", answer: "will wear",
     choices: ["will wear", "wears", "wear", "wearing"]
    },
    {

      question: "We _______ dinner at that restaurant.", answer: "will have",
     choices: ["will have", "have", "having", "has"]
    },
    {

      question: "They _______ their new house.", answer: "will paint",
     choices: ["will paint", "paints", "paint", "painting"]
    },
    {

      question: "I _______ a trip to Paris.", answer: "will book",
     choices: ["will book", "books", "book", "booking"]
    },
    {

      question: "She _______ her driver's license.", answer: "will get",
     choices: ["will get", "gets", "get", "getting"]
    },
    {

      question: "They _______ at the new restaurant.", answer: "eating",
     choices: ["will eat", "eats", "eat", "eating"]
    },
    {

      question: "He _______ his English skills.", answer: "improving",
     choices: ["will improve", "improves", "improve", "improving"]
    },
    {

      question: "We _______ a new project at work.", answer: "will start",
     choices: ["will start", "starts", "start", "starting"]
    },
    {

      question: "They _______ a family gathering.", answer: "has",
     choices: ["will have", "have", "having", "has"]
    },
    {

      question: "I _______ my driver's test.", answer: "take",
     choices: ["will take", "takes", "take", "taking"]
    },
    {

      question: "She _______ a new job.", answer: "finding",
     choices: ["will find", "finds", "find", "finding"]
    },
    {

      question: "We _______ a new car.", answer: "buy",
     choices: ["will buy", "buy", "buying", "buys"]
    },
    {

      question: "They _______ their dreams.", answer: "achieve",
     choices: ["will achieve", "achieves", "achieve", "achieving"]
    },
    {

      question: "I _______ a delicious cake.", answer: "baking",
     choices: ["will bake", "bakes", "bake", "baking"]
    },
    {

      question: "She _______ a trip to the beach.", answer: "planning",
     choices: ["will plan", "plans", "plan", "planning"]
    },
    {

      question: "We _______ a party for her.", answer: "throw",
     choices: ["will throw", "throws", "throw", "throwing"]
    },

    {

      question: "I _______ to a new city.", answer: "move",
     choices: ["will move", "move", "moving", "moves"]
    },
    {

      question: "She _______ her goals.", answer: "achieving",
     choices: ["will achieve", "achieves", "achieve", "achieving"]
    },
    {

      question: "We _______ a new house.", answer: "will buy",
     choices: ["will buy", "buy", "buying", "buys"]
    },
    {

      question: "They _______ their dreams come true.", answer: "will make",
     choices: ["will make", "makes", "make", "making"]
    },
    {

      question: "I _______ a new laptop.", answer: "buy",
     choices: ["will buy", "buy", "buying", "buys"]
    },
    {

      question: "She _______ to the party.", answer: "come",
     choices: ["will come", "comes", "come", "coming"]
    },
    {

      question: "We _______ a great time.", answer: "having",
     choices: ["will have", "have", "having", "has"]
    },
    {

      question: "They _______ the match.", answer: "win",
     choices: ["will win", "wins", "win", "winning"]
    },
    {

      question: "I _______ a new phone.", answer: "getting",
     choices: ["will get", "gets", "get", "getting"]
    },
    {

      question: "She _______ her favorite singer.", answer: "meeting",
     choices: ["will meet", "meets", "meet", "meeting"]
    }
  ]

