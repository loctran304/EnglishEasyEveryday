const questionsLimit=10;


const quiz =[
        {
                question: "What ____ you ____?",

                answer: "are / doing",choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "She ____ a book now.", answer: "is reading",choices: ["read", "is reading", "reads", "reading"]
        },

        {
                question: "They ____ soccer at the moment.", answer: "are playing",choices: ["play", "playing", "plays", "are playing"]
        },

        {
                question: "I ____ to the music right now.", answer: "am listening",
               choices: ["listen", "listening", "listens", "am listening"]
        },

        {
                question: "What ____ they ____ in the kitchen?", answer: "are / doing",choices: ["is / do", "are / doing", "are / doing", "do / doing"]
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
        },

        {
                question: "What ____ you ____ on the computer?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "He ____ his car now.", answer: "is driving",
               choices: ["drive", "is driving", "drives", "driving"]
        },

        {
                question: "We ____ a new recipe at the cooking class.", answer: "are learning",
               choices: ["learn", "learns", "learning", "are learning"]
        },

        {
                question: "I ____ to the radio now.", answer: "listen",
               choices: ["listen", "listening", "listens", "am listening"]
        },

        {
                question: "She ____ a letter at the moment.", answer: "is writing",
               choices: ["write", "is writing", "writes", "writing"]
        },

        {
                question: "They ____ basketball in the park.", answer: "are playing",
               choices: ["play", "playing", "plays", "are playing"]
        },

        {
                question: "What ____ you ____ in the living room?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ to school now.", answer: "go",
               choices: ["go", "going", "goes", "am going"]
        },

        {
                question: "He ____ the guitar at the moment.", answer: "is playing",
               choices: ["play", "is playing", "plays", "playing"]
        },

        {
                question: "We ____ a new project now.", answer: "are starting",
               choices: ["start", "starts", "starting", "are starting"]
        },

        {
                question: "She ____ a cake for the party.", answer: "is baking",
               choices: ["bake", "is baking", "bakes", "baking"]
        },

        {
                question: "They ____ their bags for the trip.", answer: "are packing",
               choices: ["pack", "packing", "packs", "are packing"]
        },

        {
                question: "What ____ they ____ in the backyard?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ the piano at the moment.", answer: "am playing",
               choices: ["play", "playing", "plays", "am playing"]
        },

        {
                question: "He ____ a sandwich now.", answer: "is eating",
               choices: ["eat", "is eating", "eats", "eating"]
        },

        {
                question: "We ____ a new language at the moment.", answer: "are learning",
               choices: ["learn", "learns", "learning", "are learning"]
        },

        {
                question: "She ____ a picture right now.", answer: "is drawing",
               choices: ["draw", "is drawing", "draws", "drawing"]
        },

        {
                question: "They ____ TV in the living room.", answer: "are watching",
               choices: ["watch", "watches", "watching", "are watching"]
        },

        {
                question: "What ____ they ____ on the beach?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ my friend at the moment.", answer: "meet",
               choices: ["meet", "meeting", "meets", "am meeting"]
        },

        {
                question: "He ____ a cup of coffee now.", answer: "is drinking",
               choices: ["drink", "is drinking", "drinks", "drinking"]
        },

        {
                question: "We ____ our homework at the moment.", answer: "are doing",
               choices: ["do", "doing", "does", "are doing"]
        },

        {
                question: "She ____ a cake for her birthday.", answer: "is baking",
               choices: ["bake", "is baking", "bakes", "baking"]
        },

        {
                question: "They ____ their bags for the trip.", answer: "are packing",
               choices: ["pack", "packing", "packs", "are packing"]
        },

        {
                question: "What ____ they ____ in the backyard?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ the piano at the moment.", answer: "am playing",
               choices: ["play", "playing", "plays", "am playing"]
        },

        {
                question: "He ____ a sandwich now.", answer: "is eating",
               choices: ["eat", "is eating", "eats", "eating"]
        },

        {
                question: "We ____ a new language at the moment.", answer: "are learning",
               choices: ["learn", "learns", "learning", "are learning"]
        },

        {
                question: "She ____ a picture right now.", answer: "is drawing",
               choices: ["draw", "is drawing", "draws", "drawing"]
        },

        {
                question: "They ____ TV in the living room.", answer: "are watching",
               choices: ["watch", "watches", "watching", "are watching"]
        },

        {
                question: "What ____ they ____ on the beach?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ my friend at the moment.", answer: "am meeting",
               choices: ["meet", "meeting", "meets", "am meeting"]
        },

        {
                question: "He ____ a cup of coffee now.", answer: "is drinking",
               choices: ["drink", "is drinking", "drinks", "drinking"]
        },

        {
                question: "We ____ our homework at the moment.", answer: "are doing",
               choices: ["do", "doing", "does", "are doing"]
        },

        {
                question: "She ____ a cake for her birthday.", answer: "is baking",
               choices: ["bake", "is baking", "bakes", "baking"]
        },

        {
                question: "They ____ their bags for the trip.", answer: "are packing",
               choices: ["pack", "packing", "packs", "are packing"]
        },

        {
                question: "What ____ they ____ in the backyard?", answer: "are / doing",
               choices: ["is / do", "are / doing", "are / doing", "do / doing"]
        },

        {
                question: "I ____ the piano at the moment.", answer: "am playing",
               choices: ["play", "playing", "plays", "am playing"]
        },

        {
                question: "He ____ a sandwich now.", answer: "is eating",
               choices: ["eat", "is eating", "eats", "eating"]
        },

        {
                question: "We ____ a new language at the moment.", answer: "are learning",
               choices: ["learn", "learns", "learning", "are learning"]
        },

        {
                question: "She ____ a picture right now.", answer: "is drawing",
               choices: ["draw", "is drawing", "draws", "drawing"]
        },

        {
                question: "They ____ TV in the living room.", answer: "are watching",
               choices: ["watch", "watches", "watching", "are watching"]
        },
]