const questionsLimit=10;


const quiz =[
    {
         question: "lf you just need a car that's small and easy to park, ____________ would be great for you.",
        
        answer: "a compact car",
       choices: [
            "a sedan" ,
            "an SUV" ,
            "a compact car" ,
            "a mini van" 
        ],
      },
{    question: "She _____ a cake for her birthday.",  answer: "will bake",choices: [  "will bake" ,  "baking" ,  "bake" ,  "baked" ]
        },

{    question: "They ____ to the beach last weekend.",  answer: "went" ,choices: [  "will go" ,  "went" ,  "going" ,  "went" ]
        },

{    question: "He _____ his homework tomorrow.",  answer: "will finish",choices: [  "will finish" ,  "finishes" ,  "finished" ,  "finish" ]
        },

{    question: "I ____ the movie last night.",  answer: "watched",choices: [  "will watch" ,  "watch" ,  "watched" ,  "watching" ]
        },

{    question: "She ____ her sister tomorrow.",  answer: "will visit",choices: [  "will visit" ,  "visits" ,  "visited" ,  "visit" ]
        },

{    question: "They ____ their vacation next month.",  answer: "taking",choices: [  "will take" ,  "taking" ,  "take" ,  "took" ]
        },

{    question: "He ____ English for five years.",  answer: "has been learning",choices: [  "will learn" ,  "learns" ,  "has been learning" ,  "learned" ]
        },

{    question: "We ____ our grandparents next weekend.",  answer: "will be visiting",choices: [  "will visit" ,  "visiting" ,  "visited" ,  "will be visiting" ]
        },

{    question: "She ____ her dog this afternoon.",  answer: "is walking" ,choices: [  "will walk" ,  "is walking" ,  "walked" ,  "walking" ]
        },

{    question: "I ____ my car keys.",  answer: "will find" ,choices: [  "will find" ,  "found" ,  "finding" ,  "finds" ]
        },

{    question: "They ____ to the concert last night.",  answer: "went",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "We ____ a new house next year.",  answer: "will buy" ,choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "She ____ her best friend every day.",  answer: "calls" ,choices: [  "will call" ,  "calling" ,  "calls" ,  "called" ]
        },

{    question: "He ____ the competition next week.",  answer: "is entering",choices: [  "will enter" ,  "is entering" ,  "entered" ,  "entering" ]
        },

{    question: "They ____ for their exams tomorrow.",  answer: "are studying",choices: [  "will study" ,  "studying" ,  "are studying" ,  "studied" ]
        },

{    question: "She ____ her new dress at the party.",  answer: "wore",choices: [  "will wear" ,  "wore" ,  "wearing" ,  "wears" ]
        },

{    question: "We ____ the game last night.",  answer: "won" ,choices: [  "will win" ,  "won" ,  "won" ,  "winning" ]
        },

{    question: "They ____ the beach next weekend.",  answer: "will visit",choices: [  "will visit" ,  "visiting" ,  "visited" ,  "visit" ]
        },
{    question: "He ____ his flight this afternoon.",  answer: "missed",choices: [  "will miss" ,  "misses" ,  "missed" ,  "missing" ]
        },

{    question: "We ____ our parents next week.",  answer: "are visiting",choices: [  "will visit" ,  "are visiting" ,  "visited" ,  "visit" ]
        },

{    question: "She ____ to the party last night.",  answer: "will go",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "I ____ a new book tomorrow.",  answer: "will buy",choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "They ____ their friends tonight.",  answer:"are meeting",choices: [  "will meet" ,  "are meeting" ,  "met" ,  "meet" ]
        },

{    question: "He ____ the concert last night.",  answer: "went",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "She ____ her family tomorrow.",  answer: "will visit",choices: [  "will visit" ,  "visits" ,  "visited" ,  "visit" ]
        },

{    question: "We ____ to the park next weekend.",  answer: "are going",choices: [  "will go" ,  "are going" ,  "went" ,  "go" ]
        },

{    question: "They ____ a new car next year.",  answer:"will buy",choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "He ____ his homework last night.",  answer: "finished",choices: [  "will finish" ,  "finishes" ,  "finished" ,  "finish" ]
        },

{    question: "I ____ the game tomorrow.",  answer: "am watching",choices: [  "will watch" ,  "am watching" ,  "watched" ,  "watching" ]
        },

{    question: "She ____ her dog this afternoon.",  answer: "will walk" ,choices: [  "will walk" ,  "walking" ,  "walked" ,  "walks" ]
        },

{    question: "They ____ to the zoo last weekend.",  answer:"went",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "We ____ our grandparents next month.",  answer: "will visit" ,choices: [  "will visit" ,  "visiting" ,  "visited" ,  "visit" ]
        },

{    question: "He ____ to the party last night.",  answer: "went",choices: [  "will go" ,  "went" ,  "going" ,  "go" ]
        },

{    question: "I ____ a new book tomorrow.",  answer: "will buy",choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "They ____ their friends tonight.",  answer: "are meeting",choices: [  "will meet" ,  "are meeting" ,  "met" ,  "meet" ]
        },

{    question: "He ____ the concert last night.",  answer:"went",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "She ____ to her family tomorrow.",  answer: "will talk" ,choices: [  "will talk" ,  "talk" ,  "talked" ,  "talking" ]
        },

{    question: "We ____ to the park next weekend.",  answer: "will talk" ,choices: [  "will go" ,  "will talk"  ,  "went" ,  "go" ]
        },

{    question: "They ____ a new car next year.",  answer: "will buy",choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "I ____ the game tomorrow.",  answer: "am watching",choices: [  "will watch" ,  "am watching" ,  "watched" ,  "watching" ]
        },

{    question: "She ____ her dog this afternoon.",  answer: "will walk",choices: [  "will walk" ,  "walking" ,  "walked" ,  "walks" ]
        },

{    question: "They ____ to the zoo last weekend.",  answer: "went" ,choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "We ____ our grandparents next month.",  answer: "will visit",choices: [  "will visit" ,  "visiting" ,  "visited" ,  "visit" ]
        },

{    question: "He ____ to the party last night.",  answer: "went",choices: [  "will go" ,  "went" ,  "going" ,  "go" ]
        },

{    question: "I ____ a new book tomorrow.",  answer: "will buy",choices: [  "will buy" ,  "buy" ,  "bought" ,  "buying" ]
        },

{    question: "They ____ their friends tonight.",  answer: "are meeting",choices: [  "will meet" ,  "are meeting" ,  "met" ,  "meet" ]
        },

{    question: "He ____ the concert last night.",  answer:"went",choices: [  "will go" ,  "going" ,  "went" ,  "go" ]
        },

{    question: "She ____ to her family tomorrow.",  answer: "will talk",choices: [  "will talk" ,  "talk" ,  "talked" ,  "talking" ]
        },

{    question: "We ____ to the park next weekend.",  answer: "are going",choices: [  "will go" ,  "are going" ,  "went" ,  "go" ]
        },





]