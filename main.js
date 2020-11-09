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
    "If you haven't already figured out, my name is Victor.",
    "I am a web developer and digital designer, based in Gothenburg.",
    "I built this site to showcase some of my work...",
    "... in a digital and simple yet slightly interactive way.",
    "Hope you'll enjoy it!",
    "And make reach out if you want to collaborate!"
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
  const skillElement = document.getElementById('skill-container')
  skillElement.addEventListener('click', showSkills)

  const backgroundElement = document.getElementById('background-container')
  backgroundElement.addEventListener('click', showBackground)

  const workElement = document.getElementById('work-container')
  workElement.addEventListener('click', showWork)
}

function showSkills() {
  console.log('skills')
}
function showBackground() {
  console.log('background')
}
function showWork() {
  console.log('work')
}