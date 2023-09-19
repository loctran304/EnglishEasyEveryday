const questionsLimit=10;


const quiz =
    [
        {
        
           question: "She _____ in the garden for two hours.",
          
          answer: "had been planting",
         choices: [  "had been planting" ,  "was planting" ,  "has been planting" ,  "had been planting" ]
        },
        {
           
          question: "They _____ the movie before it started.",
          
          answer: "had watched",
         choices: [  "had watched" ,  "were watching" ,  "had watched" ,  "have watched" ]
        },
        {
          
          question: "He _____ on the project for a week.",
          
          answer: "had been working" ,
         choices: [  "has been working" ,  "had been working" ,  "is working" , "had been working" ]
        },
        {
          
          question: "I _____ English lessons before moving to England.",
          
          answer: "had been taking",
         choices: [  "had been taking" ,  "had been taking" ,  "have taken" ,  "took" ]
        },
        {
          
          question: "She _____ for him since morning.",
          
          answer: "had been waiting",
         choices: [  "had been waiting" ,  "had been waiting" ,  "has been waiting" ,  "was waiting" ]
        },
        {
          
          question: "The students _____ the assignment by 5 PM.",
          
          answer: "had finished",
         choices: [  "had finished" ,  "finished" ,  "were finishing" ,  "had finished" ]
        },
        {
          
          question: "The rain _____ all day yesterday.",
          
          answer: "was raining" ,
         choices: [  "was raining" ,  "was raining" ,  "rained" , "has been raining" ]
        },
        {
          
          question: "By the time they arrived, we _____ dinner.",
          
          answer: "had eaten",
         choices: [  "ate" ,  "were eating" ,  "had eaten" , "had been eating" ]
        },
        {
          
          question: "He _____ tired because he _____ all day.",
          
          answer: "was, had been working",
         choices: [  "was, had been working" ,  "was, has been working" ,  "had been, had been working" ,  "had been, has been working" ]
        },
        {
          
          question: "She _____ for a promotion for months.",
          
          answer: "had been hoping",
         choices: [  "was hoping" ,  "had been hoping" ,  "hoped" ,  "has been hoping" ]
        },
        {
          
          question: "I _____ my car before the race began.",
          
          answer: "had repaired",
         choices: [  "had repaired" ,  "had repaired" ,  "have repaired" ,  "repaired" ]
        },
        {
          
          question: "She _____ her novel before the deadline.",
          
          answer: "had finished",
         choices: [  "had finished" ,  "has finished" ,  "finished" ,  "had finished" ]
        },
        {
          
          question: "The kids _____ outside for hours.",
          
          answer: "had been playing",
         choices: [  "had been playing" ,  "had been playing" ,  "were playing" ,  "played" ]
        },
        {
          
          question: "They _____ the concert by the time we arrived.",
          
          answer: "had finished",
         choices: [  "had finished" ,  "had finished" ,  "finished" ,  "were finishing" ]
        },
        {
          
          question: "I _____ for that job for months.",
          
          answer: "had been hoping",
         choices: [  "was hoping" ,  "had been hoping" ,  "hoped" ,  "has been hoping" ]
        },
        {
          
          question: "The project _____ for weeks before they canceled it.",
          
          answer: "had been going on",
         choices: [  "had been going on" ,  "was going on" ,  "has been going on" ,  "had been going on" ]
        },
        {
          
          question: "She _____ for the bus for an hour.",
          
          answer: "had been waiting",
         choices: [  "had been waiting" ,  "had been waiting" ,  "was waiting" ,  "waited" ]
        },
        {
          
          question: "The cake _____ before the party started.",
          
          answer: "was baked",
         choices: [  "was baked" ,  "was baked" ,  "baked" ,  "had been baked" ]
        },
        {
          
          question: "He _____ about his trip before he left.",
          
          answer: "had been talking",
         choices: [  "had been talking" ,  "had been talking" ,  "talked" ,  "was talking" ]
        },
        {
          
          question: "They _____ on that project for months.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "had been working" ,  "were working" ,  "worked" ]
        },
        {
          
          question: "I _____ Spanish for a year before moving to Spain.",
          
          answer: "had been learning",
         choices: [  "had been learning" ,  "had been learning" ,  "learned" ,  "was learning" ]
        },
        {
          
          question: "She _____ on her novel for a long time.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "had been working" ,  "has been working" ,  "was working" ]
        },
        {
          
          question: "The baby _____ for hours before falling asleep.",
          
          answer:"had been crying",
         choices: [  "was crying" ,  "cried" ,  "had been crying" ,  "had cried" ]
        },
        {
          
          question: "They _____ the presentation before the clients arrived.",
          
          answer: "had finished",
         choices: [  "had finished" ,  "were finishing" ,  "had finished" ,  "finished" ]
        },
        {
          
          question: "She _____ for that opportunity for years.",
          
          answer: "had been hoping",
         choices: [  "was hoping" ,  "hoped" ,  "had been hoping" ,  "has been hoping" ]
        },
        {
          
          question: "The movie _____ for an hour before we got there.",
          
          answer: "had been playing",
         choices: [  "was playing" ,  "had played" ,  "had been playing" ,  "played" ]
        },
        {
          
          question: "He _____ for the bus for 30 minutes.",
          
          answer: "had been waiting",
         choices: [  "had been waiting" ,  "had been waiting" ,  "was waiting" ,  "waited" ]
        },
        {
          
          question: "The book _____ before I started reading it.",
          
          answer: "had been written",
         choices: [  "was written" ,  "had been written" ,  "had written" ,  "wrote" ]
        },
        {
          
          question: "I _____ with my friend on the phone for hours.",
          
          answer: "had been talking",
         choices: [  "had been talking" ,  "had been talking" ,  "talked" ,  "was talking" ]
        },
        {
          
          question: "They _____ on that project all night.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "had been working" ,  "were working" ,  "worked" ]
        },
        {
          
          question: "I _____ Spanish for a year before moving to Spain.",
          
          answer: "had been learning" ,
         choices: [  "had been learning" ,  "had been learning" ,  "learned" ,  "was learning" ]
        },
        {
          
          question: "She _____ on her novel for a long time.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "had been working" ,  "has been working" ,  "was working" ]
        },
        {
          
          question: "The baby _____ for hours before falling asleep.",
          
          answer: "had been crying",
         choices: [  "was crying" ,  "had been crying" ,  "cried" ,  "had cried" ]
        },
        {
          
          question: "They _____ the presentation before the clients arrived.",
          
          answer: "had finished" ,
         choices: [  "had finished" ,  "had finished" ,  "were finishing" ,  "finished" ]
        },
        {
          
          question: "She _____ for that opportunity for years.",
          
          answer: "had been hoping",
         choices: [  "was hoping" ,  "hoped" ,  "had been hoping" ,  "has been hoping" ]
        },
        {
          
          question: "The movie _____ for an hour before we got there.",
          
          answer: "had been playing",
         choices: [  "was playing" ,  "had played" ,  "had been playing" ,  "played" ]
        },
        {
          
          question: "He _____ for the bus for 30 minutes.",
          
          answer: "had been waiting" ,
         choices: [  "had been waiting" ,  "had been waiting" ,  "was waiting" ,  "waited" ]
        },
        {
          
          question: "The book _____ before I started reading it.",
          
          answer: "had been written",
         choices: [  "was written" ,  "had been written" ,  "had written" ,  "wrote" ]
        },
        {
          
          question: "I _____ with my friend on the phone for hours.",
          
          answer: "had been talking",
         choices: [  "had been talking" ,  "had been talking" ,  "talked" ,  "was talking" ]
        },
        {
          
          question: "They _____ on that project all night.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "had been working" ,  "were working" ,  "worked" ]
        },
        {
          
          question: "I _____ Spanish for a year before moving to Spain.",
          
          answer: "had been learning",
         choices: [  "had been learning" ,  "had been learning" ,  "learned" ,  "was learning" ]
        },
        {
          
          question: "She _____ on her novel for a long time.",
          
          answer: "had been working",
         choices: [  "had been working" ,  "has been working" ,  "had been working" ,  "was working" ]
        },
        {
          
          question: "The baby _____ for hours before falling asleep.",
          
          answer: "had been crying" ,
         choices: [  "was crying" ,  "cried" ,  "had been crying" ,  "had cried" ]
        },
        {
          
          question: "They _____ the presentation before the clients arrived.",
          
          answer: "had finished",
         choices: [  "had finished" ,  "were finishing" ,  "had finished" ,  "finished" ]
        },
        {
          
          question: "She _____ for that opportunity for years.",
          
          answer: "had been hoping" ,
         choices: [  "was hoping" ,  "hoped" ,  "had been hoping" ,  "has been hoping" ]
        },
        {
          
          question: "The movie _____ for an hour before we got there.",
          
          answer:"had been playing",
         choices: [  "was playing" ,  "had played" ,  "had been playing" ,  "played" ]
        },
        {
          
          question: "He _____ for the bus for 30 minutes.",
          
          answer: "had been waiting",
         choices: [  "had been waiting" ,  "had been waiting" ,  "was waiting" ,  "waited" ]
        },
        {
          
          question: "The book _____ before I started reading it.",
          
          answer: "had been written",
         choices: [  "was written" ,  "had been written" ,  "had written" ,  "wrote" ]
        },
        {
          
          question: "I _____ with my friend on the phone for hours.",
          
          answer: "had been talking",
         choices: [  "had been talking" ,  "had been talking" ,  "talked" ,  "was talking" ]
        },
        {
          
          question: "They _____ on that project all night.",
          
          answer: "had been working" ,
         choices: [  "had been working" ,  "had been working" ,  "were working" ,  "worked" ]
        }
      ]
      
