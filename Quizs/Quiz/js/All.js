const questionsLimit=20;

const quiz = [
    {
        question: "She ____ her homework every evening.",
        answer: "does",
        choices: ["does", "doing", "does", "do"]
    },

    {
        question: "We ____ breakfast at 8 AM.",
        answer: "have",
        choices: ["have", "having", "has", "had"]
    },

    {
        question: "They ____ a new car last month.",
        answer: "bought",
        choices: ["buy", "buys", "buying", "bought"]
    },

    {
        question: "He ____ to work by bike.",
        answer: "goes",
        choices: ["goes", "going", "go", "went"]
    },

    {
        question: "She ____ her friend every week.",
        answer: "sees",
        choices: ["sees", "seeing", "sees", "see"]
    },

    {
        question: "We ____ pizza for dinner.",
        answer: "are having",
        choices: ["have", "are having", "has", "had"]
    },
    {
        question: "He ____ for the exam since last week.",
        answer: "studied",
        choices: ["has studied", "has been studying", "studied", "was studying"]
    },

    {
        question: "They ____ in the marathon for two hours.",
        answer: "have been running",
        choices: ["have run", "have been running", "ran", "were running"]
    },

    {
        question: "I ____ on this project all day.",
        answer: "have been working",
        choices: ["have worked", "have been working", "worked", "was working"]
    },

    {
        question: "She ____ at the computer since 9 AM.",
        answer: "sat",
        choices: ["has sat", "has been sitting", "sat", "was sitting"]
    },

    {
        question: "He ____ with his friends for two hours.",
        answer: "has been playing",
        choices: ["has played", "has been playing", "played", "was playing"]
    }, {
        question: "She ____ a book now.", answer: "is reading", choices: ["read", "is reading", "reads", "reading"]
    },

    {
        question: "They ____ soccer at the moment.", answer: "are playing", choices: ["play", "playing", "plays", "are playing"]
    },

    {
        question: "I ____ to the music right now.", answer: "am listening",
        choices: ["listen", "listening", "listens", "am listening"]
    },

    {
        question: "What ____ they ____ in the kitchen?", answer: "are / doing", choices: ["is / do", "are / doing", "are / doing", "do / doing"]
    },

    {
        question: "She ____ her friend right now.", answer: "is calling",
        choices: ["call", "is calling", "calls", "calling"]
    },

    {
        question: "They ____ a movie at the cinema.", answer: "are watching",
        choices: ["watch", "watches", "watching", "are watching"]
    },

    {
        question: "I ____ my homework at the moment.", answer: "do",
        choices: ["do", "doing", "does", "am doing"]
    }, {
        question: "They ____ to the party last night.", answer: "went",
        choices: ["went", "go", "goes", "going"]
    },

    {
        question: "He ____ the movie yesterday.", answer: "saw",
        choices: ["see", "sees", "saw", "seen"]
    },

    {
        question: "We ____ a delicious meal at the restaurant.", answer: "ate",
        choices: ["eat", "eats", "ate", "eaten"]
    },

    {
        question: "She ____ the door and entered the room.", answer: "opened",
        choices: ["opens", "opened", "open", "opening"]
    },

    {
        question: "They ____ in the lake yesterday.", answer: "swam",
        choices: ["swim", "swims", "swam", "swimming"]
    },

    {
        question: "He ____ his homework last night.", answer: "did",
        choices: ["do", "does", "doing", "did"]
    },

    {
        question: "We ____ to the museum on Saturday.", answer: "went",
        choices: ["went", "go", "going", "goes"]
    },

    {
        question: "She ____ the letter yesterday morning.", answer: "wrote",
        choices: ["write", "writes", "wrote", "written"]
    }, {
        question: "They ____ the movie by the time we arrived.", answer: "had already finished", choices: ["had finished", "has finished", "had already finished", "had been finishing"]
    },

    {
        question: "He ____ for that company since 2010.", answer: "has been working", choices: ["had finished", "has finished", "had been finishing", "has been working"]
    },

    {
        question: "By the time we got to the party, they ____ all the food.", answer: "had eaten", choices: ["had finished", "had eaten", "had been finishing", "had been eating"]
    },

    {
        question: "I ____ three books last week.", answer: "had read", choices: ["had read", "has read", "had been reading", "was reading"]
    },

    {
        question: "She ____ English before she moved to the United States.", answer: "had been studying", choices: ["has finished", "had finished", "had been studying", "studied"]
    },

    {
        question: "We ____ dinner by the time they arrived.", answer: "had finished", choices: ["had finished", "has finished", "had been finishing", "finished"]
    },

    {
        question: "He ____ for that company before he decided to start his own business.", answer: "had worked", choices: ["had finished", "had worked", "has finished", "worked"]
    },

    {
        question: "By the time I got home, my sister ____ my favorite shirt.", answer: "had washed", choices: ["had washed", "has washed", "had been washing", "washed"]
    },

    {
        question: "They ____ in the same city for over 10 years before they moved to a new country.", answer: "had been living", choices: ["had finished", "had lived", "has finished", "had been living"]
    },

    {
        question: "We ____ each other since childhood.", answer: "have known", choices: ["has finished", "had finished", "have known", "knew"]
    }, {
        question: "While I ____ my homework, my sister was watching TV.", answer: "was doing", choices: ["had finished", "has finished", "was doing", "did"]
    },

    {
        question: "She ____ a book when the phone rang.", answer: "was reading", choices: ["was reading", "had read", "read", "has read"]
    },

    {
        question: "We ____ in the garden when it started raining.", answer: "were working", choices: ["had worked", "were working", "has worked", "worked"]
    },

    {
        question: "He ____ a letter while he was waiting for the bus.", answer: "was writing", choices: ["had written", "has written", "wrote", "was writing"]
    },

    {
        question: "While they ____ dinner, their friends were playing games.", answer: "were cooking", choices: ["had cooked", "has cooked", "were cooking", "cooked"]
    },

    {
        question: "She ____ her dog for a walk in the park.", answer: "was taking", choices: ["was taking", "had taken", "took", "has taken"]
    },

    {
        question: "I ____ to music while I was cleaning the house.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
    },

    {
        question: "While he ____ his bike, his friends were playing soccer.", answer: "was fixing", choices: ["was fixing", "had fixed", "fixed", "has fixed"]
    },

    {
        question: "They ____ the movie when the fire alarm went off.", answer: "were watching", choices: ["had watched", "has watched", "were watching", "watched"]
    },

    {
        question: "While she ____ a cake, her sister was setting the table.", answer: "was baking", choices: ["was baking", "had baked", "baked", "has baked"]
    },

    {
        question: "He ____ a book when his friend called.",
         answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
    }, {


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
    }, {
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
    }



]