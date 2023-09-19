const questionsLimit=10;


const quiz = [
        {
                question: "When I arrived at the party, everyone ____.", answer: "was leaving", choices: ["had left", "left", "was leaving", "has left"]
        },

        {
                question: "While we ____ dinner, it started to rain.", answer: "were cooking", choices: ["had cooked", "has cooked", "cooked", "were cooking"]
        },

        {
                question: "She ____ the phone when it rang.", answer: "was answering", choices: ["had answered", "was answering", "answered", "has answered"]
        },

        {
                question: "I ____ TV when the power went out.", answer: "was watching", choices: ["was watching", "had watched", "watched", "has watched"]
        },

        {
                question: "They ____ basketball at the park all afternoon.", answer: "were playing", choices: ["had played", "has played", "played", "were playing"]
        },

        {
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
                question: "He ____ a book when his friend called.", answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
        },

        {
                question: "While they ____ for the train, it started to rain.", answer: "was reading", choices: ["had waited", "has waited", "was reading", "waited"]
        },

        {
                question: "She ____ a letter when her friend came over.", answer: "was writing", choices: ["was writing", "had written", "wrote", "has written"]
        },

        {
                question: "I ____ to music while I was driving home.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
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
                question: "He ____ a book when his friend called.", answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
        },

        {
                question: "While they ____ for the train, it started to rain.", answer: "were waiting", choices: ["had waited", "has waited", "were waiting", "waited"]
        },

        {
                question: "She ____ a letter when her friend came over.", answer: "was writing", choices: ["was writing", "had written", "wrote", "has written"]
        },

        {
                question: "I ____ to music while I was driving home.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
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
                question: "He ____ a book when his friend called.", answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
        },

        {
                question: "While they ____ for the train, it started to rain.", answer: "were waiting", choices: ["had waited", "has waited", "were waiting", "waited"]
        },

        {
                question: "She ____ a letter when her friend came over.", answer: "was writing", choices: ["was writing", "had written", "wrote", "has written"]
        },

        {
                question: "I ____ to music while I was driving home.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
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
                question: "He ____ a book when his friend called.", answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
        },

        {
                question: "While they ____ for the train, it started to rain.", answer: "were waiting", choices: ["had waited", "has waited", "were waiting", "waited"]
        },
        {
                question: "She ____ a letter when her friend came over.", answer: "was writing", choices: ["was writing", "had written", "wrote", "has written"]
        },

        {
                question: "I ____ to music while I was driving home.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
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
                question: "He ____ a book when his friend called.", answer: "was reading", choices: ["had read", "has read", "read", "was reading"]
        },
        {
                question: "While they ____ for the train, it started to rain.", answer: "were waiting", choices: ["had waited", "has waited", "were waiting", "waited"]
        },

        {
                question: "She ____ a letter when her friend came over.", answer: "was writing", choices: ["was writing", "had written", "wrote", "has written"]
        },

        {
                question: "I ____ to music while I was driving home.", answer: "was listening", choices: ["had listened", "has listened", "listened", "was listening"]
        },

        {
                question: "While he ____ his bike, his friends were playing soccer.", answer: "was fixing", choices: ["was fixing", "had fixed", "fixed", "has fixed"]
        },

        {
                question: "They ____ the movie when the fire alarm went off.", answer: "were watching", choices: ["had watched", "has watched", "were watching", "watched"]
        },

        {
                question: "While she ____ a cake, her sister was setting the table.", answer: "was baking", choices: ["was baking", "had baked", "baked", "has baked"]
        }





]