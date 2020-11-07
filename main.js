window.onload = main 


function main() {
  runIntroText()
  setEventListeners()
}

function runIntroText() {
  const introText = [
    "Hi there!",
    "Hope you're having a great day so far.",
    "Glad you've made it to my site.",
    "If you haven't already figured out, my name is Victor :)",
    "I am a Gothenburg based web developer and digital designer.",
    "The purpose of this website is to show some of my work.",
    "As well as my background and previous assignments.",
    "Hope you'll enjoy it!"
  ]  

  const textElement = document.getElementById('intro-text')
  let textIndex = -1

  if (textElement.innerText === '') {
    textElement.innerText = 'Hi there!'
    textIndex = 0
    advanceText()
  } 
  else {
    advanceText()
  }

  function advanceText() {
    textIndex++
    if (textIndex >= introText.length) {
      textIndex = 0
      loadText[introText[textIndex]]
    }
    loadText(introText[textIndex])
  }
  function loadText(text) {
    textElement.innerText = text
  }
  setInterval(advanceText, 2500)
}


function setEventListeners() {
  const sectionButton = document.getElementById('section-button')
  sectionButton.addEventListener('click', showSection())
}

function showSection() {
  console.log('test')
  //section.style.width = '100%'
  //section.style.height = '100%'
  
}



