const questionsLimit=10;


const quiz =
  [
    {

      question: "Mount Everest _____ than any other mountain.",

      answer: "is taller",
     choices: ["is taller", "is taller", "was taller", "will be taller"]
    },
    {

      question: "This book _____ than the one I read last week.",

      answer: "is more interesting",
     choices: ["is more interesting", "is interesting", "is more interesting", "will be more interesting"]
    },
    {

      question: "The Eiffel Tower _____ by millions of tourists every year.",

      answer: "is visited",
     choices: ["is visited", "is visited", "was visited", "will be visited"]
    },
    {

      question: "She _____ English better than her brother.",

      answer: "speaks",
     choices: ["speaks", "speaks", "speaks", "will speak"]
    },
    {

      question: "The marathon runner _____ tired after running 20 miles.",

      answer: "feels",
     choices: ["feels", "feels", "felt", "feels"]
    },
    {

      question: "The new museum _____ next month.",

      answer: "will open",
     choices: ["opens", "opens", "will open", "opened"]
    },
    {

      question: "The movie _____ more action scenes than the previous one.",

      answer: "has",
     choices: ["has", "has", "had", "has"]
    },
    {

      question: "The car _____ than it did last year.",

      answer: "runs",
     choices: ["runs", "runs", "ran", "runs"]
    },
    {

      question: "The sun _____ in the east.",

      answer: "rises",
     choices: ["rises", "rises", "rises", "will rise"]
    },
    {

      question: "He _____ his homework tomorrow evening.",

      answer: "will do",
     choices: ["will do", "will do", "did", "does"]
    },
    {

      question: "She _____ to the radio every morning.",

      answer: "listens",
     choices: ["listens", "listens", "listens", "will listen"]
    },
    {

      question: "They _____ to the concert last night.",

      answer: "listened",
     choices: ["listened", "listened", "listened", "listened"]
    },
    {

      question: "He _____ to the teacher carefully.",

      answer: "listens",
     choices: ["listens", "listens", "listens", "listened"]
    },
    {

      question: "She _____ the news on TV now.",

      answer: "watches",
     choices: ["watches", "watches", "watches", "will watch"]
    },
    {

      question: "They _____ the match on Saturday.",

      answer: "watched",
     choices: ["watched", "watched", "watched", "watched"]
    },
    {

      question: "I _____ a book last night.",

      answer: "read",
     choices: ["read", "read", "read", "read"]
    },
    {

      question: "He _____ the guitar for years.",

      answer: "plays",
     choices: ["plays", "plays", "played", "plays"]
    },
    {

      question: "She _____ the piano since she was six.",

      answer: "has played",
     choices: ["has played", "has played", "had played", "has played"]
    },
    {

      question: "They _____ their dinner already.",

      answer: "finished",
     choices: ["finished", "finished", "finish", "finished"]
    },
    {

      question: "He _____ breakfast this morning.",

      answer: "skipped",
     choices: ["skipped", "skipped", "skipped", "skipped"]
    },
    {

      question: "She _____ for the exam tomorrow.",

      answer: "studies",
     choices: ["studies", "studies", "studied", "studies"]
    },
    {

      question: "I _____ to the radio now.",

      answer: "am listening",
     choices: ["am listening", "am listening", "listen", "am listening"]
    },
    {

      question: "They _____ for the bus at the moment.",

      answer: "are waiting",
     choices: ["are waiting", "are waiting", "are waiting", "wait"]
    },
    {

      question: "The game _____ at 8 o'clock.",

      answer: "starts",
     choices: ["starts", "starts", "started", "starts"]
    },
    {

      question: "She _____ the cake now.",

      answer: "is baking",
     choices: ["is baking", "is baking", "bake", "is baking"]
    },
    {

      question: "They _____ to the music at the party.",

      answer: "are dancing",
     choices: ["are dancing", "are dancing", "are dancing", "dance"]
    },
    {

      question: "He _____ to school now.",

      answer: "is walking",
     choices: ["is walking", "is walking", "walk", "is walking"]
    },
    {

      question: "She _____ her car now.",

      answer: "is washing",
     choices: ["is washing", "is washing", "is washing", "washes"]
    },
    {

      question: "The movie _____ at the cinema tonight.",

      answer: "is showing",
     choices: ["is showing", "is showing", "is showing", "shows"]
    },
    {

      question: "The package _____ by the postman.",

      answer: "is delivered",
     choices: ["is delivered", "is delivered", "is delivered", "delivers"]
    },
    {

      question: "She _____ by her friends.",

      answer: "is being supported",
     choices: ["is being supported", "is being supported", "supported", "is being supported"]
    },
    {

      question: "The car _____ by a mechanic.",

      answer: "is being repaired",
     choices: ["is being repaired", "is being repaired", "is being repaired", "repairs"]
    },
    {

      question: "He _____ by the police.",

      answer: "is being questioned",
     choices: ["is being questioned", "is being questioned", "is being questioned", "questions"]
    },
    {

      question: "She _____ to the hospital.",

      answer: "is being taken",
     choices: ["is being taken", "is being taken", "is being taken", "takes"]
    },
    {

      question: "The cake _____ in the oven.",

      answer: "is being baked",
     choices: ["is being baked", "is being baked", "bakes", "is being baked"]
    },
    {

      question: "The music _____ by the band.",

      answer: "is being played",
     choices: ["is being played", "is being played", "is being played", "plays"]
    },
    {

      question: "The news _____ on TV every day.",

      answer: "is being broadcast",
     choices: ["is being broadcast", "is being broadcast", "is being broadcast", "broadcasts"]
    },
    {

      question: "The cake _____ by her for the party.",

      answer: "is being baked",
     choices: ["is being baked", "is being baked", "is being baked", "bakes"]
    },
    {

      question: "The building _____ by the construction workers.",

      answer: "is being constructed",
     choices: ["is being constructed", "is being constructed", "is being constructed", "constructs"]
    },
    {

      question: "The car _____ by John.",

      answer: "is being driven",
     choices: ["is being driven", "is being driven", "drives", "is being driven"]
    },
    {

      question: "The book _____ by her.",

      answer: "is being read",
     choices: ["is being read", "is being read", "reads", "is being read"]
    },
    {

      question: "The keys _____ by him.",

      answer: "are being lost",
     choices: ["are being lost", "are being lost", "loses", "are being lost"]
    },
    {

      question: "The movie _____ by many people.",

      answer: "is being watched",
     choices: ["is being watched", "is being watched", "is being watched", "watches"]
    },
    {

      question: "The baby _____ by his mother.",

      answer: "is being held",
     choices: ["is being held", "is being held", "is being held", "holds"]
    },
    {

      question: "The work _____ by a team of experts.",

      answer: "is being done",
     choices: ["is being done", "is being done", "is being done", "does"]
    },
    {

      question: "The letter _____ by the secretary.",

      answer: "is being typed",
     choices: ["is being typed", "is being typed", "types", "is being typed"]
    },
    {

      question: "The room _____ by the maid.",

      answer: "is being cleaned",
     choices: ["is being cleaned", "is being cleaned", "is being cleaned", "cleans"]
    },
    {

      question: "The game _____ by millions of fans.",

      answer: "is being watched",
     choices: ["is being watched", "is being watched", "watches", "is being watched"]
    },
    {

      question: "The party _____ by a famous DJ.",

      answer: "is being hosted",
     choices: ["is being hosted", "is being hosted", "hosts", "is being hosted"]
    },
    {

      question: "The performance _____ by talented actors.",

      answer: "is being applauded",
     choices: ["is being applauded", "is being applauded", "applauds", "is being applauded"]
    },
    {

      question: "He _____ a novel now.",

      answer: "is writing",
     choices: ["is writing", "is writing", "is writing", "writes"]
    },
    {

      question: "They _____ the presentation.",

      answer: "are preparing",
     choices: ["are preparing", "are preparing", "are preparing", "prepare"]
    },
    {

      question: "She _____ her artwork.",

      answer: "is creating",
     choices: ["is creating", "is creating", "is creating", "creates"]
    },
    {

      question: "He _____ a car.",

      answer: "is driving",
     choices: ["is driving", "is driving", "is driving", "drives"]
    },
    {

      question: "She _____ a song.",

      answer: "is singing",
     choices: ["is singing", "is singing", "is singing", "sings"]
    },
    {

      question: "They _____ a meeting.",

      answer: "are having",
     choices: ["are having", "are having", "are having", "have"]
    },
    {

      question: "The kids _____ in the garden.",

      answer: "are playing",
     choices: ["are playing", "are playing", "are playing", "play"]
    },
    {

      question: "The students _____ in the classroom.",

      answer: "are studying",
     choices: ["are studying", "are studying", "are studying", "study"]
    },
    {

      question: "The chef _____ a delicious meal.",

      answer: "is preparing",
     choices: ["is preparing", "is preparing", "is preparing", "prepares"]
    },
    {

      question: "The company _____ a new product.",

      answer: "is developing",
     choices: ["is developing", "is developing", "is developing", "develops"]
    },
    {

      question: "The artist _____ a beautiful painting.",

      answer: "is creating",
     choices: ["is creating", "is creating", "is creating", "creates"]
    },
    {

      question: "The teacher _____ a lesson.",

      answer: "is teaching",
     choices: ["is teaching", "is teaching", "is teaching", "teaches"]
    },
    {

      question: "The workers _____ the construction site.",

      answer: "are working",
     choices: ["are working", "are working", "are working", "work"]
    },
    {

      question: "The scientist _____ an experiment.",

      answer: "is conducting",
     choices: ["is conducting", "is conducting", "is conducting", "conducts"]
    },
    {

      question: "The children _____ a sandcastle.",

      answer: "are building",
     choices: ["are building", "are building", "are building", "build"]
    },
    {

      question: "The doctor _____ the patient.",

      answer: "is examining",
     choices: ["is examining", "is examining", "is examining", "examines"]
    },
    {

      question: "The sun _____ brighter than the stars.",

      answer: "shines",
     choices: ["shines", "shines", "shines", "is shining"]
    },
    {

      question: "The flowers _____ in the garden.",

      answer: "bloom",
     choices: ["bloom", "bloom", "bloom", "are blooming"]
    },
    {

      question: "The wind _____ gently.",

      answer: "blows",
     choices: ["blows", "blows", "blows", "is blowing"]
    },
    {

      question: "The river _____ through the valley.",

      answer: "flows",
     choices: ["flows", "flows", "flows", "is flowing"]
    }
  ]

