const questionsLimit=10;



const quiz =[
        {
                question: "She ____ her homework before dinner.", answer: "had finished",
                choices: ["had finished", "has finished", "finished", "had been finishing"]
        },

        {
                question: "They ____ the movie by the time we arrived.", answer: "had already finished",choices: ["had finished", "has finished", "had already finished", "had been finishing"]
        },

        {
                question: "He ____ for that company since 2010.", answer: "has been working",choices: ["had finished", "has finished", "had been finishing", "has been working"]
        },

        {
                question: "By the time we got to the party, they ____ all the food.", answer: "had eaten",choices: ["had finished", "had eaten", "had been finishing", "had been eating"]
        },

        {
                question: "I ____ three books last week.", answer: "had read",choices: ["had read", "has read", "had been reading", "was reading"]
        },

        {
                question: "She ____ English before she moved to the United States.", answer: "had been studying",choices: ["has finished", "had finished", "had been studying", "studied"]
        },

        {
                question: "We ____ dinner by the time they arrived.", answer: "had finished",choices: ["had finished", "has finished", "had been finishing", "finished"]
        },

        {
                question: "He ____ for that company before he decided to start his own business.", answer: "had worked",choices: ["had finished", "had worked", "has finished", "worked"]
        },

        {
                question: "By the time I got home, my sister ____ my favorite shirt.", answer: "had washed",choices: ["had washed", "has washed", "had been washing", "washed"]
        },

        {
                question: "They ____ in the same city for over 10 years before they moved to a new country.", answer: "had been living",choices: ["had finished", "had lived", "has finished", "had been living"]
        },

        {
                question: "We ____ each other since childhood.", answer: "have known",choices: ["has finished", "had finished", "have known", "knew"]
        },

        {
                question: "She ____ her car before the race began.", answer: "had fixed",choices: ["had fixed", "has fixed", "had been fixing", "fixed"]
        },

        {
                question: "I ____ the book by the time the movie was released.", answer: "had already read",choices: ["had finished", "had read", "has finished", "had already read"]
        },

        {
                question: "By the time he arrived, the party ____.", answer: "had ended",choices: ["had finished", "has finished", "had ended", "ended"]
        },

        {
                question: "They ____ the game before we got there.", answer: "had won",choices: ["had finished", "had won", "has finished", "won"]
        },

        {
                question: "She ____ in London before she moved to New York.", answer: "had lived",choices: ["had lived", "has lived", "had been living", "lived"]
        },

        {
                question: "We ____ to the top of the mountain.", answer: "had been hiking",choices: ["has hiked", "had hiked", "had been hiking", "hiked"]
        },

        {
                question: "He ____ his novel before the publisher offered him a deal.", answer: "had finished",choices: ["had finished", "has finished", "finished", "had been finishing"]
        },

        {
                question: "By the time we got to the theater, the play ____.", answer: "had already ended",choices: ["had finished", "had ended", "has finished", "had already ended"]
        },

        {
                question: "They ____ the news before we had a chance to tell them.", answer: "had heard",choices: ["had finished", "had heard", "has finished", "heard"]
        },

        {
                question: "I ____ my coffee before the meeting started.", answer: "had already finished",choices: ["had finished", "has finished", "had already finished", "had been finishing"]
        },

        {
                question: "She ____ her keys before she left the house.", answer: "had misplaced",choices: ["had finished", "has finished", "finished", "had misplaced"]
        },

        {
                question: "We ____ the game.", answer: "had won",choices: ["had won", "won", "had been winning", "were winning"]
        },

        {
                question: "He ____ for the train when it arrived.", answer: "had been waiting",choices: ["had finished", "has finished", "had been waiting", "waited"]
        },

        {
                question: "By the time she got there, the party ____.", answer: "had already started",choices: ["had already started", "had started", "has started", "started"]
        },

        {
                question: "They ____ for the concert since last month.", answer: "had been waiting",choices: ["had finished", "had been waiting", "has finished", "were waiting"]
        },

        {
                question: "We ____ the party.", answer: "had attended",choices: ["had attended", "attended", "had been attending", "were attending"]
        },

        {
                question: "He ____ his luggage before he left for the trip.", answer: "had packed",choices: ["had finished", "has finished", "had packed", "packed"]
        },

        {
                question: "By the time they arrived, the show ____.", answer: "had already begun",choices: ["had already started", "had started", "has started", "had already begun"]
        },

        {
                question: "She ____ the news when she woke up.", answer: "had received",choices: ["had received", "has received", "received", "had been receiving"]
        },

        {
                question: "I ____ my phone before leaving the house.", answer: "had charged",choices: ["had finished", "had charged", "has finished", "charged"]
        },

        {
                question: "He ____ the race before the rain started.", answer: "had won",choices: ["had finished", "has finished", "finished", "had won"]
        },

        {
                question: "We ____ the book before watching the movie.", answer: "had already read",choices: ["had finished", "has finished", "had already read", "read"]
        },

        {
                question: "By the time she got to the airport, the flight ____.", answer: "had already departed",choices: ["had already departed", "had departed", "has departed", "departed"]
        },

        {
                question: "They ____ to the party for hours before we arrived.", answer: "had been dancing",choices: ["had finished", "has finished", "finished", "had been dancing"]
        },

        {
                question: "She ____ her presentation before the conference began.", answer: "had prepared",choices: ["had prepared", "has prepared", "prepared", "had been preparing"]
        },

        {
                question: "We ____ dinner by the time they arrived.", answer: "had been cooking",choices: ["had finished", "has finished", "had been cooking", "cooked"]
        },

        {
                question: "He ____ for the bus when it arrived.", answer: "had been waiting",choices: ["had been waiting", "has been waiting", "had waited", "waited"]
        },

        {
                question: "By the time we got there, the concert ____.", answer: "had started",choices: ["had already started", "had started", "has started", "started"]
        },

        {
                question: "She ____ the news before anyone else.", answer: "had heard",choices: ["had finished", "has finished", "finished", "had heard"]
        },

        {
                question: "They ____ the game before we got there.", answer: "had won",choices: ["had won", "won", "had been winning", "were winning"]
        },

        {
                question: "I ____ my phone before leaving the house.", answer: "had charged",choices: ["had finished", "had charged", "has finished", "charged"]
        },

        {
                question: "He ____ the race before the rain started.", answer: "had won",choices: ["had finished", "has finished", "finished", "had won"]
        },

        {
                question: "We ____ the book before watching the movie.", answer: "had already read",choices: ["had finished", "has finished", "had already read", "read"]
        },

        {
                question: "By the time she got to the airport, the flight ____.", answer: "had already departed",choices: ["had already departed", "had departed", "has departed", "departed"]
        },

        {
                question: "They ____ to the party for hours before we arrived.", answer: "had been dancing",choices: ["had finished", "has finished", "finished", "had been dancing"]
        },

        {
                question: "She ____ her presentation before the conference began.", answer: "had prepared",choices: ["had prepared", "has prepared", "prepared", "had been preparing"]
        },

        {
                question: "We ____ dinner by the time they arrived.", answer: "had been cooking",choices: ["had finished", "has finished", "had been cooking", "cooked"]
        },

        {
                question: "He ____ for the bus when it arrived.", answer: "had been waiting",choices: ["had been waiting", "has been waiting", "had waited", "waited"]
        },

        {
                question: "By the time we got there, the concert ____.", answer: "had started",choices: ["had already started", "had started", "has started", "started"]
        }





]