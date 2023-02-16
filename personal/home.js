const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

function startGame() {
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      let button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option)),
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option
}

function selectOption(option) {
  let nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: `In the small town of Cloggsworth, a young teen who just became of age was on their way to see the mayor, Mr. Vix. 
    You live a mile away from the town center and leave in the afternoon down a windy road, through a small clearing across a bridge, and through the market to get to the mayor’s office.  
    "Good Afternoon, welcome to my office, I’m excited one of our youths has come of age… remind me what your name is again."`,
    options: [
      {
        text: 'Boy - Chris',
        nextText: 2
      },
      {
        text: 'Girl - Cleo',
        nextText: 3
      }
    ]
  },
  {
    id: 2,
    text: `"Chris… that’s right Crystal’s boy!
    Now that you are of age you have the opportunity to choose between two gifts that were bestowed upon us by the wizard who helped found this town.
     On the left, you have the option to choose a small red trapezoid-shaped box. On the right, you have the option of choosing a mahogany grandfather clock.”`,
    options: [
      {
        text: 'Box',
        nextText: 4
      },
      {
        text: 'Clock',
        nextText: 5
      }
    ]
  },
  {
    id: 3,
    text: `“Cleo… that’s right Crystal’s girl!	
    Now that you are of age you have the opportunity to choose between two gifts that were bestowed upon us by the wizard who helped found this town.
    On the left, you have the option to choose a small red trapezoid-shaped box. On the right, you have the option of choosing a mahogany grandfather clock.”`,
    options: [
      {
        text: 'Box',
        nextText: 6
      },
      {
        text: 'Clock',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: `“So you chose the box eh Chris?.... Well now that you’ve chosen, let me tell you what will happen with your choice. 
    Inside the box, there will be two things to choose from.
    On the left you have a pill that will make it so you never get sick.
    On the right you have a card that holds one million dollars on it. You can only choose one, which one will it be?”`,
    options: [
      {
        text: 'Pill',
        nextText: 8
      },
      {
        text: 'Card',
        nextText: 9
      }
    ]
  },
  {
    id: 5,
    text: `“So you chose the clock eh Chris?... Well now that you’ve chosen, let me tell you what will happen with your choice.
    By choosing the clock you have chosen the opportunity to choose between seeing into your future or changing an event that happened in your past. 
    The big hand will let you view and change your past and the little hand will let you see into your future. You can only choose one, so which one will it be?”`,
    options: [
      {
        text: 'Past',
        nextText: 10
      },
      {
        text: 'Future',
        nextText: 11
      }
    ]
  },
  {
    id: 6,
    text: `“So you chose the box eh Cleo?.... Well now that you’ve chosen, let me tell you what will happen with your choice. 
    Inside the box, there will be two things to choose from.
    On the left, you have a pill that will make it so you never get sick.
    On the right, you have a card that holds one million dollars on it. You can only choose one, which one will it be?”`,
    options: [
      {
        text: 'Pill',
        nextText: 12
      },
      {
        text: 'Card',
        nextText: 13
      }
    ]
  },
  {
    id: 7,
    text: `“So, you chose the clock eh Cleo?... Well now that you’ve chosen, let me tell you what will happen with your choice.
    By choosing the clock you have chosen the opportunity to choose between seeing into your future or changing an event that happened in your past. 
    The big hand will let you view and change your past and the little hand will let you see into your future. You can only choose one, so which one will it be?”`,
    options: [
      {
        text: 'Past',
        nextText: 14
      },
      {
        text: 'Future',
        nextText: 15
      }
    ]
  },
  {
    id: 8,
    text: `“I choose the pill.”
    “Great choice Chris, after taking this nothing in the world will be able to get you sick and anything you are currently ailing from will be healed. 
    You can take the pill now or you can save the pill for later.
    What will be your choice? Take the pill now or later?”`,
    options: [
      {
        text: 'Now',
        nextText: 16
      },
      {
        text: 'Later',
        nextText: 17
      }
    ]
  },
  {
    id: 9,
    text: `“I choose the card.”
    “Great choice Chris, go ahead and grab the card. 
    You can use this money for yourself or to help someone in need. 
    Which one will you choose?”`,
    options: [
      {
        text: 'Self',
        nextText: 18
      },
      {
        text: 'Others',
        nextText: 19
      }
    ]
  },
  {
    id: 10,
    text: `“I would like to see my past before making a decision to change an event.”
    “Very well Chris no problem… put your index finger on the big minute hand and it will let you see your past. 
    I will grab a chair for you to sit on as it can be a bit disorienting, and we don’t want you falling.
    Here you go, good luck.”
    …
    “So what will your choice be? 
    Keep the events in your past the way they are or change an event?”`,
    options: [
      {
        text: 'Change Past',
        nextText: 20
      },
      {
        text: 'Leave As Is',
        nextText: 21
      }
    ]
  },
  {
    id: 11,
    text: `“I would like to see my future and see the kind of person I will be, who I end up with, and if I'll be happy or not.”
    “Very well you will put your index finger on the small hour hand and it will show you your future. 
    Let me grab you a chair as it can be a bit disorienting, and we don’t want you to fall. 
    Here you go, good luck. Hopefully you like what you see.”
    …
    “Did you like what you saw or will you be changing the way you do things from here on out?”`,
    options: [
      {
        text: 'Change Future',
        nextText: 22
      },
      {
        text: 'Continue Set Path',
        nextText: 23
      }
    ]
  },
  {
    id: 12,
    text: `“I choose the pill.”
    “Great choice Cleo, After taking this nothing in the world will be able to get you sick and anything you are currently ailing from will be healed. 
    You can take the pill now or you can save the pill for later. 
    What will be your choice? Take the pill now or later?”`,
    options: [
      {
        text: 'Now',
        nextText: 24
      },
      {
        text: 'Later',
        nextText: 25
      }
    ]
  },
  {
    id: 13,
    text: `“I choose the card.”
    “Great choice Cleo, go ahead and reach in and grab the card. 
    You can use this money for yourself or to help someone in need. 
    Which one will you choose?”`,
    options: [
      {
        text: 'Self',
        nextText: 26
      },
      {
        text: 'Others',
        nextText: 27
      }
    ]
  },
  {
    id: 14,
    text: `“I would like to see my past before making a decision of changing an event.”
    “Very well Cleo no problem… put your index finger on the big minute hand and it will let you see your past. 
    I will grab a chair for you to sit on as it can be a bit disorienting, and we don’t want you falling.
    Here you go, good luck.”
    …
    “So what will your choice be? 
    Keep the events in your past the way they are or change an event?”`,
    options: [
      {
        text: 'Change Past',
        nextText: 28
      },
      {
        text: 'Leave As Is',
        nextText: 29
      }
    ]
  },
  {
    id: 15,
    text: `“I would like to see my future and see the kind of person I will be, who I end up with, and if ill be happy or not.”
    “Very well you will put your index finger on the small hour hand and it will show you your future. 
    Let me grab you a chair as it can be a bit disorienting and we don’t want you to fall. 
    Here you go, good luck, hopefully you like what you see.”
    …
    “Did you like what you saw or will you be changing the way you do things from here on out?”`,
    options: [
      {
        text: 'Change Future',
        nextText: 30
      },
      {
        text: 'Continue Set Path',
        nextText: 31
      }
    ]
  },
  {
    id: 16,
    text: `“I will choose to take the pill now. I have had a lame leg since birth and it has prevented me from helping my family out.”
    “Very good. Let me grab you a glass of water.”
    …
    “How are you feeling? 
    Hopefully, like a new person, run along now and show your family the new leg.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 17,
    text: `“I’ll wait to take the pill till later. You never know when something bad will come along like a plague or something and I’ll need it then I’m okay right now.”
    “Very good. It was good seeing you Chris and congratulations on becoming an adult!”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 18,
    text: `“I will use the money now. My family is struggling and can use this money. Thank you, mayor!”
    “A noble choice, congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    text: `“I’ll put this money towards our town. I know there are a lot of repairs needed and support for the orphanage and schools.”
    “A noble choice, very good. Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 20,
    text: `“I would like to change an event in my past where I was able to be there for my sister when she was playing outside. Maybe then she wouldn’t have fallen from the tree and been paralyzed.”
    “Done! By the time you make it home, your sister will be up and walking because you were there to prevent it. Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 21,
    text: `“I don’t think I will change anything. Everything that’s happened has made me who I am.”
    “Very good, congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 22,
    text: `“I want to change the things I am doing now. I don't want to end up alone because I work all the time. I will start hanging out with my friends more and not be such a homebody.”
    “It's always good to balance work and home life, very good congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 23,
    text: `“I will continue on the path I’m on. I seem to end up happy and loved with a great family and a good job!”
    “That’s great! Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 24,
    text: `“I will take the pill now. For the last few years, I have been having my hair fall out and experiencing great fatigue. I’m worried I don’t have long to live with how things are going.”
    “Ah sorry to hear that, let me grab you a glass of water and you won’t have to worry about that any longer.”
    …
    “How are you feeling? Hopefully, you have your energy back. Congratulations on becoming an adult!”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 25,
    text: `“I will take the pill later, I’m healthy as of right now but you never know what could happen, thank you, mayor!”
    “Very well, congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 26,
    text: `“I’ll use the money now my mother’s medical treatments are getting too expensive for the family and we are struggling.”
    “A noble choice, very good. Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 27,
    text: `“I’ll put this money towards our town. I know there are a lot of repairs needed and support for the orphanage and schools.”
    “A noble choice, very good. Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 28,
    text: `“I will change an event in my past. If I had just listened to my mother I wouldn’t have been walking late at night when there were suspicious activities going on.”
    “I won’t pry into details but as of now whatever event occurred that night no longer happened you ended up staying home that night. Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 29,
    text: `“I don’t think I will change anything. Everything that’s happened has made me who I am.”
    “Very good, congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 30,
    text: `“I will change the way people see me. I will smile more and talk nicer. I don’t want to be known as the rude old hag who makes babies cry.”
    “Ah yes I don’t think that is anyone’s ideal future. Very good, congratulations on becoming an adult!”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  },
  {
    id: 31,
    text: `“I will continue on the path I’m on. I seem to end up happy and loved with a great family and a good job!”
    “That’s great! Congratulations on becoming an adult.”`,
    options: [
      {
        text: 'Care to try a different path?',
        nextText: -1
      }
    ]
  }
]

startGame()